'use strict';

angular.module('tddPhoneList', []).
    controller('tddPhoneListController', ['$scope', '$http',
        function ($scope, $http) {
          $http.get('components/data/phones.json').
              success(function (data) {$scope.phones = data;});
          $scope.sortKey = 'age';
        }]);
