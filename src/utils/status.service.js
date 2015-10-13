(function() {
    'use strict';

    angular
        .module('emu.status', ['angularSpinner'])
        .service('emuStatus', Spinner);

    Spinner.$inject = ['usSpinnerService'];

    function Spinner(spinner) {
        this.busy = false;

        this.setBusy = function(key) {
            key = key || 'main-spinner';
            this.busy = true;
            spinner.spin(key);
        };

        this.setFree = function(key) {
            key = key || 'main-spinner';
            this.busy = false;
            spinner.stop(key);
        };

        return this;
    }
})();