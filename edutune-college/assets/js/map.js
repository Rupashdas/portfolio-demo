(function ($) {
	"use strict";
	jQuery(document).ready(function($){

		var placeselector = {lat: 23.5543511, lng:90.3112334};
		$('#map')
		.gmap3({
			center:placeselector,
			 scrollwheel: false,
			zoom:10,
			mapTypeId: "shadeOfGrey", // to select it directly
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
			}
		}) 
		.marker({
		        position: placeselector,
		        icon: 'https://i.imgur.com/0Yawlh8.png',
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
			{name: "Custom Design"}
			);
	});
// jQuery(window).load(function(){
// });
}(jQuery));