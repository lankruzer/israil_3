$(function() {

	// menu fixed
	window.onscroll = function() {
		myFunction()
	};

	var header = document.querySelector(".header");

	var sticky = header.offsetTop;

	myFunction();

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("header_fixed");
		} else {
			header.classList.remove("header_fixed");
		}
	}
	// /menu fixed

	// mobile menu toggle
	$('.btn-toggle-menu').click(function () {
		$(this).toggleClass('btn-toggle-menu_active');
		$('.header-nav-list').toggleClass('header-nav-list_active');
	});
	// /mobile menu toggle

	// mobile dropdown-toggle
	if (document.querySelector('.dropdown-toggle')) {

		$('.dropdown-toggle').click(function () {
			$(this).toggleClass('dropdown-toggle_active');
			$(this).parent().find('.dropdown-list').slideToggle(250)
		})

	}
	// /mobile dropdown-toggle

	// load map
	if (document.getElementById('map')) {
		var map = document.createElement('script');
		map.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqBlmTRaQhOolYRHDEIR2XmJ6wlIAHyGc&callback=initMap';
		map.async = true;
		map.defer = true;
		$('body').append(map);
	}
	// /load map

	// project slider
	if (document.querySelector('.project')) {
		$('.slider-for').slick({
			rtl: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			draggable: false
		});

		$('.slider-nav').slick({
			rtl: true,
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: '.slider-for',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 2
					}
				}
			]

		});
	}
	// /project slider

});

// init map
function initMap() {
	var uluru = {lat: 31.769000, lng: 35.213818};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});

	var image = 'img/new-map-mark.png';

	// if ($(window).width() > 1400) {
	// 	image = 'img/map-mark-xxl.png';
	// } else if ($(window).width() > 992) {
	// 	image = 'img/map-mark-xl.png';
	// } else {
	// 	image = 'img/map-mark-xs.png';
	// }
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
	});
}
// /init map