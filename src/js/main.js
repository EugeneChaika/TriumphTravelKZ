//= ../libs/jquery/dist/jquery.js
//= ../libs/OwlCarousel2/dist/owl.carousel.min.js
;$(document).ready(function () {
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
    $("#services-dropdown").on('click', function () {
        console.log('dryaaa');
        $('#myTab').toggleClass('rolldown');
    });
    $(".nav-link").on('click', function () {
        console.log('dratuti');
        $('#myTab').toggleClass('rolldown');
    })


});
//= partials/app.js
//= ../libs/bootstrap/dist/js/bootstrap.js

