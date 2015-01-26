var cartModule = angular.module("cart", []);

//Make a service called cart
cartModule.factory("cart", function() {
  var cartData = [];

  return {
    addProduct: function(id, name, price) {
      var addedToExistingItem = false;

      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id == id) {
          cartData[i].count++;
          addedToExistingItem = true;
          break;
        }
      }

      if (!addedToExistingItem) {
        cartData.push({
          count: 1,
          id: id,
          price: price,
          name: name
        });
      }
    },

    removeProduct: function(id) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id == id) {
          cartData.splice(i, 1);
          break;
        }
      }
    },

    getProducts: function() {
      return cartData;
    }
  };
});

//Create cart summary directive with cart service injected
cartModule.directive("cartSummary", function(cart) {
  return {
    //E is an element
    //EA is an element or attribute
    restrict: "E",
    templateUrl: "/templates/cartSummary.jade",
    controller: function($scope) {
      var cartData = cart.getProducts();

      $scope.total = function(){
        var total = 0;
        for (var i = 0; i < cartData.length; i++){
          total += (cartData[i].price * cartData[i].count);
        }

        return total;
      };

      $scope.itemCount = function(){
        var total = 0;

        for (var i = 0; i < cartData.length; i++) {
          total += cartData[i].count;
        }

        return total;
      };
    }
  };
});