var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile===true) {
    
    $(".hello").remove();
    $("beside-content-work").remove();
    $(".cont-work").remove();
    $(".beside-content").remove();
    $("#letter").remove();
    $(".contactArrow").addClass("position1");
    $(".fordesktop").remove();
    $(".movepage").addClass("shiftout");
    $(".my-card-base").hide();
    $(".X").hide();
    $(".Y").hide();
    $(".nava").hide();

    $(window).scroll(function() {
        var Scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        scrollPercent = (Scroll/ (dh-wh))*100;
        $("#progressbar").css("height", scrollPercent + "%");
    });

    $(document).ready(function() {
        $("#sets").hide();
        $(".panel").hide();
        $("#contactIcons").hide();
        $("#hoverEffects").hide();
        $(".name").hide();
        $("[id=homma]").hide();
        $(".hello").remove();
        $(".mobileHello").hide();
        $(".skills-for-mobile").hide();
        $(".footer").hide();
        $(".for-services").hide();
        $(".needed-margin").hide();
    
        setTimeout(function(){
            $('#loading-screen').remove();
            $(".loader").remove();
            $("#signature").remove();
            $("#symbol").remove();
            $("[id=homma]").fadeIn(3000);
        }, 10000);

        setTimeout(() => {
            $(".name").fadeIn(3000);
        }, 14500);

        setTimeout(() => {
            $(".mobileHello").fadeIn(3000);
        }, 14500);

        setTimeout(() => {
            $(".skills-for-mobile").fadeIn(9000);
        }, 37000);

        setTimeout(() => {
            $(".X").fadeIn(3000);
        }, 17560);

        setTimeout(() => {
            $(".Y").fadeIn(3000);
        }, 1000);

        setTimeout(() => {
            $(".panel").fadeIn(3000);
            $("#works-contact").fadeIn(3500);
            setTimeout(() => {
                $("#line2").toggleClass("line2");
            }, 5000);
        }, 1000)

        setTimeout(() => {
            $(".nava").fadeIn(3000)
        }, 1000);

        setTimeout(() => {
            $(".my-card-base").fadeIn(3000)
        }, 3563);

        setTimeout(() => {
            $("#contactIcons").fadeIn(3000);
        }, 37000);

    });

    $("#contact").click(function () {
        $(".contactArrow").addClass("Arrow");
        $("#hoverEffects").show(2000);
        setTimeout(() => {
            $(".contactArrow").removeClass("Arrow");
            $("#hoverEffects").remove();
        }, 1500);
        setTimeout(() => {
            $(".contactArrow, .position, .reposition").toggleClass("position1 reposition");
            $(".movepage, .shiftout, .shiftin").toggleClass("shiftout shiftin");
            $(".cont").toggleClass("focuseffect");
            $(".panel").toggleClass("focuseffect");
            $("#navBar").toggleClass("focuseffect");
            $(".my-card-base").toggleClass("focuseffect");
        }, 1520);
        setTimeout(() => {
            $(".for-services").fadeIn(3000);
        }, 14000);
        setTimeout(() => {
            $(".needed-margin").fadeIn(2000);
        }, 17000);
    })

    $("#works-contact").click(function () {
        $(".contactArrow").addClass("Arrow");
        $("#hoverEffects").show(2000);
        setTimeout(() => {
            $(".contactArrow").removeClass("Arrow");
            $("#hoverEffects").remove();
        }, 1500);
        setTimeout(() => {
            $(".contactArrow, .position, .reposition").toggleClass("position1 reposition");
            $(".movepage, .shiftout, .shiftin").toggleClass("shiftout shiftin");
            $("#carouselExampleSlidesOnly").toggleClass("focuseffect");
            $("#navBar-work").toggleClass("focuseffect");
        }, 1520);
        
    })

    $('.carousel').carousel({
        interval: 3400
    });

}else{
    $(".works-for-mobile").remove();
    $(".footer").remove();
    $("#carouselExampleSlidesOnly").remove();
    $("#bootstrap").remove();
    $("#my-card").remove();
    $(".foot").remove();
    $(".movepage").remove();
    $("#contact").remove();
    $("#works-contact").remove();

    $(document).ready(function() {
        $("#sets").hide();
        $(".panel").hide();
        $("#contactIcons").fadeOut();
        $("#hoverEffects").hide();
        $(".intro").hide();
        $(".name").hide();
        $("[id=homma]").hide();
        $(".mobileHello").remove();
    
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
    
    $("#desktopcontact").click(function () {
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
}

