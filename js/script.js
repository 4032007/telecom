$(function(){
//header
	function header_promo(){
		var top = $(document).scrollTop();
		if (top > 5) $('.wr-header').addClass('fixed');
		else $('.wr-header').removeClass('fixed');	
	}
	$(window).scroll(function() {
		header_promo();
	});
	header_promo();
	
//sliders
	$('.main-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade:true,
			responsive: [
				{
					breakpoint: 999,
					settings: {
						arrows: false
					}
				}
			]
		});
	
	$('.slider-keys').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.keys-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		
		$(this).on('afterChange', function(event, slick, currentSlide){
			$(this).parent().find('.keys-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite:true,
			fade: true,
			prevArrow: $(this).parent().find('.keys-prev'),
			nextArrow: $(this).parent().find('.keys-next')
		});
	});

	$('.slider-task').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.task-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).on('beforeChange', function(){
			$(this).addClass('active');
		});
		$(this).on('afterChange', function(event, slick, currentSlide){
			$(this).parent().find('.task-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite:true,
			fade: false,
			prevArrow: $(this).parent().find('.task-prev'),
			nextArrow: $(this).parent().find('.task-next'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-top-keys').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.keys-full-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).on('beforeChange', function(){
			$(this).addClass('active');
		});
		$(this).on('afterChange', function(event, slick, currentSlide){
			$(this).parent().find('.keys-full-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite:true,
			fade: false,
			prevArrow: $(this).parent().find('.keys-full-prev'),
			nextArrow: $(this).parent().find('.keys-full-next')
		});
	});
	
	$('.slider-bot-keys').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.keys-full-bot-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).on('beforeChange', function(){
			$(this).addClass('active');
		});
		$(this).on('afterChange', function(event, slick, currentSlide){
			$(this).parent().find('.keys-full-bot-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite:true,
			fade: false,
			prevArrow: $(this).parent().find('.keys-full-bot-prev'),
			nextArrow: $(this).parent().find('.keys-full-bot-next')
		});
	});
	
	$('.slider-top-service').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.service-full-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).on('beforeChange', function(){
			$(this).addClass('active');
		});
		$(this).on('afterChange', function(event, slick, currentSlide){
			$(this).parent().find('.service-full-count').text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite:true,
			fade: false,
			prevArrow: $(this).parent().find('.service-full-prev'),
			nextArrow: $(this).parent().find('.service-full-next')
		});
	});
	
	
	$('.main-gal-compare').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:false,
		fade: true,
		asNavFor: '.thumb-compare'
	});
	$('.thumb-compare').slick({
		slidesToScroll: 1,
		asNavFor: '.main-gal-compare',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		variableWidth: true 
	});

//more
	$('.down-link a').click(function(){
		$(this).toggleClass('active').parent().prev().toggleClass('active')
		return false;
	});	
	
//maps
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.8496937,37.5049427],
				zoom: 14,
				controls: []
			}, {
				suppressMapOpenBlock: false
			}),
			
			myPlacemark = new ymaps.Placemark([55.8496937,37.5049427], {
				balloonContent: '<div class="baloon-map">г. Москва, ул. Кронштадтский бульвар, 39к1</div>'
			}, {

				iconLayout: 'default#image',
				iconImageHref: 'images/ico-map.svg',
				iconImageSize: [92, 112],
				iconImageOffset: [0, -80]
			});
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects
			.add(myPlacemark);
	});
	
//menu mobile
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.menu-top, .wr-header').toggleClass('active')
		$('body').toggleClass('active')
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('.menu-top').length) return;
		$('.menu-tt, .menu-top').removeClass('active');
	    event.stopPropagation();
	});
});