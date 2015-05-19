# fuck-comma

A safe way to remove redundant commas for IE6/7.

Keep the last comma within an `Array` or `Object` cause errors on IE6/7, for example:

```js
var arr = [1,2,]
```

```js
var obj = {foo: 'bar',}
```

Find out these errors very hard, But now you may just run `fuck-comma` to fixes it, have fun!

**Based on AST engine**

https://img.shields.io/badge/style-flat--squared-green.svg?style=flat-square
[![npm version](http://img.shields.io/npm/v/fuck-comma.svg?style=flat-square)](https://npmjs.org/package/fuck-comma "View this project on npm")
[![npm version](http://img.shields.io/npm/dm/fuck-comma.svg?style=flat-square)](https://npmjs.org/package/fuck-comma "View this project on npm")
[![Issue Stats](http://issuestats.com/github/leecade/fuck-comma/badge/pr?style=flat-square)](https://github.com/leecade/fuck-comma/pulls?q=is%3Apr+is%3Aclosed)
[![Issue Stats](http://issuestats.com/github/leecade/fuck-comma/badge/issue?style=flat-square)](https://github.com/leecade/fuck-comma/issues?q=is%3Aissue+is%3Aclosed)

## INSTALL

```bash
$ npm i fuck-comma -g
```

## USAGE

### Commandline

- Fix all `.js` in current directory.

```bash
$ fuck-comma
```

- Fix all `.js` for spec directory.

```bash
$ fuck-comma /some/path
```

- Fix spec file.

```bash

$ fuck-comma /some/file
```

### As module

```js
var fuckComma = require('fuckComma')

console.log(fuckComma('[1, 2, 3,]')) // [1, 2, 3]
```
