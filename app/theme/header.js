"use strict";

var h = require("snabbdom/h");

var header = {
    logo: function logo(title, logoUrl) {
        return h("a.logo", {props:{href:"#"}}, [
            h("span.symbol", [
                h("img", {props:{src:logoUrl, alt:""}})
            ]),
            h("span.title", String(title))
        ]);
    },

    nav: function nav(name) {
        return h("nav", [
            h("ul", [
                h("li", [
                    h("a", {props:{href:"#menu"}}, String(name))
                ])
            ])
        ]);
    },

    header: function header(title, logoUrl, navName) {
        return h("header#header", [
            h("div.inner", [
                header.logo(title, logoUrl),
                header.nav(navName)
            ])
        ]);
    }
};

module.exports = header;