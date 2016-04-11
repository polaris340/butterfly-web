app.directive('userInfo', ['popover', function(popover) {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    link: function($scope, $element, $attrs) {
      $scope.src = 'https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    },
    template: `<div square-image url="{{src}}" size="48" circle></div>`
  }
}]);
