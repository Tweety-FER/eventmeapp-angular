(function() {
  'use strict';

  const MIN_IN_DAY = 24 * 60;
  const MIN_INTERVALS = 12; //2-hour
  const MAX_INTERVALS = 24 * 6; //10-minute
  const DEFAULT_MINUTES = 30;
  const DEBUG = true;
  const TEST_DATA = [
    {
      name : 'Test 1',
      from : '08:00',
      to : '09:30',
      location : 'Office'
    },
    {
      name : 'Test 2',
      from : '09:00',
      to : '10:00',
      location : 'Home'
    },
    {
      name : 'Test 3',
      from : '12:00',
      to : '12:15',
      location : 'Lunch'
    }
  ];

  angular
    .module('emu.calendar', ['templates'])
    .directive('emuCalColumn', Column)
    .directive('emuCalendar', Calendar);

  Column.$inject = ['$templateCache', '$filter'];

  function Column($templateCache, $filter) {

    ColumnCtrl.$inject = [];

    function ColumnCtrl() {
      var self = this;

      self.minutes = self.minutes || DEFAULT_MINUTES;
      self.events = self.events || TEST_DATA; //TODO remove

      var minBackup = self.minutes;

      //Calculate number of intervals, but keep them between 10-minute and 2-hour
      self.intervals = Math.min(
          MAX_INTERVALS,
          Math.max(
            MIN_INTERVALS,
            Math.round(MIN_IN_DAY / self.minutes)
          )
        );

      self.minutes = MIN_IN_DAY / self.intervals; //Keep minute intervals in check
      self.slots = processEvents(self.events);

      console.log('Slots', self.slots);

      if(DEBUG && minBackup != self.minutes) {
        console.log('[DEBUG]', 'Normalised minutes to', self.minutes);
      }

      function processEvents(events) {
        var slots = [];

        // Instantiate blank intervals
        for(var i = 0; i < self.intervals; i++) {
          slots.push({fields : []});
        }

        angular.forEach(events, function(e) {
          var mFrom = getMinutes(e.from);
          var mTo = getMinutes(e.to);
          //name, location
          var span = $filter('date')(e.from, 'HH:mm')
                   + '-'
                   + $filter('date')(e.to, 'HH:mm');

          mFrom = Math.floor(mFrom / self.minutes); //Floor to find beginning slot index
          mTo = Math.ceil(mTo / self.minutes) - 1; //Ceil to find end slot index

          slots[mFrom].fields.push({
            span : span,
            name : e.name,
            location : e.location,
            blank : false
          });

          for(var i = mFrom + 1; i <= mTo; i++) {
            slots[i].fields.push({blank : true});
          }
        });

        return slots;
      }

      function getMinutes(hhmm) {
        var parts = hhmm.split(':');
        return (60 * (+parts[0])) + (+parts[1]);
      }
    }

    return {
      restrict : 'E',
      scope : {
        events : '@',
        minutes : '@'
      },
      template : $templateCache.get('calendar/column.html'),
      controller : ColumnCtrl,
      controllerAs : 'col',
      bindToController : true

    };
  }

  Calendar.$inject = ['$templateCache'];

  function Calendar($templateCache) {
    return {
      restrict :'E',
      template : $templateCache.get('calendar/calendar.html'),
      controller : CalendarCtrl,
      controllerAs : 'calendar',
      bindToController : true
    };

    CalendarCtrl.$inject = [];

    function CalendarCtrl() {
      var self = this;

      self.weekdays = [
        {
          name : 'Monday',
          work : true
        },
        {
          name : 'Tuesday',
          work : true
        },
        {
          name : 'Wednesday',
          work : true
        },
        {
          name : 'Thursday',
          work : true
        },
        {
          name : 'Friday',
          work : true
        },
        {
          name : 'Saturday',
          work : false
        },
        {
          name : 'Sunday',
          work : false
        }
      ];

      self.slots = [];

      for(var i = 0; i < 24; i++) {
        self.slots.push(i + ":00");
      }
    }
  }

}());
