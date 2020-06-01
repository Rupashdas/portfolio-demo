(function ($) {
    "use strict";

    jQuery(document).ready(function($){
        //Banner Slider 
    	$(".banner-slider").owlCarousel({
    		items: 1,
    		loop: true,
    		autoplay: true,
    		nav: false,
            mouseDrag: false,
    		dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            dotsClass: 'container owl-dots',
    	});
        //team Slider 
        $(".team-slider").owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                     items: 2
                },
                768 : {
                    items: 3
                }
            }
        });

        //header sticky
        var headerHeight = $(".header-section").height();
        $("body").css("margin-top", headerHeight);
        $(window).resize(function(){
            var headerHeight = $(".header-section").height();
            $("body").css("margin-top", headerHeight);
        });
        $(window).on('scroll', function(){
            var windowSrollTop = $(window).scrollTop();
            if(windowSrollTop>0){
                $(".header-section").addClass('sticky');
            }else{
                $(".header-section").removeClass('sticky');
            }
        });

        //Nice select
        $('select').niceSelect();
        $("select").change(function(){
            $(this).next(".nice-select").find(".current").css("color", "#242424");
        });

        //Counter up js
         $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

         //Login form js
         $(".dropdown-menu").click(function(e){
           e.stopPropagation();
        });
        //height 100% fix
        var windowHeight = $(window).height();
        var modifiedHeight = windowHeight - headerHeight;
        $(".full-height").css("min-height", modifiedHeight);
        $(window).resize(function(){
             var windowHeight = $(window).height();
             var modifiedHeight = windowHeight - headerHeight;
             $(".full-height").css("min-height", modifiedHeight);
        });

        //Service tab fix
        $(".service-nav .single-service-wrap").on("click", function(){

            event.preventDefault();
            var control = $(this).attr('aria-controls');
            if(control != ''){
                $(".service-content-wrap .tab-pane").removeClass("show active");
                $("#"+control).addClass("show active");
            }
            $(".service-nav .single-service-wrap").removeClass("active");
            $(this).addClass('active');            
        });

        
        //masonry js
        $('.about-imgs').masonry({
          itemSelector: '.about-img',
        });
    });
    jQuery(window).load(function(){
        //prealoader js
        $(".preloader").delay(500).fadeOut("slow");
    });
}(jQuery));	