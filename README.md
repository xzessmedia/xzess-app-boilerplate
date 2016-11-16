## xzess-app-boilerplate

This is a small boilerplate for quick starting angular production


## Overview

The ApplicationFolder is inside the /js/application/ directory
All your Controllers, Views etc should be there

## First Steps

Add your controllers, factories, services into the ApplicationFolder and put the sources into the index.html

## Adding Modules
If you install Angular Modules, put them under /js/Angular-1.5.8/modules
Then add a module dependency to app.js and add the source to the index.html

## Adding Pages
Model and Views are splitted. For each new page

Add a controller_name.js into:
/js/application/controllers

Add a view_name.html into:
/js/application/views

Then open /js/application/config/config_routeprovider.js and add a new route

Finally you need to add the source for the controller into index.html

## Social Media
In this boilerplate is a module installed called 'satellizer'
It allows you to login users by social media.
Configuration for you API is under
/js/application/config/config/config_authprovider.js

## Contributors

If you find interesting functions which should be integrated feel free to fork and collaborate

## License

Free to use
