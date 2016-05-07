"use strict";

var header = require("./header");
var menu = require("./menu");
var main = require("./main");
var footer = require("./footer");

var reqwest = require("reqwest");

var dataset = {
    header: null,
    menu: null,
    main: null,
    footer: null
};

var noop = function() {};

var fetchTiles = function fetchTiles() {
    return reqwest("http://localhost:3000/tiles");
};

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
        data = data || {};

        if(data.fetchTiles) {
            fetchTiles().then(function(response) {

                dataset.main = main.present({
                    tiles: response
                });

                this.render(dataset);

            }.bind(this));
        }
    }
};

module.exports = model;