'use strict';
var app = app || {};

(function(module) {
  const algorithmController = {};

  algorithmController.init = () => {
    $('#algorithm').show().siblings().hide();
  };

  module.algorithmController = algorithmController;
})(app);
