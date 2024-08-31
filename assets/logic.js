document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});














function showSideBar() {
    const sidebar = $('.sidebar');
    $('.hamburger').click(function() {
        sidebar.css("display", "flex");
    });
}

function hideSideBar() {
    const sidebar = $('.sidebar');
    $('.close').click(function() {
        sidebar.css("display", "none");
    });
}
showSideBar();
hideSideBar();