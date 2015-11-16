(function () {
    'use strict';

    angular
        .module('emu.api.searchUsers', ['emu.api.utils', 'emu.user'])
        .factory('searchUsers', SearchUsers);

    /**
     * Registers the user by e-mail, name and password via api
     */
    SearchUsers.$inject = ['api'];

    function SearchUsers(api) {
        function register(name) {
            return api.get(
                'auth/register',
                {
                    "token" : name
                }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return register;
    }





})();
