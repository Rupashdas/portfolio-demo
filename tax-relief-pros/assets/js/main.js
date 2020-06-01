(function ($) {
    "use strict";
    jQuery(document).ready(function($){

    	$(".testimonial-slider").owlCarousel({
    		items: 2,
    		nav: true,
    		autoplay: true,
    		dots: false,
    		margin: 30,
    		navContainerClass: 'owl-nav container',
    		loop: false,
    		rewind: true,
    		navText: ['<img src="assets/img/long-arrow-left.png">', '<img src="assets/img/long-arrow-right.png">'],
    		responsive : {
			    // breakpoint from 0 up
			    0 : {
			        items: 1,
			    },
			    // breakpoint from 480 up
			    480 : {
			         items: 1,
			    },
			    // breakpoint from 768 up
			    768 : {
			        items: 2,
			    }
			}
    	});

    	$(".logo-slider").owlCarousel({
    		items: 5,
    		nav: false,
    		autoplay: true,
    		dots: false,
    		loop: true,
    		responsive : {
			    // breakpoint from 0 up
			    0 : {
			        items: 3,
			    },
			    // breakpoint from 480 up
			    480 : {
			         items: 4,
			    },
			    // breakpoint from 768 up
			    768 : {
			        items: 5,
			    }
			}
    	});

    	//Header navigator jss
     	$(".header-section .navbar a").on('click', function(event) {
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
        var headerHeight = $(".header-section").height();
        $(".banner-secion").css("margin-top", headerHeight);
        $(window).scroll(function(){
        	var windowSrollPosition = $(window).scrollTop();
        	if(windowSrollPosition>0){
        		$(".header-section").addClass("sticky");
        	}else{
        		$(".header-section").removeClass("sticky");
        	}
        });
    });
	jQuery(window).load(function(){
		$(".preloader").delay(500).fadeOut("slow");
    });
}(jQuery));	