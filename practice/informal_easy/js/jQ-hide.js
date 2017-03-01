$(document).ready(function () {
        $("#btnShow").click(function () {
            $("#divMsg").show();
        });
        $("#btnHide").click(function () {
            $("#divMsg").hide();
        });
        $("#btnChange").click(function () {
            $("#divMsg").html("Hello world, too!");
        });
});

