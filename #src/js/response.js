$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.header-menu');

	if (w < 992) {
		if (!$('.header-menu').hasClass('done')) {
			$('.header-menu').addClass('done').appendTo(headerMenu);
		}
	} else {
		$.each($('.header-menu'), function(index, val) {
			if ($(this).hasClass('.header-menu--right')) {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependto($('.header__column').eq(2));
				}
			} else {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependto($('.header__column').eq(2));
				}
			}
		});
	}
}

function adaptive_function() {
	var w = $(window).outWidth();
	var h = $(window).outHeight();
	adaptive_header(w, h);
}

adaptive_function();
