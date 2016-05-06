"use strict";

var dataset = {
    gitTitle: "Get in touch",
    followTitle: "Follow",
    copyright: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ullam!",
    socialItems: [
        {
            title: "Twitter",
            classes: ["icon", "style2", "fa-twitter"]
        },
        {
            title: "Facebook",
            classes: ["icon", "style2", "fa-facebook"]
        },
        {
            title: "Instagram",
            classes: ["icon", "style2", "fa-instagram"]
        },
        {
            title: "Dribbble",
            classes: ["icon", "style2", "fa-dribbble"]
        },
        {
            title: "Github",
            classes: ["icon", "style2", "fa-github"]
        },
        {
            title: "500px",
            classes: ["icon", "style2", "fa-500px"]
        },
        {
            title: "Phone",
            classes: ["icon", "style2", "fa-phone"]
        },
        {
            title: "Email",
            classes: ["icon", "style2", "fa-envelope-o"]
        }
    ]
};

var footer = {
    init: function initFooter() {
        return dataset;
    },

    present: function footerPresent(data) {
        return dataset;
    }
};

module.exports = footer;