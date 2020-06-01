(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $("body").niceScroll({
            cursorcolor: "#FD0900",
            scrollspeed: 100,
            cursorwidth: "10px",
            cursorborder: "1px solid #FD0900",
            cursorborderradius: "0px",
            zindex: 99,
            background: "#fff",
            smoothscroll: true,
        });
        $('#menu').slicknav({
            prependTo : ".mobile-menu",
            label :     " ",
            allowParentLinks: true,
        });
        $(".fa-close").click(function () {
            $(".notification").hide();
        });
        $(".gallary-img").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
        $('.trainer-slides').slick({
            infinite: true,
            slidesToShow: 3,
            dots: false,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            autoplay: false,
            focusOnSelect: true,
            asNavFor: '.trainer-meta',
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: false,
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
        }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
    }
}
]
});
        $('.trainer-meta').slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            centerPadding: '0px',
            autoplay: false,
            focusOnSelect: true,
            asNavFor: '.trainer-slides',
            draggable: false,
            swipeToSlide: false,
            touchMove: false,
            swipe: false,
            adaptiveHeight: true
        });
        $('.testimonial-slides').owlCarousel({
            items: 3,
            autoplay: true,
            center: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            loop:true,
            margin:30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                 items: 2
             },
                // breakpoint from 768 up
                768 : {
                 items: 3
             }
         }
     });
        $('.transformation-slides').owlCarousel({
            items: 3,
            autoplay: true,
            center: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            loop:true,
            margin:30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                 items: 2
             },
                // breakpoint from 768 up
                768 : {
                 items: 3
             }
         }
     });
        $(".tab-item-link").click( function(){
            if (this.hash !== "") {
                var hash = this.hash;
                $('.tab-box').removeClass('active');
                $(this).addClass('active');
                $(hash).addClass('active');
                return false;
            };
        });
 

    });
jQuery(window).load(function () {
});
}(jQuery));