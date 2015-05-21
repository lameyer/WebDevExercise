$(document).ready(function(){
  $("#purple").hover(function(){
    $(".link").css("color", "#E066FF");
  }, function() {
    $('.link').css("color", "");
  });
});
