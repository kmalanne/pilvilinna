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
});