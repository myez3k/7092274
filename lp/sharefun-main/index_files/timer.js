$(document).ready(function($) {

    /*=========================================
        Countdown
    =========================================*/
    // Uncoment below line only for "YYYY/MM/DD" format
    // $('#counter').countdown('2032/12/11', function (event) {
    $('#counter').countdown('2032/12/11 22:00:00', function(event) {
        // $('#days').html(event.strftime('%D'));
        $('#hours').html(event.strftime('%H'));
        $('#minutes').html(event.strftime('%M'));
        $('#seconds').html(event.strftime('%S'));
    });

});