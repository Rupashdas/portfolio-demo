(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	



    	//testimonial slider js
    	$(".testimonial-section").owlCarousel({
    		items : 1,
    		autoplay: true,
    		nav: false,
    		dots: true,
    		loop: true,
    		margin: 30
    	});




    	//counter up js
    	$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});




    	//popup signup js
		$("#signup").submit(function(e){
			e.preventDefault();
			var emailValid = $("#popupEmail").val();
			if(emailValid != ''){
				$(".popup-signup-wrap").fadeOut(300);
				$(".signup-success").delay(300).fadeIn(300);
				$(".status").removeClass("show")
				$(".step-ball").removeClass("grey");
				$('head').append('<style>.steps:before{width: 66.6666%; left: 50%;}</style>');
			} else{
				$(".status").addClass("show").text('please enter your email');
			}
		});





		//Nice select js	
		$('select').niceSelect();

		//tagify js
		$('.tagify').tagify();
		



		//pricing tab
       $('.toggle-check').on('click',function() {
			var mainParent = $(this).parent('.price-toggle');
			if($(mainParent).find('input.toggle-check').is(':checked')) {
				$(mainParent).addClass('yearly');
				$('#monthly').fadeOut(100);
				$('#annually').delay(100).fadeIn(100);
			}else{
				$(mainParent).removeClass('yearly');
				$('#annually').fadeOut(100);
				$('#monthly').delay(100).fadeIn(100);
			}
		});


       //price table hover
       $('.single-price-table').hover(function(){
       		$(this).parent('.col-md-4').siblings().find('.single-price-table').removeClass('active');
       		$(this).addClass('active');
       });


    });


    jQuery(window).load(function(){
    	$(".preloader-wrap").fadeOut(300);
    	
		var wow = new WOW({
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       false,       // default
			live:         true        // default
		});
		wow.init(); 
    });


}(jQuery));	