"use strict";

var h = require("snabbdom/h");

var  input = {
    text: function textInput(type, name, placeholder, changeHandler) {
        return h("input", {
            props: {
                type: type, 
                name: name, 
                placeholder: placeholder
            },
            on: {
                change: [changeHandler]
            }
        });
    },

    textarea: function textArea(name, placeholder, changeHandler) {
        return h("textarea", {
            props: {
                name: name,
                placeholder: placeholder
            },
            on: {
                change: [changeHandler]
            }
        });
    },

    button: function button(value, clazz, clickHandler) {
        return h("button", {
                props: { 
                    class: clazz 
                },
                on: {
                    click: [clickHandler]
                }
            },

            String(value)
        );
    }
};

module.exports =  input;