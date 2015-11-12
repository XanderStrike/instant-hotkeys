function instantHotkeys() {
  var bindings = [];
  $("a[class^='hk-'], button[class^='hk-']").each(function(i) {
    var shortcode = $(this).attr('class').replace('hk-', '')
    var link = $(".hk-"+shortcode)[0]
    label = $(link).attr('data-hk-label') || $(".hk-"+shortcode).text();

    bindings.push([shortcode,label]);
    $(document).bind('keydown', shortcode.replace('-', '+'), function() {
      link.click();
    });
  });

  $("input[class^='hk-']").each(function(i) {
    var shortcode = $(this).attr('class').replace('hk-', '')
    var input = $(".hk-"+shortcode)[0]
    label = $(input).attr('data-hk-label') || $(".hk-"+shortcode).attr('placeholder');

    bindings.push([shortcode,label]);
    $(document).bind('keyup', shortcode.replace('-', '+'), function() {
      input.focus();
    });
  });

  var showBindings = function() {
    $.each(bindings, function() {
      console.log(this[0]+' bound to '+this[1])
    });
  }

  showBindings();
}
