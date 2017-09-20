'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#home').show().siblings().hide();
    app.homeView.carousel();
  };

  module.homeController = homeController;
})(app);
