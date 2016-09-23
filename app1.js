(function(){
  'use strict';

  angular.module("CalculatingModule", [])

    .controller("CalculateController", calculateController);

    calculateController.$inject = ['$scope'];
    function calculateController($scope) {
      $scope.name = "masi";
      $scope.sayHello = function() {
        return "hello Masi";
      };
      console.log();
    }

  //  console.log($injector.annotate(calculateController);
})();
