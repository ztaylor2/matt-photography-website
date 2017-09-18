'use strict';
var app = app || {};

(function(module) {
  const galleryController = {};

  galleryController.init = () => {
    $('#gallery').show().siblings().hide();
  };

  module.galleryController = galleryController;
})(app);
