$(document).ready(function() {

    var currentPage = window.location.pathname;
    var route = currentPage.includes("route");

    if (route) {
        $("#top-section").load("../../top-&-bottom/top-site.html");
    } else {
        $("#top-section").load("../top-&-bottom/top-site.html");
    }

    if (route) {
        $("#bottom-section").load("../../top-&-bottom/bottom-site.html");
    } else {
        $("#bottom-section").load("../top-&-bottom/bottom-site.html");
    }
});
