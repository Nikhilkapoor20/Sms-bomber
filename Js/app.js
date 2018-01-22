var mainApp = angular.module("mainApp", []);

mainApp.controller('BombController', function ($scope, $http, $timeout) {
  let url = ''; // add url here
  $scope.interval, i = 1;
  $scope.time = 0;
  $scope.limit = 0;
  $http.get('https://freegeoip.net/json/').then(function (result) {
    $scope.userDetails = result;
  })

  $scope.bomb = function () {
    if (!$scope.number) {
      alert("i think you missed something ! like Number");
      return;
    }
    if ($scope.limit < 10) {
      $scope.interval = setInterval($scope.bombb, 1000);

      $scope.time = 0;

      var timer = function () {
        if ($scope.time < $scope.limit) {
          $scope.time += 1000 / 1000;
          $timeout(timer, 1000);
        }
      }

      //run!!
      $timeout(timer, 1000);
    }
    else {
      alert("can't you read Max of 10 Messages")
    }
  }

  $scope.bombb = function () {
    $.ajax({
      url: url + $scope.number,
      type: 'GET',
      crossDomain: true,
      async: true,
      success: function (response) {

      }
    });
    if (i < $scope.limit) { i++; }
    else clearInterval($scope.interval);
  }

});


