$("button").click(function() {
    $('html,body').animate({
            scrollTop: $(".policy").offset().top
        },
        'slow');
});