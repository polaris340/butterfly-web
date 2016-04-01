app.directive('resourcetest', ['resources', function(resources) {
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {
      console.log(resources);
      resources.user.query();
    }
  };
}]);