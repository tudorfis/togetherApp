'use strict';
require.config({
    baseUrl: './app/',
    paths: {
        'angular': '../assets/lib/angular/angular.min',
        'angular-route': '../assets/lib/angular-route/angular-route.min',
        'google-maps': 'https://maps.googleapis.com/maps/api/js?libraries=places,drawing&key=AIzaSyD5s_6uBOsIDhsdTDPDKCvr6gZ0RQ1mI9U'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'google-maps']
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});

require(['app'], function(app){
    angular.bootstrap(document, ['app']);
});
