"use strict";

var h = require("snabbdom/h");

var menu = {
    title: function title(name) {

    },

    menuItem: function menuItem(menuItem) {
        return h("li", [
            h("a", {props:{href:"#"}}, menuItem.name)
        ]);
    },

    menuItems: function menuItems(menuItems) {
        return h("ul", menuItems.map(menu.menuItem));
    }
};

module.exports = menu;