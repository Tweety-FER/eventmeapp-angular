'use strict';

var defaultDomain = 'http://eventmeapp.com/';

describe('API utils module', function() {
  beforeEach(function() {
    //module('emu.user');
    module('emu.api.utils');
  });

  describe('apiLink link transformation service with default domain', function() {
    var link;

    beforeEach(function() {
      module(function($provide) {
        $provide.value('currentUser', {});
      });

      inject(function(_apiLink_) {
        link = _apiLink_;
      });
    });

    it('should be defined', function() {
      expect(link).toBeDefined();
    });

    it('should default to http://eventmeapp.com/api/dev/', function() {
      expect(link('test')).toBe('http://eventmeapp.com/api/dev/test');
    })

    it('should strip leading slashes', function() {
      expect(link('/test/1')).toBe('http://eventmeapp.com/api/dev/test/1');
    });
  });

  describe('api service', function() {
    var api, user, $httpBackend;

    beforeEach(function() {
      inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
      });

      inject(function(_api_, _currentUser_) {
        api = _api_;
        user = _currentUser_;

        user.loggedIn = true;
        user.token = 'abcd';
      });
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should perform valid GET requests', function() {
      api.get('test');
      $httpBackend.expectGET('http://eventmeapp.com/api/dev/test')
                  .respond(200, '');
      $httpBackend.flush();
    });

    it('should perform valid POST requests', function() {
      api.post('test');
      $httpBackend.expectPOST('http://eventmeapp.com/api/dev/test')
                  .respond(200, '');
      $httpBackend.flush();
    });

    it('should perform valid PUT requests', function() {
      api.put('test');
      $httpBackend.expectPUT('http://eventmeapp.com/api/dev/test')
                  .respond(200, '');
      $httpBackend.flush();
    });

    it('should perform valid DELETE requests', function() {
      api.delete('test');
      $httpBackend.expectDELETE('http://eventmeapp.com/api/dev/test')
                  .respond(200, '');
      $httpBackend.flush();
    });

    it('should provide a token with requests if it exists', function() {
      api.get('test');
      $httpBackend.expectGET('http://eventmeapp.com/api/dev/test', function(headers) {
        return headers['Authorization'] === 'Bearer abcd';
      }).respond(200, '');
      $httpBackend.flush();
    });

    it('should save provided tokens to user if they exist', function() {
      api.get('test');
      $httpBackend
        .expectGET('http://eventmeapp.com/api/dev/test')
        .respond(200, {token : '1234'});
      $httpBackend.flush();

      expect(user.token).toBe('1234');
    });

  })
});
