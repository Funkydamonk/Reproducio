$(document).ready(function() {
	$('.sliderbig').slick({
		arrows: false,
		dots: false,
		infinite: false,
		asNavFor: '.slider',
		slidesToShow: 3,
		vertical: true,
		focusOnSelect: true,
	})
});
$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: false,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		asNavFor: '.sliderbig',
	})
});


//sliderpop
$(document).ready(function() {
	$('.main__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
	})
});


//popup
