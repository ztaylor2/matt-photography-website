'use strict';

page('/', app.homeController.init);
page('/projects', app.projectsController.init);
page('/permits', app.permitsController.init);
page('/algorithm', app.algorithmController.init);
page('/about', app.aboutController.init);
page('/contact', app.contactController.init);

page();
