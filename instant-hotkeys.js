$(document).ready(function() {
  var bindings = [];
  $("a[class^='hk-']").each(function(i) {
    var shortcode = $(this).attr('class').replace('hk-', '')
    var link = $(".hk-"+shortcode)[0]
    label = $(link).attr('data-hk-label') || $(".hk-"+shortcode).text();

    console.log("Binding "+shortcode+" to "+label);
    $(document).bind('keydown', shortcode.replace('-', '+'), function() {
      link.click();
    });
  });

  $("input[class^='hk-']").each(function(i) {
    var shortcode = $(this).attr('class').replace('hk-', '')
    var input = $(".hk-"+shortcode)[0]
    label = $(input).attr('data-hk-label') || $(".hk-"+shortcode).attr('placeholder');

    console.log("Binding "+shortcode+" to "+label);
    $(document).bind('keyup', shortcode.replace('-', '+'), function() {
      input.focus();
    });
  });
});


