(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var noop = function() {};

var action = {
    present: noop,

    wire: function wire(present) {
        this.present = present;
    }
};

module.exports = action;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

var dataset = {
    headerTitle: "Lorem ipsum dolor.",
    headerDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quasi atque itaque distinctio tempore hic nulla. Similique corporis, explicabo nulla!",
    items: []
};

var main = {
    init: function initMain() {
        return dataset
    }
};

module.exports = main;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
"use strict";

var header = require("./header");
var menu = require("./menu");
var main = require("./main");
var footer = require("./footer");

var dataset = {
    header: null,
    menu: null,
    main: null,
    footer: null
};

var noop = function() {};

var model = {
    render: noop,

    wire: function wire(render) {
        this.render = render;
    },

    init: function initModel() {
        dataset.header = header.init();
        dataset.menu = menu.init();
        dataset.main = main.init();
        dataset.footer = footer.init();

        return dataset;
    },

    present: function modelPresent(data) {
        this.render(dataset);
    }
};

module.exports = model;
},{"./footer":3,"./header":4,"./main":5,"./menu":6}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict";

var patch = require("snabbdom").init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/eventlisteners')
]);

var view = {
    viewContainer: null,

    setViewContainer: function setViewContainer(viewContainer) {
        this.viewContainer = viewContainer;
    },

    display: function display(representation) {
        patch(this.viewContainer, representation);
    }
};

module.exports = view;
},{"snabbdom":26,"snabbdom/modules/attributes":21,"snabbdom/modules/class":22,"snabbdom/modules/eventlisteners":23,"snabbdom/modules/props":24,"snabbdom/modules/style":25}],10:[function(require,module,exports){
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
},{"./input":12,"snabbdom/h":18}],11:[function(require,module,exports){
"use strict";

var h = require("snabbdom/h");

var header = {
    logo: function logo(title, logoUrl) {
        return h("a.logo", {props:{href:"#"}}, [
            h("span.symbol", [
                h("img", {props:{src:logoUrl, alt:""}})
            ]),
            h("span.title", String(title))
        ]);
    },

    nav: function nav(name) {
        return h("nav", [
            h("ul", [
                h("li", [
                    h("a", {props:{href:"#menu"}}, String(name))
                ])
            ])
        ]);
    },

    headerComponent: function headerComponent(title, logoUrl, navName) {
        return h("header#header", [
            h("div.inner", [
                header.logo(title, logoUrl),
                header.nav(navName)
            ])
        ]);
    }
};

module.exports = header;
},{"snabbdom/h":18}],12:[function(require,module,exports){
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
},{"snabbdom/h":18}],13:[function(require,module,exports){
"use strict";

var h = require("snabbdom/h");
var tile = require("./tile");

var main = {
    header: function mainHeader(title, desc) {
        return h("header", [
            h("h1", String(title)),
            h("p", String(desc))
        ]);
    },

    section: function mainSection(items) {
        return h("section.tiles", items.map(tile.tileItem));
    },

    mainComponent: function mainComponent(headerTitle, headerDescription, mainItems) {
        return h("div#main", [
            h("div.inner", [
                main.header(headerTitle, headerDescription),
                main.section(mainItems)
            ])
        ]);
    }
};

module.exports = main;
},{"./tile":16,"snabbdom/h":18}],14:[function(require,module,exports){
"use strict";

var h = require("snabbdom/h");

var menu = {
    title: function title(name) {
        return h("h2", String(name));
    },

    menuItem: function menuItem(menuItem) {
        return h("li", [
            h("a", {props:{href:"#"}}, menuItem.name)
        ]);
    },

    menuItems: function menuItems(menuItems) {
        return h("ul", menuItems.map(menu.menuItem));
    },

    menuComponent: function menuComponent(name, menuItems) {
        return h("nav#menu", [
            menu.title(name),
            menu.menuItems(menuItems)
        ]);
    }
};

module.exports = menu;
},{"snabbdom/h":18}],15:[function(require,module,exports){
"use strict";

var h = require("snabbdom/h");

var header = require("./header");
var menu = require("./menu");
var main = require("./main");
var footer = require("./footer");

var theme = {
    home: function home() {
        return h("h1", "It is working");
    },

    app: function app(header, menu, main, footer) {
        return h("div#wrapper", [
            header,
            menu,
            main,
            footer
        ]);
    },
    header: header.headerComponent,
    menu: menu.menuComponent,
    main: main.mainComponent,
    footer: footer.footerComponent
};

module.exports = theme;
},{"./footer":10,"./header":11,"./main":13,"./menu":14,"snabbdom/h":18}],16:[function(require,module,exports){
"use strict";

var h = require("snabbdom/h");

module.exports = {
    tileItem: function tileItem(tile) {
        return h("article", {props:{class:tile.cssClass}}, [
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
},{"snabbdom/h":18}],17:[function(require,module,exports){
"use strict";

var state = require("./app/state/state");
var view = require("./app/state/view");
var action = require("./app/action/action");
var model = require("./app/model/model");
var theme = require("./app/theme/theme");

var main = require("./app/main");

main.start(state, action, model, view, theme);
},{"./app/action/action":1,"./app/main":2,"./app/model/model":7,"./app/state/state":8,"./app/state/view":9,"./app/theme/theme":15}],18:[function(require,module,exports){
var VNode = require('./vnode');
var is = require('./is');

function addNS(data, children) {
  data.ns = 'http://www.w3.org/2000/svg';
  if (children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      addNS(children[i].data, children[i].children);
    }
  }
}

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (arguments.length === 3) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (arguments.length === 2) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
    addNS(data, children);
  }
  return VNode(sel, data, children, text, undefined);
};

},{"./is":20,"./vnode":27}],19:[function(require,module,exports){
function createElement(tagName){
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName){
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text){
  return document.createTextNode(text);
}


function insertBefore(parentNode, newNode, referenceNode){
  parentNode.insertBefore(newNode, referenceNode);
}


function removeChild(node, child){
  node.removeChild(child);
}

function appendChild(node, child){
  node.appendChild(child);
}

function parentNode(node){
  return node.parentElement;
}

function nextSibling(node){
  return node.nextSibling;
}

function tagName(node){
  return node.tagName;
}

function setTextContent(node, text){
  node.textContent = text;
}

module.exports = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  appendChild: appendChild,
  removeChild: removeChild,
  insertBefore: insertBefore,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent
};

},{}],20:[function(require,module,exports){
module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};

},{}],21:[function(require,module,exports){
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", 
                "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", 
                "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", 
                "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", 
                "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", 
                "truespeed", "typemustmatch", "visible"];
    
var booleanAttrsDict = {};
for(var i=0, len = booleanAttrs.length; i < len; i++) {
  booleanAttrsDict[booleanAttrs[i]] = true;
}
    
function updateAttrs(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
  
  // update modified attributes, add new attributes
  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      // TODO: add support to namespaced attributes (setAttributeNS)
      if(!cur && booleanAttrsDict[key])
        elm.removeAttribute(key);
      else
        elm.setAttribute(key, cur);
    }
  }
  //remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}

module.exports = {create: updateAttrs, update: updateAttrs};

},{}],22:[function(require,module,exports){
function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in oldClass) {
    if (!klass[name]) {
      elm.classList.remove(name);
    }
  }
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};

},{}],23:[function(require,module,exports){
var is = require('../is');

function arrInvoker(arr) {
  return function() {
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { o.fn(ev); };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};

},{"../is":20}],24:[function(require,module,exports){
function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in oldProps) {
    if (!props[key]) {
      delete elm[key];
    }
  }
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};

},{}],25:[function(require,module,exports){
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in oldStyle) {
    if (!style[name]) {
      elm.style[name] = '';
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};

},{}],26:[function(require,module,exports){
// jshint newcap: false
/* global require, module, document, Node */
'use strict';

var VNode = require('./vnode');
var is = require('./is');
var domApi = require('./htmldomapi.js');

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules, api) {
  var i, j, cbs = {};

  if (isUndef(api)) api = domApi;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function emptyNodeAt(elm) {
    return VNode(api.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, thunk, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
      if (isDef(i = data.vnode)) {
          thunk = vnode;
          vnode = i;
      }
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                                                          : api.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = api.createTextNode(vnode.text);
    }
    if (isDef(thunk)) thunk.elm = vnode.elm;
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
      if (isDef(i = data.vnode)) invokeDestroyHook(i);
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    if (isDef(i = oldVnode.data) && isDef(i = i.vnode)) oldVnode = i;
    if (isDef(i = vnode.data) && isDef(i = i.vnode)) {
      patchVnode(oldVnode, i, insertedVnodeQueue);
      vnode.elm = i.elm;
      return;
    }
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (!sameVnode(oldVnode, vnode)) {
      var parentElm = api.parentNode(oldVnode.elm);
      elm = createElm(vnode, insertedVnodeQueue);
      api.insertBefore(parentElm, elm, oldVnode.elm);
      removeVnodes(parentElm, [oldVnode], 0, 0);
      return;
    }
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      api.setTextContent(elm, vnode.text);
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (isUndef(oldVnode.sel)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};

},{"./htmldomapi.js":19,"./is":20,"./vnode":27}],27:[function(require,module,exports){
module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};

},{}]},{},[17]);
