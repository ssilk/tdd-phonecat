'use strict';

describe('tddPhoneListController', function () {
  var scope;

  beforeEach(module('tddPhoneList'));

  it('creates the phones model using data fetched via XHR', inject(
      function ($httpBackend, $rootScope, $controller) {
        var phoneData = [{name: "phone 1"}, {name: "phone 2"}];
        $httpBackend.expectGET('components/data/phones.json').
            respond(phoneData);

        scope = $rootScope.$new();
        $controller('tddPhoneListController', {$scope: scope});

        $httpBackend.flush();
        expect(scope.phones).toEqual(phoneData);
        $httpBackend.verifyNoOutstandingExpectation();
      })
  );
});
