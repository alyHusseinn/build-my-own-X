// Babel includes support for transpiling JSX ==right out of the box==. 
// You declare this per-file or per-function to tell your transpiler (eg: Babel) 
// the name of a function that should be called at runtime for each node
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function h(nodeName, attributes) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var children = args.length ? typeof args[0] === 'string' ? args.join(',') : __spreadArray([], args, true) : null;
    return { nodeName: nodeName, attributes: attributes, children: children };
}
// So we just need a function that accepts that format and spits out actual DOM nodes:
function render(vNode) {
    // Strings just converted to textNode
    if (!vNode.nodeName)
        return document.createTextNode(vNode.children);
    // create a DOM element with the given attributes
    var node = document.createElement(vNode.nodeName);
    // copy the attributes into the node
    var a = vNode.attributes || {};
    Object.keys(a).forEach(function (key) {
        node.setAttribute(key, a[key]);
    });
    // render (build) and then append child nodes:
    if (typeof vNode.children === 'string') {
        var n = document.createTextNode(vNode.children);
        node.appendChild(n);
    }
    else if (vNode.children) {
        vNode.children.forEach(function (n) { return node.appendChild(render(n)); });
    }
    return node;
}
// JSX -> VDOM:
// let vdom = <div id="foo">Hello!</div>;
// VDOM -> DOM:
// let dom = render(vdom);
// add the tree to <body>:
// document.body.appendChild(dom);
