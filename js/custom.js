// front-end javascripts

$(function() {
	$(window).scroll(function() {
		($(window).scrollTop() >= $('.wrap.navigation').position().top) ?
		$('.wrap.navigation').addClass('fixed') : $('.wrap.navigation').removeClass('fixed');
	});
});
