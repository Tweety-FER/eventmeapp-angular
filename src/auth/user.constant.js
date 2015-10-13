(function() {
    'use strict';

    angular
        .module('emu.user', [])
        .constant('currentUser', {
            loggedIn : false,
            token : '',
            name : '',
            email : '',
            id: '',
            lastSeen: {}
        });
})();
