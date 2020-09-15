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
});

const ul = document.querySelector('.navbar');
for(let i = 0; i < ul.children.length; i++){
  ul.children[i].addEventListener('click',function(e){
   e.preventDefault();
   for(let i = 0; i < ul.children.length;i++){
    ul.children[i].className=""
   }
   this.className="current"

  })
  ul.children[0].className="current"
}

  











