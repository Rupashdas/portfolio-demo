(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        //number slides js
        $(".Kontant-pris").slider({
                min: 0,
                max: 10000000,
                range: true,
                values: [0, 10000000]
            }).slider("pips", {
                rest: "label"
            }).slider("float");
        //number slides js
        $(".Areal").slider({
                min: 0,
                max: 300,
                range: true,
                values: [0, 300]
            }).slider("pips", {
                rest: "label"
            }).slider("float");
        //number slides js
        $(".Antal").slider({
                min: 0,
                max: 6,
                range: true,
                values: [0, 6]
            }).slider("pips", {
                rest: "label"
            }).slider("float");
        });
        $("body").niceScroll({
            cursorcolor: "#ff9e55",
            cursorwidth: "10px",
            cursorborder: "1px solid #ff9e55", 
            cursorborderradius: "0px", 
             scrollspeed: 120,
        });


    jQuery(window).load(function(){

        
    });


}(jQuery));	