'use strict';

var app = angular.module('tddPhoneCatApp', [
  'tddPhoneList',
  'tddPhoneDetail',
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/phones', {
        controller: 'tddPhoneListController',
        templateUrl: 'phone-list/phone-list.html'
      }).
      when('/phones/:phoneId', {
        controller: 'tddPhoneDetailController',
        templateUrl: 'phone-detail/phone-detail.html'
      });
}]);
