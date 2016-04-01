app
  .constant('config', {
    baseUrl: 'http://localhost:5000/v1'
  })
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    'dbProvider',
    'resourcesProvider',
    function ($stateProvider,
              $urlRouterProvider,
              dbProvider,
              resourcesProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'templates/main/main.html'
        });

      $urlRouterProvider.otherwise('/');

      dbProvider.setDatabaseName('butterfly');
      resourcesProvider.setResources([
        {
          name: 'user',
          plural: 'users' // optional
        },
        {
          name: 'picture'
        }
      ])
    }]);