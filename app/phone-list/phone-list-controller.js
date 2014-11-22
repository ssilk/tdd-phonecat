'use strict';

angular.module('tddPhoneList', []).
    controller('tddPhoneListController', ['$scope', '$http',
        function ($scope, $http) {
          $scope.phones = $http.get('components/data/phones.json').
              success(function (data) {
                $scope.phones = data;
              });
        }]);
