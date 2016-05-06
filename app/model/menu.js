"use strict";

var dataset = {
    name: "Menu",
    
    items: [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Ipsum veroeros"
        },
        {
            id: 3,
            name: "Consequat dolor"
        },
        {
            id: 4,
            name: "Elements"
        }
    ]
};

var menu = {
    init: function initMenu() {
        return dataset;
    },
    
    present: function menuPresent(data) {
        // do some thing with dataset

        return dataset;
    },

    makeActive: function makeActive(id) {

    } 
};

module.exports = menu;