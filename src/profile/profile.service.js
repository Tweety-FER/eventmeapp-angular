(function () {
    'use strict';

    angular
        .module('emu.profile', ['emu.api.utils'])
        .factory('profile', Profile);

    Profile.$inject = ['api'];

    function Profile(api) {
        var profile = {};

        profile.load = getProfile;
        profile.save = saveProfile;

        function getProfile(id) {
            var url = id ? ('profile/' + id) : 'profile/me';

            return api.get(url).then(function(response) {
                return response.data;
            });
        }

        function saveProfile(profile) {
            return api.post('profile/me', profile).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function getFollowers(id){
            var url = 'user/list/followers/'+id;
            return api.get(url).then(function(response) {
                return response.data;
            });
        }

        return profile;
    }

})();