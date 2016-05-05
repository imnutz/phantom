"use strict";

var h = require("snabbdom/h");
var tile = require("./tile");

var main = {
    header: function mainHeader(title, desc) {
        return h("header", [
            h("h1", String(title)),
            h("p", String(desc))
        ]);
    },

    section: function mainSection(items) {
        return h("section.tiles", items.map(tile.tileItem));
    },

    main: function main(headerTitle, headerDescription, mainItems) {
        return h("div#main", [
            h("div.inner", [
                main.header(headerTitle, headerDescription),
                main.section(mainItems)
            ])
        ]);
    }
};

module.exports = main;