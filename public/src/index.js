$(function () {
    $(".navbar-nav a[href^='#'], .carousel-link-btn[href^='#'], .order-link-btn[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });

    var navbar = $('.navbar');
    var navbarHeight = navbar.outerHeight();
    var lastScrollTop = 0;
    var delta = 20;

    $(window).scroll(function (event) {
        if (window.scrollY < 600) {
            return;
        }

        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        if (st > lastScrollTop && st > navbarHeight) {
            navbar.addClass('navbar-scroll-custom');
        } else {
            if (st + $(window).height() < $(document).height()) {
                navbar.removeClass('navbar-scroll-custom');
            }
        }

        lastScrollTop = st;
    });
});