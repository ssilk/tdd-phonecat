'use strict';

describe('tddPhoneListController', function () {
  var scope;

  beforeEach(module('tddPhoneList'));

  it('creates the phones model using data fetched via XHR', inject(
      function ($httpBackend, $rootScope, $controller) {
        var phonesData = [{name: "phone 1"}, {name: "phone 2"}];
        $httpBackend.expectGET('components/data/phones.json').
            respond(phonesData);

        scope = $rootScope.$new();
        $controller('tddPhoneListController', {$scope: scope});

        $httpBackend.flush();
        expect(scope.phones).toEqual(phonesData);
        $httpBackend.verifyNoOutstandingExpectation();
      })
  );

  it('sets the default value of the orderBy model to "age"', inject(
      function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('tddPhoneListController', {$scope: scope});
        expect(scope.sortKey).toEqual('age');
      })
  );
});
