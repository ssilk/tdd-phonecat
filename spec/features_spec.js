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

    browser.get('app/index.html');
  });

  afterEach(function () {
    browser.removeMockModule('tddSpecHelper');
  });

  mockPhones.forEach(function (mockPhone, index) {
    it('user sees the phone at index ' + index + ' in the list',
        function () {
          var phone = element(by.repeater('phone in phones').row(index));
          expect(phone.$('img').getAttribute('src')).toMatch(mockPhone.imageUrl);
          expect(phone.$('span').getText()).toEqual(mockPhone.name);
          expect(phone.$('p').getText()).toEqual(mockPhone.snippet);
        });
  });

  it('user can filter the list of phones by name', function () {
    $('input').clear().sendKeys('phone A');
    var phones = element.all(by.repeater('phone in phones'));
    expect(phones.count()).toBe(1);
    expect(phones.getText()).toMatch('phone A');
    expect(phones.getText()).not.toMatch('phone B');
  });

  it('user can filter the list of phones by snippet', function () {
    $('input').clear().sendKeys('about B');
    var phones = element.all(by.repeater('phone in phones'));
    expect(phones.count()).toBe(1);
    expect(phones.getText()).toMatch('phone B');
    expect(phones.getText()).not.toMatch('phone A');
  });
});
