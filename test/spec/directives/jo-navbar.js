'use strict';

describe('Directive: joNavbar', function () {
  beforeEach(module('hippApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<jo-navbar></jo-navbar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the joNavbar directive');
  }));
});
