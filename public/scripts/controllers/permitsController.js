'use strict';
var app = app || {};

(function(module) {
  const permitsController = {};

  permitsController.init = () => {
    $('#permits').show().siblings().hide();
  };

  module.permitsController = permitsController;
})(app);
