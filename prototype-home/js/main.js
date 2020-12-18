new WOW().init();

var video = document.getElementById('video');

$('.play-icon').click(function () {
    $(this).css({'display':'none'});
    video.play();
});

$('#video').click(function () {
    $('.play-icon').css({'display':'block'});
    video.pause();
});

$("body").niceScroll({
    mousescrollstep: 40,
    cursorcolor: "#fff",
    cursorwidth: "10px",
    cursorborderradius: "10px",
    cursorborder: "none",
    horizrailenabled: false,
    background: "#3C3F5040",
    zindex: 1000000
});