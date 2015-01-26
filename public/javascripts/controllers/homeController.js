var sportsStoreModule = angular.module("sportsStore");
sportsStoreModule.controller("sportsStoreCtrl", function($http, $scope, $location, dataUrl, orderUrl, cart) {
  $scope.data = {};
  $http.get(dataUrl).success(function(data){
    $scope.data.products = data;
  }).error(function(err){
    $scope.data.error = err;
  });

  $scope.sendOrder = function(shippingDetails){
    var order = angular.copy(shippingDetails);

    order.products = cart.getProducts();

    var promise = $http.post(orderUrl, order);

    promise.success(function(data){
      $scope.data.orderId = data.id;
      cart.getProducts().length = 0;
    });

    promise.error(function(error){
      $scope.data.orderError = error;
    });

    promise.finally(function(){
      $location.path("/complete");
    });
  };
});

sportsStoreModule.constant("dataUrl", "http://localhost:2403/products");

sportsStoreModule.constant("orderUrl", "http://localhost:2403/orders");
