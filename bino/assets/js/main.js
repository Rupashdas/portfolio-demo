(function ($) {
	"use strict";
	jQuery(document).ready(function($){
		$(".homepages-slides").slick({
			slidesToShow: 1,
			arrows: true,
			nextArrow: '<i class="fa fa-angle-right"></i>',
			prevArrow: '<i class="fa fa-angle-left"></i>',
			autoplay: true,
		});
		var serviceCarouselWidth = $('.service-carousel-inner ').width() + 32.5;
		$('.service-carousel-inner').slick({
			slidesToShow: 3,
			vertical: true,
			dots: true,
			arrows: false,
			adaptiveHeight: true,
			autoplay: false,
			autoplaySpeed: 1000,
			centerMode: true,
			centerPadding: 0,
		}).width(serviceCarouselWidth);
		$('.case-study-carousel').slick({
			slidesToShow: 1,
			dots: true,
			arrows: false,
			autoplay: false,
		});
		$(".catagories li").on('click',  function(){
			var selector = $(this).attr('data-filter');
			$(".project-lists").isotope({
				filter: selector,
			});
			$(".catagories li").removeClass("active");
			$(this).addClass("active");
		});
		jQuery(".project-lists").isotope({
			transitionDuration: '1s',
			hiddenStyle: {
				opacity: 0,
				transform: 'scale(2)'
			},
			visibleStyle: {
				opacity: 1,
				transform: 'scale(1)'
			}
		});
		$('.goto-down').on('click', function (event) {
			var topPosition = $("#about").offset().top;
			$("html, body").animate({scrollTop: topPosition}, 500);
			event.preventDefault();
		});
		$('.number').counterUp({
			delay: 50,
			time: 3000
		});
		$('.member-thumbnail').on('mouseover', function(){
			$(".member-meta").removeClass('active');
			$(this).parent().addClass('active');
			return false;
		});
		$('#menu').slicknav({
			prependTo: '.mobile-menu'
		});
		
		$(".main-menu li a").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
			}
		});

		var scrollselector = 	$('.scrolltop')

		scrollselector.on('click', function (event) {
			var topPosition = $("#about").offset().top;
			$("html, body").animate({scrollTop: 0}, 3000);
		});

		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= 400) {
				scrollselector.fadeIn(300);
			} else {
				scrollselector.fadeOut(300);
			}
		});

		$(window).on('scroll', function() {
			var scrollUp = $(window).scrollTop();
			if (scrollUp != 0) {
				$('.header-section').addClass('sticky');
			} else {
				$('.header-section').removeClass('sticky');
			}
		});
	});
	jQuery(window).load(function(){
	});
}(jQuery));