'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#home').show().siblings().hide();
  };

  module.aboutController = aboutController;
})(app);
