const { CarouselComponent } = require('../src/carousel-component');
const test = require('ava');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const window = dom.window;
const document = window.document;
global.document = document;

const ONE_SECOND = 1000; // milliseconds

test('1', (t) => {
    t.is(typeof CarouselComponent, 'function');
    t.notThrows(() => {
        return new CarouselComponent({});
    });
    const CLASS_CHECKER_REGEXP = (/^class /);
    t.regex(CarouselComponent.toString(), CLASS_CHECKER_REGEXP);
});

test('2', (t) => {
    const arity = CarouselComponent.length;
    t.is(arity, 1);
});

test('3', (t) => {
    const holder = { };
    const c = new CarouselComponent({
        $el: holder
    });
    t.is(c.$el, holder);
});

test('4', (t) => {
    t.is(typeof document, 'object');
    t.is(typeof document.createElement, 'function');
});

test('5', (t) => {
    const $el = document.createElement('div');
    const c = new CarouselComponent({
        $el: $el
    });
    t.is(c.$el, $el);
    t.true(c.$el instanceof window.HTMLElement);
    t.is(c.$el.constructor, window.HTMLDivElement);
});

test('6', (t) => {
    const c = new CarouselComponent({
        $el: null,
        images: [
            'https://unsplash.com/car',
            'https://unsplash.com/sky'
        ]
    });
    t.true(Array.isArray(c.images));
    t.is(c.images.length, 2);
});

test('7', (t) => {
    const c = new CarouselComponent({
        $el: document.createElement('div'),
        images: [
            'https://unsplash.com/car',
            'https://unsplash.com/sky'
        ]
    });
    t.is(typeof c.currentIndex, 'number');
    t.is(c.currentIndex, 0);
    t.is(c.$el.querySelector('img'), null);
    t.is(typeof c.render, 'function');
    t.snapshot(c.$el.outerHTML, { id: 'przed wyrenderowaniem obrazka' });
    c.render();
    t.is(c.$el.querySelectorAll('img').length, 1);
    t.snapshot(c.$el.outerHTML, { id: 'po wyrenderowaniu obrazka' });
    c.render();
    c.render();
    c.render();
    t.is(c.$el.querySelectorAll('img').length, 1);
    t.snapshot(c.$el.outerHTML, { id: 'po 3-cim wyrenderowaniu obrazka' });
});

test('8', (t) => {
    const c = new CarouselComponent({
        $el: document.createElement('div'),
        images: [
            'https://unsplash.com/car',
            'https://unsplash.com/sky'
        ]
    });

    // 9 a)
    t.is(typeof c.tickDuration, 'number');
    // 9 b)
    t.is(c.tickDuration, 4 * ONE_SECOND);
    // 9 c)
    const c7 = new CarouselComponent({
        tickDuration: 6 * ONE_SECOND
    });
    t.is(c7.tickDuration, 6 * ONE_SECOND);
    // 9 d)
    t.is(typeof c.startSlideshow, 'function');
    // 9 e)
    t.is(typeof c.stopSlideshow, 'function');
    // 9 f)
    t.is(c.slideshowClock, null);
});

test.cb('9', (t) => {
    const c = new CarouselComponent({
        $el: document.createElement('div'),
        images: [
            'https://unsplash.com/car',
            'https://unsplash.com/sky'
        ],
        tickDuration: 30
    });

    c.startSlideshow();

    setTimeout(() => {
        t.is(typeof c.getCurrentImage(), 'string');
        t.end();
    }, c.tickDuration * 5);
});

test.cb('10', (t) => {
    const c = new CarouselComponent({
        $el: document.createElement('div'),
        images: [
            'https://unsplash.com/car',
            'https://unsplash.com/sky'
        ],
        tickDuration: 30
    });

    c.startSlideshow();

    let currentSlide = null;

    setTimeout(() => {
        c.stopSlideshow();
        t.is(typeof c.getCurrentImage(), 'string');
        currentSlide = c.getCurrentImage();
    }, c.tickDuration * 2);

    setTimeout(() => {
        t.is(currentSlide, c.getCurrentImage());
        t.end();
    }, c.tickDuration * 5);
});
