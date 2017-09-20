'use strict';

var imageArray = ['frog.jpg', 'gnome.jpg', 'goat.jpg', 'lake.jpg', 'pond.jpg', 'raft.jpg', 'rock.jpg', 'sean.jpg'];

for(let i = 0; i < imageArray.length; i++) {
  setTimeout(function() {
    $('.heroImage').attr('src',`img/${imageArray[i]}`);
  }, i * 4000);
  console.log(i);
}
