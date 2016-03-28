(function(){

    var app = angular.module('sample-app');

    app.controller('products-controller', ['$scope', function($scope){

        $scope.products = {

            'Product A': {},
            'Product B': {},
            'Product C': {},
            'Product D': {}

        };

    }]);

})();
