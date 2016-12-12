define([], function() {
    'use strict';
    return function ($scope, $rootScope, config) {

        var s = $scope,
            rs = $rootScope;
        
        s.loading = true;
        s.logout_click = false;

        s.isLoggedIn = function() {
            if (rs.identity) {
                return (rs.identity.status == 'connected');
            }
            return false;
        };

        s.loginFb = function() {
            FB.getLoginStatus(function(response) {
                console.log(response);

                s.loading = false;
                rs.identity = response;
                localStorage.setItem('identity', JSON.stringify(rs.identity));
                s.$apply();

                if (response.status === 'connected') {
                    s.startApp();
                }
                // else if (response.status === 'not_authorized') {} else {}
            }, config.fbAccess);
        };

        s.logoutFb = function() {
            s.loading = true;
            FB.logout(function(response) {
                console.log(response);

                s.loading = false;
                rs.identity = response;
                localStorage.setItem('identity', JSON.stringify(rs.identity));
                s.$apply();
            });
        };

        s.startApp = function() {
            FB.api('/me', function(response) {
                s.me = response;
                s.status_text = 'Thanks for loggin in, '+ s.me.name +'!';
            });
        };

        // INIT
        // ## ------------------------ ##
        if (!config.isDev) {
            window.fbAsyncInit = function() {
                FB.init({
                    appId: config.fbAppId,
                    xfbml: true,
                    cookie: true,
                    version: 'v2.5'
                });
                s.loginFb();
            };
        } else {
            s.loading = false;
            rs.identity = {
                status: 'connected'
            };

            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: -34.397,
                        lng: 150.644
                    },
                    disableDefaultUI: true,
                    styles: {
                        featureType: "all",
                        stylers: [
                            {saturation: 100}
                        ]
                    },
                    zoom: 8
                });
            }
            initMap();
        }

    };
});


