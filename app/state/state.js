"use strict";

var state = {
    view: null,
    action: null,
    theme: null,

    wire: function wire(view, action, theme) {
        this.view = view;
        this.action = action;
        this.theme = theme;
    },

    render: function render(model) {
        this.represent(model);
        this.nextAction(model);
    },

    represent: function represent(model) {
        var representation = this.theme.app(
            this.theme.header(model.header.title, model.header.logo, model.header.navName),
            this.theme.menu(model.menu.name, model.menu.items),
            this.theme.main(model.main.headerTitle, model.main.headerDescription, model.main.items),
            this.theme.footer(model.footer.gitTitle, model.footer.followTitle, model.footer.socialItems, model.footer.copyright)
        );

        this.view.display(representation);
    },

    nextAction: function nextAction(model) {

    }
};

module.exports = state;