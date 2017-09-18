'use strict';

page('/', app.homeController.init);
page('/gallery', app.galleryController.init);
page('/about', app.aboutController.init);
page('/contact', app.contactController.init);

page();
