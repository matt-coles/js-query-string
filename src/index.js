"use strict";
module.exports = {

  _defaults: {
    "warn_on_invalid": false
  },

  convert: function (data, options) {
    if (typeof data === 'object') {
      if (options === undefined) {
        options = {};
      }
      options = this._merge_options(this._defaults, options);
      let result = "?";
      Object.keys(data).map(function (query_key) {
        let query_data = data[query_key];
        let query_data_processed;
        if (query_data === null) {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert null to query string!");
          }
        } else if (typeof query_data === 'number') {
          query_data_processed = query_data.toString();
        } else if (query_data instanceof RegExp) {
          query_data_processed = query_data.toString();
        } else if (typeof query_data === 'string') {
          query_data_processed = query_data;
        } else if (typeof query_data === 'boolean') {
          query_data_processed = query_data.toString();
        } else if (typeof query_data === 'object') {
          query_data_processed = JSON.stringify(query_data);
        } else if (typeof query_data === 'undefined') {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert undefined to query string!");
          }
        } else {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert function or symbol to query string!");
          }
        }
        if (query_data_processed !== undefined) {
          let append = query_key + "=" + encodeURIComponent(query_data_processed) + "&";
          result += append;
        }
      });
      return result === "?" ? "" : result.substring(0, result.length-1);
    } else {
      if (options.warn_on_invalid) {
        console.warn("Attempted to convert non-object to query string!");
        return "";
      }
    }
  },

  _merge_options: function (obj1,obj2) {
    var obj3 = {};
    Object.keys(obj1).map(function (attrname) { obj3[attrname] = obj1[attrname]; });
    Object.keys(obj2).map(function (attrname) { obj3[attrname] = obj2[attrname]; });
    return obj3;
  }
}
