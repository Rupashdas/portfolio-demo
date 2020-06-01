(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$(window).on('scroll', function() {
			var scrollUp = $(window).scrollTop();
			if (scrollUp != 0) {
				$('.header-area').addClass('sticky');
			} else {
				$('.header-area').removeClass('sticky');		}
		});
		 $(".main-menu li a").on('click', function(event) {
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
		 $(".logo-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: true,
            navText: ["",""],
            autoplay: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 2,
                },
                768:{
                    items:5,
                },
                992:{
                    items:6,
                }
            }
        });

         $('#slick-menu').slicknav({
            prependTo:'#mobile-menu'
         });

         $(".bg-slider").owlCarousel({
            items: 1,
            autoplay: true,
            animateOut: 'fadeOut',
            dots: false,
            loop: true,
            nav: false
         });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	