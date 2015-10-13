(function () {
    'use strict';

    angular
        .module('emu.fx', ['templates'])
        .directive('emuFadeIn', FadeInDirective)
        .directive('emuNag', NagDirective)
        .directive('emuTabs', SemanticTabs)
        .directive('emuTab', SemanticTab);

    function FadeInDirective() {
      return {
          restrict : 'A',
          link : linkFadeIn
      };

      function linkFadeIn(scope, element, attrs) {
          $(element).find('.field').addClass('hidden');
          element = $('.field', element);

          //element = $(element.toArray().reverse());
          element.transition({
              animation: 'fade up',
              reverse: 'auto', // default setting
              interval: 600,
              duration: 2000,
              queue: false
          });

      }
    }

    NagDirective.$inject = ['$templateCache'];

    function NagDirective($templateCache) {
      return {
          restrict : 'E',
          scope : {},
          template : $templateCache.get('fx/nag.html'),
          controller : NagController,
          controllerAs : 'nag'
      };

      NagController.$inject = ['nag'];

      function NagController(nag) {
          var self = this;

          self.data = nag.data;
          self.hide = nag.hide;

          function hide() {
              nag.hide();
          }
      }
    }

    SemanticTabs.$inject = ['$templateCache'];

    function SemanticTabs($templateCache) {
      return {
        restrict : 'E',
        scope : {},
        transclude : true,
        template : $templateCache.get('fx/tabs.html'),
        controller : tabsCtrl,
        controllerAs : 'tabs'
      };

      tabsCtrl.$inject = ['$scope'];

      function tabsCtrl($scope) {
        var self = this;

        self.tabs = [];
        self.addTab = addTab; //this ! Must be to be accessible by child!
        self.activate = activate;
        self.lastIndex = 0;
        self.activeIndex = 0;
        self.getActiveIndex = getActiveIndex;

        function getActiveIndex() {
          return self.activeIndex;
        }

        function addTab(tabName) {
          var index = 0 + self.lastIndex++;
          tabName = tabName || ('Tab ' + (index + 1));

          self.tabs.push(tabName);
          return index;
        }

        function activate(index) {
          self.activeIndex = index;
        }

      }
    }

    SemanticTab.$inject = ['$templateCache'];

    function SemanticTab($templateCache) {
      return {
        restrict : 'E',
        transclude : true,
        scope : {label : '@'},
        require : '^emuTabs',
        template : $templateCache.get('fx/tab.html'),
        link : linkTab
      };

      function linkTab(scope, element, attrs, tabsCtrl) {
        scope.index = tabsCtrl.addTab(scope.label);
        scope.activeIndex = 0;
        scope.class = scope.index === scope.activeIndex ? 'active' : '';

        scope.$watch(
          tabsCtrl.getActiveIndex,
          function(active) {
            scope.activeIndex = active;
            scope.class = scope.index === scope.activeIndex ? 'active' : '';
          }
        );
      }
    }
})();
