app.provider('db', function() {
  var databaseName = 'db';
  this.setDatabaseName = function(dbName) {
    databaseName = dbName;
  };

  this.$get = ['pouchDB', function(pouchDB) {
    var db = pouchDB(databaseName);

    return db;
  }];
});