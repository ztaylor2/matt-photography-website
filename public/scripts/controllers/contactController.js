'use strict';
var app = app || {};

(function(module) {
  const contactController = {};

  contactController.init = () => {
    $('#contact').show().siblings().hide();
  };

  module.contactController = contactController;
})(app);
