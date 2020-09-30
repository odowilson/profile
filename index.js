$(document).ready(function() {
    $("#sets").hide();
    $(".panel").hide();
    $("#contactIcons").fadeOut();
    $("#hoverEffects").hide();
    $(".intro").hide();
    $(".name").hide();
    $("[id=homma]").hide();

    setTimeout(function(){
        $('#loading-screen').remove();
        $(".loader").remove();
        $("#signature").remove();
        $("#symbol").remove();
        $("[id=homma]").fadeIn(4000);
    }, 10000);

    setTimeout(() => {
        $(".name").fadeIn(4000);
    }, 16000);

    setTimeout(() => {
        $(".intro").show();
    }, 23000);

    setTimeout(() => {
        $(".panel").fadeIn(10000);
        setTimeout(() => {
            $("#line2").toggleClass("line2");
        }, 5000);
    }, 1000);

    setTimeout(() => {
        $("#sets").fadeToggle(10000);
        setTimeout(() => {
            $("[id=line]").toggleClass("line");
        }, 7000);
    }, 45000);
});

$("#contact").click(function () {
    $(".contactArrow").addClass("Arrow");
    $("#hoverEffects").show(2000);
    setTimeout(() => {
        $(".contactArrow").removeClass("Arrow");
        $("#hoverEffects").remove();
    }, 9000);
    setTimeout(() => {
        $("#contactIcons").fadeToggle(3000);
    }, 9000);
})

$(".portfolio").click(function() {
    $("#sets").fadeToggle(5000);
    setTimeout(() => {
        $("[id=line]").toggleClass("line");
    }, 6000);
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
});