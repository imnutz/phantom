"use strict";

var patch = require("snabbdom").init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/eventlisteners')
]);

var view = {
    viewContainer: null,

    setViewContainer: function setViewContainer(viewContainer) {
        this.viewContainer = viewContainer;
    },

    display: function display(representation) {
        patch(this.viewContainer, representation);
    }
};

module.exports = view;