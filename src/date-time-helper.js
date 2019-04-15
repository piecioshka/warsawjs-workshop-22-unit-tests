
const ONE_SECOND = 1000;

class DateTimeHelper {

    constructor() {
        this.interval = null;
        this.intervalTime = ONE_SECOND;
    }

    startInterval() {
        this.interval = setInterval(this.tickHandler.bind(this), this.intervalTime);
    }

    tickHandler() {
        // ... do nothing ...
    }

    stopInterval() {
        clearInterval(this.interval);
    }

}

module.exports = {
    DateTimeHelper
};
