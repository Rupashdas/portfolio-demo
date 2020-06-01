(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        //Section animation js
        $(".main-menu  .nav-link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800);
            }
        });



        //Video js
        var selector = ($('#bgndVideo'));
        var instance = selector.data('vide');
        instance.resize();
        var videoObject = instance.getVideoObject();
        var i = setInterval(function() {
            if(videoObject.readyState > 0) {
                clearInterval(i);
                selector.find("video").bind("ended", function() {
                    selector.css('background-image', 'url(assets/videos/video.jpg)').find('video').hide();
                });
            }
        }, 200);




    });


    jQuery(window).load(function() {


    });


}(jQuery));