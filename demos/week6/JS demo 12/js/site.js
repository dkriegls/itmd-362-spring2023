// jQuery 3.x-style ready event and locally scoped $
jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#alt-box").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#alt-box").html("<p>&#10004;</p>");
    });
});
