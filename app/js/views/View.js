System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escapar = false) {
                    this._elemento = document.querySelector(selector);
                    this._escapar = escapar;
                }
                update(model) {
                    this._elemento.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
