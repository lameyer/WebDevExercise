$(document).ready(function(){

  // make all other links purple when hover over purple link
  $("#purple").hover(function(){
    $(".link").css("color", "#E066FF");
  }, function(){
    $(".link").css("color", "");
  });

  $(":button").click(function(){
    alert("Ah! You clicked me!");
  });

//   // hide popover upon load
//   $(".popover").hide();

//   // show popover on hover over trigger
//   $(".trigger").hover(function(){
//     $(".popover").show();
//     // popover stays up when mouse over it
//     $(".popover").on("mouseenter", function(){
//       $(this).show();
//     });
//     // popover hides when mouse out of it
//     $(".popover").on("mouseleave", function(){
//       $(this).hide();
//     });
//   }, function(){
//     $(".popover").hide();
//   });

});
