angular
	.module('feddevtools', ['ngRoute'])
	.directive('topNavBar',
        [ 	// insertion here
            function(){
                function linkingFunction(scope, element, attrs){
                    
                }
                    
                function controller($scope){
        
                    // destroy ////////////////////////////////
                    $scope.$on("$destroy", function(){
                    });
                }
                controller.$inject = ['$scope'];
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: false,
                    controller: controller,
                    scope: {
                    },
                    templateUrl: '/dst/javascripts/templates/navigation/template.html',
                    link: linkingFunction
                };
            }
        ]
    )
    .controller('dummyController',
        ['$scope',
            function ($scope) {
            }
        ]
    )
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/cards', {
                templateUrl : '/dst/javascripts/templates/cards/template.html',
                controller: 'dummyController'
            })
            .when('/colors', {
                templateUrl : '/dst/javascripts/templates/colors/template.html',
                controller: 'dummyController'
            });
    }]);
