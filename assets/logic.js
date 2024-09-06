document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper with Coverflow effect
    var swiper = new Swiper('.swiper', {
        initialSlide: 1,
        slidesPerView: 1,
        freeMode: true,
        loop: true,
        spaceBetween: 32,
        // effect: 'coverflow', // Add Coverflow effect
        // coverflowEffect: {
        //     rotate: 0, // Rotate the slides
        //     stretch: 0, // Stretch the slides
        //     depth: 100, // Depth of the slides
        //     modifier: .3, // Multiplier effect
        //     slideShadows: true, // Enable slide shadows
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                // Customize for screens >= 320px
            },
            480: {
                // Customize for screens >= 480px
            },
            996: {
                initialSlide: 1,
                slidesPerView: 'auto',
                spaceBetween: 32,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    });


    let map;

    async function initMap() {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            center: { lat: 38.987122, lng: -94.668488 },
            zoom: 15,
            mapId: '6373bf33e2f283f2',
        });

const pinView= new google.maps.marker.PinView({
    background:'#42A418',
    borderColor:'#42A418',
    glyphColor:'#fff'
  
})

        const markerView = new google.maps.marker.AdvancedMarkerView({
            map,
            position: { lat: 38.987122, lng: -94.668488 },
            content:pinView.element
        });
    }

    initMap();
    $('form button').on("click",function(e){    
        alert('Thank you for your submission!')
        e.preventDefault();
      
    });


});

function showSideBar() {
    const sidebar = $('.sidebar');
    $('.hamburger').click(function () {
        sidebar.css("display", "flex");
    });
}

function hideSideBar() {
    const sidebar = $('.sidebar');
    $('.close').click(function () {
        sidebar.css("display", "none");
    });
}

// GOOGLE MAPS API










showSideBar();
hideSideBar();