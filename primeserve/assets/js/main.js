(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {

  // hero slide js
    $(".homepage_hero_area").owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      mouseDrag:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    });
    $(".homepage_hero_area").on("translate.owl.carousel", function(){
      $(".single_slide_item h2").removeClass("animated fadeInUp").css("opacity", "0");
      $(".single_slide_item p").removeClass("animated fadeInUp").css("opacity", "0");
  });

  $(".homepage_hero_area").on("translated.owl.carousel", function(){
      $(".single_slide_item h2").addClass("animated fadeInUp").css("opacity", "1");
      $(".single_slide_item p").addClass("animated fadeInUp").css("opacity", "1");
  });
  // service carousel js
    $(".service_list").owlCarousel({
      items: 3,
      loop: true,
      margin:30,
      nav: false,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
    });
  // gmap3 js
    var center = [-23.020729, -45.5574607];
    $('.map')
      .gmap3({
        center: center,
        zoom: 16,
        mapTypeId: "shadeOfGrey", 
    })
    .marker({
        position: center,
        icon: 'https://maps.google.com/mapfiles/marker_green.png'
    }).styledmaptype(
        "shadeOfGrey",
        [
            {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#a3aaae"},{"lightness":40}]},
            {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#a3aaae"},{"lightness":16}]},
            {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
            {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#9e9e9e"},{"lightness":17},{"weight":1.2}]},
            {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":20}]},
            {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#46bcec"},{"lightness":21}]},
            {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fff3b1"},{"lightness":17}]},
            {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ebe3ce"},{"lightness":29},{"weight":0.2}]},
            {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
            {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":19}]},
            {"featureType":"water","elementType":"geometry","stylers":[{"color":"#46bcec"},{"lightness":17}]}
        ],
        {name: "Primeserv scheme"}
    );
  // select js
  $("select").niceSelect();
  // smooth scroll js
  $(".header-section .navbar a, .footer_menu a").on('click', function(e) {
    var anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 1000);
    e.preventDefault();
  });
  // sticky header js
  var headerHeight = $(".header-section").height();
  var headerTopHeight = $(".header_top_area").height();  
  $(window).scroll(function() {
    
      var windowSrollPosition = $(window).scrollTop();
      if (windowSrollPosition  > (headerTopHeight+150)) {
          $(".header-section").addClass("sticky");
          $(".homepage_hero_area").css("margin-top", headerHeight);
      } else {
          $(".header-section").removeClass("sticky");
          $(".homepage_hero_area").css("margin-top", 0);
      }
  });

  });

  jQuery(window).load(function () {
        // body preloader
        $(".spinner").fadeOut();
        $(".primeserv_preloader_wrap").delay(450).fadeOut('slow');
  });

}(jQuery));	