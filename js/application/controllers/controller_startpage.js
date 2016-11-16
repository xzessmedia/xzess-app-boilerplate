/*
 * @Author: Tim Koepsel 
 * @Date: 2016-11-16 04:05:08 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2016-11-16 04:46:43
 */
'use strict';


/*************************************************************************
 * Description:
 * ------------------------------------------------------------------------
 * This is the Start Controller as an example
 * ***********************************************************************
 */
var app = angular.module('ApplicationApp');
app.controller('StartpageController', function($scope, ngDialog, toastr) {
    $scope.message = "Angular is awesome!";
    toastr.success('Happy developing');
});