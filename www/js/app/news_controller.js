(function(){

    var app = angular.module('sample-app');

    app.controller('news-controller', ['$scope', function($scope){

        $scope.repeat = function(x){

            var obj = {}

            for(var i = 0; i < x; i++)
                obj[i] = i;

            return obj;
        }
        
    }]);

})();
