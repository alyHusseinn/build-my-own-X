// Babel includes support for transpiling JSX ==right out of the box==. 
// You declare this per-file or per-function to tell your transpiler (eg: Babel) 
// the name of a function that should be called at runtime for each node

// in the example below, we are saying "inject calls to an h() function for each node":
/** @jsx h */

// Before: (the code you write)

// /** @jsx h */
// let foo = <div id="foo">Hello!</div>;
// After: (the code you run)

// var foo = h('div', {id:"foo"}, 'Hello!');

type Vnode = {
    nodeName: string | null;
    attributes: object | null;
    children: Vnode[] | string | null;
}

function h(nodeName: string, attributes: object, ...args: Vnode[]): Vnode {
    // he concat(...args) bit is a spread operator:
    // it takes that Array and expands it into arguments to concat(). 
    // The use of concat() here is to collapse any nested Arrays of child nodes.
    let children = args.length ? [...args] : null;
    return {nodeName, attributes, children};
}

// So we just need a function that accepts that format and spits out actual DOM nodes:

function render(vNode: Vnode){
    // Strings just converted to textNode
    if(!vNode.nodeName) return document.createTextNode(vNode.children as string);

    // create a DOM element with the given attributes
    let node = document.createElement(vNode.nodeName);

    // copy the attributes into the node
    let a = vNode.attributes || {};
    Object.keys(a).forEach(key => {
        node.setAttribute(key, a[key]);
    });

    // render (build) and then append child nodes:
    if(typeof (vNode.children === 'string')){
        let n = document.createTextNode(vNode.children as string);
        node.appendChild(n);
    }
    else if(vNode.children){
        (vNode.children as Vnode[]).forEach( n => node.appendChild(render(n)));
    }
    
    return node;
}


// JSX -> VDOM:
// let vdom = <div id="foo">Hello!</div>;

// VDOM -> DOM:
// let dom = render(vdom);

// add the tree to <body>:
// document.body.appendChild(dom);
