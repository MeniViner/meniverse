$(document).ready(function() {

    var currentPage = window.location.pathname;
    var route = currentPage.includes("route");
    var index = currentPage.startsWith("/public/");

    if (route) {
        $("#top-section").load("../../top-&-bottom/top-site.html");
    } else if (index) {
        $("#bottom-section").load("/top-&-bottom/top-site.html");
    } else {
        $("#top-section").load("../top-&-bottom/top-site.html");
    }

    if (route) {
        $("#bottom-section").load("../../top-&-bottom/bottom-site.html");
    } else if (index) {
        $("#bottom-section").load("/top-&-bottom/bottom-site.html");
    } else {
        $("#bottom-section").load("../top-&-bottom/bottom-site.html");
    }
});



function toggleSideMenu() {
    const sideMenu = document.querySelector('.side_menu');

    if (sideMenu.classList.contains('side-menu-open')) {
        sideMenu.classList.remove('side-menu-open');
    } else {
        sideMenu.classList.add('side-menu-open');
    }
}

