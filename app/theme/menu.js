"use strict";

var h = require("snabbdom/h");

var menu = {
    title: function title(name) {
        return h("h2", String(name));
    },

    menuItem: function menuItem(menuItem) {
        return h("li", [
            h("a", {props:{href:"#"}}, menuItem.name)
        ]);
    },

    menuItems: function menuItems(menuItems) {
        return h("ul", menuItems.map(menu.menuItem));
    },

    menuComponent: function menuComponent(name, menuItems) {
        return h("nav#menu", [
            menu.title(name),
            menu.menuItems(menuItems)
        ]);
    }
};

module.exports = menu;