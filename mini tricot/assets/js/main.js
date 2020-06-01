(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	 $(".banner-slides").owlCarousel({
    	 	items: 1,
    	 	dots: false,
    	 	nav:true,
    	 	autoplay: false,
    	 	loop: true,
    	 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    	 });
        
    	 $(".product-slider").owlCarousel({
    	 	items: 1,
    	 	dots: false,
    	 	animateIn: 'fadeIn',
			animateOut: 'fadeOut',
    	 	nav:true,
    	 	autoplay: false,
    	 	loop: true,
    	 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    	 });

        
    	 $(".product-masonry-slider").owlCarousel({
    	 	items: 1,
    	 	dots: false,
    	 	nav:true,
    	 	autoplay: false,
    	 	loop: true,
    	 	animateIn: 'fadeIn',
			animateOut: 'fadeOut',
    	 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    	 });

		$('.product-masonry-slide').masonry({
			itemSelector: '.grid-product',
			columnWidth: 33.3333,
		});

		$(window).on("scroll", function(){
			var widnowScroll = $(window).scrollTop();
			if(widnowScroll>0){
				$(".header").addClass('fixed');
			}else{
				$(".header").removeClass('fixed');
			}
		});



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	