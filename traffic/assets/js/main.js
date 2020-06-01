(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: false,
            nav: true,
            navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"]
        });
        $(".logo-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true
        });	

        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true
        });



        $(".menu-trigger").on('click', function () {
            $(".off-canvas-menu").addClass("show-offcanvas-area");
            $(".off-canvas-menu-overlay").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-overlay").on('click', function () {
            $(".off-canvas-menu").removeClass("show-offcanvas-area");
            $(".off-canvas-menu-overlay").removeClass("active");


        });
        $(".single-testimonial-box").hover(function () {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });

        $(".search-trigger").on('click', function () {
            $(".off-canvas-menu-overlay").addClass("active");
        });


        $(".video-play-btn").magnificPopup({
            type: 'video',
        });





    });


}(jQuery));	