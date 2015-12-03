$(function(){
	var $header_menu = $('*[data-menu-header="header"]');
	$header_menu.find("a").on("click", function(e){
		e.preventDefault();
		var sibling = $(this).parent().next();
		if (sibling.hasClass("pp-nav__submenu")) {
			sibling.removeClass("pp-nav__submenu");
		} else {
			sibling.addClass("pp-nav__submenu");
		}	
	});
	
});