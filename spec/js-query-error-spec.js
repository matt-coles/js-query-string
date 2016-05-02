var querify = require("../lib/index.js");

describe("Object -> Query String W/ Errors", function () {

  it("Should fail with functions or Symbols", function () {
    var qs_object = {
      f: function() { /* istanbul ignore next */
        console.log("Hello World!");
      },
      s: Symbol("foo")
    };
    expect(querify.convert(qs_object, { warn_on_invalid: true })).toBe("");
  });

  it("Should fail for nulls", function () {
    var qs_object = {
      str: "mystr",
      second_str: null
    };
    expect(querify.convert(qs_object, { warn_on_invalid: true })).toBe("?str=mystr");
  });

  it("Should fail for undefined", function () {
    var qs_object = {
      str: "a string",
      second_str: undefined
    };
    expect(querify.convert(qs_object, { warn_on_invalid: true })).toBe("?str=a%20string");
  });

  it("Should fail when trying to use non-objects", function () {
    var qs_object = "str";
    var qs_object2 = 2;
    var qs_object3 = function () { console.log("Hello World!"); };
    expect(querify.convert(qs_object, { warn_on_invalid: true })).toBe("");
    expect(querify.convert(qs_object2, { warn_on_invalid: true })).toBe("");
    expect(querify.convert(qs_object3, { warn_on_invalid: true })).toBe("");
  });

});
