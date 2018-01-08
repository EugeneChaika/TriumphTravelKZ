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
        $('#myTab').toggleClass('rolldown');
    });

    $(".nav-link").on('click', function () {
        $('#myTab').toggleClass('rolldown');
    });



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

!function () {
    "use strict";

    function a() {
        return document.querySelectorAll("#" + j)[0] || null
    }

    function b() {
        return !!a()
    }

    function c() {
        var b = a();
        return null !== b && "1" === b.getAttribute("data-is-loaded")
    }

    function d() {
        var a, b,
            c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            d = 32, e = [];
        for (b = 0; b < d; b++) a = Math.floor(Math.random() * c.length), e.push(c[a]);
        return e.join("")
    }

    function e(a, b) {
        var c = window.document.createElement("script");
        return c.async = !0, c.src = a, c.charset = "utf-8", c.type = "text/javascript", b && "string" == typeof b && (c.id = b), c
    }

    function f(a) {
        return !a.src && -1 !== (a.textContent || a.text).indexOf("sletat.createModule5")
    }

    function g(a) {
        return a.src && (-1 !== a.src.indexOf("module-5.0/app.js") || -1 !== a.src.indexOf("module-5.0/search/app.js"))
    }

    function h(a) {
        return !a.getAttribute("data-processed")
    }

    function i(a) {
        var b, c, d = window.document.getElementsByTagName("script");
        for (c = 0; c < d.length; c++) a(d[c]) && h(d[c]) && (b = d[c], b.setAttribute("data-processed", "1"));
        return b
    }

    var j = "sletat-module5-script";
    window.sletat = window.sletat || {}, window.sletat.createModule5 = window.sletat.createModule5 || function () {
        function h(a, b) {
            setTimeout(function () {
                m[1].initialScriptID = b, window.sletat.initModule5.apply(null, a)
            }, 0)
        }

        function k(a) {
            function b() {
                a.setAttribute("data-is-loaded", "1"), h(m, n)
            }

            function c() {
                b(), a.removeEventListener("load", c)
            }

            function d() {
                "complete" !== a.readyState && "loaded" !== a.readyState || (b(), a.detachEvent("onreadystatechange", d))
            }

            a.addEventListener ? a.addEventListener("load", c, !1) : a.attachEvent("onreadystatechange", d)
        }

        var l, m = Array.prototype.slice.call(arguments, 0), n = d(), o = i(f), p = i(g);
        o.id = n, b() && c() ? h(m, n) : b() && !c() ? (l = a(), k(l)) : (l = e(p.src.replace("app.js", "module.js"), j), k(l), o.parentNode.insertBefore(l, o))
    }
}();