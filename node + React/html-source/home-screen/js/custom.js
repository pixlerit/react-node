$(document).ready(function(){

    $(window).resize(function(){

        if( $(window).width() < 992 ){

            $(".input_wrapper>input").attr("placeholder","Search");

        }else{

            $(".input_wrapper>input").attr("placeholder","Products, Brands and More");
        }

    });


});