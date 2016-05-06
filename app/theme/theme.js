"use strict";

var h = require("snabbdom/h");

var header = require("./header");
var menu = require("./menu");
var main = require("./main");
var footer = require("./footer");

var theme = {
    home: function home() {
        return h("h1", "It is working");
    },

    app: function app(header, menu, main, footer) {
        return h("div#wrapper", [
            header,
            menu,
            main,
            footer
        ]);
    },
    header: header.headerComponent,
    menu: menu.menuComponent,
    main: main.mainComponent,
    footer: footer.footerComponent
};

module.exports = theme;