AOS.init();

TweenMax.to('.first', 1, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})



TweenMax.staggerFrom('.media ul li', 1, {
    delay: 2,
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from('.size', 1, {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom('.size ul li', .3, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.08)
TweenMax.from('.bottom-right ul li:first-child', .5, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from('.bottom-right ul li:last-child', .6, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from('.bottom-img', 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.product-title', 3, {
    delay: 1,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})
TweenMax.from('.product-img', 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from('.product-desc p', 3, {
    delay: 2,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})
TweenMax.from('.product-desc button', 3, {
    delay: 6,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})


