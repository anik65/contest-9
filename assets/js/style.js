
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});
 
 
$(".users li").on("click", function () {
    $(".popup").toggleClass("block")
});
$(".cross i").on("click", function () {
    $(".popup").removeClass("block")
});