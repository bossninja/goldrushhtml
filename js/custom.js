// front-end javascripts

(function($) {
	
	$(window).ready(function() {
		
		$(window).scroll(function() {
			($(window).scrollTop() >= $('.wrap.navigation').position().top) ?
			$('.wrap.navigation').addClass('fixed') : $('.wrap.navigation').removeClass('fixed');
		});
		
		// Locations Fun
		$('.locations .tab').click(function(e){
			e.preventDefault();
			
			$('.locations .content').removeClass('active');			
			$($(this).attr('href')).addClass('active');
			
			$('.locations .tab').removeClass('active');
			$(this).addClass('active');
		});
		
		// Steps Fun
		$('.steps .tab, .steps .step').click(function(e){
			e.preventDefault();
			
			$('.steps .content').removeClass('active');			
			$($(this).attr('href')).addClass('active');
			
			$('.steps .tab').removeClass('active');
			$(this).addClass('active');

			var tab = $(this).attr('href');
			$('.steps .tab[href*="' + tab + '"]').addClass('active');
		});
		
		// ScrollTo Fun
		$('nav a').click(function(e){
			e.preventDefault();
			$("body, html").animate({
				'scrollTop':$($(this).attr('href')).position(document.body).top-80
			});
		});
		
	});

})(jQuery);
