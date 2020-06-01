(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        //Home page slider js
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            smartSpeed: 500,
        });
        //Nice select js
        $('select').niceSelect();

        //modal/popup video js
        $(".play-btn").modalVideo();
	   
       //login remembering switcher js
        $('.toggle-check').on('click',function() {
            var mainParent = $(this).parent('.signin-toggle');

            if($(mainParent).find('input.toggle-check').is(':checked')) {
                $(mainParent).addClass('selected');
            }else{
                $(mainParent).removeClass('selected');
            }
        });

        var currencyValue = $("#currency").val();
        $(".pricing-table-section").find('.current').append(' <span class="selected-currency">('+currencyValue+')</span>');
        $("#currency").change(function(){
            var currencyValue = $(this).val();
            $(".pricing-table-section").find('.current').append(' <span class="selected-currency">('+currencyValue+')</span>');
            $(".table-currency").text(currencyValue);
        });

        $('.price-col').hover(function(){
            $('.price-col').removeClass('selected');
            $(this).addClass('selected');
        });
        setTimeout(function(){
            $(".service-widget").css({
                'right' : '0px',
                'opacity' : '1',
            });
        }, 3000); 
        $('.widget-close').click(function(){
            $(this).parent('.service-widget').css({
                'right' : '-250px',
                'opacity' : '.5',
            });
        });
        $('.services-section').find('.nav-link').on('click',function(){
            var dataTitleValue = $(this).attr('data-title');
            console.log(dataTitleValue);
            $('#tabTitle').html(dataTitleValue);
        });

	});

    jQuery(window).load(function(){

        
    });


}(jQuery));	