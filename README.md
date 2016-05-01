# js-query-string 
[![Travis branch](https://img.shields.io/travis/Alpha-Atom/js-query-string/master.svg)](https://travis-ci.org/Alpha-Atom/js-query-string) [![Coverage Status](https://coveralls.io/repos/github/Alpha-Atom/js-query-string/badge.svg?branch=master)](https://coveralls.io/github/Alpha-Atom/js-query-string?branch=master) [![GitHub issues](https://img.shields.io/github/issues/Alpha-Atom/js-query-string.svg)](https://github.com/Alpha-Atom/js-query-string/issues) [![David](https://img.shields.io/david/alpha-atom/js-query-string.svg?maxAge=2592000)]() [![David](https://img.shields.io/david/dev/alpha-atom/js-query-string.svg?maxAge=2592000)]()  [![npm](https://img.shields.io/npm/dm/js-query-string.svg?maxAge=2592000)](https://www.npmjs.com/package/js-query-string) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Alpha-Atom/js-query-string/master/LICENSE) [![npm](https://img.shields.io/npm/v/js-query-string.svg?maxAge=2592000)](https://www.npmjs.com/package/js-query-string)

Simple Javascript module, with no dependencies, to serialise native JS objects to be used in URL parameters. Objects and arrays are seralised as JSON strings to allow for easy representation of nested objects.

Can be installed very simply with:

```
npm install js-query-string
```

Example usage:

```javascript
var jsq = require('js-query-string');

var qs_object = {
    str: "mystr",
    second_str: "myotherstr"
};

var qs_object2 = {
    obj1: {
      a: 1,
      b: "string"
    },
    obj2: {
      c: true,
      b: [1,2]
    }
};

console.log(jsq.convert(qs_object)); // ?str=mystr&second_str=myotherstr
console.log(jsq.convert(qs_object2)); // ?obj1=%7B%22a%22%3A1%2C%22b%22%3A%22string%22%7D&obj2=%7B%22c%22%3Atrue%2C%22b%22%3A%5B1%2C2%5D%7D
```

Parameters are also encoded for URLs. The following datatypes are supported: RegExp, Object, Array, Number, String, Boolean.
