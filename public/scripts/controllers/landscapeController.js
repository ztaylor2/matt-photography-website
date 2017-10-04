'use strict';
var app = app || {};

(function(module) {
  const landscapesController = {};

  landscapesController.init = () => {
    $('#landscapes').show().siblings().hide();
  };

  module.landscapesController = landscapesController;
})(app);
