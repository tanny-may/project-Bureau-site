 /* BURGER MENU */

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.h-nav');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
});

 
 /* SWIPER */

var swiper1920 = new Swiper('.swiper1920', {
    autoplay: {
        delay: 3000,
    }, 
    pagination: {
        el: '.swiper-pagination1920',
    },
    allowTouchMove: true,
    loop: true,
});
var swiper1024 = new Swiper('.swiper1024', {
    autoplay: {
        delay: 3000,
    }, 
    pagination: {
        el: '.swiper-pagination1024',
    },
    allowTouchMove: true,
    loop: true,
});
var swiper768 = new Swiper('.swiper768', {
    autoplay: {
        delay: 3000,
    }, 
    pagination: {
        el: '.swiper-pagination768',
    },
    allowTouchMove: true,
    loop: true,
});
var swiper480 = new Swiper('.swiper480', {
    autoplay: {
        delay: 3000,
    }, 
    pagination: {
        el: '.swiper-pagination480',
    },
    allowTouchMove: true,
    loop: true,
});

/* TABS */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work-step__btn').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active');
            });
            document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
        });

        e.addEventListener('click', function (e) {
            const tabDefault = e.currentTarget.dataset.default;
            document.querySelectorAll('.work-step__btn').forEach(function (e) {
                e.classList.remove('work-step__btn--default');
            });
            document.querySelector(`[data-path='${tabDefault}']`).classList.add('work-step__btn--default');
        });
    });
});

 /* ACCORDION */

$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
  } );