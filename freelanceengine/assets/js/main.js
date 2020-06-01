(function ($) {
	"use strict";

    jQuery(document).ready(function($){
         $('[data-toggle="tooltip"]').tooltip();
         
        // -- services review -- //
        $(".menu-triggers").on('click', function(){
            $(".offcanvas-menu").addClass("active");
            $(".offcanvas-menu-overlay").addClass("active");
        });
        $(".menu-close i.fa, .offcanvas-menu-overlay").on('click', function(){
            $(".offcanvas-menu").removeClass("active");
            $(".offcanvas-menu-overlay").removeClass("active");
        });

        // search trigger
        $(".search-triggers").on('click', function() {
            $(".search-bar-wrap").addClass("active");
        });

        $(".search-close").on('click', function() {
            $(".search-bar-wrap").removeClass("active");
        });

        // active trigger
        $("select").change(function(){
            if($(this).val() == 'profile'){
                $(".search-meta-1").show();
                $(".search-meta-2").hide()
            }else{
                
                $(".search-meta-1").hide();
                $(".search-meta-2").show();
            }
        });

         $('select').niceSelect();

        //  counter
        $(".counter-number span").counterUp({
            delay: 10,
            time: 1000
        }); 
        //Datepicker
        $('#date').datepicker({
            'format': 'm/d/yyyy',
            'autoclose': true
        });
        //budget slider
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 20000,
            values: [ 0, 20000 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );

        //Skill picker
        // Doc: http://betaweb.github.io/inputTags-jQuery-plugin/#getting-started
        $('#tags').inputTags({
            tags: ['Design, Graphic, Branding, UI, UX, Developer'],
            max: 0,
            errors: {
                empty: 'Please note that you cannot add an empty tag.',
                minLength: 'Your tag must have at least %s characters',
                maxLength: 'Your tag must not exceed %s characters',
                max: 'Please note, the number of tags must not exceed %s',
                email: 'The email address you entered is not valid',
                exists: 'This tag already exists',
                autocomplete_only: 'You must select a value from the list',
                timeout: 8000
            }
        });
        $(".single-search-box .inputTags-field").attr("placeholder", "Key Word");
        $(".card-content .inputTags-field").attr("placeholder", "Enter your skills needed");

        //Checkbox
       $("#lookingFor").on("change", function(){
            if(this.checked){
                $(".swithcer").addClass("forWork");
            }else{
                $(".swithcer").removeClass("forWork");
            }
        }); 
       $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var headerHeight = $(".header-area").outerHeight();
            if(scrollTop>0){
                $("body").css("margin-top", headerHeight);
                $(".header-area").addClass('is-sticky');
            }else{
                $("body").css("margin-top", 0);
                $(".header-area").removeClass('is-sticky');
            }
       });
        //Password strenth checker js
        
        $('#password').keyup(function() {
            $('#result .text').html(checkStrength($('#password').val()));
            $('#matchResult').removeClass('d-none').html(matchPassword($('#rePassword').val()));
            $('#result').removeClass('d-none');
            $('#matchResult').addClass('d-none');
        });
        function checkStrength(password) {
            var strength = 0
            if (password.length < 6) {
                $('#result').removeClass().addClass('result');
                $('#result').addClass('short');
                return 'Too short';
            }
            if (password.length > 7) strength += 1

            // If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

            // If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1

            // If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,-,~])/)) strength += 1

            // If it has two special characters, increase strength value.
            if (password.match(/(.*[!,%,&,@,#,$,^,*,?,-,~].*[!,%,&,@,#,$,^,*,?,-,~])/)) strength += 1

            // Calculated strength value, we can return messages
        
            // If value is less than 2
            if (strength < 2) {
                $('#result').removeClass().addClass('result');
                $('#result').addClass('weak');
                return 'Weak';
            } else if (strength == 2) {
                $('#result').removeClass().addClass('result');
                $('#result').addClass('avenger');
                return 'Avenger';
            } else {
                $('#result').removeClass().addClass('result');
                $('#result').addClass('strong');
                return 'Strong';
            }
        }  


        $('#rePassword').keyup(function() {
            $('#result .text').html(checkStrength($('#password').val()));
            $('#matchResult').removeClass('d-none').html(matchPassword($('#rePassword').val()));
            $('#result').addClass('d-none');
        });

        function matchPassword(password){
            var passValue = $("#password").val();
            if(password == passValue){
                $("#matchResult").css('color', '#27ae60');
                return "Password matched";
            }else if(password != ''){
                $("#matchResult").css('color', '#e74c3c');
                return "Password not matched";
            }
        }

        $("#searchProject").keyup(function(){
            var ThisVal = $(this).val();
            if(ThisVal != ''){
                $(".searchbox-wrap").find("i.fa").css("display", "none");
            }else{
                $(".searchbox-wrap").find("i.fa").css("display", "block");
            }
        });
        
        $('#addTag').click(function(e){
            e.preventDefault();
            var e = $.Event("keyup",{keyCode:188});
            $(".inputTags-field").trigger(e);
        });


    });

   jQuery(window).load(function(){
   
     
   });

}(jQuery));	