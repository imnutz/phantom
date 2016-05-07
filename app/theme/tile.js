"use strict";

var h = require("snabbdom/h");

module.exports = {
    tileItem: function tileItem(tile) {
        return h("article", {attrs:{class:tile.cssClass}}, [
            h("span.image", [
                h("img", {props:{src:tile.imageUrl, alt:""}})
            ]),
            h("a", {props:{href:"#"}}, [
                h("h2", String(tile.title)),
                h("div.content", [
                    h("p", String(tile.description))
                ])
            ])
        ]);
    }
};