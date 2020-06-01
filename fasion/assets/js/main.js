(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $(".product-list").masonry();
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 2000,
            dots: false, 
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],  

        });
        $(".product-promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true, 
            nav: false,

        });
        $(".menu-trigger").on("click", function() {
            $(".off-canvers-menu, .off-canver-overlay").addClass("active");
            return false;
        });
        $(".menu-close, .off-canver-overlay").on("click", function() {
            $(".off-canvers-menu, .off-canver-overlay").removeClass("active");
        });
        $(".search-trigger").on("click", function() {
            $(".search-box").addClass("active");
            return false;
        });
        $(".canver-menu-close").on("click", function() {
            $(".search-box").removeClass("active");
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	