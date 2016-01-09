'use strict';

describe('Controller: RequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('grabPoliceApp'));

  var RequestsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestsCtrl = $controller('RequestsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RequestsCtrl.awesomeThings.length).toBe(3);
  });
});
