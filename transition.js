$(function(){
 // smooth scroll to page when clicking anchor tags
 $(".overlay-content a").on('click', function (e) {
   
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
});



  











