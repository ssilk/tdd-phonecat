'use strict';

describe('tddPhoneListController', function () {
  var scope;

  beforeEach(module('tddPhoneList'));

  it('creates the phones model', inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('tddPhoneListController', {$scope: scope});
    expect(scope.phones).toBeDefined();
  }));
});
