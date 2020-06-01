(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        //navigate  menu with  section
        $(".mainmenu li a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });

        //showing tabpane class to design specific
        $('.collapse-btn').on('click', function(){
            $('.collapse-btn').parents(".card").removeClass("show");
            $(this).parents(".card").addClass("show");
            
        });
        //showing tabpane class to  specific design
        $('.collapse-btn-2').on('click', function(){
            $('.collapse-btn-2').parents(".card").removeClass("show");
            $(this).parents(".card").addClass("show");
            
        });

        //counter Up Js
        $('.counter span').counterUp({
         delay: 50,
         time: 2000
        });


        //mobile menu js
         $(".mobile-menu").slicknav({
            prependTo:'.slicknav-position',
            allowParentLinks: true,
        });

       
         //sticky header
        var headerheight = $(".header-top").height();
        
        $(window).scroll(function() {    
            var scrollUp = $(window).scrollTop();

            if (scrollUp >= headerheight) {
                $(".header-area").addClass("sticky");
            } else {
                $(".header-area").removeClass("sticky");
            }
            return false;
        });

        //scroll top button js
         $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').on('click', function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        //contact appear
        $(".contact").on('click', function(event){
            event.preventDefault();
            $(".contact-section").addClass('show');
        });
        $(".closebtn").on('click', function(){
            $(".contact-section").removeClass('show');
            return false;
        });

        //slick slider js
        $(".boxed-event").slick({
            slidesToShow: 1,
            autoplay: true,
            easing: 'linear',
            speed: 1500,
            arrows: true,        
             prevArrow: "<i class='fa fa-angle-left'></i>",
            nextArrow: "<i class='fa fa-angle-right'></i>",
            dots: false,
            infinite: true, 
            mobileFirst: true,
        });
        //Client logo carousel
         $(".client-carousel").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            smartSpeed: 700,
            autoplay: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        });

        //slick slider js
        $(".block-event").slick({
            slidesToShow: 3,
            vertical: true,
            easing: 'linear',
            dots: false,
            pauseOnHover: true,
             speed: 2000,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            centerPadding: 0,
        });
        //slick slider js
        $(".news-slides").slick({
            slidesToShow: 1,
            dots: false,
            adaptiveHeight: true,
            centerPadding: 0,
             arrows: true,        
             prevArrow: "<i class='fa fa-angle-left'></i>",
            nextArrow: "<i class='fa fa-angle-right'></i>",
            autoplay: true,
            autoplaySpeed: 1000,
             dots: false,
            infinite: true, 
            mobileFirst: true,
        });
         $(".gallary-items").isotope();
        $(".gallary-title li").on('click',  function(){
                var selector = $(this).attr('data-filter');
                $(".gallary-items").isotope({
                    filter: selector,
                    transitionDuration: '.8s',
                    hiddenStyle: {
                        'transform': 'scale(1.5)',
                        opacity: 0
                    },
                    visibleStyle: {
                        'transform': 'scale(1)',
                        opacity: 1
                    },
                    stagger: 70
                });
            });

            $(".gallary-title li").on('click', function(){
                $(".gallary-title li").removeClass("active");
                $(this).addClass("active");
            });

        $(".gallary-box .row").isotope();
        $(".filter-bar li").on('click',  function(){
                var selector = $(this).attr('data-filter');
                $(".gallary-box .row").isotope({
                    filter: selector,
                    transitionDuration: '.8s',
                });
            });

            $(".filter-bar li").on('click', function(){
                $(".filter-bar li").removeClass("active");
                $(this).addClass("active");
            });

            $(".boxed-btn.dark-bg").on('click', function(){
                $(".custom-signup-form, .overlay").addClass('active');
            })
            $(".overlay").on('click', function(e){
                e.preventDefault();
                $(".custom-signup-form, .overlay").removeClass('active');
            });
            $(".close-form").on('click', function(){
                $(".custom-signup-form, .overlay").removeClass('active');
            });

            //mousewheel speed controll
            if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
            window.onmousewheel = document.onmousewheel = wheel;

            function wheel(event) {
                var delta = 0;
                if (event.wheelDelta) delta = event.wheelDelta / 120;
                else if (event.detail) delta = -event.detail / 3;

                handle(delta);
                if (event.preventDefault) event.preventDefault();
                event.returnValue = false;
            }

            function handle(delta) {
                var time = 200;
                var distance = 300;
                
                $('html, body').stop().animate({
                    scrollTop: $(window).scrollTop() - (distance * delta)
                }, time );
            }
            
            //magnific popup
            $(".open-popup").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
            zoom: {
            enabled: true, 
            duration: 300, 
            easing: 'ease-in-out', 
            opener: function(openerElement) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }

            });
            
       $(".video-play-btn").magnificPopup({
           type: 'video',
       });

    });


    jQuery(window).load(function(){
        
    });


}(jQuery));	