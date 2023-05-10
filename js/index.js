// scroll header change
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
        $(".header").addClass("fixed-header");
    } else {
        $(".header").removeClass("fixed-header");
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('#goToTop_btn').css({
            'display': 'block'
        })
    } else {
        $('#goToTop_btn').css({
            'display': 'none'
        })
    }
});
$('#goToTop_btn').click(function () {
    $("html, body").animate({
        scrollTop: 0
    });
    return false;
});

// search button
function openSacle() {
    $('.search-layout').addClass('active');
}
function closeScale() {
    $('.search-layout').removeClass('active');
}

// theme change
function themeswitch() {
    document.getElementById('body').classList.toggle("dark");
}

//fancybox
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "close"
    ],
    loop: true,
});

// owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
})

