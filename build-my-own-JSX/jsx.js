/** @jsx h */
// Babel includes support for transpiling JSX ==right out of the box==. 
// You declare this per-file or per-function to tell your transpiler (eg: Babel) 
// the name of a function that should be called at runtime for each node
function h(nodeName, attributes, ...args) {
    let children = args.length ? typeof args[0] === 'string' ? args.join(',') : [...args] : null;
    return { nodeName, attributes, children };
}
// So we just need a function that accepts that format and spits out actual DOM nodes:
function render(vNode) {
    // Strings just converted to textNode
    if (!vNode.nodeName)
        return document.createTextNode(vNode.children);
    // create a DOM element with the given attributes
    let node = document.createElement(vNode.nodeName);
    // copy the attributes into the node
    let a = vNode.attributes || {};
    Object.keys(a).forEach(key => {
        node.setAttribute(key, a[key]);
    });
    // render (build) and then append child nodes:
    if (typeof vNode.children === 'string') {
        let n = document.createTextNode(vNode.children);
        node.appendChild(n);
    }
    else if (vNode.children) {
        vNode.children.forEach(n => node.appendChild(render(n)));
    }
    return node;
}
export { render, h };
