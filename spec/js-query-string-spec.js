var querify = require("../lib/index.js");

describe("Object -> Query String", function () {

  it("Should work for objects with strings", function () {
    var qs_object = {
      str: "mystr",
      second_str: "myotherstr"
    };
    expect(querify.convert(qs_object)).toBe("?str=mystr&second_str=myotherstr");
  });

  it("Should work with numbers", function () {
    var qs_object = {
      num: 5,
      othernum: 4000,
      neg_number: -20
    };
    expect(querify.convert(qs_object)).toBe("?num=5&othernum=4000&neg_number=-20");
  });

  it("Should work with booleans", function () {
    var qs_object = {
      bool_t: true,
      bool_f: false
    };
    expect(querify.convert(qs_object)).toBe("?bool_t=true&bool_f=false");
  });

  it("Should work with arrays", function () {
    var qs_object = {
      arr: [1,2,3],
      arr_two: [8,"string",true]
    };
    expect(querify.convert(qs_object)).toBe("?arr=%5B1%2C2%2C3%5D&arr_two=%5B8%2C%22string%22%2Ctrue%5D");
  });

  it("Should work with objects", function () {
    var qs_object = {
      obj1: {
        a: 1,
        b: "string"
      },
      obj2: {
        c: true,
        b: [1,2]
      }
    };
    expect(querify.convert(qs_object)).toBe("?obj1=%7B%22a%22%3A1%2C%22b%22%3A%22string%22%7D&obj2=%7B%22c%22%3Atrue%2C%22b%22%3A%5B1%2C2%5D%7D");
  });

  it("Should work with RegExp", function () {
    var qs_object = {
      reg: /[^a-zA-Z]/,
      reg2: /0/
    };
    expect(querify.convert(qs_object)).toBe("?reg=%2F%5B%5Ea-zA-Z%5D%2F&reg2=%2F0%2F");
  });

});
