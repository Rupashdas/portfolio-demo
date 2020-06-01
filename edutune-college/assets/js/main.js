(function ($) {
	"use strict";
	jQuery(document).ready(function($){
		$(".video-play-btn").modalVideo();
		$(".video-play-btn").on('click', function(e) {
			e.preventDefault();
		});
		$(".search a").on('click', function(){
			$(".search-box").addClass('active');
			$("body").css("overflow", "hidden");
			return false;
		});
		$(".close-search").on('click', function(){
			$(".search-box").removeClass('active');
			$("body").css("overflow", "inherit");
		});
		$('.count').counterUp({
			delay: 10,
			time: 2000,
		});
		
		
	});
// jQuery(window).load(function(){
// });
}(jQuery));