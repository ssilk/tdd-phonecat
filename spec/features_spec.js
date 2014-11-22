'use strict';

describe('Home page', function () {
  var mockPhones = [
    {name: "phone A", snippet: "about A",
        imageUrl: "phoneA-png"},
    {name: "phone B", snippet: "about B",
        imageUrl: "phoneB-png"}
  ]

  beforeEach(function () {
    var mockApi = function () {
      var mockPhones = arguments[0];
      angular.module('tddSpecHelper', ['ngMockE2E']).
          run(['$httpBackend', function ($httpBackend) {
            $httpBackend.whenGET('components/data/phones.json').
                respond(mockPhones);
          }]);
    };

    browser.addMockModule('tddSpecHelper', mockApi, mockPhones);
  });

  afterEach(function () {
    browser.removeMockModule('tddSpecHelper');
  });

  mockPhones.forEach(function (mockPhone, index) {
    it('user sees properties of the phone at index ' + index, function () {
      browser.get('app/index.html');
      var phone = element(by.repeater('phone in phones').row(index));
      expect(phone.$('img').getAttribute('src')).toMatch(mockPhone.imageUrl);
      expect(phone.$('span').getText()).toEqual(mockPhone.name);
      expect(phone.$('p').getText()).toEqual(mockPhone.snippet);
    });
  });
});
