$(document).ready(function () {
    $('iframe .player').css('max-width', '100vw!important')
    //Menu hamburger animation start
    const menuBtn = $('.menu-btn');
    const hamburger = $(".menu-btn_burger");
    const nav = $(".bottom-header-row");
    let showMenu = false;
    menuBtn.click(function () {
        if (!showMenu) {
            nav.css('display', 'block');
            setTimeout(function () {
                nav.css('opacity', '0.9');
            }, 300)
            showMenu = true;
        } else {
            nav.css('opacity', '0');
            setTimeout(function () {
                nav.css('display', 'block');
            }, 300)
            showMenu = false;
        }
    });
    $('.closeMenu').click(function () {
        nav.css('opacity', '0');
        setTimeout(function () {
            nav.css('display', 'none');
        }, 300)
        showMenu = false;
    })

    //banner click
    var src = $(".image-list-div ul li img").first().attr('src');
    $(".image-list-div ul li img").first().css({ "border": "3px solid #495057", "height": "80px" });
    $(".large-banner").attr('src', src);
    var listImage = ".image-list-div ul li img";
    $(listImage).click(function () {
        $(".large-banner").attr('src', $(this).attr('src'));
        $(listImage).css({ "border": "none", "height": "100px" });
        $(this).css({ "border": "3px solid #495057", "height": "80px" });
    });
    $('.horizontal-div').on('mousewheel DOMMouseScroll', function (event) {
        var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));
        $(this).scrollLeft($(this).scrollLeft() - (delta * 40));
        event.preventDefault();

    });
    //
    $('.toggle-button').click(function () {
        $(this).toggleClass('fa-plus fa-minus');
    });
    //
    $(window).resize(function () {
        if ($('body').width() < 992) {
            nav.css('display', 'none');
            showMenu = false;
        } else if ($('body').width() > 992) {
            nav.css('display', 'block');
            nav.css('opacity', '1');
            showMenu = false;
        }

    });
})