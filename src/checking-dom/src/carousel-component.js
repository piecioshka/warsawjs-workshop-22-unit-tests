const ONE_SECOND = 1000;

class CarouselComponent {

    constructor(options) {
        this.$el = options.$el;
        this.images = options.images;
        this.tickDuration = options.tickDuration || 4 * ONE_SECOND;
        this.currentIndex = 0;
        this.slideshowClock = null;
    }

    render() {
        const $img = document.createElement('img');
        const src = this.getCurrentImage();
        $img.setAttribute('src', src);
        this.$el.innerHTML = '';
        this.$el.appendChild($img);
    }

    getCurrentImage() {
        return this.images[this.currentIndex];
    }

    startSlideshow() {
        this.slideshowClock = setInterval(() => {
            this.moveIndexForward();
            this.render();
        }, this.tickDuration);
    }

    moveIndexForward() {
        this.currentIndex++;

        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }
    }

    stopSlideshow() {
        clearInterval(this.slideshowClock);
    }

}

// TODO(piecioshka): dodać Rollupa / Webpacka
