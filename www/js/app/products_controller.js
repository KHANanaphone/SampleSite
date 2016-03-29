(function(){

    var app = angular.module('sample-app');

    app.controller('products-controller', ['$scope', '$timeout', function($scope, $timeout){

        $scope.products = {

            'A': {id: 'A', image: 'stock1.jpg', side: 'left', color: 'blue'},
            'B': {id: 'B', image: 'stock2.jpg', side: 'right', color: 'orange'},
            'C': {id: 'C', image: 'stock3.jpg', side: 'left', color: 'purple'},
            'D': {id: 'D', image: 'stock4.jpg', side: 'right', color: 'green'}
        };

        $scope.select = function(i){

            if($scope.selected.id == i)
                return;

            $scope.fadeout = true;

            $timeout(function(){

                $scope.selected = $scope.products[i];
                $timeout(() => $scope.fadeout = false, 200);

            }, 200)
        }

        $scope.selected = $scope.products['A']

    }]);

})();
