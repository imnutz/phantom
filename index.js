"use strict";

var state = require("./app/state/state");
var view = require("./app/state/view");
var action = require("./app/action/action");
var model = require("./app/model/model");
var theme = require("./app/theme/theme");

var main = require("./app/main");

main.start(state, action, model, view, theme);