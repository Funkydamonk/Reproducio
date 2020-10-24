$(document).ready(function() {
	$('.sliderbig').slick({
		arrows: false,
		dots: false,
		infinite: false,
		asNavFor: '.slider',
		rows: 3,
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
