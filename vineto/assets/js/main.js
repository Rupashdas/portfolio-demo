(function ($) {
    "use strict";

    jQuery(document).ready(function($){
    	$(".login-button .dropdown-menu").on('click', function (e) {
			e.stopPropagation();
		});
		$(".product-carosel").owlCarousel({
			items: 1,
			nav: true,
			navText: ['<img src="assets/img/arrow-left.png" alt="<">','<img src="assets/img/arrow-right.png" alt=">">'],
			autoplay: true,
			dots: false,
			loop: true,
		});

		var windowheight = $(window).height();
		var documentHeight = $("body").height();
		console.log(windowheight, documentHeight);
		if(windowheight > documentHeight ){
			$('body').addClass("fullheight");
		}else{
			$('body').removeClass("fullheight");
		}
    });


    jQuery(window).load(function(){


    });


}(jQuery));	