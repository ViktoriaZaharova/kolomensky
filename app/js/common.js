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
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
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
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 890,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.about-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M15.5 1L1.5 18L15.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1.5 1L15.5 18L1.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    asNavFor: '.about-slider-preview'
});

$('.about-slider-preview').slick({
    slidesToShow: 1,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.about-slider',
    variableWidth: true,
    // infinite: false
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: true
            }
        }

    ]
});

$('.ecology-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M15.5 1L1.5 18L15.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next">' +
        '<svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1.5 1L15.5 18L1.5 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});


$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    $(".shops .tabs__content.active .slick-slider").slick('setPosition');
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

// выпадающее меню
$('.dropdown-item').on('click', function (e) {
    e.preventDefault();
   $(this).siblings('.dropdown-box').fadeToggle();
});

// main function
$(function () {
    // show list all
    $('.load-more').on('click', function (e) {
        e.preventDefault();
        $('.news-box-col:hidden').slice(0, 3).slideDown();

        let onBlock = $('.news-box-col:hidden').length;
        if(onBlock <= 0) {
            $('.load-more').hide();
        }
    });

    // show list all
});