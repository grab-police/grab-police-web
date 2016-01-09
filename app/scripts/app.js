'use strict';

/**
 * @ngdoc overview
 * @name grabPoliceApp
 * @description
 * # grabPoliceApp
 *
 * Main module of the application.
 */
angular
  .module('grabPoliceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/requests', {
        templateUrl: 'views/requests.html',
        controller: 'RequestsCtrl',
        controllerAs: 'requests'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
