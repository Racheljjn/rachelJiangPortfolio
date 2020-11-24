

const container = document.querySelector('.back')
const mail = document.querySelector('.mail')
const submit = document.querySelector('.submit')
const form = document.querySelector('form')
const spans = document.querySelectorAll('.hello span')


 window.addEventListener('scroll', function(){
  circularText("backtotopsection", 50, container);
 if(window.pageYOffset >= mail.offsetTop){
  
  container.style.display = 'block'
  
 }else{
  container.style.display = 'none'
 }
})


window.addEventListener('load', function(){
 $('input[type="text"], textarea').val('');

 spans.forEach(span=>{
  span.classList.add('show')
 })

 container.addEventListener('click', function(){
  window.scroll(0,0)
})


 
  

})
 

  

 