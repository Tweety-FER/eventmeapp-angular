(function () {
    'use strict';

    angular
        .module('emu.views.profile', ['emu.profile', 'emu.user', 'emu.fx'])
        .controller('ProfileController', ProfileController);

        function ProfileController(profile, user, currentUser) {
            var self = this;

            self.user = user;
            self.editMode = false;
            self.isMe = user.id === currentUser.id;
            self.save = save;
            self.toggleEdit = toggleEdit;
            self.errors = {};

            function toggleEdit() {
                if(self.isMe) {
                    self.editMode = ! self.editMode;
                }
            }

            function save() {
                self.errors = {};
                if(self.editMode && self.isMe) {
                    profile.save(self.user).then(success, failure);
                }
            }

            function success(data) {
                if(data && data.data) {
                    self.user = data.data;
                    self.isMe = self.user.id === me.id;
                }
            }

            function failure(data) {
                if(data && data.error && data.error.message) {
                    if(angular.isObject(data.error.message)) {
                        self.errors = data.error.message;
                    } else {
                        self.errors = {_general : data.error.message};
                    }
                }
            }
        }

})();