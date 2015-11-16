describe('Authentification services', function() {
  /**
  * Promise mock, to be returned into functions expecting promises
  */
  function FakePromise(success, data) {
    var returnData = {};
    returnData.data = data || {};

    if(success) {
      this.then = function(f) {
        returnData.code = 200;
        returnData.success = true;
        if(f) {
          return f(returnData, 200);
        }
      };
    } else {
      this.then = function(f, g) {
        data.code = 400;
        returnData.success = false;
        if(g) {
          return g(returnData, 400);
        } else {
          return 'Propagate error';
        }
      };
    }
  }

  beforeEach(module('emu.api.auth'));

  describe('register service', function() {
    var api, register;

    beforeEach(function () {
      var expectedUrl = 'http://eventmeapp.com/api/dev/auth/register';

      function validate(data) {
        return data && data.password && data.email && data.name &&
               data.timezone_offset && data.name === data.password;
      }

      api = {
        post : function (url, data) {
          url = 'http://eventmeapp.com/api/dev/' + url;
          if (url ===  expectedUrl && validate(data)) {
            return new FakePromise(true, {good : 'yes'});
          } else {
            return new FakePromise(false, {good : 'no'});
          }
        }
      };

      module(function($provide) {
        $provide.value('api', api);
      });

      inject(function(_register_) {
        register = _register_;
      });
    });

    it('should be defined', function() {
      expect(register).toBeDefined();
    });

    it('should make a call to the register api url', function() {
      expect(register('a', 'b', 'a', '1')).toBeDefined();
    });

    it('should handle a code 200 response', function() {
      expect(register('a', 'b', 'a', '1').good).toBe('yes');
    });

    it('should propagate an error response', function() {
      expect(register('a', 'b', 'c', 'd')).toBe('Propagate error');
    });

  });

  describe('login service', function() {
    var login, api;

    beforeEach(function()  {
      var expectedUrl = 'http://eventmeapp.com/api/dev/auth/login';

      function validate(data) {
        return data && data.email && data.password && data.email === data.password;
      }

      api = {
        post : function (url, data) {
          url = 'http://eventmeapp.com/api/dev/' + url;
          if (url ===  expectedUrl && validate(data)) {
            return new FakePromise(true, {good : 'yes'});
          } else {
            return new FakePromise(false, {good : 'no'});
          }
        }
      };

      module(function($provide) {
        $provide.value('api', api);
      });

      inject(function(_login_) {
        login = _login_;
      });
    });

    it('should be defined', function() {
      expect(login).toBeDefined();
    });

    it('should make a call to the login api url', function() {
      expect(login('luka@luka', 'luka@luka')).toBeDefined();
    });

    it('should handle a code 200 response', function() {
      expect(login('luka@luka', 'luka@luka').good).toBe('yes');
    });

    it('should propagate an error response', function() {
      expect(login('a', 'b')).toBe('Propagate error');
    });
  });

  describe('logout service', function() {
    var user, logout;

    beforeEach(function() {
      inject(function(_logout_, _currentUser_) {
        logout = _logout_;
        user = _currentUser_;
      });
    });

    it('should be defined', function() {
      expect(logout).toBeDefined();
    });

    it('should empty/falsify all current user data', function() {
      for(var key in user) {
        user[key] = 'something';
      }

      expect(user.loggedIn).toBe('something'); //Check a field at random

      logout();

      for(var key in user) {
        expect(!!user[key]).toBe(false);
      }
    });

    it('should empty the local storage', function() {
      localStorage.setItem('emu.user', 'test');
      logout();

      expect(localStorage.getItem('emu.user')).toBeNull();
    });
  });

  describe('saveUser service', function() {
    var user, save, response;

    beforeEach(function() {
      inject(function(_saveUser_, _currentUser_) {
        save = _saveUser_;
        user = _currentUser_;
      });

      response = {
        data : {
          'id' : 1,
          'name' : 'Test',
          'email' : 'test@test',
          'last_seen' : 'now',
          'loggedIn' : true
        }
      };
    });

    it('should be defined', function() {
      expect(save).toBeDefined();
    });

    it('should save the user into the user constant', function() {
      save(response);

      expect(user.id).toBe(1);
      expect(user.name).toBe('Test');
      expect(user.email).toBe('test@test');
      expect(user.lastSeen).toBe('now');
      expect(user.loggedIn).toBe(true);
    });

    it('should save the user into the local storage', function() {
      expect(localStorage).toBeDefined();

      var l_user = JSON.parse(localStorage.getItem('emu.user'));

      expect(l_user).toBeDefined();
      expect(l_user.id).toBe(1);
      expect(l_user.name).toBe('Test');
      expect(l_user.email).toBe('test@test');
      expect(l_user.lastSeen).toBe('now');
      expect(l_user.loggedIn).toBe(true);
    });

  });

  describe('loadUser service', function() {
    var user, load, l_user;

    beforeEach(function() {
      inject(function(_loadUser_, _currentUser_) {
        load = _loadUser_;
        user = _currentUser_;
      });

      l_user = {
        id : 1,
        name : 'Test',
        token : 'Token',
        email : 'test@test',
        lastSeen : 'now',
        loggedIn : true
      };
    });

    it('should be defined', function() {
      expect(load).toBeDefined();
    });

    it('should load the user from local storage', function() {
      localStorage.setItem('emu.user', JSON.stringify(l_user));

      load();

      expect(user.id).toBe(1);
      expect(user.name).toBe('Test');
      expect(user.email).toBe('test@test');
      expect(user.lastSeen).toBe('now');
      expect(user.loggedIn).toBe(true);
      expect(user.token).toBe('Token');
    });

  });
});
