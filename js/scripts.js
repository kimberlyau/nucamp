$(function() {
    /* Carousel in index.html */
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        /* If currently is paused */
        if($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }
        else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    /* Reserve Campsite */
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    })

    /* Login Modal */
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    })
});