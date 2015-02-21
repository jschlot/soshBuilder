angular
	.module('navigation', [])
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
    );