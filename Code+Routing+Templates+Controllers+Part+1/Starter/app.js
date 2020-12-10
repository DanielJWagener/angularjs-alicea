var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second/', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    });
});
0;

myApp.service('nameService', function () {
  this.name = 'John Doe';

  this.getNameLength = function () {
    return this.name.length;
  };

  this.nameLength = this.getNameLength.bind(this);
});

myApp.controller('mainController', [
  '$scope',
  '$log',
  'nameService',
  function ($scope, $log, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function () {
      nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());
  }
]);

myApp.controller('secondController', [
  '$scope',
  '$routeParams',
  'nameService',
  function ($scope, $routeParams, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function () {
      nameService.name = $scope.name;
    });

    $scope.num = $routeParams.num || 1;
  }
]);

myApp.directive('searchResult', function () {
  return {
    template:
      '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>'
  };
});