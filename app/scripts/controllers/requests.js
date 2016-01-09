'use strict';

/**
 * @ngdoc function
 * @name grabPoliceApp.controller:RequestsCtrl
 * @description
 * # RequestsCtrl
 * Controller of the grabPoliceApp
 */
angular.module('grabPoliceApp')
  .controller('RequestsCtrl',['$scope', '$http',
    function ($scope, $http) {
      $http.get('http://localhost:8000/reports').success(function(data) {
        $scope.reports = data;
      });
  }]);
