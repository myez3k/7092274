/*=========================================
	Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 300);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(200, function() {
	$( ".preloadSpinner" ).remove();  
	});  
}


$(document).ready(function() {
	/*=========================================
		Parallax
	=========================================*/
	if ($(".parallax").length) {
		$('.parallax').jarallax();
	}
	/*=========================================
		Free Consultation Form
	=========================================*/

	if ($("#free-consultation-form").length) {
		$('#free-consultation-form').validate({
			errorPlacement: function(error,element) {
	            return true;
	        },
			rules: {
				full_name: {
					required: true,
				
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
				
				},
				message_1: {
					required: true,
				
				},
				message_2: {
					required: true,
				
				},
				message_3: {
					required: true,
				},
			},
			submitHandler: function(form) {
				//console.log("Test");
				var formData = $('#free-consultation-form').serialize();
				console.log(formData);
				$.ajax({
					type: 'POST',
					url: 'assets/php/popup-form.php',
					dataType: "json",
					data: formData,
					success: function (data) {
						console.log("Test"+ data);
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#free-consultation-form").trigger("reset");
							window.location.href = 'thank-you.html';
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

	/*=========================================
		Back To Top
	=========================================*/
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.backtotop').fadeIn(100);
        } else { 
            $('.backtotop').fadeOut(100); 
        } 
    }); 
    $('.backtotop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 100); 
        return false; 
    }); 

	// Jquery Code below for footer copyright Year
	$('#copyright_year').html(new Date().getFullYear());

});