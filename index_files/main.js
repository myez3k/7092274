/*==================================================
	Header Fixed
==================================================*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});

/*==================================================
	Preload Spinner
==================================================*/
$(window).on('load', function() {
    setTimeout(removeLoader, 300);
});

function removeLoader() {
    $(".preloadSpinner").fadeOut(200, function() {
        $(".preloadSpinner").remove();
    });
}

/*=========================================
	Back To Top
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


$(document).ready(function() {

    /*==================================================
        FAQ Section
	==================================================*/
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });


	/*=========================================
		Footer Copyrights Year
	=========================================*/
    // Javascript Code below for footer copyright Year
    $('#copyright_year').html(new Date().getFullYear());


    /*=========================================
		Order Form
	=========================================*/

    if ($("#orderform").length) {
        $("#orderform").validate({
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
                shipping_address: {
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
                var formData = $('#orderform').serialize();
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
                            $("#orderform").trigger("reset");
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

    /*==================================================
        Consultation Form
    ==================================================*/

    if ($("input[name='appointment_day']").length) {
        $("input[name='appointment_day']").datepicker();
    }
    if ($("input[name='appointment_time']").length) {
        $("input[name='appointment_time']").timepicker();
    }

    if ($("#consultationForm").length) {
        $("#consultationForm").validate({
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
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                appointment_day: {
                    required: true,
                },
                appointment_time: {
                    required: true,
                },
                issue: {
                    required: true,
                },
            },
            submitHandler: function(form) {
                var formData = $('#consultationForm').serialize();
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
                            $("#consultationForm").trigger("reset");
                            window.location.href = 'appointment-confirmation.html';
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