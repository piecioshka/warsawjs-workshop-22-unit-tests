class AlarmClock {

    start() {
        if (this.is8AM()) {
            this.alarm();
        }
    }

    is8AM() {
        const d = new Date();
        return (d.getHours() === 8);
    }

    alarm() {
        console.log('WAKE UP');
    }

}

// TODO(piecioshka): dodać Rollupa / Webpacka
