import { isProp } from '../src/utils.js';
import { createElement } from 'react';

describe('isProp', () => {
  it('should return true if the given value is a prop-like object', () => {
    expect(isProp({})).toBe(true);
    expect(isProp({ prop: 'a prop value' })).toBe(true);
    expect(isProp(new Object())).toBe(true);
  });

  it('should return false if the given value is not a prop-like object', () => {
    const nonPropValues = [
      createElement('p', null, 'Paragraph Element'),
      'a string',
      '',
      73,
      0,
      NaN,
      null,
      undefined,
      true,
      false,
      [],
      [createElement('p', null, 'Paragraph Element')],
      { $$typeof: 'a type' },
    ];

    nonPropValues.forEach(value => expect(isProp(value)).toBe(false));
  });
});
