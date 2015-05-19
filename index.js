'use strict'

var parse = require('acorn').parse

function insertHelpers(node, parent, chunks) {
  node.parent = parent

  node.source = function() {
    return chunks.slice(node.start, node.end).join('')
  }

  if (node.update && typeof node.update === 'object') {
    var prev = node.update
    Object.keys(prev).forEach(function(key) {
      update[key] = prev[key]
    })
    node.update = update
  } else {
    node.update = update
  }

  function update(s) {
    chunks[node.start] = s
    for (var i = node.start + 1; i < node.end; i++) {
      chunks[i] = ''
    }
  }
}

function walkAst(src, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts
    opts = {}
  }
  if (typeof src === 'object') {
    opts = src
    src = opts.source
    delete opts.source
  }
  src = src === undefined ? opts.source : src
  if (typeof src !== 'string') src = String(src)
  var ast = parse(src, opts)

  var result = {
    chunks: src.split(''),
    toString: function() {
      return result.chunks.join('')
    },
    inspect: function() {
      return result.toString()
    }
  }
  var index = 0

  !function walk(node, parent) {
    insertHelpers(node, parent, result.chunks)

    Object.keys(node).forEach(function(key) {
      if (key === 'parent') return
      var child = node[key]
      if (Array.isArray(child)) {
        child.forEach(function(li) {
          if (li && typeof li.type === 'string') {
            walk(li, node)
          }
        })
      } else if (child && typeof child.type === 'string') {
        walk(child, node)
      }
    })
    fn(node)
  }(ast, undefined)

  return result
}

module.exports = function(code) {
  return walkAst(code, function(node) {
    if (node.type === 'ArrayExpression') {
      var src = node.source()
      if (src.match(/,\s*\]$/)) {
        var lastIdx = src.lastIndexOf(',')
        src = src.substring(0, lastIdx) + src.substring(lastIdx + 1)
        node.update(src)
      }
    }
    if (node.type === 'ObjectExpression') {
      var src = node.source()
      if (src.match(/,\s*\}$/)) {
        var lastIdx = src.lastIndexOf(',')
        src = src.substring(0, lastIdx) + src.substring(lastIdx + 1)
        node.update(src)
      }
    }
  })
}