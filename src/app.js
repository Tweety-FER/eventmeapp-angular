/**
 * The EventMeUp main AngularJS module.
 *
 * (c) Marijan Gregurić, Luka Skukan @ 2015
 * Version 0.1.0
 */

(function() {
    'use strict';

    angular
        .module('emu.api',
        [
            'emu.api.utils',
            'emu.auth',
            'emu.user'
        ]);

    angular
        .module('emu.views',
         [
             'emu.views.index',
             'emu.views.profile',
             'emu.auth',
             'emu.navbar',
             'emu.fx'
        ]);

    angular
        .module('emu', [
            'emu.api',
            'emu.views',
            'emu.status',
            'emu.calendar',
            'satellizer',
            'ngSanitize',
            'ui.router',
            'ngResource',
            'ngTouch',
            'angularSpinner'
        ])
        .config(configureSatellizer)
        .config(configureStates)
        .run(CatchAuthErrors)
        .run(LoadUser);


    configureSatellizer.$inject = ['$authProvider'];


    function configureSatellizer($authProvider) {
        $authProvider.facebook({
            clientId: '1460287160888476',
            url : 'api/dev/auth/facebook'

        });

        $authProvider.google({
            clientId: '640161769176-l1n9r4iu4d2626ov6qse6ad3bmmhp8g9.apps.googleusercontent.com',
            url : 'auth/google'
        });
    }

    configureStates.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        'profileProvider',
        'currentUser',
        'emuStatusProvider'
    ];

    function configureStates($stateProvider, $urlRouterProvider, profileProvider, user, statusProvider) {
        /**
         * Set the default state
         */
        $urlRouterProvider.otherwise('/');

        /**
         * Configure the states by calling creator functions
         */
        $stateProvider
            .state('index', indexState())
            .state('about', aboutState())
            .state('events', eventsState())
            .state('follow', followState())
            .state('profile', profileState())
            .state('settings', settingsState());

        /**
         * State constructor function block
         */

        function indexState() {
            return {
                url : '/',
                templateUrl : 'index/index.html',
                controller : 'IndexController',
                controllerAs : 'index'
            };
        }

        function aboutState() {
            return {
                url : 'about',
                templateUrl : 'about/about.html'
            };
        }

        function eventsState() {
            return {
                url : 'events',
                templateUrl : 'events/events.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        function followState() {
            return {
                url : 'follow',
                templateUrl : 'following/following.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        function profileState() {

            return {
                url : 'profile',
                templateUrl : 'profile/profile.html',
                controller : 'ProfileController',
                controllerAs : 'profile',
                resolve : {
                    authenticated : Authenticated,
                    profile : function() {
                      return profileProvider.$get();
                    },
                    user : function(profile, authenticated, $stateParams) {
                        if(!authenticated) return {}; //Nothing is going to happen anyway

                        var status = statusProvider.$get();

                        status.setBusy(); //Toggle loading spinner

                        return profile
                            .load($stateParams.id)//Load by id, null means load myself
                            .then(function(user) {
                                status.setFree(); //Kill loading spinner
                                return user.data;
                        });
                    },
                    currentUser : function() {
                        return user;
                    }
                }
            };
        }

        function settingsState() {
            return {
                url : 'settings',
                templateUrl : 'settings/settings.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        // User authentification for restricted pages
        Authenticated.$inject = ['$q', 'currentUser'];

        function Authenticated($q, user) {
            var deferred = $q.defer();

            if(user.loggedIn) {
                deferred.resolve(true);
            } else {
                deferred.reject(false);
            }

            return deferred.promise;
        }
    }

    // If authentication fails, handle it and redirect to index
    CatchAuthErrors.$inject = ['$rootScope', '$state', 'emuStatus', 'nag'];

    function CatchAuthErrors($rootScope, $state, status, nag) {
        $rootScope.$on('$stateChangeError', function () {
            //Kill the spinner
            status.setFree();

            // Redirect user to our login page
            $state.go('index');
            nag.flash('You have to log in first!', 2000);
        });
    }

    LoadUser.$inject = ['loadUser'];

    function LoadUser(loadUser) {
        loadUser();
    }
})();
