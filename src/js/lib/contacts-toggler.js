$('.nav-menu__toggler').click(function () {
	$('.overlay').toggleClass('shown');
	// $('.nav-menu').toggleClass('nav-menu__toggler--active');
});


$('.overlay').click(function (evt) {
	const $overlay = $(evt.currentTarget);
	if ($overlay.hasClass('shown')) {
		$overlay.removeClass('shown');
		$('.nav-menu').removeClass('nav-menu--active');
		$('.nav-menu__toggler').removeClass('nav-menu__toggler--active');
	}
});

