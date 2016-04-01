require("expose?app!./src/app.js");
require("expose?_!lodash");
require('expose?PouchDB!pouchdb');

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./src/', true, /\.js$/));
requireAll(require.context('./src/', true, /\.scss$/));
requireAll(require.context('./src/', true, /\.html$/));
