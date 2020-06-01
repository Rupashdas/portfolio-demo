(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      
        //language modal 
        $(".site-lang, .phone-site-lang").on('click', function(event){
            event.preventDefault();
            $("#lang-modal").modal();
        });
        

        //different-billing-trigger

        $("#different-billing-trigger").change(function() {
             if($(this).prop('checked')) {
                $('.different-billing').slideDown('slow');
            } else {
                 $('.different-billing').slideUp('slow');
            }
        });
        
        //Gift wrap From check
        $("#gift-wrap").on('click', function(event){
            event.preventDefault();
            $("#gift-wrap-modal").modal();
        });

        $("#gift-wrap-form").submit(function(event) {
            $('#gift-wrap').addClass('gray-bg').html('Gift Wrapped');
            var giftSenderNameVal = $('#gift-sender-name').val();
            var giftreceiverNameVal = $('#gift-receiver-name').val();
            var giftModalMessage = $('#GiftModalMessage').val();

            if (giftSenderNameVal != '' && giftreceiverNameVal != '' && giftModalMessage != '' ) {
                $("#gift-wrap-modal").modal('hide');
            }
            
            return false;
        });


        //filter view in mobile
        $("#filter-trigger").on('click', function() {
           $(this).toggleClass('rotate').parents('.section-title').children('.filtered-options.right-options').slideToggle('fast');
        });


        //Track info js
        $('.track-btn').on('click', function(event){
            event.preventDefault();
            $('.track-wrap').removeClass('show');
            $(this).parents('.single-cart-product').children('.track-wrap').addClass('show');

        });

        //review slider view trigger on mobile
        $(".review-trigger").on('click', function(){
            $(this).toggleClass('rotate')
            $(".review-slider-wrap").slideToggle('fast');
        });



        $(".custom-modal .single-field input[type='text'], .custom-modal .single-field input[type='number'], .custom-modal .single-field textarea").on('click', function(){  
            $(this).parent().find('.modal-input-label').css('visibility', 'visible');
            $(this).attr('placeholder', '');
        });

        //search box js
        $(".search").on('click', function(){
            $('.search-box').toggleClass('show');
        });

        //Responsive menu js
        $('#menu').slicknav({
                prependTo:'#mobile-menu',
                label: '',
                closedSymbol: '&#43;',
                openedSymbol: "&#8722;"
        });

        //Nice Select
        $('select').niceSelect();

        //breadcrumb Slider
        $(".breadcrumb-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
        });

        //Featured Product Slider
        $(".featured-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
        });

        //Featured Product Slider
        $(".nav-slider ").owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
			mouseDrag: false,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
             responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        //Featured Bottom Slider
        $(".featured-bottom-slider").owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            margin: 30,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
		
        //Review Slider
        $(".review-slider").owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            margin: 50,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    dots: true,
                    nav: false,
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });


        //Related Item Slider
        $(".related-item-slider").owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            nav: true,
            margin: 30,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    dots: true,
                    nav: false,
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        //popular Item Slider
        $(".popular-item-slider").owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
            margin: 30,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    dots: true,
                    nav: false,
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        //popular Item Slider
        $(".wishlist-item-slider").owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            autoplayTimeout:5000,
            autoplayHoverPause: true,
            margin: 30,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    dots: true,
                    nav: false,
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        //Scroll to top
        var widnowWidth = $(window).width();
        if ( widnowWidth > 768) {
              var scrollselector =    $('.scrolltop')

            scrollselector.on('click', function (event) {
                $("html, body").animate({scrollTop: 0}, 1000);
            });

            $(window).on('scroll', function() {
                if ($(window).scrollTop() >= 800) {
                    scrollselector.fadeIn(300);
                } else {
                    scrollselector.fadeOut(300);
                }
            });
        }
        $(window).on('scroll', function() {
            if ($(window).scrollTop() <= 800) {
                $(".notification-window").addClass('show')
            } else {
                $(".notification-window").removeClass('show')
            }
        });
		
        //Product sheet Preview Image js
		$(".slide-img").on('click', function(){
            var imgSrc = $(this).attr("src");
            $(".preview-img").fadeOut(200, function() {
                $(this).attr('src', imgSrc);
            }).fadeIn(200);
            $(".slide-img").removeClass('on');
            $(this).addClass('on');
        });
		

        //login from menu
        $('.signIn').on('click', function(event) {
            event.preventDefault();
            $("#loginModal").modal();
        });
        
        //sign Up Modal js
        $('.signup-trigger').on('click', function(event) {
            event.preventDefault();
            $('#loginModal').modal('hide');
            setTimeout(function(){
                $("#signupModal").modal();
            }, 500);
        });

		//Login Modal
        $('.signin-trigger').on('click', function(event) {
            event.preventDefault();
            $('#signupModal').modal('hide');
            setTimeout(function(){
                $("#loginModal").modal();
            }, 500);
        });

        //login to otp modal
        $('#signUpForm').submit(function(event) {
            var fullName = $('#full-name').val();
            var emailAdress = $('#email-address').val();
            var phone = $('#phone').val();
            var signUpPassword = $('#signup-password').val();
            if (fullName != "" && emailAdress != ""  && phone != "" && signUpPassword != "") {
                $('#signupModal').modal('hide');
                setTimeout(function(){
                    $("#signupOtpModal").modal();
                }, 500);
            }
            return false;
        });

        //User Menu JS
        $(".user-profile").on('click', function(){
            $(this).parent("div").children('.user-dropdown').toggleClass('show');
        });
        
        $(".close-dropdown").on('click', function(){
            $(this).parents('.user-dropdown').removeClass('show');
        });
        

        //Quantity Select  
        $(".down").on('click', function(event){ 
            var quantity_value = $(this).parent().children(".selected-number").val();
            var current_value = --quantity_value;
            if(current_value < 0){
               return 0;
            }
            $(this).parent().children(".selected-number").attr('value', current_value);
            var current_product_price = $(this).closest(".row").find(".price-number").html();
            var selectNumber = current_product_price * current_value;
            if(selectNumber == 0){
                selectNumber = "0.00";
            }
            $(this).closest(".row").find(".counted-price").html(selectNumber);
        });
        

        $(".up").on('click', function(){
            var quantity_value = $(this).parent().children(".selected-number").val();
            var current_value = ++quantity_value;
            $(this).parent().children(".selected-number").attr('value', current_value);
            var current_product_price = $(this).closest(".row").find(".price-number").html();
            var selectNumber = parseFloat(current_product_price * current_value);
            $(this).closest(".row").find(".counted-price").html(selectNumber);
        });
        
        //Product Cart js
        $(".single-cart-product").each(function(){
            var current_product_price = $(this).find(".price-number").html();
            var quantity_value = $(this).find(".selected-number").val();
            var selectNumber = parseFloat(current_product_price * quantity_value);
            if(selectNumber == 0){
                selectNumber = "0.00";
            }
            parseFloat($(this).find(".counted-price").html(selectNumber));
        });

        $(".pruduct-close").on('click', function(){
           $(this).parent(".single-cart-product").fadeOut(); 
        });
        $("#clearCart").on('click', function(){
           $(".single-cart-product").hide(); 
        });
        
        var totalProductPrice = parseFloat($("#totalProductPrice").html());
        var shippingCost = parseFloat($("#shippingCost").html());
        var subTotal = parseFloat($("#subTotal").html());
        var importDuty = parseFloat($("#importDuty").html());
        var gst = parseFloat($("#gst").html());
        var totalPrice = totalProductPrice + shippingCost + subTotal +importDuty +gst;
        $("#totalPrice").html(totalPrice);


        //Redeem Gift Form Check
        $("#redeem-gift").on('click', function(event){
            event.preventDefault();
            $("#redeem-gift-modal").modal();
        });


        $("#redeed-gift-form").submit(function(event) {
            $('#redeem-gift').addClass('gray-bg').html('Gift Card Redeemed');
            var cardNumber =  $('#cardNumber').val();
            var pinNumber =  $('#redeemPin').val();
            if (cardNumber != '' && pinNumber != '') {
                $("#redeem-gift-modal").modal('hide');
            }

            $(".applied").addClass('show');
            var currentDiscountPrice = 0;
            if($("#discountPrice").html() != ''){
                var currentDiscountPrice = parseFloat($("#discountPrice").html());
            }
            $("#discountPrice").html(currentDiscountPrice + 100);
            var DiscountedPrice = totalPrice - $("#discountPrice").html();
            $("#appliedPrice").html(parseFloat(DiscountedPrice));
            return false;
        });

        //Coupon Form Check
        $("#coupon").on('click', function(event){
            event.preventDefault();
            $("#coupon-modal").modal(); 

        });

        $("#coupon-form").submit(function(event) {
            $('#coupon').addClass('gray-bg').html("Coupon Applied");
            var cuoponNumberVal = $(this).find('#coupon-number').val();
            if (cuoponNumberVal != '') {
                 $("#coupon-modal").modal('hide');
               }
            $(".applied").addClass('show');
            var currentDiscountPrice = 0;
            if($("#discountPrice").html() != ''){
                var currentDiscountPrice = parseFloat($("#discountPrice").html());
            }
            $("#discountPrice").html(currentDiscountPrice + 200);
            var DiscountedPrice = totalPrice - $("#discountPrice").html();
            $("#appliedPrice").html(parseFloat(DiscountedPrice));
            event.preventDefault();
        });

        //User Form validation js
        $("#user-data").submit(function(event){
            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var dataEmail = $("#data-email").val();
            var dataPhone = $("#data-phone").val();
            if (fname != '' && lname != '' && dataEmail != '' && dataPhone!= '') {
                $("#wishlist-tab").trigger('click');
                $("#alert-message").removeClass('show');
            }
            
            return false;
        });
        $("#contact-preference").submit(function(event){
            $("#wallet-tab").trigger('click');
            return false;
        });
        $(".alert-close").on('click', function(){
            $(".alert-msg").removeClass('show');

        });
        

        $(".user-area .nav-item a").on('click', function(){
            $(".user-area").addClass('showing');
        });
        $(".phone-nav").on('click', function(){
            $(".user-area").removeClass('showing');
        });

        if(widnowWidth<767){
            var mobileMenuHeight= $('#mobile-menu .slicknav_nav').outerHeight();
            $('#mobile-menu .slicknav_nav').css({
                'max-height' : mobileMenuHeight+'px',
                'overflow-y' : 'scroll',
            });
        }
         var headerHeight = $('header').outerHeight();
         $(".header-fix").css('height', headerHeight);
        $(window).scroll(function(event) {
            var scrollPosition = $(window).scrollTop();
            var promoTitleHeight = $('.top-banner-content-promo-title').outerHeight();
            if (scrollPosition > 0) {
                $('header').addClass('sticky');
            }else{
                $('header').removeClass('sticky');
            }

        });

        //dropdown option Height issue fix
        $(".list").each(function() {
                var listHeight = $(this).outerHeight();
                if (listHeight> 300) {
                    $(this).css({
                        'max-height': '300px', 
                        'overflow-y': 'scroll'
                    });
                }
            });
         $(".nice-select").on('click', function(){
            $(".list").each(function() {
                var listHeight = $(this).outerHeight();
                if (listHeight> 300) {
                    $(this).css({
                        'max-height': '300px', 
                        'overflow-y': 'scroll'
                    });
                }
            });
         });

        var userTypeVal =  $("#user-type").val();
        if ('individual' == userTypeVal) {
            $('.individual-fields').show();
        }else if('businesses' == userTypeVal){
             $('.businesses-fields').show();
        }
        $("#user-type").change(function(event) { 
            var userTypeVal =  $("#user-type").val();
            if ('individual' == userTypeVal) {
                $('.businesses-fields').hide();
                $('.individual-fields').show();
            }else if('businesses' == userTypeVal){
                $('.individual-fields').hide();
                 $('.businesses-fields').show();
            }
        });


		
            jQuery(document).ready(function($){
                function wheel(event) {
                    var delta = 0;
                    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
                    else if (event.detail) {(delta = -event.detail / 3);}
                    
                    handle(delta);
                    if (event.preventDefault) {(event.preventDefault());}
                    event.returnValue = false;
                }
                
                function handle(delta) {
                    var time = 200;
                    var distance = 300;
                    jQuery("html, body").stop().animate({
                    scrollTop: jQuery(window).scrollTop() - (distance * delta)
                    }, time );
                }
                
                if (window.addEventListener) {window.addEventListener("DOMMouseScroll", wheel, false);}
                window.onmousewheel = document.onmousewheel = wheel;
                
            
                
                
            });
            
        
    });


    jQuery(window).load(function(){
        $("#preloader").delay(1000).fadeOut('slow');
    });


}(jQuery));	












