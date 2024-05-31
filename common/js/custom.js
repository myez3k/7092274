// To add and remove class in Product Variation Section on Single Product Page
jQuery(window).scroll(function () {
	if (jQuery(this).scrollTop() > 150) {
		jQuery('.prodVarSection').addClass("active");
	} else {
		jQuery('.prodVarSection').removeClass("active");
	}
});	

jQuery(document).ready(function(){
	jQuery(".closeIcon").click(function(){
		jQuery(".prodVarSection").removeClass("active");
	});
});

jQuery(document).ready(function(){
	jQuery('.closeIcon').on('click', function(event) {        
		jQuery('.prodVarSection').slideToggle('slow');
	});
});