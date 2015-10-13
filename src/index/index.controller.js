(function(){
    angular
        .module('emu.views.index', ['emu.user'])
        .controller('IndexController', Index);

    Index.$inject = ['currentUser'];

    function Index(user) {
        var self = this;
        self.user = user;


    }
})();
