(function($) {
  $.fn.iconList = function() {
    if (!$(this).length) return false;
    var getBGPos = function (prop, fromClass) {
        var $hiddenIco = $("<div>").css('display', 'none').addClass(fromClass);
          $("body").append($hiddenIco);
          try {
              return $hiddenIco.css(prop);
          } finally {
              $hiddenIco.remove();
          }
      };
    var preg = $(this).attr("class").match(/list-(icon-[\w-]*)/);
    var className = preg[0];
    var thisIco = preg[1];
    if (!thisIco) return false;
    var bgPos = getBGPos("background-position",thisIco);
    if (!bgPos) return false;
    $('head').append("<style>ul."+className+" li:before {background-position: "+bgPos+";}</style>");
  }
})(jQuery);
$(document).ready(function() { 
  $("ul[class*=list-icon]").each(function(index) {
      $(this).iconList();
  });
});
