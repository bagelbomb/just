import React from 'react';
import Just from '../src/just.js';

describe('HTML elements', () => {
  it("should be able to be created with Just's object notation", () => {
    const paragraph = Just.p('paragraph text');

    expect(React.isValidElement(paragraph)).toBe(true);
    expect(paragraph.type).toStrictEqual('p');
    expect(paragraph.props).toStrictEqual({ children: 'paragraph text' });
  });

  it("should be able to be created with Just's function notation", () => {
    const paragraph = Just('p', 'paragraph text');

    expect(React.isValidElement(paragraph)).toBe(true);
    expect(paragraph.type).toStrictEqual('p');
    expect(paragraph.props).toStrictEqual({ children: 'paragraph text' });
  });
});

describe('Just components', () => {
  it("should be able to be created with Just's object notation", () => {
    const link = Just.Link('link text', 'https://www.example.com');

    expect(React.isValidElement(link)).toBe(true);
    expect(link.type).toStrictEqual('a');
    expect(link.props).toStrictEqual({
      children: 'link text',
      href: 'https://www.example.com',
    });
  });
});

describe('React components', () => {
  it("should be able to be created with Just's function notation", () => {
    function SomeReactComponent(props) {
      return React.createElement('p', props);
    }

    const paragraph = Just(SomeReactComponent, 'paragraph text');

    expect(React.isValidElement(paragraph)).toBe(true);
    expect(paragraph.type).toStrictEqual(SomeReactComponent);
    expect(paragraph.props).toStrictEqual({ children: 'paragraph text' });
  });
});
