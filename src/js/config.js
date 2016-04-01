app
  .constant('config', {
    baseUrl: 'http://localhost:5000/v1'
  })
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      template: `<main fname="'ff'" lname="'fff'"></main><resourcetest></resourcetest>`
    });

  $urlRouterProvider.otherwise('/');
}]);