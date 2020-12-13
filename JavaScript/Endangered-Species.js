// ------------------------------------------------------------------------------
//Scroll Behaviour --------------------------------------------------------------
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
    if($(window).width() <= 576) {;
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("side-nav").style.top = "69px";
        } else {
        document.getElementById("side-nav").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}
//window.addEventListener('DOMContentLoaded', () => {
//    const observer = new IntersectionObserver(entries => {
//        entries.forEach(entry => {
//            const id = entry.target.getAttribute('id');
//            if (entry.intersectionRatio > 0) {
//                console.log("add focus on side-tab")
//                document.querySelector(`.side-case-menu a[href="#${id}"]`).parentElement.classList.addClass('active-side');
//            }
//            else {
//                document.querySelector(`.side-case-menu a[href="#${id}"]`).parentElement.classList.removeClass('active-side');
//            }
//        });
//    });
    // Track all sections that have an `id` applied
//    document.querySelectorAll('Section[id]').forEach((section) => {
//        observer.observe(section);
//    });
//});

//View Toggle 1 "Search Suggestions"---------------------------------------------
$("#desktop-MichaelSearches").click(function() {
    console.log("MichaelSearches desktop");
    var image = $(".MichaelSearches");
    image.fadeOut(function() {
        image.css({"min-height": "300px",})
        image.attr("src", "../images/Endangered/UI Interactions/desktop-search-bar-ui.gif").fadeIn();
        image.css({
            "box-shadow": "none",
            "width": "100%",
            "border-radius": "0",
            "object-fit": "contain",
            "max-height": "400px",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-MichaelSearches").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-MichaelSearches").click(function() {
    console.log("MichaelSearches mobile");
    var image = $(".MichaelSearches");
    image.fadeOut(function() {
        image.css({"min-height": "600px",})
        image.attr("src", "../images/Endangered/UI Interactions/mobile v2 search.gif");
        image.css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
            "object-fit": "cover",
            "max-height": "400px",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-MichaelSearches").attr("class", "desktop-icon desktop-disabled");
});
// ------------------------------------------------------------------------------
//View Toggle 2 "Search Refine"--------------------------------------------------
$("#desktop-MichaelRefines").click(function() {
    console.log("MichaelRefines desktop");
    var image = $(".MichaelRefines");
    image.fadeOut(function() {
        image.css({"min-height": "300px",})
        image.attr("src", "../images/Endangered/UI Interactions/desktop-filters-ui.gif");
        image.css({
            "box-shadow": "none",
            "width": "100%",
            "border-radius": "0",
            "object-fit": "contain",
            "max-height": "400px",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-MichaelRefines").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-MichaelRefines").click(function() {
    console.log("MichaelRefines mobile");
    var image = $(".MichaelRefines");
    image.fadeOut(function() {
        image.css({"min-height": "600px",})
        image.attr("src", "../images/Endangered/UI Interactions/mobile v2 refine.gif");
        image.css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
            "object-fit": "cover",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-MichaelRefines").attr("class", "desktop-icon desktop-disabled");
});
// ------------------------------------------------------------------------------
//View Toggle 3 "Download Button"------------------------------------------------
$("#desktop-Profile").click(function() {
    console.log("MichaelProfile desktop");
    var image1 = $(".MichaelDownloads");
    var image2 = $(".MichaelSaves");
    $.merge(image1, image2).fadeOut(function() {
        $.merge(image1, image2).css({"min-height": "300px",})
        image1.attr("src", "../images/Endangered/UI Interactions/desktop-download-ui.gif");
        image2.attr("src", "../images/Endangered/UI Interactions/desktop-save-ui.gif");
        if($(window).width() <= 576) {
            console.log("efefefe")
            $.merge(image1, image2).css({
                "min-height": "auto",
                "width": "100%",
                "margin-left": "-20px",
                "align-items": "flex-start",
            })
        }
        else {
            $.merge(image1, image2).css({
                "width": "170%",
            });
            //$(".demo-frame-1-2, .demo-frame-2-2").css({"align-items": "center",});
        };
        $.merge(image1, image2).css({
            "box-shadow": "none",
            "border-radius": "0",
            "max-height": "400px",
        });
        $(image2).css({
            "left": "0"
        })
        $(image2).css({
            "right": "0"
        })
        $.merge(image1, image2).fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-Profile").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-Profile").click(function() {
    console.log("MichaelProfile mobile");
    var image1 = $(".MichaelDownloads");
    var image2 = $(".MichaelSaves");
    $.merge(image1, image2).fadeOut(function() {
        $.merge(image1, image2).css({"min-height": "600px",})
        image1.attr("src", "../images/Endangered/UI Interactions/mobile v2 download.gif");
        image2.attr("src", "../images/Endangered/UI Interactions/mobile v2 save.gif");
        if($(window).width() <= 576) {
            console.log("efefefe")
            $.merge(image1, image2).css({
                "min-height": "auto",
                "width": "100%",
                "margin-left": "-20px",
                "align-items": "flex-start",
            })
        }
        else {
        $.merge(image1, image2).css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
        })};
        $.merge(image1, image2).fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-Profile").attr("class", "desktop-icon desktop-disabled");
});