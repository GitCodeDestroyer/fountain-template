new WOW().init();

$(".content").niceScroll({
    cursorcolor: "#6969E5",
    cursorwidth: "10px",
    cursorborderradius: "10px",
    cursorborder: "none",
    zindex: 1000000,
    mousescrollstep: 40,
    bouncescroll: !1,
    cursoropacitymin: 1
});

$("body").niceScroll({
    cursorcolor: "#FD767D",
    cursorwidth: "10px",
    cursorborderradius: "10px",
    cursorborder: "none",
    zindex: 1000000,
    bouncescroll: !1,
    cursoropacitymin: 1,
    horizrailenabled: false
});

var scroll = 0;

$('.link-1').click(function () {
    if (scroll > 0 && (scroll - 350) > 0) {
        scroll = scroll - 350;
        $('.content').animate({
            scrollLeft: scroll
        }, 500);
    }else if (scroll != 0) {
        $('.content').animate({
            scrollLeft: 0
        }, 500);
        scroll = 0;
    }
});

$('.link-2').click(function () {
    if (scroll < 3195 && (scroll + 350) < 3195) {
        scroll = scroll + 350;
        $('.content').animate({
            scrollLeft: scroll
        }, 500);
    }else if (scroll != 3195) {
        $('.content').animate({
            scrollLeft: 3195
        }, 500);
        scroll = 3195;
    }
});