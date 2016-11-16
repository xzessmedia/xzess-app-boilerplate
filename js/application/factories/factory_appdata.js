/*
 * @Author: Tim Koepsel 
 * @Date: 2016-11-16 02:49:21 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2016-11-16 04:02:39
 */
'use strict';

var app = angular.module('ApplicationApp');
/*************************************************************************
 * Description:
 * ------------------------------------------------------------------------
 * This Factory is holding all application Data and is used for sharing
 * Data between Views and for importing and exporting Data into the
 * active Session
 * ***********************************************************************
 */
app.factory('AppData', function($cookies, $window) {
    var appdata = {};

    return {
        SetAppData: function(data) {
            appdata = data;
        },
        GetAppData: function() {
            return appdata;
        }
    }

});