import gsap from 'gsap';

const defaults = {
    "duration": 0.6,
    "ease": "sine.out",
    "delay": 0
}

const Animations = {
    "fade": (el, dur=defaults.duration, es=defaults.ease, dl=defaults.delay) => {
        const animation = gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration:dur, ease:es, delay:dl});
        return animation;
    },
    "fadeUp": (el, dur=defaults.duration, es=defaults.ease, dl=defaults.delay) => {
        const animation = gsap.fromTo(el, {opacity: 0, y:+10}, {opacity: 1, y:+0, duration:dur, ease:es, delay:dl});
        return animation;
    },
    "fadeDown": (el, dur=defaults.duration, es=defaults.ease, dl=defaults.delay) => {
        const animation = gsap.fromTo(el, {opacity: 0, y:-10}, {opacity: 1, y:+0, duration:dur, ease:es, delay:dl});
        return animation;
    }
}
    

export default Animations;