/**
 * Very basic autoscroll directive;
 *
 * @author James Huston <james@jameshuston.net>
 * @since 2013-08-05
 */

angular.module('directives.autoscroll', [])

.directive('autoscrollDown', function () {
  return {
    link: function postLink(scope, element, attrs) {
      scope.$watch(
        function () {
          return element.children().length;
        },
        function () {
          element.animate({ scrollTop: element.prop('scrollHeight')}, 1000);
        }
      );
    }
  };
});
