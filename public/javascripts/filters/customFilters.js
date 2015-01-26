//Modules have filters

//Create a module called customFilters
// Then create a filter called unique, which returns the unique values from an arr
var filterModules = angular.module("customFilters", []);

filterModules.filter("unique", function() {
  return function(data, propertyName) {
    if (angular.isArray(data) && angular.isString(propertyName)) {
      var results = [];
      var keys = {};
      for (var i = 0; i < data.length; i++) {
        var val = data[i][propertyName];
        if (angular.isUndefined(keys[val])) {
          keys[val] = true;
          results.push(val);
        }
      }
      return results;
    } else {
      return data;
    }
  };
});

//Returns range of elements from array on a given page
filterModules.filter("range", function($filter) {
  return function(data, selectedPage, pageSize) {
    if (angular.isArray(data) && angular.isNumber(selectedPage) && angular.isNumber(pageSize)) {
      var start_index = (selectedPage - 1) * pageSize;

      if (data.length < start_index) {
        return [];
      } else {
        //Angular filter limitTo, returns up to a number of elements in arr
        //needs filter service passed in
        return $filter("limitTo")(data.splice(start_index), pageSize);
      }
    } else {
      return data;
    }
  };
});

//Determines how many pages can be displayed
filterModules.filter("pageCount", function() {
  return function(data, size) {
    if (angular.isArray(data)) {
      var result = [];

      for (var i = 0; i < Math.ceil(data.length / size); i++) {
        result.push(i);
      }

      return result;
    } else {
      return data;
    }
  };
});