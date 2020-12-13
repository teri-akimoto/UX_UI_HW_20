// ------------------------------------------------------------------------------
//Scroll Behaviour ----------------------------------------------------------------------
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible")
        }
        else { 
            $(tag).removeClass("visible")
        }
    }
})
// ------------------------------------------------------------------------------
//Side Nav ----------------------------------------------------------------------
var prevScrollpos = window.pageYOffset
window.onscroll = function() {
    if($(window).width() <= 768) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("side-nav").style.top = "69px";
        } else {
        document.getElementById("side-nav").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    else if($(window).width() > 768) {
        document.getElementById("side-nav").style.top = "120px";
    }
}
// ------------------------------------------------------------------------------
//Carousel ----------------------------------------------------------------------
$("#summary-tab, #ux-skills-tab, #tool-set-tab").click(function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html,body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    },'slow', function() {});
});
// ------------------------------------------------------------------------------
//Carousel ----------------------------------------------------------------------
$(".side-menu").click(function() {
    if($(window).width() < 768) {
        if ($(".side-menu").height() > 20) {
            console.log("shrink!");
            $(this).animate({height: '20'}, 300);
            $(".side-tab").hide(200);
        }

        else if ($(".side-menu").height() == 20){
            console.log('show');
            var menuHeight = window.innerHeight / 6;
            var resumeLoc = window.innerHeight / 6 + 70 + 20;
            $(this).animate({height: menuHeight}, 300);
            $(".side-tab").show(400);
        }
    }
});
// ------------------------------------------------------------------------------
//Tool Set ----------------------------------------------------------------------
