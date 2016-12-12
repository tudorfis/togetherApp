define([
    "config/config",
    "config/routes",
    "run/basic.run",
    "modules/home/HomeCtrl"
], function(config, routes, basicRun, HomeCtrl){
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.constant('config', config);
    app.config(routes);
    app.run(basicRun);
    app.controller('HomeCtrl', HomeCtrl);

    if (!config.isDev) {
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            console.log('FB init');
        }(document, 'script', 'facebook-jssdk'));
    }


    return app;
});