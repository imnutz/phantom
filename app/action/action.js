"use strict";

var noop = function() {};

var action = {
    present: noop,

    wire: function wire(present) {
        this.present = present;
    }
};

module.exports = action;