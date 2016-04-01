app.service('auth', ['$rootScope', 'resources', 'db', function ($rootScope, resources, db) {
  var self = this;

  db.get('loggedUser').then(function (res) {
    $rootScope.loggedUser = res;
  }, function (error) {
    if (error.status === 404) {
      // not logged in
    }
  });
}]);