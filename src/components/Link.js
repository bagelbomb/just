import React from 'react';
import Just from '../just.js';

/**
 * Creates a text link element, rendered as an HTML anchor tag. This demonstrates how HTML can be abstracted with Just.
 * @param {string} text - The text to display in the link.
 * @param {string} url - The URL to link to.
 * @param {object} extraProps - Any extra React props that are needed.
 * @returns {React.ReactElement} The resulting React element.
 * @example
 * Link('link text', 'https://www.example.com');
 * Just.Link('link text', 'https://www.example.com');
 */
export default function Link(text, url, extraProps = {}) {
  return Just.a(text, { href: url }, extraProps);
}
