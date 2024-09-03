document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper', {

        slidesPerView: 1,
        freeMode:true,
        loop: true,
        spaceBetween:32,
        centeredSlides:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
    
            },
            // when window width is >= 480px
            480: {
      
            },
            // when window width is >= 640px
            996: {
                freeMode:true,
                slidesPerView: 2,
                spaceBetween:32,
                loop:true,



            }
          }
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