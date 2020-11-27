$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    $(".tabs__content.active .slick-slider").slick('reinit');
});

$('.tenants-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M15.5 1L1.5 18L15.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1.5 1L15.5 18L1.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
});

$('.shops-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M15.5 1L1.5 18L15.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1.5 1L15.5 18L1.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});