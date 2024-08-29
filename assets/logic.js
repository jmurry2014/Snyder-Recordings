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