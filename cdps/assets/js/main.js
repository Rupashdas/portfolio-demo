(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$(".banner-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            mouseDrag:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
        $(window).scroll(function(){
            var windowScrollTop = $(window).scrollTop();
            var headerHeigth = $('.header').height();
            if(windowScrollTop >= headerHeigth){
                $('.header').css('top', '-44px');
            }else{
                 $('.header').css('top', '0px');
            }
            if(windowScrollTop >= 200){
                $('.header').css('top', '0');
                $('.header').addClass('fixed').css('transition', '0.8s');
                $('#headerLogo').hide();
            } else{
                $('.header').removeClass('fixed').css('transition', '0s');
                $('#headerLogo').show();
            }
        });
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	