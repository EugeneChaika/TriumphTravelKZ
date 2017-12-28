/*
 * Third party
 */
//= ../libs/jquery/dist/jquery.js
//= ../libs/OwlCarousel2/dist/owl.carousel.min.js


/*
 * Custom
 */
//= partials/app.js
$(document).ready(function () {
    // var vid = document.getElementById("bgvid");
    // if (window.matchMedia('(prefers-reduced-motion)').matches) {
    //     vid.removeAttribute("autoplay");
    //     vid.pause();
    //     pauseButton.innerHTML = "Paused";
    // }
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    $(".mouse a").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

});

$(function () {

    // Custom JS

});
