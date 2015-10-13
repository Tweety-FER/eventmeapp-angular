(function() {
    angular
        .module('emu.searchUsers', ['emu.api.auth', 'emu.api.searchUsers', 'templates', 'ui.router'])
        .directive('emuSearchUsers', SearchUsers);

    SearchUsers.$inject = ['$templateCache'];

    function SearchUsers($templateCache) {
        return {
            restrict : 'E',
            template : $templateCache.get('search/search_users.html'),
            scope : {},
            controller : SearchUsersController,
            controllerAs : 'searchusers'
        };
    }

    SearchUsersController.$inject = [ 'searchUsers'];

    function SearchUsersController(searchUsers) {
        var self = this;
        self.search = function(){
            alert('search');
        }
        
    }


    
})();