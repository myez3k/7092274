/* ==================================================
	Theme Name: Entrepreneurs Template
    Theme URL: https://www.ogwebsolutions.com/
    Author: OG Websolutions Pvt. Ltd.
    Version:  1.1
===================================================== */
/* ==================================================
    Preloader
================================================== */
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});

/*=========================================
    Back to top button
=========================================*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.backtotop').fadeIn(100);
    } else {
        $('.backtotop').fadeOut(100);
    }
});
$('.backtotop').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 100);
    return false;
});


$(document).ready(function($) {

    /* ==================================================
        Parallax
    ================================================== */
    if ($(".parallax").length) {
        $('.parallax').jarallax();
    }

    /* ================================================== 
        Copyright year auto update 
    ================================================== */
    $('#copy_rightYears').html(new Date().getFullYear());

    /*=========================================
        Registration Form
    =========================================*/
    if ($("#free-consultation-form").length) {
        $('#free-consultation-form').validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                full_name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
            },
            submitHandler: function(form) {
                var formData = $('#free-consultation-form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'assets/php/popup-form.php',
                    dataType: "json",
                    data: formData,
                    success: function(data) {
                        if (data.success) {
                            $('.form-status').addClass('alert alert-success');
                            $('.form-status').text('Your Message Has been Sent Successfully');
                            form.submit();
                            $('.form-status').slideDown().delay(3000).slideUp();
                            $("#free-consultation-form").trigger("reset");
                            window.location.href = 'webinar-confirmation.html';
                        } else {
                            $('.form-status').addClass('alert alert-danger');
                            $('.form-status').text('Error Occurred, Please Try Again');
                            $('.form-status').slideDown().delay(3000).slideUp();
                        }
                    },
                    error: function(xhr, status, error) {
                        $('.form-status').addClass('alert alert-danger');
                        $('.form-status').text('Something Went Wrong');
                        $('.form-status').slideDown().delay(3000).slideUp();
                    }
                });
            }
        });
    }
    /*=========================================
        Order Form
    =========================================*/
    if ($("#order-form").length) {
        $("#order-form").validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                first_name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                },
                billing_address: {
                    required: true,
                },
                city: {
                    required: true,
                },
                state: {
                    required: true,
                },
                zip: {
                    required: true,
                },
                country: {
                    required: true,
                }
            },
            submitHandler: function(form) {
                var formData = $('#order-form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'assets/php/order-form.php',
                    dataType: "json",
                    data: formData,
                    success: function(data) {
                        if (data.success) {
                            $('.form-status').addClass('alert alert-success');
                            $('.form-status').text('Your Message Has been Sent Successfully');
                            $('.form-status').slideDown().delay(3000).slideUp();
                            $("#order-form").trigger("reset");
                            form.submit();
                        } else {
                            $('.form-status').addClass('alert alert-danger');
                            $('.form-status').text('Error Occurred, Please Try Again');
                            $('.form-status').slideDown().delay(3000).slideUp();
                        }
                    },
                    error: function(xhr, status, error) {
                        $('.form-status').addClass('alert alert-danger');
                        $('.form-status').text('Something Went Wrong');
                        $('.form-status').slideDown().delay(3000).slideUp();
                    }
                });
            }
        });
    }

});