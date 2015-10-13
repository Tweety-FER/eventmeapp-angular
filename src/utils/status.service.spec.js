'use strict';

describe('Status spinner service', function() {

  beforeEach(module('emu.status'));

  describe('emuStatus', function() {
    var status, spinner;

    beforeEach(function() {
      spinner = {
        calledSpin : 0,
        calledStop : 0,
        spin : function() {
          this.calledSpin += 1;
        },
        stop : function() {
          this.calledStop += 1;
        }
      };

      module(function($provide) {
        $provide.value('usSpinnerService', spinner);
      });

      inject(function(_emuStatus_) {
        status = _emuStatus_;
      });
    });

    it('should be defined', function() {
      expect(status).toBeDefined();
    });

    it('should default to not busy',function() {
      expect(status.busy).toBe(false);
    });

    it('should have a busy property', function() {
      expect(status.busy).toBeDefined();
    });

    it('should have a setBusy function', function() {
      expect(status.setBusy).toBeDefined();
    });

    it('should have a setFree function', function() {
      expect(status.setFree).toBeDefined();
    });

    it('should be set to busy by calling setBusy', function() {
      status.setBusy();
      expect(status.busy).toBe(true);
    });

    it('should be set free by calling setFree after setBusy', function() {
      status.setBusy();
      status.setFree();
      expect(status.busy).toBe(false);
    });

    it('should make setBusy calls invariant', function() {
      status.setBusy();
      status.setBusy();
      expect(status.busy).toBe(true);
    });

    it('should make setFree calls invariant', function() {
      status.setFree();
      expect(status.busy).toBe(false);
    });

    it('should call the spinner service on setBusy', function() {
      status.setBusy();
      expect(spinner.calledSpin).toBe(1);
    });

    it('should call the spinner service on setFree', function() {
      status.setFree();
      expect(spinner.calledStop).toBe(1);
    });

  });
});
