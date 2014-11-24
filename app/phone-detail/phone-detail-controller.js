'use strict';

angular.module('tddPhoneDetail', ['ngRoute']).
    controller('tddPhoneDetailController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
          $http.get('components/data/phones/' + $routeParams.phoneId + '.json').
              success(function (data) {$scope.phone = data});
        }]);
