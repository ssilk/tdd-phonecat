'use strict';

describe('Checkmark filter', function () {
  beforeEach(module('tddPhoneCatFilters'));

  it('converts TRUE into a checkmark', inject(function (checkmarkFilter) {
    expect(checkmarkFilter(true)).toEqual('\u2713');
  }));
  it('converts FALSE into a cross', inject(function (checkmarkFilter) {
    expect(checkmarkFilter(false)).toEqual('\u2718');
  }));
});
