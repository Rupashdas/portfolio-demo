(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        //Scroll top function
        $("a[href='#top']").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        //Mailchimp form function
        $("#sForm1, #sForm2").ajaxChimp({
            url: 'https://ripplemeditation.us4.list-manage.com/subscribe/post?u=fe363dd02354815c14410cc16&amp;id=77e2012f79',
            callback: callbackFunction,
        });

        function callbackFunction(response) {
            console.log(response);
            if (response.result === 'success') {
                $(".form-wrapper").hide();
                $(".submitted-wrapper").show();
            }
        }
        //Mobile menu function
        $(".cloneTarget ul").clone().appendTo(".clonePlace");
        $(".menuButtonOpen").on("click", function() {
            $(".header-section").toggleClass("active");
        });
        $("#mobileMenu .navbar-nav li a").on("click", function() {
            $(".header-section").removeClass("active");
        });

        //Scrolling header funcitons
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            var scrollPosition = $(this).scrollTop();
            if (scrollPosition > 600) {
                var scrollPosition = $(this).scrollTop();
                if (scrollPosition > lastScrollTop) {
                    $(".header-section").removeClass("sticky");
                    $("body").css("margin-top", "0");
                } else {
                    var selector = $(".header-section");
                    var headerHeight = selector.outerHeight();
                    $("body").css("margin-top", headerHeight);
                    selector.addClass('sticky');
                }
                lastScrollTop = scrollPosition;
            } else {
                $("body").css("margin-top", "0");
                $(".header-section").removeClass("sticky");
            }
        });

        //Section animation js
        $(".menu li a, .nav-link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });


    });


    jQuery(window).load(function() {
        //Preloader
        $(".preloader").delay(500).fadeOut('slow');
    });


}(jQuery));