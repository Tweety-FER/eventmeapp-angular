(function () {
    'use strict';

    angular
        .module('emu.fx')
        .filter('gender', Gender);

    function Gender() {
        return function(input) {
            var genderClass = "fa fa-";

            if(input === 'male') {
                return genderClass + 'mars';
            } else if(input === 'female') {
                return genderClass + 'venus';
            }

            return genderClass + 'genderless';
        };
    }
})();