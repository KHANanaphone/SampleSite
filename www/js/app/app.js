(function(){

    var app = angular.module('sample-app', [
      'ngRoute', 'ui.bootstrap', 'ngFitText'
    ]);

    app.pages = {
        'home': {name: 'Home', url: '', html: 'home.html'},
        'products': {name: 'Products', url: 'products', html: 'products.html'},
        'news': {name: 'News', url: 'news', html: 'news.html'},
        'about': {name: 'About', url: 'about', html: 'about.html'}
    }

    app.config(['$routeProvider', function($routeProvider){

        for(var pageid in app.pages){

            var page = app.pages[pageid];

            if(page.group)
                for(var j = 0; j < page.subpages.length; j++)
                    addWhen(page.subpages[j]);
            else
                addWhen(page);
        }

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        function addWhen(page){

            $routeProvider.when('/' + page.url, {
                templateUrl: 'pages/' + page.html
            });
        };
    }]);

    app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
      //when the route is changed scroll to the proper element.
      $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.cat);
        $anchorScroll();
      });
    });

})();
