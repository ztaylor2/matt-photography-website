'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#about').show().siblings().hide();
  };

  module.aboutController = aboutController;
})(app);
