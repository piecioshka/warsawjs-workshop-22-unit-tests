'use strict';

const { foo } = require('../../src/code-coverage');

describe('General', () => {
    it('should works', () => {
        expect(foo()).toBe('foo');
    });
});
