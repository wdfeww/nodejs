$(document).ready(function () {
    $("#submit").on('click', function () {
        var radius = $("#radius").val();
        $.ajax({
            url: "http://localhost:3000/calculations?r=" + radius
            , method: "GET"
        }).done(function (data) {
            $("#result").text("capacity: " + data.capacity.toFixed(2) + " circumference: " + data.circumference.toFixed(2));
        }).fail(function () {});
    });
});