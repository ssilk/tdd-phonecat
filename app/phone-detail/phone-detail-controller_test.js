'use strict';

describe('tddPhoneDetailController', function () {
  beforeEach(module('tddPhoneDetail'));

  it('creates the phone model using data fetched via XHR', inject(
      function ($httpBackend, $rootScope, $controller) {
        var phoneData = {name: 'the phone'};
        $httpBackend.expectGET('components/data/phones/the-phone.json').
            respond(phoneData);

        var scope = $rootScope.$new();
        $controller('tddPhoneDetailController', {
          $scope: scope, $routeParams: {phoneId: 'the-phone'}
        });

        $httpBackend.flush();
        expect(scope.phone).toEqual(phoneData);
        $httpBackend.verifyNoOutstandingExpectation();
      }));
});
