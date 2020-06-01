/**
 * jQuery
 */
(function($) {
    // Services Slider
    $(".services").owlCarousel({
        items: 1
    });
    // Banner slider
    $(".banner-slide").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        responsive : {
            0 : {
                items: 1
            },
            550 : {
               items: 1 
            },
            768 : {
               items: 1
            },
            992 : {
               items: 1
            },
            1200 : {
               items: 1
            }
        }
    });
    // Techonology slider
    $(".tech-items").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        margin: 20,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive : {
            0 : {
                items: 1
            },
            550 : {
               items: 2 
            },
            768 : {
               items: 3
            },
            992 : {
               items: 4
            },
            1200 : {
               items: 5
            }
        }
    });
    // Video Gallery Carousel
    $(".v-g-items").owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive : {
            0 : {
                items: 1
            },
            
            768 : {
               items: 2
            },
            1050 : {
               items: 3
            }              
        }
    });
    // Image Gallery Slider
    $(".image-gallery-items").owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        margin: 30,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            
            768 : {
               items: 2
            },
            1050 : {
               items: 3
            }              
        }
    });
    // Image Gallery Popup
    $('.work-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 600,

        }
    });
})(jQuery);

/**
 * Custom JS
 */
(function() {
  
    
})();
