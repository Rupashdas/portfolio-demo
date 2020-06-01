/**
 * jQuery Script
 */

(function($) {
	"use strict";

	jQuery(document).ready(function($) {
		//Nice Select activation
		$("select:not(.state-weight)").niceSelect();

		//Modal Video js Activation
		if ($(".video-wrap .video-play-btn").length > 0) {
			$(".video-play-btn").modalVideo();
		}

		//Testimonial Slider

		if ($(".testimonial-slider").length > 0) {
			$(".testimonial-slider").owlCarousel({
				items: 1,
				dots: false,
				nav: true,
				autoplay: true,
				loop: true,
				navText: ['<img src="assets/img/icons/slide-arrow-left.png" alt="Prev">', '<img src="assets/img/icons/slide-arrow-right.png" alt="Next">']
			});
		}

		$(".arrow-next").on("click", function(event) {
			event.preventDefault();
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$("html, body").animate(
					{
						scrollTop: $(hash).offset().top - 90
					},
					800,
					function() {
						window.location.hash = hash;
					}
				);
			}
		});
	});

	jQuery(window).load(function() {});
})(jQuery);

/**
 * Custom JS
 */

(function() {
	var quantityIncrement = document.querySelectorAll(".quantity-increment");
	var quantityDecrement = document.querySelectorAll(".quantity-decrement");

	// Quantity Decrement
	quantityDecrement.forEach(function(decrement) {
		decrement.addEventListener("click", function() {
			event.preventDefault();
			if (this.nextElementSibling.value == 0) {
				return;
			}

			this.nextElementSibling.value--;
		});
	});
	// Quantity Increment
	quantityIncrement.forEach(function(increment) {
		increment.addEventListener("click", function() {
			event.preventDefault();
			this.previousElementSibling.value++;
		});
	});

	/**
	 * Calculator
	 */
	(function() {
		var calcSelect = document.querySelectorAll(".calculator-wrapper form div.calc-select");

		if (calcSelect) {
			calcSelect.forEach(function(select) {

				select.addEventListener("click", function(e) {
					var selectOptions = this.querySelector(".calculator-wrapper form div.select-options");
					var selectedValue = this.querySelector('.selected-value');
					this.classList.toggle("show");
					if(!(e.target.classList.contains('selected-value'))) {
						selectedValue.innerHTML = e.target.innerHTML;
						this.querySelector('.state-weight').firstElementChild.value = e.target.innerHTML;
						if(!this.querySelector('.state-weight').firstElementChild.value == '') {
							this.classList.add('border-left-space');
						} else {
							this.classList.remove('border-left-space');
						}
					}
					
				});
				
			});
		}
	})();

	// Dropdown Menu
	(function() {
		var menuToggleBtn = document.querySelector('.menu-toggle');
		var dropdownMenuWrap = document.querySelector('.dropdown-menu-wrap');
		menuToggleBtn.addEventListener('click',function() {
			dropdownMenuWrap.classList.toggle('menu-active');
		});
	}) ();
})();
