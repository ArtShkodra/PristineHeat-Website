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


// let preveiwContainer = document.querySelector('.products-preview');
// let previewBox = preveiwContainer.querySelectorAll('.preview');

// document.querySelectorAll('#products .single-product').forEach(product => {
//   product.onclick = () => {
//     preveiwContainer.style.display = 'flex';
//     let name = product.id.replace('product-', '');
//     previewBox.forEach(preview => {
//       let target = preview.getAttribute('data-target');
//       if (name == target) {
//         preview.classList.add('active');
//       }
//     });
//   };
// });

// previewBox.forEach(close => {
//   close.querySelector('.fa-times').onclick = () => {
//     close.classList.remove('active');
//     preveiwContainer.style.display = 'none';
//   };
// });

/*---------------------------------------------------------------------------- */

// // Get the expand icons
// var expandIcons = document.querySelectorAll('.fa-expand');

// // Get the modal element
// var modal = document.getElementById('product-modal');

// // Get the close button element
// var closeBtn = document.getElementsByClassName('close')[0];

// // Function to handle expand icon click event
// function expandIconClick(event) {
//   // Prevent the default link behavior
//   event.preventDefault();
  
//   // Get the product details
//   var product = this.closest('.single-product');
//   var productTitle = product.querySelector('.product-title').textContent;
//   var productPrice = product.querySelector('.product-price').textContent;
  
//   // Set the product details in the modal
//   document.getElementById('modal-product-title').textContent = productTitle;
//   document.getElementById('modal-product-price').textContent = productPrice;
  
//   // Display the modal
//   modal.style.display = 'block';
// }

// // Function to handle close button click event
// function closeBtnClick() {
//   // Hide the modal
//   modal.style.display = 'none';
// }

// // Attach click event listeners to expand icons
// for (var i = 0; i < expandIcons.length; i++) {
//   expandIcons[i].addEventListener('click', expandIconClick);
// }

// // Attach click event listener to close button
// closeBtn.addEventListener('click', closeBtnClick);



// document.addEventListener("DOMContentLoaded", function() {
//     var expandIcons = document.getElementsByClassName("expand-icon");
//     var modal = document.createElement("div");
//     modal.classList.add("modal");
  
//     for (var i = 0; i < expandIcons.length; i++) {
//       expandIcons[i].addEventListener("click", function() {
//         modal.innerHTML = "<div class='modal-content'>" +
//           "<span class='close'>&times;</span>" +
//           "<h2>Modal Content</h2>" +
//           "<p>You can add your modal content here.</p>" +
//           "</div>";
//         document.body.appendChild(modal);
//         modal.style.display = "block";
//       });
//     }
  
//     document.addEventListener("click", function(event) {
//       if (event.target.classList.contains("close")) {
//         modal.style.display = "none";
//       }
//     });
//   });
  
//---------------------------------------------------------------------------------------------qiky
// document.addEventListener("DOMContentLoaded", function() {
//     var expandIcons = document.getElementsByClassName("expand-icon");
  
//     for (var i = 0; i < expandIcons.length; i++) {
//       expandIcons[i].addEventListener("click", function() {
//         var modal = document.createElement("div");
//         modal.classList.add("modal");
  
//         var modalContent = document.createElement("div");
//         modalContent.classList.add("modal-content");
  
//         var closeBtn = document.createElement("span");
//         closeBtn.classList.add("close");
//         closeBtn.innerHTML = "&times;";
  
//         var modalTitle = document.createElement("h2");
//         modalTitle.textContent = "Modal Content";
  
//         var modalText = document.createElement("p");
//         modalText.textContent = "You can add your modal content here.";
  
//         modalContent.appendChild(closeBtn);
//         modalContent.appendChild(modalTitle);
//         modalContent.appendChild(modalText);
  
//         modal.appendChild(modalContent);
//         document.body.appendChild(modal);
//         modal.style.display = "block";
  
//         closeBtn.addEventListener("click", function() {
//           modal.style.display = "none";
//         });
//       });
//     }
//   });
  

// document.addEventListener("DOMContentLoaded", function() {
//     var previews = document.getElementsByClassName("preview");
  
//     for (var i = 0; i < previews.length; i++) {
//       previews[i].addEventListener("click", function() {
//         var modal = document.createElement("div");
//         modal.classList.add("modal");
  
//         var modalContent = document.createElement("div");
//         modalContent.classList.add("modal-content");
  
//         var closeBtn = document.createElement("span");
//         closeBtn.classList.add("close");
//         closeBtn.innerHTML = "&times;";
  
//         var previewContent = this.cloneNode(true);
//         previewContent.classList.remove("preview");
//         previewContent.style.display = "block";
  
//         modalContent.appendChild(closeBtn);
//         modalContent.appendChild(previewContent);
  
//         modal.appendChild(modalContent);
//         document.body.appendChild(modal);
//         modal.style.display = "block";
  
//         closeBtn.addEventListener("click", function() {
//           modal.style.display = "none";
//         });
//       });
//     }
//   });


// document.addEventListener("DOMContentLoaded", function() {
//     var expandIcons = document.getElementsByClassName("expand-icon");
  
//     for (var i = 0; i < expandIcons.length; i++) {
//       expandIcons[i].addEventListener("click", function() {
//         var product = this.closest(".single-product");
//         var productTitle = product.querySelector(".product-title").textContent;
//         var productOldPrice = product.querySelector(".product-old-price");
//         var productPrice = product.querySelector(".product-price").textContent;
  
//         var modal = document.createElement("div");
//         modal.classList.add("modal");
  
//         var modalContent = document.createElement("div");
//         modalContent.classList.add("modal-content");
  
//         var closeBtn = document.createElement("span");
//         closeBtn.classList.add("close");
//         closeBtn.innerHTML = "&times;";
  
//         var modalTitle = document.createElement("h2");
//         modalTitle.textContent = productTitle;
  
//         var modalText = document.createElement("p");
//         modalText.textContent = "Old Price: " + (productOldPrice ? productOldPrice.textContent : "N/A");
//         modalText.textContent += "\nPrice: " + productPrice;
  
//         modalContent.appendChild(closeBtn);
//         modalContent.appendChild(modalTitle);
//         modalContent.appendChild(modalText);
  
//         modal.appendChild(modalContent);
//         document.body.appendChild(modal);
//         modal.style.display = "block";
  
//         closeBtn.addEventListener("click", function() {
//           modal.style.display = "none";
//         });
//       });
//     }
//   });
  


// document.addEventListener("DOMContentLoaded", function() {
//   var expandIcons = document.getElementsByClassName("expand-icon");

//   for (var i = 0; i < expandIcons.length; i++) {
//     expandIcons[i].addEventListener("click", function() {
//       var product = this.closest(".single-product");
//       var productTitle = product.querySelector(".product-title").textContent;
//       var productOldPrice = product.querySelector(".product-old-price");
//       var productPrice = product.querySelector(".product-price").textContent;
//       var productImage = product.querySelector("img").src;

//       var modal = document.createElement("div");
//       modal.classList.add("modal");

//       var modalContent = document.createElement("div");
//       modalContent.classList.add("modal-content");

//       var closeBtn = document.createElement("span");
//       closeBtn.classList.add("close");
//       closeBtn.innerHTML = "&times;";

//       var modalTitle = document.createElement("h2");
//       modalTitle.textContent = productTitle;

//       var modalImage = document.createElement("img");
//       modalImage.src = productImage;
//       modalImage.alt = productTitle;
//       modalImage.classList.add("product-image");

//       var modalText = document.createElement("p");
//       modalText.textContent = "Old Price: " + (productOldPrice ? productOldPrice.textContent : "N/A");
//       modalText.textContent += "\nPrice: " + productPrice;

//       var buyButton = document.createElement("button");
//       buyButton.textContent = "Buy Now";
//       buyButton.classList.add("buy-button");

//       modalContent.appendChild(closeBtn);
//       modalContent.appendChild(modalTitle);
//       modalContent.appendChild(modalImage);
//       modalContent.appendChild(modalText);
//       modalContent.appendChild(buyButton);

//       modal.appendChild(modalContent);
//       document.body.appendChild(modal);
//       modal.style.display = "block";

//       closeBtn.addEventListener("click", function() {
//         modal.style.display = "none";
//       });
//     });
//   }
// });


// $(document).ready(function() {
//     $('.expand-icon').on('click', function(e) {
//       e.preventDefault();
  
//       // Get the product details
//       var product = $(this).closest('.single-product');
//       var productID = product.attr('id');
//       var productTitle = product.find('.product-title').text();
//       var productImage = product.find('img').attr('src');
//       var productDescription = product.find('.product-description').text();
//       var productPrice = product.find('.product-price').text();
  
//       // Set the values in the modal
//       $('.products-preview .preview .product-title').text(productTitle);
//       $('.products-preview .preview img').attr('src', productImage);
//       $('.products-preview .preview .product-description').text(productDescription);
//       $('.products-preview .preview .price').text(productPrice);
  
//       // Show the modal
//       $('.products-preview').addClass('active');
//     });
  
//     // Close the modal when the close icon is clicked or outside the modal
//     $('.products-preview .preview, .products-preview .fa-times').on('click', function(e) {
//       if (e.target === this) {
//         $('.products-preview').removeClass('active');
//       }
//     });
//   });
  


$(document).ready(function() {
    $('.expand-icon').on('click', function(e) {
      e.preventDefault();
  
      // Get the product details
      var product = $(this).closest('.single-product');
      var productTitle = product.find('.product-title').text();
      var productImage = product.find('img').attr('src');
      var productDescription = product.find('.product-description').text();
      var productPrice = product.find('.product-price').text();
  
      // Set the values in the modal
      $('.products-preview .product-title').text(productTitle);
      $('.products-preview img').attr('src', productImage);
      $('.products-preview .product-description').text(productDescription);
      $('.products-preview .price').text(productPrice);
  
      // Show the modal
      $('.products-preview').addClass('active');
      $('.products-preview .preview').fadeIn();
    });
  
    // Close the modal when the close icon is clicked or outside the modal
    $('.products-preview .preview, .products-preview .fa-times').on('click', function(e) {
      if (e.target === this) {
        $('.products-preview').removeClass('active');
        $('.products-preview .preview').fadeOut();
      }
    });
  });
  
 

  