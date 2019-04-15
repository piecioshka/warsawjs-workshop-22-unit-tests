const { createGroup, assert, spy, stub, mock, sinon, chai } = require('painless');
const { AlarmClock } = require('../../src/alarm-clock');

const test = createGroup();

test('AlarmClock is constructor', () => {

    assert(typeof AlarmClock === 'function');

});

test('AlarmClock should alarm when time is ', () => {
    const a = new AlarmClock();
    const alarmFn = spy(a, 'alarm');

    // Overwrite Date API function
    global.Date.prototype.getHours = () => 8;

    a.start();
    assert(alarmFn.called);
});
