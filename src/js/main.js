$(document).ready(function () {
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


    $(".mouse a").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    $("#services-dropdown").on('click', function () {
        $('#myTab').toggleClass('rolldown');
    });

    $(".nav-link").on('click', function () {
        $('#myTab').toggleClass('rolldown');
    });

    $(".sort a").on('click', function () {
        $(".sort a").removeClass('active');
        $(this).toggleClass('active');
    });

    function setPriceRange() {
        var s = $("#priceRange").bootstrapSlider();

        if (s != undefined) {
            s.on("change", function (val) {
                $('#actualValue').html('КЗТ ' + val.value.newValue[0] + 'т - ' + val.value.newValue[1] + 'т');
            });
        }
    }

    setPriceRange();

    ///responsive
    function responsive() {

        var myWidth = $('body').innerWidth();

        if (myWidth <= 768) {
            if (!$('body').hasClass("tablet")) {
                $(".hamburger").show();
                $('body').addClass("tablet");
            }
        } else {
            $(".hamburger").hide();
            $(".cross").hide();
            $(".menu").hide();
            $('body').removeClass("tablet");
        }
    }

    responsive();

    $(window).resize(function () {
        responsive();
    });
});
