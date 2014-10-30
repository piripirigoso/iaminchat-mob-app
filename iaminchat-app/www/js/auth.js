$(document).ready(function(){

    $('.box').css('margin-top', $(window).height()/2 - $('.box').height()/2);

    $(window).resize(function(){
        $('.box').css('margin-top', $(window).height()/2 - $('.box').height()/2);
    });

    $("#username").focus(function() {
        $(this).parent(".input-prepend").addClass("input-prepend-focus");
    });

    $("#username").focusout(function() {
        $(this).parent(".input-prepend").removeClass("input-prepend-focus");
    });

    $("#password").focus(function() {
        $(this).parent(".input-prepend").addClass("input-prepend-focus");
    });

    $("#password").focusout(function() {
        $(this).parent(".input-prepend").removeClass("input-prepend-focus");
    });

    $("#password_confirmation").focus(function() {
        $(this).parent(".input-prepend").addClass("input-prepend-focus");
    });

    $("#password_confirmation").focusout(function() {
        $(this).parent(".input-prepend").removeClass("input-prepend-focus");
    });
});
