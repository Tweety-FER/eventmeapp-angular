(function () {
    'use strict';

    angular
        .module('emu.api.auth', ['emu.api.utils', 'emu.user'])
        .factory('register', Register)
        .factory('login', Login)
        .factory('logout', Logout)
        .factory('saveUser', SaveUser)
        .factory('loadUser', LoadUser);

    /**
     * Registers the user by e-mail, name and password via api
     */
    Register.$inject = ['api'];

    function Register(api) {
        function register(name, email, password, timezone) {
            return api.post(
                'auth/register',
                {
                    "name" : name,
                    "email" : email,
                    "password" : password,
                    "timezone_offset" : timezone
                }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return register;
    }

    /**
     * Performs a vanilla e-mail/password login via api
     */
    Login.$inject = ['api'];

    function Login(api) {
        function login(email, password) {
            return api.post(
                'auth/login',
                {"email" : email, "password" : password}).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return login;
    }

    /**
     * Erases all record the user is logged in from the front-end
     */
    Logout.$inject = ['currentUser'];

    function Logout(currentUser) {
        return function() {
            currentUser.loggedIn = false;
            currentUser.token = '';
            currentUser.name = '';
            currentUser.email = '';
            currentUser.avatar = '';
            currentUser.id = '';
            currentUser.lastSeen = '';

            //Remove user from local storage, if any
            if(localStorage) {
                localStorage.removeItem('emu.user');
            }
        };
    }

    /**
     * Record a given response  containing the user into the user constant and,
     * if possible, local storage
     */
    SaveUser.$inject = ['currentUser'];

    function SaveUser(currentUser) {
        return function(response) {
            currentUser.name = response.data.name;
            currentUser.id = response.data.id;
            currentUser.email = response.data.email;
            currentUser.lastSeen = response.data.last_seen;
            currentUser.avatar = response.data.avatar;
            currentUser.loggedIn = true;

            //If there is such a thing as local storage (HTML5), also save the user in it
            if(localStorage) {
                localStorage.setItem('emu.user', JSON.stringify(currentUser));
            }
        };
    }

    /**
     * Load the user from local storage if such a user exists and local storage is available
     */

    LoadUser.$inject = ['currentUser'];

    function LoadUser(currentUser) {
        // TODO expired token handling?
        return function() {
            // Check whether local storage is defined
            if (localStorage) {
                var user = localStorage.getItem('emu.user');

                if (user) {
                    user = JSON.parse(user);

                    currentUser.token = user.token;
                    currentUser.name = user.name;
                    currentUser.id = user.id;
                    currentUser.email = user.email;
                    currentUser.avatar = user.avatar;
                    currentUser.lastSeen = user.lastSeen;
                    currentUser.loggedIn = user.loggedIn;
                }
            }
        };
    }

})();
