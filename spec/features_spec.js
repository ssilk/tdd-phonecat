'use strict';

describe('Home page', function () {
  it('user sees list of phones', function () {
    browser.get('app/index.html');
    var phones = element.all(by.repeater('phone in phones'));
    expect(phones.count() > 0).toBe(true);
  });
});
