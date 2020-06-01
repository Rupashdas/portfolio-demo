(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	//Menu js
    	$('.menu-toggle').on('click', function(){
    		$(this).toggleClass('icon-changed');
    		$('.main-menu').toggleClass('show');
    		$('.overlay').toggleClass('show');
    	});
    	$('.close-btn, .overlay').on('click', function(){
    		$('.main-menu, .menu-toggle').removeClass('show');
    		$('.menu-toggle').removeClass('icon-changed');
    		$('.overlay').removeClass('show');
    	});

    	//scroll to top
    	 var scrollTop = $(".scrollTop");
		 $(window).scroll(function() {
		    var topPos = $(this).scrollTop();
		    if (topPos > 100) {
		      $(scrollTop).css("opacity", "1");

		    } else {
		      $(scrollTop).css("opacity", "0");
		    }

		 }); // scroll END

		  //Click event to scroll to top
		 $(scrollTop).click(function() {
		   $('html, body').animate({
		      scrollTop: 0
		    }, 100);
		    return false;

		}); 



		 //Dropdown country select js
		function countryDropdown(seletor){
			var Selected = $(seletor);
			var Drop = $(seletor+'-drop');
			var DropItem = Drop.find('li');

			Selected.click(function(){
				Selected.toggleClass('open');
				Drop.toggle();
			});

			

			Drop.find('li').click(function(){
				Selected.removeClass('open');
				Drop.hide();
				
				var item = $(this);
				Selected.html(item.html());
				var countryimg =  item.attr('data-name');
				var countryval =  countryimg.split('.png').join('').split('-').join(' ');
				Selected.attr('placed', countryval);
			});

			DropItem.each(function(){
				var code = $(this).attr('data-name');

				if(code != undefined){
					var countryCode = code.toLowerCase();
					$(this).find('img').addClass('flagstrap-'+countryCode);

				}
			});
		}
		countryDropdown('#country');

		
		//go to signup
		$('#signup-btn').on('click', function(event) {
			$('#loginModal').modal('hide');
            setTimeout(function(){
	            $("#signupModal").modal();
	        }, 500);
		});
		//login from menu
		$('#login-link').on('click', function(event) {
			event.preventDefault();
            $("#loginModal").modal();
		});
		//login to otp modal
		$('#loginForm').submit(function(event) {
			var phoneVal = $('#phone').val();
			if (phoneVal != "") {
				$('#loginModal').modal('hide');
	        	setTimeout(function(){
	                $("#loginOtpModal").modal();
	            }, 500);
			}
		});
		//Signup to otp modal
		$('#signUpForm').submit(function(event) {
			var phoneValSignup = $('#SignupNumber').val();
			var countryValue = $("#country").attr('placed');
			if (phoneValSignup != "" && countryValue != "") {
				$('#signupModal').modal('hide');
	        	setTimeout(function(){
	                $("#signupOtpModal").modal();
	            }, 500);
			}
		});
		//Welcome modal
		$('#signupOtpForm').submit(function(event) {
			var phoneValSignupOtp = $('#signupOtp').val();
			if (phoneValSignupOtp != "") {
				$('#signupOtpModal').modal('hide');
	        	setTimeout(function(){
	                $("#welcomeModal").modal();
	            }, 500);
			}
		});

		var windowHeight = $(window).height();
		var documentHeight = $(document).height();
		if(windowHeight >= documentHeight){
			$('.footer-area').addClass('absolute');
			$('body, html').css('height', '100%');
		}

		
    });


}(jQuery));	




//Login validation
function numberCheck(){
    var numberSelector = document.numberForm.number;
    if(numberSelector.value == ''){
        document.getElementById("errornumber").innerHTML = 'Please Fill Out This Form';
        return false;
    }
    return false;
}
//Login otp validation
function pinValidation(){
    var otpselector  = document.otpcheck.otpnumber;
    if(otpselector.value  == ""){
        document.getElementById("error").innerHTML = 'Please Enter the correct pin';
        return false;
    }
}

//Signup validation
function signUpCheck(){

    var countrySelected = document.getElementById("country").getAttribute("placed");
    if (countrySelected == '') {
       document.getElementById("errorcountry").innerHTML = 'Please Select Your Country';
       return false;
    }
    var formCarrier = document.getElementById("SignupNumber");
    if (formCarrier.value != ' ') {
       document.getElementById("errorSignupNumber").innerHTML = 'Please Enter Your Phone number';
       return false;
    }
    return false;
}

//Signup otp validation
function signUpOtpCheck(){
    var otpselector  = document.getElementById("signupOtp");
    if(otpselector.value  == ""){
        document.getElementById("errorSignupOtp").innerHTML = 'Please Enter the correct pin';
        return false;
    }
    return false;
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

setInputFilter(document.getElementById("phone"), function(value) {
  return /^\d*$/.test(value); 
});
setInputFilter(document.getElementById("pin"), function(value) {
  return /^\d*$/.test(value); 
});
setInputFilter(document.getElementById("SignupNumber"), function(value) {
  return /^\d*$/.test(value); 
});
setInputFilter(document.getElementById("signupOtp"), function(value) {
  return /^\d*$/.test(value); 
});