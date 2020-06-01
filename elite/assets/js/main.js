(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.homepage-carousel-wrap').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
        }); 
        $('.draw-slider, .single-draw-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });
        $('.winner-carousel, .testimonial-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });
        $('.monthly-based-carousel, .recent-prize-carousel').owlCarousel({
            items: 1,
            loop: false,
            autoplay: false,
            dots: true,
            slideSpeed: 2000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
        $('.prize-carousel, .last-month-winner').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });
         $('.video-play-btn').magnificPopup({
             removalDelay: 300,
        });
         $('.single-nav').magnificPopup({
             removalDelay: 300,
        });
         $('#slick-menu').slicknav({
            prependTo:'#mobile-menu'
         });
        $('.clock').countdown('2018/12/30', function(event) {
            $(this).html(event.strftime('<span><span class="span"><span>%D</span><span class="timer-title">Days</span></span><span class="span"><span>%H</span><span class="timer-title">Hours</span></span><span class="span"><span>%M</span><span class="timer-title">Minutes</span></span><span class="span"><span>%S</span><span class="timer-title">Seconds</span></span></span>'));
        });

        $(".image-nav img").on('click', function(){
            var imgSrc = $(this).attr("src");
            $(".gallary-container").fadeOut(200, function() {
                $(this).attr('src', imgSrc);
            }).fadeIn(200);
            $(".image-nav img").removeClass('active');
            $(this).addClass('active');
        });
        $(".ticket-number td").on('click', function(){
            $(this).css({
                'background-color' : '#cb132b',
                'border' : '1px solid #cb123b'
            });
        });

        var bodyHeight = $('body').outerHeight();
        var windowHeight = $(window).outerHeight();
        if (bodyHeight < windowHeight) {
            $('body').addClass('fullheight');   
        }


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	