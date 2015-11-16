(function() {
    angular
        .module('emu.navbar', ['emu.api.auth', 'emu.user', 'templates', 'ui.router'])
        .directive('emuNavbar', Navbar);

    Navbar.$inject = ['$templateCache'];

    function Navbar($templateCache) {
        return {
            restrict : 'E',
            template : $templateCache.get('navbar/navbarnew.html'),
            scope : {},
            controller : NavbarController,
            controllerAs : 'navbar'
        };
    }

    NavbarController.$inject = ['logout', 'currentUser'];

    function NavbarController(logout, user) {
        var self = this;
        self.doLogout = function(){
            logout();
            self.isUserMenuVisible = false;
        };
        
        self.user = user;
        console.log(user);
        self.toggleUserMenu = function (){

            self.isUserMenuVisible = ! self.isUserMenuVisible;
        };
        self.isUserMenuVisible = false;

        $('.dropdown').dropdown();
    }



})();
