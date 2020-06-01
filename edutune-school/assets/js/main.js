(function ($) {
	"use strict";
	jQuery(document).ready(function($){
		$(".video_btn").modalVideo();
		$(".video_btn").on('click', function() {
			return false;
		});
		$('.video_btn').hover(function(){
			$('.video_btn').removeClass('active');
			$(this).addClass('active');
		});
		$('.count').counterUp({
			delay: 10,
			time: 2000,
		});
		var placeselector = {lat: 22.2900005, lng:91.7865889};
		$('#map')
		.gmap3({
			center:placeselector,
			 scrollwheel: false,
			zoom:14,
			mapTypeId: "shadeOfGrey", // to select it directly
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
			}
		}) 
		.marker({
		        position: placeselector,
		        icon: 'http://maps.google.com/mapfiles/marker_green.png'
		      })
		.styledmaptype(
			"shadeOfGrey",
			[
			{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#a79474"},{"lightness":40}]},
			{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ddd"},{"lightness":16}]},
			{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
			{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
			{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
			{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
			{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},
			{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ebebeb"},{"lightness":17}]},
			{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ebebeb"},{"lightness":29},{"weight":0.2}]},
			{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#efefef"},{"lightness":18}]},
			{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#efefef"},{"lightness":16}]},
			{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#efefef"},{"lightness":19}]},
			{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9d7d4"},{"lightness":17}]}
			],
			{name: "Shades of Grey"}
			);
	});
	jQuery(window).load(function(){
	});
}(jQuery));