(function ($) {
    "use strict";

    jQuery(document).ready(function($){
        // Hero slider activation
        $(".hero-slider").owlCarousel({
            items: 1,
            nav: true,
            navText: ['<img src="assets/img/arrow-left.png" alt="<">', '<img src="assets/img/arrow-right.png" alt=">">'],
            autoplay: false,
            dots: false,
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            mouseDrag: false,
        });
       
        // Configuring the the animation for each slide item
        $('.hero-slider').on('translate.owl.carousel', function () {
            $(".single-slide h1").removeClass('fadeInDown animated').hide();
            $(".slide-content").removeClass('fadeInUp animated delay-6').hide();
            $(".slide-cap").removeClass('fadeInUp animated delay-3').hide();
            $(".single-slide .studio-btn").removeClass('zoomIn animated delay-6').hide();
           
        });
        // Configuring the the animation for each slide item
        $('.hero-slider').on('translated.owl.carousel', function () {
            $(".single-slide h1").addClass('fadeInDown animated').show();
            $(".slide-content").addClass('fadeInUp animated delay-6').show();
            $(".slide-cap").addClass('fadeInUp animated delay-3').show();
            $(".single-slide .studio-btn").addClass('zoomIn animated delay-6').show();
        });

        // Instagram slider activation
        $(".insgtagram-slider").owlCarousel({
            items: 5,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            margin: 30,
            autoplayHoverPause: true,
            responsive: {
                0 : {
                    items: 2
                },
                576 : {
                    items: 3
                },
                768 : {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });

        // header js
        $(window).scroll(function(){
            var HeaderTop = $(window).scrollTop();
            var headerheight = $(".header-section").outerHeight();
            if(HeaderTop > 0){
                $(".header-section").addClass("sticky");
                $("body").css("margin-top",  headerheight);
            }else{
                $(".header-section").removeClass("sticky");
                $("body").css("margin-top",  "0");
            }
            
        });
    });


    jQuery(window).load(function(){


    });


}(jQuery));	