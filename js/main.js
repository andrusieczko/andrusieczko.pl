var containsClass = function($el, clazz) {
  return $el.attr('class').indexOf(clazz) >= 0;
};

$(function() {
	prettyPrint();

  var $btnCollapse = $('.btn-collapse');
  $btnCollapse.find('.btn').live('click', function(ev) {
    var $btn = $(ev.target);
    var $theBtnCollapse = $btn.parent('.btn-collapse');
    var $box = $theBtnCollapse.find('.box');

    if (!containsClass($box, 'in') && !containsClass($box, 'out')) {
      $box.addClass('in');
    } else if (containsClass($box, 'in')) {
      $box.removeClass('in');
      $box.addClass('out');
    } else {
      $box.removeClass('out');
      $box.addClass('in');
    }
  });

});

function Ctrl($scope) {
  $scope.tpl = function(template) {
    return template + ".html";
  };
}
