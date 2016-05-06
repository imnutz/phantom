"use strict";

var h = require("snabbdom/h");
var input = require("./input");

var footer = {
    inputFormField: function inputFormField(type, name, placeholder, classes) {
        return h("div", {
            props: {
                class: classes.join(" ")
            },
        }, [
                input.text(type, name, placeholder)
        ]);
    },

    textAreaFormField: function textAreaFormField(name, placeholder, classes) {
        return h("div", {
            props: {
                class: classes.join(" ")
            },
        }, [
                input.textarea(name, placeholder)
        ]);
    },

    buttons: function buttons() {
        return h("ul.actions", [
            h("li", [
                input.button("Send", "special")
            ])
        ]);
    },

    getInTouch: function getInTouch(title) {
        return h("section", [
            h("h2", String(title)),
            h("form", {
                    props: {
                        method:"post", 
                        action:"#"
                    }
                }, 
                [
                    footer.inputFormField("text", "name", "Name", ["field", "half", "first"]),
                    footer.inputFormField("email", "email", "Email", ["field", "half"]),
                    footer.textAreaFormField("message", "Message", ["field"])
                ]
            )
        ]);
    },

    follow: function follow(title, socialItems) {
        return h("section", [
            h("h2", String(title)),
            h("ul.icons", socialItems.map(footer.socialItem))
        ])
    },

    socialItem: function socialItem(socialItem) {
        return h("li", [
            h("a", {
                attrs: {
                    class: socialItem.classes.join(" ")
                },
                props: {
                    href: "#"
                } 
            }, [
                h("span.label", String(socialItem.title))
            ])
        ]);
    },

    copyright: function copyright(desc) {
        return h("ul.copyright", [
            h("li", String(desc))
        ]);
    },

    footerComponent: function footerComponent(gitTitle, followTitle, socialItems, copyrightDesc) {
        return h("footer#footer", [
            h("div.inner", [
                footer.getInTouch(gitTitle),
                footer.follow(followTitle, socialItems),
                footer.copyright(copyrightDesc)
            ]) 
        ]);
    }
};

module.exports = footer;