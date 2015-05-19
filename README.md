# fuck-comma

A safe way to remove redundant commas for IE6/7.

**Based on AST engine**

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