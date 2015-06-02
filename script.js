$(document).ready(function(){

  // make all other links purple when hover over purple link
  $("#purple").hover(function(){
    $(".link").css("color", "#E066FF");
  }, function(){
    $(".link").css("color", "");
  });

  // buttons!!
  $(":button").click(function(){
    alert("Ah! You clicked me!");
  });

});
