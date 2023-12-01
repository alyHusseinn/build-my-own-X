/**@jsx h */
import { render, h } from "../jsx";

const ITEMS = 'hello there people'.split(' ');

// a "partial" that does a filtered loop - no template BS, just functional programming:
function foo(items) {
	// imagine templates that adhere to your JS styleguide...
	return items.map( p => <li> {p} </li> );		// <-- can be multiline
}

// a simple JSX "view" with a call out ("partial") to generate a list from an Array:
let vdom = (
	<div id="foo">
		<p>Look, a simple JSX DOM renderer!</p>
		<ul>{ foo(ITEMS) }</ul>
	</div>
);

// render() converts our "virtual DOM" (see below) to a real DOM tree:
let dom = render(vdom);

// append the new nodes somewhere:
document.body.appendChild(dom);

// Remember that "virtual DOM"? It's just JSON - each "VNode" is an object with 3 properties.
let json = JSON.stringify(vdom, null, '  ');

// The whole process (JSX -> VDOM -> DOM) in one step:
document.body.appendChild(
	render( <pre>{ json }</pre> )
);