// display corresponding projects based on user selection
const projects = {};



projects.init= function(){
 $('.selection a').first().addClass('active');
 $('.selection a').click(function(e){
  e.preventDefault()
  const $this = $(this)
  $siblings = $this.parent().children()
  console.log($siblings);
  // $siblings: objects with all three items(all,jQuery,react) so position equals to position of $this item inside of $siblings objects
   position = $siblings.index($this)
  
  $('.items .content').removeClass('active').eq(position).addClass('active');

  $siblings.removeClass('active');
  $this.addClass('active');
 
 })

}


// document ready
$(function(){
  projects.init()
})

