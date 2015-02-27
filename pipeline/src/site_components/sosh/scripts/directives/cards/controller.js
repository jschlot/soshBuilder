angular
    .module('cardsModule', ['ngRoute'])
    .directive('colorSwatch',
        [
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
                        placeholderText: "@",
                        colorName: "@",
                        colorValue: "@"
                    },
                    templateUrl: '/dst/javascripts/templates/directives/cards/colorSwatch.html',
                    link: linkingFunction
                };
            }
        ]
    )
    .directive('depthSwatch',
        [
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
                        placeholderText: "@",
                        depthSize: "@"
                    },
                    templateUrl: '/dst/javascripts/templates/directives/cards/depthSwatch.html',
                    link: linkingFunction
                };
            }
        ]
    )
;