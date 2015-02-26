angular
	.module('feddevtools', ['ngRoute'])
	.directive('topNavBar',
        [
            function(){
                function linkingFunction(scope, element, attrs){
                }
                    
                function controller($scope){
        
                    $scope.menu = ['styles','components','modules','services','examples'];

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
                    templateUrl: '/dst/javascripts/templates/directives/navigation/template.html',
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
            .when('/:section/', {
                templateUrl : function (params) { 
                    return '/dst/javascripts/templates/pages/' + params.section + '.html'; 
                },
                controller: 'dummyController'
            })
            .otherwise({
                templateUrl : '/dst/javascripts/templates/pages/styles.html',
                controller: 'dummyController'
            });
    }]);
