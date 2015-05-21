$(document).ready(function(){

  // make all other links purple when hover over purple link
  $("#purple").hover(function(){
    $(".link").css("color", "#E066FF");
  }, function(){
    $('.link').css("color", "");
  });

  // hide popover upon load
  $(".popover").hide();

  // show popover on hover over trigger
  $(".trigger").hover(function(){
    $(".popover").show();
    $(".popover").on("mouseenter", function(){
      $(this).show();
    });
    $(".popover").on("mouseleave", function(){
      $(this).hide();
    });
  }, function(){
    $(".popover").hide();
  });

});
