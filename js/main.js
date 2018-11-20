let exampleWork;
let customerTestimonials;

window.onload = function() {
  var mq = window.matchMedia("(min-width: 600px)"); // Your desired breakpoint
  if (mq.matches) {
    parralax();
  } else {
    document.getElementById("customer-testimonials").style.backgroundSize = "cover";
    document.getElementById("customer-testimonials").style.backgroundImage="url(Resources/title-image-dark.png)";
    document.getElementById("title-section").style.backgroundImage="url(Resources/other-dark-lowres.jpg)";
    document.getElementById("title-section").style.backgroundSize="cover";
  }
};

/*
$("#menu").mouseover(function(){
  $(".dropdown").slideDown(300);
  console.log('mouseover');
}).mouseleave(function(){
  $(".dropdown").slideUp(300);
  console.log('mouseleave');
});
*/

function parralax (){
  exampleWork = document.getElementById("example-work");
  customerTestimonials = document.getElementById("customer-testimonials");

  $('#title-section').parallax({imageSrc: 'Resources/other-dark-lowres.jpg'});
  $('#customer-testimonials').parallax({imageSrc: 'Resources/title-image-dark.png'});
}

function dropDown () {
  let dropdown = document.getElementById("dropdown");
  if (dropdown.classList.contains('show')){
    $(".dropdown").slideUp(300);
    dropdown.classList.remove('show')
  } else {
    $(".dropdown").slideDown(300);
    dropdown.classList.add('show');
  }
}
