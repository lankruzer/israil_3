$(function() {

	// mobile menu toggle
	$('.btn-toggle-menu').click(function () {
		$(this).toggleClass('btn-toggle-menu_active');
		$('.header-nav-list').toggleClass('header-nav-list_active');
	});
	// /mobile menu toggle

	// load map
	if (document.getElementById('map')) {
		var map = document.createElement('script');
		map.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqBlmTRaQhOolYRHDEIR2XmJ6wlIAHyGc&callback=initMap';
		map.async = true;
		map.defer = true;
		$('body').append(map);
	}
	// /load map

});

// init map
function initMap() {
	var uluru = {lat: 31.769000, lng: 35.213818};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});

	var image;

	if ($(window).width() > 1400) {
		image = 'img/map-mark-xxl.png';
	} else if ($(window).width() > 992) {
		image = 'img/map-mark-xl.png';
	} else {
		image = 'img/map-mark-xs.png';
	}
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
	});
}
// /init map