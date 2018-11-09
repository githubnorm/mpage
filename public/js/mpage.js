$(document).ready(function(){

	var flickityCarousel = $('.main-carousel');
	var navButton = $('.navButton');
	var menuPoint = $('.menuPoint');

	if(flickityCarousel.length > 0) {
		$('.main-carousel').flickity({
			// options
			cellAlign: 'center',
			contain: true,
			wrapAround: true,
			freeScroll: false
		});
	}
	
	/* @todo: script for hide menuPoint when toggle navButton */
	if(navButton.length > 0) {
		navButton.click(function(){
			if(menuPoint.is(":visible")) {
				menuPoint.hide();
			} else {
				menuPoint.show();
			}
		});
	}

	/* @todo: script for show button */

});