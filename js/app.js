/*-------------------------------------Preloader-------------------------------------*/
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 2000); // Replace '2000' with the desired duration of the preloader in milliseconds
});


/*-------------------------------------AOS Initialization------------------------------------- */
AOS.init();


/*-------------------------------------TweenMAx animations------------------------------------- */

TweenMax.to('.first', 1, {
  delay: 2,
  left: '-100%',
  ease: Expo.easeInOut,
});

TweenMax.to('.second', 1, {
  delay: 2.2,
  left: '-100%',
  ease: Expo.easeInOut,
});

TweenMax.to('.third', 1, {
  delay: 2.4,
  left: '-100%',
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  '.media ul li',
  1,
  {
    delay: 2,
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  },
  0.08
);

TweenMax.from('.size', 1, {
  delay: 1.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  '.size ul li',
  0.3,
  {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut,
  },
  0.08
);
TweenMax.from('.bottom-right ul li:first-child', 0.5, {
  delay: 2.4,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
TweenMax.from('.bottom-right ul li:last-child', 0.6, {
  delay: 2.4,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
TweenMax.from('.bottom-img', 1, {
  delay: 2.4,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from('.product-title', 3, {
  delay: 1,
  opacity: 0,
  y: 50,
  ease: Expo.easeInOut,
});
TweenMax.from('.product-img', 1, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from('.product-desc p', 3, {
  delay: 2,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut,
});
TweenMax.from('.product-desc button', 3, {
  delay: 6,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut,
});

/*-------------------------------------Swiper Slider------------------------------------- */

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 1500, // Delay between slide transitions in milliseconds
    disableOnInteraction: false, // Allow navigation buttons to work while autoplaying
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*--------------------------------------------------------------------- */

//   // Set up the variables needed and loads the images to create the effect.
//       // Once the images are loaded the ‘setup’ function will be called.
//       var app = new PIXI.Application(window.innerWidth, window.innerHeight);
//         document.body.appendChild(app.view);

//         app.stage.interactive = true;
//         var posX, displacementSprite, displacementFilter, bg, vx;
//         var container = new PIXI.Container();
//         app.stage.addChild(container);

//        PIXI.loader.add("ripple.png").add("bg.jpg").load(setup);

//       // In the ‘setup’ function the displacement sprite is created
//       // that will create the effect and this is added to a displacement filter.
//       // It’s then set to move its anchor point to the centre of the image and positioned on the screen.
//       function setup() {
//             posX = app.renderer.width / 2;
//             displacementSprite = new PIXI.Sprite(PIXI.loader.resources["ripple.png"].texture);
//             displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
//             displacementSprite.anchor.set(0.5);
//             displacementSprite.x = app.renderer.width / 2;
//             displacementSprite.y = app.renderer.height / 2;
//             vx = displacementSprite.x;

//       // To finish off the ‘setup’ function, the displacement filter scale is set and the background positioned.
//       // Notice the scale is ‘0’ for the displacement, that’s because it will be set to a height as soon as the mouse moves.

//             app.stage.addChild(displacementSprite);
//             container.filters = [displacementFilter];
//             displacementFilter.scale.x = 0;
//             displacementFilter.scale.y = 0;
//             bg = new PIXI.Sprite(PIXI.loader.resources["bg.jpg"].texture);
//             bg.width = app.renderer.width;
//             bg.height = app.renderer.height;
//             container.addChild(bg);
//             app.stage.on('mousemove', onPointerMove).on('touchmove', onPointerMove);
//             loop();
//         }

//       // grab the position of the mouse on the x-axis whenever the mouse moves.

//         function onPointerMove(eventData) {
//             posX = eventData.data.global.x;
//         }

//       // create a function that continually updates the screen. A velocity for the x-axis is worked out using the position of the mouse and the ripple.

//         function loop() {
//             requestAnimationFrame(loop);
//             vx += (posX - displacementSprite.x) * 0.045;
//             displacementSprite.x = vx;
//             var disp = Math.floor(posX - displacementSprite.x);
//             if (disp < 0) disp = -disp;
//             var fs = map(disp, 0, 500, 0, 120);
//             disp = map(disp, 0, 500, 0.1, 0.6);
//             displacementSprite.scale.x = disp;
//             displacementFilter.scale.x = fs;
//         }

//       // Finally, the map function is declared that maps value ranges to new values.

//         map = function(n, start1, stop1, start2, stop2) {
//             var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
//             return newval;
//         };

/*---------------------------------------------------------------------------- */
