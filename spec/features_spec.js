'use strict';

describe('Home page', function () {
  var mockPhones = [
    {name: "phone B", snippet: "about B",
        imageUrl: "phoneB-png", age: 1},
    {name: "phone A", snippet: "about A",
        imageUrl: "phoneA-png", age: 2}
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

  it('user sees phones default sorted by most recent release',
      function () {
        var firstRow = element(by.repeater('phone in phones').row(0));
        var lastRow = element(by.repeater('phone in phones').row(1));
        expect(firstRow.getText()).toMatch('phone B');
        expect(lastRow.getText()).toMatch('phone A');
      });

  describe('select to sort phone list alphabetically', function () {
    beforeEach(function () {
      $('option[value="name"]').click();
    });

    it('user sees phones sorted alphabetically',
        function () {
          var firstrow = element(by.repeater('phone in phones').row(0));
          var lastrow = element(by.repeater('phone in phones').row(1));
          expect(firstrow.getText()).toMatch('phone A');
          expect(lastrow.getText()).toMatch('phone B');
        });

    describe('select to sort phone list by most recent release', function () {
      beforeEach(function () {
        $('option[value="age"]').click();
      });

      it('user sees phones sorted by most recent release again',
          function () {
            var firstRow = element(by.repeater('phone in phones').row(0));
            var lastRow = element(by.repeater('phone in phones').row(1));
            expect(firstRow.getText()).toMatch('phone B');
            expect(lastRow.getText()).toMatch('phone A');
          });
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
