var sportsModule = angular.module("sportsStore", [
  "customFilters",
  "cart",
  "ngRoute"
]);

sportsModule.config(function ($routeProvider) {
  $routeProvider.when("/complete", {
     templateUrl: "/templates/thankYou.jade"
  });

  $routeProvider.when("/placeOrder", {
     templateUrl: "/templates/placeOrder.jade"
  });

  $routeProvider.when("/checkout", {
    templateUrl: "/templates/checkoutSummary.jade"
  });

  $routeProvider.when("/products", {
     templateUrl: "/templates/productList.jade"
  });

  $routeProvider.otherwise({
    templateUrl: "/templates/productList.jade"
  });
});