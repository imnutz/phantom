"use strict";

var dataset = {
    onLoad: true,
    headerTitle: "Lorem ipsum dolor.",
    headerDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quasi atque itaque distinctio tempore hic nulla. Similique corporis, explicabo nulla!",
    items: []
};

var main = {
    init: function initMain() {
        return dataset
    },

    present: function presentMain(data) {
        data = data || {};

        if(data.tiles) {
            dataset.items = data.tiles;
            dataset.onLoad = false;
        }

        return dataset;
    }
};

module.exports = main;