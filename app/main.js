"use strict";

module.exports = {
    start: function start(state, action, model, view, theme) {
        state.wire(view, action, theme);

        model.wire(state.render);

        action.wire(model.present);

        var viewContainer = document.querySelector("#phantom-app");
        view.setViewContainer(viewContainer);

        state.render(model.init());
    }
};