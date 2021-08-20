$(document).ready(function() {

// Preloade
setTimeout(function(){
  $('.loader-bg').fadeToggle()
},1000);

// Header menu script
const $header = document.querySelectorAll('header')[0];

let lastKnownScrollTop = 0;
let headerTop = 0;
let headerHeight = $header.offsetHeight;

window.addEventListener('scroll', function(event){
  console.log( event.target.scrollingElement.scrollTop )
  console.log(event)
  let scrollTop = event.target.scrollingElement.scrollTop;
  let offset = scrollTop - lastKnownScrollTop;
  headerTop-= offset;
  headerTop = headerTop > 0? 0: headerTop;
  headerTop = headerTop < -1 * headerHeight? -1 * headerHeight: headerTop;
  $header.style.transform = `translateY(${headerTop}px)`;
  lastKnownScrollTop = scrollTop;
});

//water efect activation
$('.water').ripples({

    // Image Url
    imageUrl: null,
  
    // The width and height of the WebGL texture to render to. 
    // The larger this value, the smoother the rendering and the slower the ripples will propagate.
    resolution: 125,
  
    // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
    dropRadius: 30,
  
    // Basically the amount of refraction caused by a ripple. 
    // 0 means there is no refraction.
    perturbance: 0.04,
  
    // Whether mouse clicks and mouse movement triggers the effect.
    interactive: true,
  
    // The crossOrigin attribute to use for the affected image. 
    crossOrigin: ''
    
  });
 
// magnific image Popup
    $('.image-popup').magnificPopup({type:'image',
    gallery:{
        enabled:true
      }
});

// number-counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

// testimonia slider
$('.content-wrapper').slick({
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots:true,
    autoplay: true,
    autoplaySpeed: 1000,
}); 
// magnific video Popup
$('.video').magnificPopup({type:'iframe',
});
  
  });
