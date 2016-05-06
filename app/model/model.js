"use strict";

var header = require("./header");
var menu = require("./menu");
var main = require("./main");
var footer = require("./footer");

var dataset = {
    header: null,
    menu: null,
    main: null,
    footer: null
};

var noop = function() {};

var model = {
    render: noop,

    wire: function wire(render) {
        this.render = render;
    },

    init: function initModel() {
        dataset.header = header.init();
        dataset.menu = menu.init();
        dataset.main = main.init();
        dataset.footer = footer.init();

        return dataset;
    },

    present: function modelPresent(data) {
        this.render(dataset);
    }
};

module.exports = model;