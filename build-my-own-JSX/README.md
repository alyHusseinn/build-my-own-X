# build JSX

### thanks to [WTF is JSX](https://jasonformat.com/wtf-is-jsx/#Transpilation)

- jsx is just a syntax sugar for building nodes in js, to use it in our code we should define the functions 
that serilize it and react have a function called createElement that returns
{ nodeName, attributes , children}, and after that process we render that node in the 
DOM tree.

- so we have a tranispilers like babel that do that for us, but our metion here is to
define these two functions ( createElement, render ).

- In the example below, we are saying "inject calls to an h() function for each node":```/** @jsx h */```.

- after this process we got an object with this structure { nodeName, attributes, children}, we call render to render 
that object and return an HTMLElement and append it to the document.body.

# what i did

- build the createElement and render function in typescript because it gives a more readable code.
- build the jsx in src folder by importing { createElement, render } from jsx.js file
- using babel to tranispile the file in src folder to js file and add it to the dist folder.

## Demo
you can try it yourself in [codepen](https://codepen.io/ALY-HUSSEIN/pen/vYbVarp)



