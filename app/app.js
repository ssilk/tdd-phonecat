'use strict';

angular.module('tddPhoneCatApp', ['tddPhoneList', 'ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/phones',
          {
            controller: 'tddPhoneListController',
            templateUrl: 'phone-list/phone-list.html'
          });
    }]);
