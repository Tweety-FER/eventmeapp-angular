(function() {
    'use strict';

    angular
        .module('emu.auth', ['emu.api.auth', 'emu.user', 'templates', 'emu.status', 'satellizer', 'emu.fx'])
        .directive('emuRegister', RegisterDirective)
        .directive('emuLogin', LoginDirective)
        .directive('emuSignup', SignupDirective);


    function pad(number, length){
        var str = "" + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    function getTimezoneOffset() {
        var offset = new Date().getTimezoneOffset();
        return ((offset<0? '+':'-') + pad(parseInt(Math.abs(offset/60)), 2) + pad(Math.abs(offset%60), 2));
    }

    RegisterDirective.$inject = ['$templateCache'];

    function RegisterDirective($templateCache) {

        RegisterController.$inject = ['register', 'saveUser', 'emuStatus'];

        function RegisterController(register, saveUser, status) {
            var self = this;

            self.doRegister = doRegister;
            self.errors = {};
            self.busy = status;


            function doRegister() {
                self.busy.setBusy();
                self.errors = {};
                var tzo = getTimezoneOffset();

                register(
                    self.name,
                    self.email,
                    self.password,
                    tzo
                ).then(recordSuccess, recordFailure);
            }

            function recordSuccess(response) {
                saveUser(response);

                self.busy.setFree();
                self.email = '';
                self.name = '';
                self.password = '';
            }

            function recordFailure(response) {
                if(response.data.error) {
                    if(angular.isObject(response.data.error.message)) {
                        self.errors = response.data.error.message;
                    } else {
                        self.errors = {
                            _general : response.data.error.message
                        };
                    }
                }

                self.busy.setFree();
            }

        }

        return {
            restrict : 'E',
            scope : {},
            controller : RegisterController,
            controllerAs : 'register',
            template : $templateCache.get('auth/register.html')
        };
    }

    LoginDirective.$inject = ['$templateCache'];

    function LoginDirective($templateCache) {
        LoginController.$inject = ['login', 'saveUser', 'emuStatus', '$auth'];

        function LoginController(login, saveUser, status, $auth) {
            var self = this;
            self.busy = status;
            self.errors = {};
            self.doLogin = doLogin;
            self.authenticate = socialAuth;

            function socialAuth(provider) {
                $auth.authenticate(provider)
                     .then(success, failure);
            }

            function doLogin() {
                self.errors = {};
                self.busy.setBusy();

                login(
                    self.email,
                    self.password
                ).then(
                    success,
                    failure
                );
            }

            function success(response) {
                console.log('response');
                saveUser(response);

                self.busy.setFree();
                self.email = '';
                self.password = '';
            }

            function failure(response) {
              console.log('failure', response);
                if(response.data.error) {
                    if(angular.isObject(response.data.error.message)) {
                        self.errors = response.data.error.message;
                    } else {
                        self.errors = {
                            _general : response.data.error.message
                        };
                    }
                }

                self.busy.setFree();

            }
        }

        return {
            restrict : 'E',
            template : $templateCache.get('auth/login.html'),
            scope : {},
            controller : LoginController,
            controllerAs : 'login'
        };
    }

    SignupDirective.$inject = ['$templateCache'];

    function SignupDirective($templateCache) {

        return {
            restrict : 'E',
            scope : {},
            template : $templateCache.get('auth/signup.html')
        };
    }

})();
