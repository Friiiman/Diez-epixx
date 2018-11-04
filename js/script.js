$(document).ready(function(){

	$('.burger, .header_nav_list').click(function(){
	  $('.header_nav_list').toggleClass('menu_opened');
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".burger").length ) return;
	    $('.header_nav_list').removeClass('menu_opened');
	    event.stopPropagation();
	});


	var slickIsActive = false;

	checkSlider();

	$(window).on("resize", function(){
		checkSlider();
	});

	function checkSlider(){

		if( $(window).width() < 1279 ) {
			if( slickIsActive === false ) {
				$("#slider").slick();
				slickIsActive = true;
			}	
		}
		else {
			if( slickIsActive === true ) {
				$("#slider").slick("unslick");
				slickIsActive = false;
			}
		}

	}

});