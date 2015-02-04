(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('%%');
    $interpolateProvider.endSymbol('%%');
  });

  app.controller('StoreController', ['$http', function($http) {
    this.products = gems;
    var store = this;
    $http.get('/',

      );

  }]);
  
  var gems = [];

})();

