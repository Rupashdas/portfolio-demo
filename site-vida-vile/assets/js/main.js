(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$('.banner-slider').owlCarousel({
		    loop:true,
		    nav:false,
		    dots: true,
		    autoplay: false,
		    items: 1
		})
        
    	$('.gallery-slider').owlCarousel({
		    loop:true,
		    nav:true,
		    dots: true,
		    autoplay: false,
		   
		    margin: 50,
		    navText: ['<img src="assets/img/icons/arrow-left.png">', '<img src="assets/img/icons/arrow-right.png">'],
		    responsive: {
				0: {
					items: 1
				},
				767: {
					items: 2
				},
				992: {
					items: 3
				}
			}
		})
        

        $('.gallery-slider').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: false
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});

        
        $('#menu').slicknav({
                prependTo:'#mobile-menu',
                label: '',
                closedSymbol: '&#43;',
                openedSymbol: "&#8722;"
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	