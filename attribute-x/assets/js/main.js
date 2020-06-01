/**
 * jQuery
 */

(function($) {
	// Video popup
	if ($(".active-video").length > 0) {
		$(".active-video").magnificPopup({
			type: "video"
		});
	}

	// Counter
	if ($(".counter").length > 0) {
		$(".counter").counterUp({
			delay: 10,
			time: 1000
		});
	}

	// What People Say
	if ($(".people-say-wrap").length > 0) {
		$(".people-say-wrap").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: false,
			autoplayTimeout: 3500
		});
	}

	// Clients
	if ($(".clients").length > 0) {
		$(".clients").owlCarousel({
			items: 4,
			margin: 30,
			loop: true,
			nav: false,
			dots: false,
			autoplay: false,
			autoplayTimeout: 3500,
			autoplaySpeed: 2000,
			responsive: {
				0: {
					items: 1
				},
				650: {
					items: 2
				},
				900: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}
})(jQuery);

/**
 * Custom JS
 */

(function() {
	// Responsive Menu
	(function() {
		var toggleMenu = document.querySelector(".toggle-menu");
		var nav = document.querySelector("nav");
		toggleMenu.addEventListener("click", function() {
			nav.classList.toggle("menu-open");
			this.classList.toggle("menu-active");
		});
	})();

	// Banner Letter-spacing
	(function() {
		var h1 = document.querySelector("#banner .banner-content h1");
		var h4 = document.querySelector("#banner .banner-content h4");
		h4.style.width = `${h1.offsetWidth}px`;
		var letters = "";
		for (var i = 0; i < h4.textContent.length; i++) {
			letters += "<span>" + h4.textContent[i] + "</span>";
		}
		h4.innerHTML = letters;
	})();

	// Video popup icon position
	(function() {
		if (document.querySelector(".best-video img")) {
			var img = document.querySelector(".best-video img");
			var icon = document.querySelector(".best-video a");
			icon.style.top = img.offsetHeight / 2 + "px";
		}
	})();
})();
