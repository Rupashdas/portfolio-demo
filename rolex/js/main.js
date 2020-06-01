(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $('#map')
            .gmap3({
            center:[23.8785581,90.2296957],
            zoom: 10,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
            .styledmaptype(
            "shadeOfGrey",
            [
                {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ffffff"},{"lightness":40}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#333333"},{"lightness":16}]},
                {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
                {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#E55454"},{"lightness":17},{"weight":1.2}]},
                {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#999999"},{"lightness":20}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#E55454"},{"lightness":21}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dddddd"},{"lightness":18}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                {"featureType":"water","elementType":"geometry","stylers":[{"color":"#2B86DA"},{"lightness":17}]}
            ],
            {name: "Shades of Grey"}
        );
        
        $(".single-testimonial-box").hover(function () {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });

        $(".single-team-box").hover(function() {
            $(".single-team-box").removeClass("active");
            $(this).addClass("active");
        });

        var scrollup = $("#scrollTop")

        scrollup.on('click', function(){
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
			scrollup.addClass("Top0");
        });

        $(window).on('scroll', function(){
            if($(this).scrollTop() > 300){
                scrollup.fadeIn();
            } else{
                scrollup.removeClass("Top0").fadeOut();
            };
        });
        
        $(".icon-bars").on('click', function(){
            $(this).toggleClass("close-menu");
            $(".off-canvas-menu").toggleClass("menu-show");
            $(".off-canvas-menu-overlay").toggleClass("active");
        });
         $(".off-canvas-menu-overlay").on('click', function(){
            $(".off-canvas-menu").removeClass("menu-show");
            $(".icon-bars").removeClass("close-menu");
            $(this).removeClass("active");
        });
		
		 
        
        








    });


    jQuery(window).load(function(){

        $('#sales-progressbar').circleProgress({
            value: 0.67,
            size: 200,
            fill: '#ffffff',
            thickness: 8,
            emptyFill: '#000000' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(67 * progress) + '<i>%</i>');
        });

        $('#clients-progressbar').circleProgress({
            value: 0.30,
            size: 200,
            fill: '#ffffff',
            thickness: 8,
            emptyFill: '#000000' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(30 * progress) + '<i>%</i>');
        });

        $('#conversion-progressbar').circleProgress({
            value: 0.50,
            size: 200,
            fill: '#ffffff',
            thickness: 8,
            emptyFill: '#000000' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(50 * progress) + '<i>%</i>');
        });
		
		
		


    });


}(jQuery));	