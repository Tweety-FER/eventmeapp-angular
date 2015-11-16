(function() {
    'use strict';

    angular
        .module('emu.api.utils', ['emu.user']);
})();

(function () {
    'use strict';

    angular
        .module('emu.api.utils')
        .factory('apiLink', ApiLink)
        .factory('api', Api);

    function ApiLink() {
        var defVersion = 'v1/';

        return function(path, domain, version) {
          domain = domain || 'http://api.eventmeapp.dev';
          version = version || defVersion;

          var basePath = domain + version;

          //Normalise the string in regards to leading slashes
          while(path.charAt(0) === '/') {
              path = path.substring(1);
          }

          //Links the path to the api prefix
          return basePath + path;
        };
    }

    Api.$inject = ['$http', 'apiLink', 'currentUser'];

    function Api($http, link, currentUser) {
        var api = {};

        api.get = doGet;
        api.post = doPost;
        api.put = doPut;
        api.delete = doDelete;

        /**
         * Inner functions/methods
         */

        /**
         * Extends a given headers (or empty object if no argument is provided) with the JWTAuth-required
         * token-bearing authorization header, provided a user is logged in at all. Otherwise returns the given
         * object (or {} if no object was given).
         * @param headers Object containing $http headers
         * @returns Object containing $http headers extended with authorization header
         */
        function addToken(options) {
            if(currentUser.loggedIn && currentUser.token) {
                options = options || {};

                var headers = options.headers || {};

                headers = angular.extend(headers, {'Authorization' : 'Bearer ' + currentUser.token});
                options.headers = headers;

                return options || {};
            }

            return options;
        }

        /**
         * If there is a token inside the (root) of the given response, it is retrieved and refreshed on the
         * current user.
         *
         * @param response $http response
         */
        function retrieveToken(response) {
            if(response.data && response.data.token) {
                currentUser.token = response.data.token;
            }

            // Return promise to keep the then chain going
            return response;
        }

        function doGet(url, options) {
            options = addToken(options);

            return $http.get(link(url), options).then(retrieveToken);
        }

        function doPost(url, data, options) {
            options = addToken(options);

            return $http.post(link(url), data, options).then(retrieveToken);
        }

        function doPut(url, data, options) {
            options = addToken(options);

            return $http.put(link(url), data, options).then(retrieveToken);
        }

        function doDelete(url, options) {
            options = addToken(options);

            return $http.delete(link(url), options).then(retrieveToken);
        }

        /**
         * Return
         */
        return api;
    }
})();
