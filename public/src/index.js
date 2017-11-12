$(document).ready(function () {
    $(".navbar-nav a[href^='#'], .carousel-link-btn[href^='#'], .order-link-btn[href^='#']").on('click', function (e) {
        e.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });

    var lastScrollTop = 0;
    var navbar = $('.navbar');
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.addClass('navbar-scroll-custom');
        } else {
            navbar.removeClass('navbar-scroll-custom');
        }
        lastScrollTop = st;
    });
});