$(function () {
	$(".raiting-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});

	$(".product__slider-inner").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$",
	});


	$('.product__search__show-large').on('click', function () {
		$('.product__search__show-large').addClass('product-btn-active');
		$('.product__search__show-list').removeClass('product-btn-active');
		$('.page_items-products__post-wrapper').removeClass('products__wrapper-list');

	});
	$('.product__search__show-list').on('click', function () {
		$('.product__search__show-list').addClass('product-btn-active');
		$('.product__search__show-large').removeClass('product-btn-active');
		$('.page_items-products__post-wrapper').addClass('products__wrapper-list');
	});

	$('.products__search__sort-down').on('click', function () {
		$('.products__search__sort-down').removeClass('sort-active');
		$('.products__search__sort-up').addClass('sort-active');
	});
	$('.products__search__sort-up').on('click', function () {
		$('.products__search__sort-up').removeClass('sort-active');
		$('.products__search__sort-down').addClass('sort-active');
	});

	$(".basket-box").hover(function () {
		if ($('.basket__items').is(':hidden')) { // задаем функцию при наведении курсора на элемент	
			$(".basket__items").slideDown();
		}
	}, function () {
		if ($('.basket__items').is(':visible')) {
			// / задаем функцию, которая срабатывает, когда указатель выходит из элемента
			$(".basket__items").slideUp();
		}
	});
	$(".message-box").hover(function () { // задаем функцию при наведении курсора на элемент
		if ($('.message-box .list__items').is(':hidden')) {
			$(".message-box .list__items").slideDown()
		}
	}, function () {
		if ($('.message-box .list__items').is(':visible')) {	// задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
			$(".message-box .list__items").slideUp();
		}
	});
	$(".notification-box").hover(function () {
		if ($('.notification-box .list__items').is(':hidden')) { // задаем функцию при наведении курсора на элемент	
			$(".notification-box .list__items").slideDown()
		}
	}, function () {
		if ($('.notification-box .list__items').is(':visible')) { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
			$(".notification-box .list__items").slideUp();
		}
	});

	$('.burger__btn').on('click', function () {
		$('.header__inner__panel').slideToggle();

	});
	$('.burger__btn').on('click', function () {
		$('.header__down').slideToggle();
	});

	$('.wrapper-tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.wrapper-tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.wrapper-tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$('input:file, select').styler({
		fileBrowse: 'Choose File',
		filePlaceholder: 'No File Choosen',
	});

	var mixer = mixitup('.product__inner-filter-item');
});
