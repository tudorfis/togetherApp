define([], function(){
    'use strict';
    var isDev = (window.location.hostname == 'localhost');
    return {
        isDev: isDev,
        fbAppId: '278312762525038',
        fbAccess: {scope: 'public_profile, user_friends, email, publish_actions'}
    };
});