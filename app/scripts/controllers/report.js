'use strict';

/**
 * @ngdoc function
 * @name grabPoliceApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the grabPoliceApp
 */
angular.module('grabPoliceApp')
  .controller('ReportCtrl', function ($scope, $http, $location) {
      $scope.cfdump = "";

    $scope.submitForm = function() {
      $http({
        url: "http://localhost:8000/create/reports",
        data: $scope.form,
        method: 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

      }).success(function(data){

        //console.log("OK", data)
        $location.path('/requests');

      }).error(function(err){"ERR", console.log(err)})
    }

    /*var request = $http({
      method: "POST",
      url: "http://localhost:8000/create/reports",
      data: {
        shortdesc: "short desc",
        description: "long description",
        area: "manila"
      }
    });
    // Store the data-dump of the FORM scope.
    request.success(
      function( html ) {
        $scope.cfdump = html;
      }
    );*/

  }).
config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});
