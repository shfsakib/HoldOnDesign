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