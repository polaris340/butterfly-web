app.service('resources', ['$resource', 'config', function ($resource, config) {
  var resources = [
    {
      name: 'user'
    },
    {
      name: 'picture'
    }
  ];
  for (var r of resources) {
    this[r.name] = $resource(config.baseUrl + '/' + (r.plural || r.name + 's') + '/:id', {id: '@id'});
  }
}]);
