$(document).ready(function(){

	var bigPaintingsSlider = $('.big-paintings-slider');
	var smallPaintingsSlider = $('.small-paintings-slider');
	var potraitPaintingsSlider = $('.potrait-paintings-slider');
	var drawingsSlider = $('.drawings-slider');

	var navButton = $('.navButton');
	var menuPoint = $('.menuPoint');

	var showMoreButton = 	$('.home').find('.btn-outline-danger');

	var readyListender = function(e) {
		var startImageEL = $(e.currentTarget).find('.is-selected > picture > img');
		if(startImageEL.length > 0) {
			var startImageHeigth = startImageEL[0].clientHeight;
			if(typeof startImageHeigth !== 'undefinded' && startImageHeigth > 0) {
				var sliderViewportEL = $(e.currentTarget).find('.flickity-viewport');
				if(sliderViewportEL.length > 0) {
					var titleSpace = window.outerWidth < 576 ? 40 : 30;
					sliderViewportEL.css('height', (startImageHeigth+titleSpace)+'px');
					//console.log('ready: startImageHeigth is ' + startImageHeigth + ', viewport changed to ' + (startImageHeigth+titleSpace) + 'px');
				}
			}
		}
	};
	var changeListener = function(e, index) {
		var selectedImageEL = index == 0 ? $(e.currentTarget).find('.is-selected > picture > img') : $(e.currentTarget).find('.is-selected > img.flickity-lazyloaded');
		if(selectedImageEL.length > 0) {
			var selectedImageHeigth = selectedImageEL[0].clientHeight;
			if(typeof selectedImageHeigth !== 'undefinded' && selectedImageHeigth > 0) {
				var sliderViewportEL = $(e.currentTarget).find('.flickity-viewport');
				if(sliderViewportEL.length > 0) {
					var titleSpace = window.outerWidth < 576 ? 40 : 30;
					sliderViewportEL.css('height', (selectedImageHeigth+titleSpace)+'px');
					//console.log('change to ' + index + ': selectedImageHeigth is ' + selectedImageHeigth + ', viewport changed to ' + (selectedImageHeigth+titleSpace) + 'px');
				}
			}
		}	
	};
	var lazyLoadListener = function(e, cellElement ) {
		/* // image load error handling
		if(e.originalEvent.type == 'error') {
			e.preventDefault();
			$(e.originalEvent.target).attr('src','img/gallery/no_image.jpg');
			$(e.originalEvent.target).css('height','350px');
			$(e.originalEvent.target).closest('.gallery-cell').css('backgroundImage','url(../img/gallery/no_image.jpg)')
			$(e.originalEvent.target).closest('.gallery-cell').css('background-size','contain');
			var viewportHeight;
			var sliderViewportEL = $(e.currentTarget).find('.flickity-viewport');
			if(sliderViewportEL.length > 0) {
				if(window.outerWidth < 576) {
					viewportHeight = 350;
				} else if(window.outerWidth < 768) {
					viewportHeight = 350;
				} else {
					viewportHeight = 350;
				}
				sliderViewportEL.css('height', (viewportHeight)+'px');
			}
			return false;
		}
		*/
		var selectedImageEL = $(e.currentTarget).find('.is-selected > img');
		if(selectedImageEL.length > 0) {
			var selectedImageHeigth = selectedImageEL[0].clientHeight;
			if(typeof selectedImageHeigth !== 'undefinded' && selectedImageHeigth > 0) {
				var sliderViewportEL = $(e.currentTarget).find('.flickity-viewport');
				if(sliderViewportEL.length > 0) {
					var titleSpace = window.outerWidth < 576 ? 40 : 30;
					sliderViewportEL.css('height', (selectedImageHeigth+titleSpace)+'px');
					// var img = e.originalEvent.target;
					//console.log('lazyLoad ' + img.title + ': selectedImageHeigth is ' + selectedImageHeigth + ', viewport changed to ' + (selectedImageHeigth+titleSpace) + 'px');
				}
			}
		}
	};

	var hideMenuPointWhenMenuIsOpen = function(){
		if(menuPoint.is(":visible")) {
			menuPoint.hide();
		} else {
			menuPoint.show();
		}
	}

	var createPictures = function(imgSrc, imgTitle) {
		var picture, sourceLarge, sourceMedium, img, pictures=new Array();
		if(typeof imgSrc !== 'undefined' && imgSrc != '') {
			var imagesSources = imgSrc.split(';');
			for(var i=0; i<imagesSources.length; i++) {
				sourceLarge = document.createElement("SOURCE");
					sourceLarge.media = '(min-width: 768px)';
					sourceLarge.srcset = imagesSources[i].replace('.', '_large.');
				sourceMedium = document.createElement("SOURCE");
					sourceMedium.media = '(min-width: 576px)';
					sourceMedium.srcset = imagesSources[i].replace('.', '_medium.');
				img = document.createElement("IMG");
					img.src = imagesSources[i].replace('.', '_small.');
					img.title = imgTitle;
					img.alt = imgTitle;
				picture = document.createElement("PICTURE");
				picture.appendChild(sourceLarge);
				picture.appendChild(sourceMedium);
				picture.appendChild(img);
				pictures[i] = picture;
				//console.log(imagesSources[i]);
			}
		}
		return pictures;
	};
	var loadNextImage = function(e) {
		var hiddenImages = $('.home').find('.card-body > p.hideImgUntilLoaded');
		if(hiddenImages.length > 0) {
			var paragraph = $(hiddenImages[0]);
			var pictures = createPictures(paragraph.data('src'),paragraph.data('title'));
			for(var i=0; i<pictures.length; i++) {
				hiddenImages[0].appendChild(pictures[i]);
			}
			paragraph.removeClass('hideImgUntilLoaded').addClass('showImage');
			if(hiddenImages.length === 1) {
				$(e.currentTarget).hide();
			}
		}
		/*$('.home').find('.card-body > p').each(function(i, val) { 
			if($(this).attr('style') == 'display: none;') {
				console.log(val);
				return false;
			}
		});*/
	}

	if(bigPaintingsSlider.length > 0) {
		bigPaintingsSlider.on('ready.flickity', readyListender);
		bigPaintingsSlider.on('change.flickity', changeListener);
		bigPaintingsSlider.on('lazyLoad.flickity', lazyLoadListener);
		bigPaintingsSlider.flickity({
			// options
			//contain: true,
			//freeScroll: false,
			cellAlign: 'center',
			wrapAround: true,
			lazyLoad: true,
			autoPlay: true,
			autoPlay: 8000,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
			imagesLoaded: false,
		});
	}
	if(smallPaintingsSlider.length > 0) {
		smallPaintingsSlider.on('ready.flickity', readyListender);
		smallPaintingsSlider.on('change.flickity', changeListener);
		smallPaintingsSlider.on('lazyLoad.flickity', lazyLoadListener);
		smallPaintingsSlider.flickity({
			cellAlign: 'center',
			wrapAround: true,
			lazyLoad: true,
			//autoPlay: true,
			//autoPlay: 7000,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
			imagesLoaded: false,
		});
	}
	if(potraitPaintingsSlider.length > 0) {
		potraitPaintingsSlider.on('ready.flickity', readyListender);
		potraitPaintingsSlider.on('change.flickity', changeListener);
		potraitPaintingsSlider.on('lazyLoad.flickity', lazyLoadListener);
		potraitPaintingsSlider.flickity({
			cellAlign: 'center',
			wrapAround: true,
			lazyLoad: true,
			//autoPlay: true,
			//autoPlay: 8000,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
			imagesLoaded: true,
		});
	}
	if(drawingsSlider.length > 0) {
		drawingsSlider.on('ready.flickity', readyListender);
		drawingsSlider.on('change.flickity', changeListener);
		drawingsSlider.on('lazyLoad.flickity', lazyLoadListener);
		drawingsSlider.flickity({
			cellAlign: 'center',
			wrapAround: true,
			lazyLoad: true,
			//autoPlay: true,
			//autoPlay: 8000,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
			imagesLoaded: false,
		});
	}

	if(navButton.length > 0) {
		navButton.click(hideMenuPointWhenMenuIsOpen);
	}

	if(showMoreButton.length > 0) {
		showMoreButton.click(loadNextImage);
	}

});