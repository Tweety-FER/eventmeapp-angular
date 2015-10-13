(function () {
    'use strict';

    angular
        .module('emu.fx')
        .factory('nag', Nag);


    Nag.$inject = ['$timeout'];

    function Nag($timeout) {
        var NagContainer = {
            data : {
                show : false,
                message : '',
                dismissible : false
            },
            flash : flash,
            display : display,
            hide : hide
        };

        /**
         * Show a dismissible message that does not disppear on its own and has to be dismissed by a user.
         * @param message The message to show
         */
        function display(message) {
            NagContainer.data.message = message;
            NagContainer.data.show = true;
            NagContainer.data.dismissible = true;
        }

        /**
         * Show a message that is dismissed after a given number of milliseconds. If no number is given, it
         * disappears after one second.
         *
         * @param message The message to show
         * @param delay Duration of message being show in milliseconds.
         */
        function flash(message, delay) {
            delay = delay || 1000; //Default to one second

            NagContainer.data.message = message;
            NagContainer.data.show = true;
            NagContainer.data.dismissible = false;

            $timeout(NagContainer.hide, delay);
        }

        /**
         * Hide the message window
         */
        function hide() {
            NagContainer.data.message = '';
            NagContainer.data.show = false;
        }

        return NagContainer;
    }
})();