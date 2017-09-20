'use strict';
var app = app || {};

(function(module) {
  const adventureController = {};

  adventureController.init = () => {
    $('#adventure').show().siblings().hide();
  };

  module.adventureController = adventureController;
})(app);
