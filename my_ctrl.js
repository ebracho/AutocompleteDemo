angular.module('app', ['bossy.autocomplete'])
  .controller('MyCtrl', ['$scope', function($scope) {
    $scope.dict = [
      'coffee',
      'donut',
      'waterworld',
      'laptop',
      't-shirt',
      'treasure',
      'iphone',
      'google',
      'boom',
      'broom',
      'doom',
      'door',
      'floor',
      'vishal',
    ];
    $scope.tol = 2;
  }])
;
