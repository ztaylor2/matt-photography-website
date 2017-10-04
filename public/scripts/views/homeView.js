'use strict';

var app = app || {};

(function(module){
  var homeView = {};

  let slideIndex = 0;
  let timer = null;
  let time = 5000;

  // grab and hide all images in home section
  let imgsHide = $('#home img');

  // grab each img as its own jquery object
  let imgs = [$('#img1'), $('#img2'), $('#img3'), $('#img4'), $('#img5'), $('#img6'), $('#img7'), $('#img8')];

  // carousel functionality
  homeView.carousel = function(n) {
    if(n > imgs.length - 1) {
      slideIndex = 0;
      n = slideIndex;
    }

    if(n < 0) {
      slideIndex = 7;
      n = slideIndex;
    }

    if(slideIndex > 7) {
      slideIndex = 0;
    }

    if(n === undefined) {
      n = slideIndex;
    }

    imgsHide.hide();
    imgs[n].show();

    slideIndex++;

    // setting automatic timer
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(homeView.carousel, time);
  }

  // left button functionality
  $('.button-left').on('click', function() {
    slideIndex = slideIndex - 2;
    homeView.carousel(slideIndex);
  })

  // right button functionality
  $('.button-right').on('click', function() {
    homeView.carousel(slideIndex);
  })

  module.homeView = homeView;
})(app);
