const assert = require('assert');
const { DateTimeHelper } = require('../../src/date-time-helper');

const sinon = require('sinon');

describe('DateTimeHelper', () => {
    it('should be a class', () => {
        assert(typeof DateTimeHelper === 'function');

        try {
            new DateTimeHelper();
            assert(true);
        } catch (e) {
            assert(e);
        }
    });

    it('should calls tickHandler after configured time', () => {
        const t = sinon.spy(global, 'setInterval');
        const d = new DateTimeHelper;
        d.startInterval();
        assert(t.called);
        d.stopInterval();
        t.restore();
    });

    it('calls tickHandler with delay', function (done) {
        const d = new DateTimeHelper;
        const a = sinon.spy(d, 'tickHandler');
        setTimeout(() => {
            assert(a.called);
            d.stopInterval();
            a.restore();
            done();
        }, d.intervalTime * 4);
        d.startInterval();
        this.timeout(d.intervalTime * 5);
    });
});
