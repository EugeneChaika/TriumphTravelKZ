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
    });


    // $("#ex2").slider({});
    function setPriceRange(){
        var s = $("#priceRange").bootstrapSlider();

        if(s != undefined){
            s.on("change", function (val) {
                $('#actualValue').html('КЗТ ' + val.value.newValue[0] + 'т - ' + val.value.newValue[1] + 'т');
            });
        }
    }

    setPriceRange();
});
