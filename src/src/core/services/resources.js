app.provider('resources', function() {
  var baseUrl = null;
  var resources = [];

  this.setBaseUrl = function(url) {
    baseUrl = url;
  };

  this.setResources = function(r) {
    resources = r;
  };

  this.$get = ['$resource', 'config', function($resource, config) {
    baseUrl = baseUrl || config.baseUrl;
    for (var r of resources) {
      this[r.name] = $resource(baseUrl + '/' + (r.plural || r.name + 's') + '/:id', {id: '@id'});
    }

    return this;
  }];
});