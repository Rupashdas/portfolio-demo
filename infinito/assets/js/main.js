(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $('.homepage-slides').owlCarousel({
            items: 1,
            autoplay: true,
            nav: true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            dots: true,
            loop: true,
        });
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            margin: 30
        });
        $('.partner-carousel').owlCarousel({
            items: 4,
            margin: 30,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true
        });

        $(window).scroll(function(){
            var scrolling = $(window).scrollTop(); 
            if(scrolling != 0){
                $("nav").css({
                    "background-color" : "#fff",
                    "position" : "fixed",
                    "padding" : "10px",
                    "opacity" : ".8",
                    "border-bottom" : "1px solid #ddd",
                }).addClass("fixed"); 
            }else{
                $("nav").css({
                    "background-color" : "",
                    "position" : "",
                    "padding" : "",
                    "opacity" : "",
                    "border-bottom" : "",
                }).removeClass("fixed");
            }
        });
        $(".project-title li").on('click',  function(){
            var selector = $(this).attr('data-filter');
            $(".project-lists").isotope({
                filter: selector
            });
        });

        $(".project-title li").on('click', function(){
            $(".project-title li").removeClass("active");
            $(this).addClass("active");
        });

        $(".homepage-slides").on('translate.owl.carousel', function() {
            $('.single-slide-item').removeClass('fadeOut animated').hide();
            $('.single-item-tablecell h1').removeClass('slideInUp slideInDown animated').hide();
            $('.single-item-tablecell p').removeClass('slideInDown slideInDown animated').hide();
            $('.single-item-tablecell .boxed-btn').removeClass('zoomIn slideInDown animated').hide();
        });

        $(".homepage-slides").on('translated.owl.carousel', function() {
            $('.owl-item.active .single-slide-item').addClass('fadeIn animated').show();
            $('.owl-item.active .single-item-tablecell h1').addClass('slideInUp animated').show();
            $('.owl-item.active .single-item-tablecell p').addClass('slideInDown animated').show();
            $('.owl-item.active .single-item-tablecell .boxed-btn').addClass('zoomIn animated').show();
        });


        $("#scrollnext").click(function() {
            $('html, body').animate({
                scrollTop: $("#myDiv").offset().top
            }, 1000);
        });

        $(".full-view").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
			
        });







    });


    jQuery(window).load(function(){

        jQuery(".project-lists").isotope();
    });


}(jQuery));	






