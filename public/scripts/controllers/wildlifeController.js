'use strict';
var app = app || {};

(function(module) {
  const wildlifeController = {};

  wildlifeController.init = () => {
    $('#wildlife').show().siblings().hide();
  };

  module.wildlifeController = wildlifeController;
})(app);
