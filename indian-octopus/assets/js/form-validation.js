
//User account form Validation
function dataCheck(){
    var selector = document.getElementById('user-data');
    var fname = selector.fname;
    var lname = selector.lname;
    var email = selector.email;
    var phone = selector.phone;
    if (fname.value == '' || lname.value == '' || email.value == '' || phone.value == '' ) {
       document.getElementById("alert-message").classList.add('show');
    }

    if(fname.value == ''){
        document.getElementById("data-fname-label").innerHTML = 'Enter Your First Name';
        document.getElementById("data-fname-label").classList.add("error");
        fname.classList.add("error");
        return false;
    }

    if(lname.value == ''){
        document.getElementById("data-lname-label").innerHTML = 'Enter Your Last Name';
        document.getElementById("data-lname-label").classList.add("error");
        lname.classList.add("error");
        return false;
    }

    if(email.value == ''){
        document.getElementById("data-email-label").innerHTML = 'Please Enter Your Email ';
        document.getElementById("data-email-label").classList.add("error");
        email.classList.add("error");
        return false;
    }
    if(phone.value == ''){
        document.getElementById("data-phone-label").innerHTML = 'Enter Your Phone Number';
        document.getElementById("data-phone-label").classList.add("error");
        phone.classList.add("error");
        return false;
    }
}

//Login validation
function loginCheck(){
    var emailSelector = document.loginForm.email;
    if(emailSelector.value == ''){
        document.getElementById("email-label").innerHTML = 'Please Enter Your Email';
        document.getElementById("email-label").classList.add("error");
        emailSelector.classList.add("error");
        return false;
    }

    var passwordSelector = document.loginForm.password;
    if(passwordSelector.value == ''){
        document.getElementById("pass-label").innerHTML = 'Please Enter Your Password';
        document.getElementById("pass-label").classList.add("error");
        passwordSelector.classList.add("error");
        return false;
    }
}

//Sign up Form validation
function signUpCheck(){
    var nameSelector = document.signUpForm.name;
    var phoneSelector = document.signUpForm.phone;
    var ageSelector = document.signUpForm.age;
    var emailSelector = document.signUpForm.email;
    var passSelector = document.signUpForm.password;

    
    if(nameSelector.value == ''){
        document.getElementById("name-label").innerHTML = 'Please enter your name';
        document.getElementById("name-label").classList.add("error");
        nameSelector.classList.add("error");
        return false;
    }
    if(ageSelector.value == ''){
        document.getElementById("ageLable").innerHTML = 'Please enter your age';
        document.getElementById("ageLable").classList.add("error");
        ageSelector.classList.add("error");
        return false;
    }
    if(emailSelector.value == ''){
        document.getElementById("login-email").innerHTML = 'Please enter email';
        document.getElementById("login-email").classList.add("error");
        emailSelector.classList.add("error");
        return false;
    }
    if(phoneSelector.value == ''){
        document.getElementById("signup-phone").innerHTML = 'Please enter your phone number';
        document.getElementById("signup-phone").classList.add("error");
        phoneSelector.classList.add("error");
        return false;
    }
    if(passSelector.value == ''){
        document.getElementById("signup-pass-label").innerHTML = 'Please enter password';
        document.getElementById("signup-pass-label").classList.add("error");
        passSelector.classList.add("error");
        return false;
    }
}

//Coupon Form validation
function couponCheck(){
    var couponNumber = document.couponForm.couponNumber;
     if(couponNumber.value == ''){
        document.getElementById("coupon-label").innerHTML = 'Please enter a correct number';
        document.getElementById("coupon-label").classList.add("error");
        return false;
    }
}

//Gift Wrap Form validation
function giftWrapCheck(){
    var senderName = document.giftWrapForm.senderName;
    var receiverName = document.giftWrapForm.receiverName;
    var giftMessage = document.giftWrapForm.giftMessage;
    if(senderName.value == ''){
        document.getElementById("senderNameLabel").innerHTML = 'Please enter your name';
        document.getElementById("senderNameLabel").classList.add("error");
        return false;
    }
    if(receiverName.value == ''){
        document.getElementById("receiverNameLabel").innerHTML = 'Please enter receiver name';
        document.getElementById("receiverNameLabel").classList.add("error");
        return false;
    }
    if(giftMessage.value == ''){
        document.getElementById("giftMessageLabel").innerHTML = 'please write your message';
        document.getElementById("giftMessageLabel").classList.add("error");
        return false;
    }
}

//Redeem Gift card Form validation
function redeemGiftCard(){
    var cardNumber = document.redeedGiftForm.cardNumber;
    var pinNUmber = document.redeedGiftForm.redeemPin;
    if(cardNumber.value == ''){
        document.getElementById("cardNumberLabel").innerHTML = 'Please enter a correct number';
        document.getElementById("cardNumberLabel").classList.add("error");
        return false;
    }
    if(pinNUmber.value == ''){
        document.getElementById("redeemPinLabel").innerHTML = 'please enter a Correct Pin';
        document.getElementById("redeemPinLabel").classList.add("error");
        return false;
    }
}

//Sign up OTP Form validation
var signUpOTPLabel = document.getElementById("otp-label").innerHTML;
function signUpOtpCheck(){
    var otpSelector = document.OTPform.otpnumber;
    if(otpSelector.value == ''){
        document.getElementById("otp-label").innerHTML = 'Please enter the correct pin';
        document.getElementById("otp-label").classList.add("error");
        otpSelector.classList.add("error");
        return false;
    }
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

setInputFilter(document.getElementById("otpnumber"), function(value) {
  return /^\d*$/.test(value); 
});