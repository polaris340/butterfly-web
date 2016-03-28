app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      template: `<main fname="'ff'" lname="'fff'"></main>`
    });

  $urlRouterProvider.otherwise('/');
}]);