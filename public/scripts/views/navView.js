'use strict';

$(document).ready(function(){
  // $('.nav-link').hide();

  $('.icon').on('click', function(){
    $('.nav-link').slideToggle();
  });

  $(window).resize(function(){
    var width = $(window).width();
    if (width > 600 && $('.nav-link').is(':hidden')){
      $('.nav-link').removeAttr('style');
    }
  });
});
