'use strict';

var app = angular.module('ApplicationApp');

app.config(function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'js/application/views/view_startpage.html' })

    /*
     * Add own Routes here like
     * .when('/login', { templateUrl: 'views/login.php' })
     */

    .otherwise({ redirectTo: '/' });
});