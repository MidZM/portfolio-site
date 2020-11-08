class easing {
    constructor(progress) {
        this.progress = progress
    }

    linear(progress) {
        return progress;
    }

    quadratic(progress) {
        return Math.pow(progress, 2);
    }

    swing(progress) {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
    }

    circ(progress) {
        return 1 - Math.sin(Math.acos(progress));
    }

    back(progress, x) {
        return Math.pow(progress, 2) * ((x + 1) * progress - x);
    }

    bounce(progress) {
        for (let a = 0, b = 1; 1; a += b, b /= 2) {
            if (progress >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
            }
        }
    }

    elastic(progress, x) {
        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
    }
}
const FX = new easing()

class animate {
    constructor(options) {
        let start = new Date();
        let id = setInterval(function() {
            let timePassed = new Date() - start;
            let progress = timePassed / options.duration;
            if (progress > 1) {
                progress = 1;
            }
            options.progress = progress;
            let delta = options.delta(progress);
            options.step(delta);
            if (progress === 1) {
                clearInterval(id);
                if (options.complete) {
                    options.complete()
                }
            }
        }, options.delay || 10);
    }
}


const fadeOut = function(element, options) {
    let to = 1;
    new animate({
        duration: options.duration,
        delta: function(progress) {
            progress = this.progress;
            return FX.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
            if (Array.isArray(element)) {
                for (let i = 0; i < element.length; i++) {
                    element[i].style.opacity = to - delta;
                }
            } else element.style.opacity = to - delta;
        }
    });
}

const fadeIn = function(element, options) {
    let to = 0;
    new animate({
        duration: options.duration,
        delta: function(progress) {
            progress = this.progress;
            return FX.swing(progress);
        },
        complete: options.complete,
        step: function(delta) {
            if (Array.isArray(element)) {
                for (let i = 0; i < element.length; i++) {
                    element[i].style.opacity = to + delta;
                }
            } else element.style.opacity = to + delta;
        }
    });
}

export { fadeOut, fadeIn }