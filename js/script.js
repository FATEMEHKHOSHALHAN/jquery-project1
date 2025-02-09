$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" style="width:50px;height:30px;"></i>',
      '<i class="fa fa-angle-right" style="width:50px;height:30px;"></i>',
    ],
  });
});

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          1000
        );
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

$("#responsiveTabsDemo").responsiveTabs({
  animation: "slide",
});

$(window).on("load", function () {
  $("#isotope-container").isotope({
   
  });

  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({ filter: filterValue });
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

$(function(){
  $("#portfolio-wrapper").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }

  });
});

$(function(){
  var slideIndex = 1;
displaySlide(slideIndex);

function activeSlide(n) { 
  displaySlide((slideIndex=n));
 }

function displaySlide(n) {
  var totalslides = $(".testimonial");

  var totaldots = $(".footerdot");

  for (i = 0; i < totalslides.length; i++) {
    $(totalslides[i]).css("display", "none");
  }

  for(i=0;i<totaldots.length;i++){
    $(totaldots[i]).removeClass('activate');
  }

  $(totalslides[slideIndex-1]).fadeIn(1000);

  $(totaldots[slideIndex-1]).addClass('activate');


}


$("#carouselButtons").on('click','span',function(){
  var filterValue = $(this).attr("data-carousel");
  activeSlide(filterValue);
})


});


$(".counter").counterUp({
  delay: 20,
  time: 2000
});

$(document).ready(function () {
  $("#clients-list").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" style="width:50px;height:30px;"></i>',
      '<i class="fa fa-angle-right" style="width:50px;height:30px;"></i>',
    ],
  });
});

$(function(){

 $(window).scroll(function() { 

    if($(window).scrollTop()>50){

      $("nav").addClass("white-nav-top");
       $(".navbar-brand img").attr('src','img/logo/logo-dark.png');
    }
    else
    {
     
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr('src','img/logo/logo.png');
    }
  });
})

$(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
    var sectionId=$(this).attr("href")
    $("html,body").animate({scrollTop:$(sectionId).offset().top

    },1250,"easeInOutExpo");
  });
})

$(function(){

  new WOW().init();
})

$(window).on('load',function(){
  $("#home-heading-1").addClass("animate__fadeInDown");
  $("#home-heading-2").addClass("animate__fadeInLeft");
  $("#home-text").addClass("animate__zoomInDown");
  $("#home-btn").addClass("animate__flipOutY");
  $("#arrow-down").addClass("animate__heartBeat");
})
