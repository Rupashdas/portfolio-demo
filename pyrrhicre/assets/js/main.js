/**
 * jQuery Script
 */

(function($) {
	"use strict";
	$(".our-members").owlCarousel({
		items: 2,
		dots: false,
		nav: true,
		autoplay: true,
		loop: true,
		margin: 30,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			}
		}
	});

	/**
	 *  Responsive Menu
	 */

	$(".toggle-menu").on("click", function() {
		$('nav.main-menu ').slideToggle(500);
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$(".scroll-up").fadeIn();
		} else {
			$(".scroll-up").fadeOut();
		}
	});
	$(".scroll-up").click(function() {
		$("html,body").animate(
			{
				scrollTop: 0
			},
			600
		);
		return false;
	});

})(jQuery);
