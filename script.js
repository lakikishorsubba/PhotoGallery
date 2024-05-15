let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function to move to the next slide
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

// Function to move to the previous slide
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Function to move to the next slide when clicking on an image
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function(){
        let nextItem = this.nextElementSibling;
        if (!nextItem) {
            nextItem = document.querySelector('.slide .item:first-child');
        }
        document.querySelector('.slide').appendChild(nextItem);
    });
});

$(document).ready(function(){
  $(window).scroll(function(){
   
      if(this.scrollY > 0){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
  });
});
