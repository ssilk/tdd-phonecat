'use strict';

describe('Home page', function () {
  it('user sees list of phones', function () {
    browser.get('app/index.html');
    var phones = element.all(by.repeater('phone in phones'));
    phones.count().then(function (number) {console.log(number);});
    expect(phones.count()).toBe(20);
  });
});
