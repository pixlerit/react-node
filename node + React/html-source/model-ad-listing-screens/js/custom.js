$(document).ready(function(){

    $(window).resize(function(){

        if( $(window).width() < 992 ){

            $(".input_wrapper>input").attr("placeholder","Search");

        }else{

            $(".input_wrapper>input").attr("placeholder","Products, Brands and More");
        }

    });



    $(".dropdown112>a").click(function(e){

        e.preventDefault();

        if( $(this).find("i").hasClass("fa-angle-down")){

            $(this).find("i").removeClass("fa-angle-down");
            $(this).find("i").addClass("fa-angle-up");

        }else{

            $(this).find("i").addClass("fa-angle-down");

        }

        $(this).closest("li").find("ul").slideToggle();

    });



    $("#ajax-loader").click(function(e){

        e.preventDefault();

        $(this).toggleClass("active");

    });

    $("#filter_slider").click(function(e){

        e.preventDefault();

        $("#Filter_slide").toggleClass("open")
        $(this).toggleClass("active")

    });

});