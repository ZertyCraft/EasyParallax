class Parallax {
    constructor(element, speed = 0.5) {
        this.element = element;
        this.speed = speed;
        this.update = this.update.bind(this);
        this.setInitialPosition();
        this.bindEvents();
    }

    setInitialPosition() {
        const rect = this.element.getBoundingClientRect();
        this.updatePosition(rect.top);
    }

    bindEvents() {
        window.addEventListener('scroll', this.update);
    }

    unbindEvents() {
        window.cancelAnimationFrame(this.rafId);
        window.removeEventListener('scroll', this.update);
    }

    update() {
        const rect = this.element.getBoundingClientRect();
        if (rect.top + rect.height >= 0 && rect.top <= window.innerHeight) {
            this.updatePosition(rect.top);
        }
        this.rafId = window.requestAnimationFrame(this.update);
    }

    updatePosition(top) {
        const yPos = -top * this.speed;
        this.element.style.backgroundPositionY = `calc(50% + ${yPos}px)`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const parallax = new Parallax(document.getElementById('parallax'));
});
