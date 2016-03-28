require("expose?app!./js/app.js");

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./js/', true, /\.js$/));
requireAll(require.context('./css/', true, /\.scss$/));



