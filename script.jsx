document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
$(document).ready(function () {
    //lisenter on scroll
    // $(window).on('scroll', function () {
    //         animation();
    // })
    //effect type write on h1
    var i = 0;
    var x = setInterval(function () {
        var myName = "Menna mohamed";
        myName = myName.split("");
        $("#myname").append(myName[i]);
        i++;
        if (i > myName.length) {
            clearInterval(x);
            $("main h2").css("animation-name", " rotate")
        }
    }, 150);
    //lisenter on show all 
    $("#show").on("click", function () {
        $("#show").hide();
        $(".hide").css("display", "block");
    })
    //lisenter on save 
    $("#send").on("click", function (evt) {

    })
    //lisenter on navbar 
    $("nav li").on("click", function () {
        animation();
    })
    //lisenter on profolio list
    $(".portoflio ul li").on("click", function () {
        $("#show").hide();
        $(".portoflio ul li").removeClass("active");
        $(this).addClass("active");
        $(".portoflio section .item").hide();
        $("." + $(this).html()).delay(200).slideDown();
        console.log($("." + $(this).html()))
    })
    function animation() {
        var pos = $(window).scrollTop();
        if (pos > $('#traingle').offset().top) {
            console.log("connact here");
            $("nav #Projectsli").addClass("active");
            $(".contact header img").css("animation-name", " remove")
            $(".contact header h2").css("animation-name", " appear")
        }
        else if (pos < $('#about').offset().top) {
            console.log("about here");
            $("nav #Projectsli").addClass("active");
            $(".about header img").css("animation-name", " move")
            $(".about header h2").css("animation-name", " appear")
            setTimeout(function () {
                $(".about header img").css("animation-name", "stop")
                $(".about header h2").css("animation-name", " stop")
            }, 2000)
        }
        else if (pos < $('#portoflio').offset().top && pos > $('#about').offset().top) {
            console.log("skills here");
            $("nav #portoflioli").addClass("active");
            $(".skills header img").css("animation-name", " remove")
            $(".skills header h2").css("animation-name", " appear")
            setTimeout(function () {
                $(".skills header img").css("animation-name", "stop")
                $(".skills header h2").css("animation-name", " stop")
            }, 2000)
        }
        if (pos < $('#contact').offset().top && pos > $('#skills').offset().top) {
            console.log("portoflio here");
            // $("nav #portoflioli").addClass("active");
            $(".portoflio header img").css("animation-name", " move")
            $(".portoflio header h2").css("animation-name", " appear")
            setTimeout(function () {
                $(".portoflio header img").css("animation-name", "stop")
                $(".portoflio header h2").css("animation-name", " stop")
            }, 2000)
        }
    }

})