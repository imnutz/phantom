"use strict";

var noop = function() {};

var action = {
    present: noop,

    wire: function wire(present) {
        this.present = present;
    },

    loadTiles: function loadTiles() {
        this.present({ fetchTiles: true });
    }
};

module.exports = action;