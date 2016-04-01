var appName = 'butterfly';

require("ngreact");
require("angular-ui-router");
require("angular-resource");
require("angular-pouchdb");

import angular from "angular";

document.body.setAttribute("ng-app", appName);
document.write("<ui-view></ui-view>");

var app = angular.module(appName, ['react', 'ui.router', 'ngResource', 'pouchdb']);
module.exports = app;