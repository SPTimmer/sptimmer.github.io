$(document).ready(function() {
    $("#header").load("assets/header.html", function () {
        let page = window.location.pathname.split("/").pop();
        if (page === "") {
            $("#index").addClass("active");
        } else {
            $("#" + page.split(".")[0]).addClass("active");
        }
    });
    $("#footer").load("assets/footer.html", function () {
        $("#year").text(new Date().getFullYear());
    });
});
function openMenu() {
    $("#menuItems").addClass("displayMenu");
}
function closeMenu() {
    $("#menuItems").removeClass("displayMenu");
}