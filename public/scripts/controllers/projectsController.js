'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    $('#projects').show().siblings().hide();
  };

  module.projectsController = projectsController;
})(app);
