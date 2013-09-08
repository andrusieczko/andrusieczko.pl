var scrollToDirective = function() {
  return function(scope, element, attrs) {
    var target = attrs.scrollto;
    element.bind('click', function() {
      $.scrollTo(target, 750);
    });
  };
};

var prettyPrintDirective = function() {
  return function(scope, element, attrs) {
    prettyPrint();
  };
};

var app = angular.module('andrusieczko-app', []);
app.directive('scrollto', scrollToDirective);
app.directive('prettyprint', prettyPrintDirective);

function Ctrl($scope) {
  $scope.tpl = function(template) {
    return template + ".html";
  };
}
