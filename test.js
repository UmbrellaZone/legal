/// <reference path="./typings/tsd.d.ts" />
var umbrellaLegal = require("./index.js");
var path = require("path");
var umbrellaLegal = require("./index.js");
var easyserve = require("easyserve");
easyserve(path.resolve("./test/jade/"));
