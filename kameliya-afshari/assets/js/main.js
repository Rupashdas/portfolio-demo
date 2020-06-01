(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$('.slide-items').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
		});
		// Main Slider 
		var nav = document.querySelector('nav');
		var slideContent = document.querySelectorAll('.slide-content');
		var owlDot = document.querySelector('.owl-dots');
			slideContent.forEach(function(item) {
				item.style.right = nav.offsetLeft + 'px';
			});
			owlDot.style.right = nav.offsetLeft + 'px';

		$(".language .dropdown-item").on("click", function(){
			var imgSrc = $(this).find("img").attr('src');
			$("#langDropdown").children("img").attr('src', imgSrc);
		});

		$('.timer').countdown('2020/12/30', function(event) {
            $(this).html(event.strftime('<span><span class="span"><span>%H</span><span class="timer-title">:</span></span><span class="span"><span>%M</span><span class="timer-title">:</span></span><span class="span"><span>%S</span></span></span>'));
        });
        $(".toggle-menu").on("click", function(){
        	$(this).toggleClass("active");
        	$("#navigation nav").toggleClass("visible");
        });

        $(window).scroll(function(){
        	var scrollTopPosition = $(window).scrollTop();
        	if(scrollTopPosition>100){
        		$("header").addClass("fixed");
        		$("#navigation").addClass("fixed");
        	}else{
        		$("header").removeClass("fixed");
        		$("#navigation").removeClass("fixed");
        	}
        });
		
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

