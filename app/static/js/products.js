(function(){
	var app = angular.module('store-products', []);
  
  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };  
  });

  app.directive("productGallery", function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/product-gallery.html',
      controller: function(){
          this.current = 0;

          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/product-tabs.html',
      controller: function(){
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(setTab) {
            this.tab = setTab;
          };
      },
      controllerAs: 'tab'
    };
  });

  app.directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-description.html'
      // template: '<h4>Description</h4> <blockquote>{{product.description}}</blockquote>'
    };
  });

  app.directive("productSpecs", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-specs.html'
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "partials/product-reviews.html"
    };
  });
})();