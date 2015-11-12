$(document).ready(function() {
  var bindings = [];
  $("a[class^='hk-']").each(function(i) {
    var shortcode = $(this).attr('class').replace('hk-', '')
    console.log("Binding "+shortcode+" to "+$(".hk-"+shortcode).text());
    $(document).bind('keydown', shortcode.replace('-', '+'), function() {
      $(".hk-"+shortcode)[0].click();
    });
  });
});


