'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#home').show().siblings().hide();
  };

  module.homeController = homeController;
})(app);
