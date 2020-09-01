$(function(){
 // smooth scroll to page when clicking anchor tags
 $("a").on('click', function (e) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
   e.preventDefault();
   const hash = this.hash;
   $('html, body').animate({
    scrollTop: $(hash).offset().top
   }, 800, function () {
    window.location.hash = hash;
   });
  } 
 });



 $(".btn").click(function () {
  
  $('#rightArrow').toggleClass("none")
  $('#leftArrow').toggleClass("block")
  $('.intro p').toggleClass("slide")
  $("#moving h1").toggleClass("none")
  $("#right h1").toggleClass("none")
  $("#left").toggleClass("left")
  $("#moving").toggleClass("left");
  $("#right").toggleClass("left");
 });

 
});
  











