"use strict";

var dataset = {
    title: "Phantom",
    logo: "images/logo.svg",
    navName: "Menu"
};

var header = {
    init: function initHeader() {
        return dataset;
    },
    
    present: function headerPresent(data) {
        return dataset;
    }
};

module.exports = header;