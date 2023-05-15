import React from 'react';
import { isProp } from './utils.js';
import * as JustComponents from './components/index.js';

/**
 * Creates a React element using React.createElement but provides a flexible argument list for props and children. This enables using Just as a function.
 * @param {string | React.ComponentType} type - The type of the element to create, either an HTML tag string or a React component function/class.
 * @param  {...any} propsOrChildren - Any number of React props objects or children (in any order). Either or both can be omitted if not needed.
 * @returns {React.ReactElement} The resulting React element.
 * @example
 * Just('p', 'paragraph text');
 * Just(MyReactComponent, 'some text', { prop1: 'value' });
 */
function justFunction(type, ...propsOrChildren) {
  let props = null;
  const children = [];

  // For each argument, if it's a prop object, add it to the props; else, assume it's a child and add it to the children.
  propsOrChildren.forEach(propOrChild => {
    if (isProp(propOrChild)) {
      props = { ...props, ...propOrChild };
    } else {
      children.push(propOrChild);
    }
  });

  return React.createElement(type, props, ...children);
}

/**
 * Provides a getter that creates and returns React elements. This enables using HTML tags and Just components as properties of Just.
 * @example
 * Just.p('paragraph text');
 * Just.Link('link text', 'https://www.example.com');
 */
const justObject = {
  get(_, type) {
    // Just components
    if (JustComponents[type]) {
      return JustComponents[type];
    }

    // HTML tags
    return (...propsOrChildren) => justFunction(type, ...propsOrChildren);
  },
};

const Just = new Proxy(justFunction, justObject);

export default Just;
