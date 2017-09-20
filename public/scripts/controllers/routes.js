'use strict';

page('/', app.homeController.init);
page('/adventure', app.adventureController.init);
page('/landscapes', app.landscapesController.init);
page('/wildlife', app.wildlifeController.init);
page('/about', app.aboutController.init);
page('/contact', app.contactController.init);

page();
