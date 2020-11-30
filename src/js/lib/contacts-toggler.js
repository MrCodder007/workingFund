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

const mainElOffetTop = document.querySelector('main').offsetTop;
console.log(mainElOffetTop);
$(window).on("scroll", function() {
	if($(window).scrollTop() > mainElOffetTop) {
		$(".nvm").addClass("btn-color");
	} else {
		//remove the background property so it comes transparent again (defined in your css)
		$(".nvm").removeClass("btn-color");
	}
});