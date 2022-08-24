
$(document).ready(function () {
  $(window).on('scroll', function(){
    if ($(document).scrollTop() > 250){  
      $('nav').addClass("sticky");
    }
    else{
      $('nav').removeClass("sticky");
    }
  })
});




//  POpup Menu
const navToggle = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".inner");
const navOverlay = document.querySelector(".popup-mobile-menu");
const closeNav = document.querySelector(".close-btn");

navToggle.addEventListener("click",() =>{
  navShow();
})
closeNav.addEventListener("click",() =>{
  hideNav();
})

// hide nav after clicked outside of nav
navOverlay.addEventListener("click",(e) =>{
  hideNav();
})

function navShow(){
   navOverlay.style.transition = "all 0.5s ease";
   navOverlay.classList.add("open");
   nav.style.transition = "all 0.3s ease";
   nav.classList.add("open");
}

function hideNav(){
  nav.style.transition = "all 0.3s ease";
  nav.classList.remove("open");
  navOverlay.style.transition = "all 0.5s ease";
  navOverlay.classList.remove("open");
}

// Animated headline
$(document).ready(function(){
  $(".home-section-content").animatedHeadline({
    animationType: 'clip'
});
});



$(document).ready(function(){
  $('.testi-card').slick({
    infinite: true,
    autoplay: false,
    Speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '',
    nextArrow: '',
  });
});

$(document).ready(function(){
  new WOW().init();
});

// Scroll Top

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
  $(".scroll-top").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
  });
});

