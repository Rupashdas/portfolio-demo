(function ($) {
    "use strict";
    jQuery(document).ready(function($){

        //error fix of sub menu overlap
        $('.dropdown-submenu a.test').on("click", function(e){
            $('.dropdown-submenu ').removeClass('opened');
            $('.dropdown-submenu a.test').next('ul').css('display', 'none');
            $(this).next('ul').css('display', 'block').first().parents().eq(2).addClass('opened');
            return false;
        });
        // $('.dropdown-submenu a.test ul li a').on("click", function(e){
        //     $(this).first().parentsUntil('.dropdown-menu').addClass('opened');
        // });

        //toggle class of menu
        $('.toggle-bar-wrap').on('click', function () {
            $(".toggle-wrap").toggleClass('show');
            $(this).toggleClass('close-bar');
        });

        //Youtube video player js with custom style
        $("#video").simplePlayer();

        //Counter Up js
        $('.ttt').counterUp({
            delay: 50,
            time: 2000,
        });
    });

}(jQuery));
















