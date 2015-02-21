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
    .controller('formsController',
        ['$scope',
            function ($scope) {
                $scope.message = "Venue Name";
            }
        ]
    )
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/colors', {
                templateUrl : '/dst/javascripts/templates/colors/template.html',
                controller: 'formsController'
            });
    }]);
