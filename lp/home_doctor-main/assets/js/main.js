/* ==================================================
    Theme Name: Book Funnel Template
    Theme URL: https://www.ogwebsolutions.com/
    Author: OG Websolutions Pvt. Ltd.
    Version:  1.0
===================================================== */
jQuery(document).ready(function ($) {

    /*=========================================
         Back to top button
     =========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').fadeIn(100);
        } else {
            $('.backtotop').fadeOut(100);
        }
    });
    $('.backtotop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });

    /*=========================================
	## Nav bar.
    =========================================*/
    $('.navbar-toggler').click(function () {
        $(this).toggleClass("show");

    });
    $('.navbar-collapse .nav-item .nav-link').click(function () {
        $('#navbarNav').removeClass("show");
        $('.navbar-toggler').removeClass("show");
    });
    $(document).click(function () {
        if ($('#navbarNav').hasClass("show")) {
            $('.navbar-toggler').removeClass("show");
            $('#navbarNav').removeClass("show");
        }
    });


    /*=========================================
            ## Header
    =========================================*/
    window.onscroll = function () { myFunction() };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("header-fixed");
        } else {
            header.classList.remove("header-fixed");
        }
    }

    /*=========================================
           Registration Form
       =========================================*/
    if ($("#consultationForm").length) {
        $('#consultationForm').validate({
            errorPlacement: function (error, element) {
                return true;
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            submitHandler: function (form) {
                var formData = $('#consultationForm').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'assets/php/popup-form.php',
                    dataType: "json",
                    data: formData,
                    success: function (data) {
                        if (data.success) {
                            $('.form-status1').addClass('alert alert-success');
                            $('.form-status1').text('Your Message Has been Sent Successfully');
                            form.submit();
                            $('.form-status1').slideDown().delay(3000).slideUp();
                            $("#consultationForm").trigger("reset");
                            window.location.href = 'order.html';
                        } else {
                            $('.form-status1').addClass('alert alert-danger');
                            $('.form-status1').text('SMTP connect() failed.');
                            $('.form-status1').slideDown().delay(3000).slideUp();
                        }
                    },
                    error: function (xhr, status, error) {
                        $('.form-status1').addClass('alert alert-danger');
                        $('.form-status1').text('Something Went Wrong');
                        $('.form-status1').slideDown().delay(3000).slideUp();
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
            errorPlacement: function (error, element) {
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
            submitHandler: function (form) {
                var formData = $('#order-form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'assets/php/order-form.php',
                    dataType: "json",
                    data: formData,
                    success: function (data) {
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
                    error: function (xhr, status, error) {
                        $('.form-status').addClass('alert alert-danger');
                        $('.form-status').text('Something Went Wrong');
                        $('.form-status').slideDown().delay(3000).slideUp();
                    }
                });
            }
        });
    }

    $(".mobile-button").on("click", function () {
        $(this).toggleClass("active");
    });

});

/* ================================================== */
/* FAQ */
/* ================================================== */
function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

$('.accordion-section-title').click(function (e) {
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