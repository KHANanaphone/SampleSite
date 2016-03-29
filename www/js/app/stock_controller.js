(function(){

    var app = angular.module('sample-app');

    app.controller('stock-controller', ['$scope', function($scope){

        $scope.dropdownOptions = {

            category: {
                name: 'Category',
                options: ['Stocks', 'Foreign Exchange Trading', 'Futures']
            },
            zoom: {
                name: 'Zoom',
                options: ['1 minute', '5 minutes', '15 minutes', '30 minutes', 'Hourly', 'Daily', 'Monthly']
            },
            type1: {
                name: 'Chart Type 1',
                options: ['MA', 'EXPMA', 'BBI', 'Waterfall', 'BOLL', 'MIKE']
            },
            type2: {
                name: 'Chart Type 2',
                options: ['RSI', 'KDI', 'DMA', 'MACD', 'CR', 'VR', 'OBV', 'ASI', 'CCI', 'ROC', 'TRIX']
            }

        };

        for(var cat in $scope.dropdownOptions){

            $scope.dropdownOptions[cat].selected = $scope.dropdownOptions[cat].options[0];
        }

    }]);

})();
