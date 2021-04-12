"use strict"

$(function() {

	let winWidth = $(window).width()

	/******Секция этапов работы******/

	let howItWorkCurrentSlide = 0
	let howItWorkTouchStart = 0
	let howItWorkTouchEnd = 0
	$('.how-it-works__tab').click(function() {
		$('.how-it-works__tab').removeClass('active')
		$(this).addClass('active')
		let i = $(this).index()
		howItWorkCurrentSlide = i
		$('.how-it-works__content-item-img').removeClass('active')
		$('.how-it-works__content-item-text').removeClass('active')
		$('.how-it-works__content-item-header').removeClass('active')
		$(`.how-it-works__content-item-img`).eq(i).addClass('active')
		$(`.how-it-works__content-item-text`).eq(i).addClass('active')
		$(`.how-it-works__content-item-header`).eq(i).addClass('active')
	})
	document.querySelector('.how-it-works__content').addEventListener('touchstart', function(e) {
		howItWorkTouchStart = e.changedTouches[0].clientX
	})
	document.querySelector('.how-it-works__content').addEventListener('touchend', function(e) {
		howItWorkTouchEnd = e.changedTouches[0].clientX
		if (howItWorkTouchStart - howItWorkTouchEnd > 50) {
			$('.how-it-works__tab').removeClass('active')
			$('.how-it-works__content-item-img').removeClass('active')
			$('.how-it-works__content-item-text').removeClass('active')
			$('.how-it-works__content-item-header').removeClass('active')
			howItWorkCurrentSlide < 4 ?	howItWorkCurrentSlide++ : howItWorkCurrentSlide = 0
			$('.how-it-works__tab').eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-img`).eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-text`).eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-header`).eq(howItWorkCurrentSlide).addClass('active')
		} else if (howItWorkTouchStart - howItWorkTouchEnd < -50) {
			$('.how-it-works__tab').removeClass('active')
			$('.how-it-works__content-item-img').removeClass('active')
			$('.how-it-works__content-item-text').removeClass('active')
			$('.how-it-works__content-item-header').removeClass('active')
			howItWorkCurrentSlide > 0 ?	howItWorkCurrentSlide-- : howItWorkCurrentSlide = 4
			$('.how-it-works__tab').eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-img`).eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-text`).eq(howItWorkCurrentSlide).addClass('active')
			$(`.how-it-works__content-item-header`).eq(howItWorkCurrentSlide).addClass('active')
		}
	})


	/******CMS секция******/

	// Слайдер CMS секции

	$('.cms__slider').slick({
		dots: true,
		arrows: false,
		infinite: false,
		draggable: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		speed: 1000,
		cssEase: 'ease',
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					speed: 600,
				}
			}, 
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 400,
				}
			}
		]
	})


	/******Секция Как начать******/

	// Слайдер секции Как начать


	let howToStartCurrentSlide = 1
	let howToStartNum = $('.how-to-start__content-item').length
	let howToStartSliderBlock = 1

	const howToStartSliderNum = function() {
		$('.how-to-start__btns .current-slide').html(howToStartCurrentSlide+`<span> / ${howToStartNum}</span>`)
		$('.how-to-start__tab').removeClass('active')
		$('.how-to-start__tab').eq(howToStartCurrentSlide - 1).addClass('active')
	}

	$('.how-to-start__content').slick({
		dots: true,
		infinite: false,
		draggable: false,
		speed: 200,
		fade: true,
	})

	howToStartSliderNum()

	$('.how-to-start__btns .slider-btn-prev').click(function() {
		if (howToStartCurrentSlide > 1 && howToStartSliderBlock) {
			howToStartSliderBlock = 0
			howToStartCurrentSlide--
			howToStartSliderNum()
			$('.how-to-start__content .slick-prev').trigger('click')
			setTimeout(() => howToStartSliderBlock = 1, 500)
		}
	})

	$('.how-to-start__btns .slider-btn-next').click(function() {
		if (howToStartCurrentSlide < howToStartNum && howToStartSliderBlock) {
			howToStartSliderBlock = 0
			howToStartCurrentSlide++
			howToStartSliderNum()
			$('.how-to-start__content .slick-next').trigger('click')
			setTimeout(() => howToStartSliderBlock = 1, 500)
		}
	})

	$('.how-to-start__tab').click(function() {
		$('.how-to-start__content .slick-dots li').eq($(this).index()).trigger('click')
		if (howToStartSliderBlock) {
			howToStartSliderBlock = 0
			howToStartCurrentSlide = $(this).index() + 1
			howToStartSliderNum()
			setTimeout(() => howToStartSliderBlock = 1, 500)
		}
	});


	/******Секция тарифов******/

	// Смена кол-ва источников

	$('.tarrifs__cards-slider').slick({
		dots: true,
		arrows: false,
		infinite: false,
		draggable: false,
		swipe: false,
		speed: 300,
		fade: true,
		dotsClass: 'slick-slick-dots',
	})

	let cardsSliderBlock = 1

	$('.tarrifs__sources-number-btns button').click(function() {
		if (cardsSliderBlock) {
			cardsSliderBlock = 0
			$(this).addClass('active')
			$(this).nextUntil().removeClass('active')
			$(this).prevUntil().removeClass('active')
			$('.tarrifs__content-item.slick-active .card__sources').text($(this).text())
			$('.tarrifs__content-item.slick-active .card__sources').attr('data-sources', $(this).index())
			$('.tarrifs__content-item.slick-active .slick-slick-dots li').eq($(this).index()).trigger('click')
			setTimeout(() => cardsSliderBlock = 1, 300)
		}
	})
		

	// Слайдер секции тарифов

	let tarrifsSliderBlock = 1

	$('.tarrifs__content').slick({
		dots: true,
		arrows: false,
		infinite: false,
		draggable: false,
		swipe: false,
		speed: 300,
		fade: true,
	})

	$('.tarrifs__tabs button').click(function() {
		if (tarrifsSliderBlock) {

			tarrifsSliderBlock = 0
			$('.tarrifs__tabs button').removeClass('active')
			$(this).addClass('active')

			if ($(this).index() === 0) {
				$('.tarrif__header p').text('Переоценка всех товаров  Вашего интернет-магазина с учётом цен поставщиков.')
			} else if ($(this).index() === 1) {
				$('.tarrif__header p').text('Добавление новых товаров из указанных сайтов источников.')
			} else {
				$('.tarrif__header p').text('Система легко сравнит цены вашего сайта и основных конкурентов на нужные товары.')
			}

			$('.tarrifs__content .slick-dots li').eq($(this).index()).trigger('click')

			setTimeout(() => tarrifsSliderBlock = 1, 300)

		}
	})

	// Смена валюты в секции тарифов

	let tarrifsPrices = []

	for (let i = 0; i < $('.card__price').length; i++) {
		tarrifsPrices.push(+($('.card__price').eq(i).html().replace(' <span>₽</span>', '')))
	}

	$('.tarrifs__currency button').click(function() {
		$('.tarrifs__currency button').removeClass('active')
		$(this).addClass('active')
		let currencyValue = +($(this).attr('data-currency-value'))
		let currencyIcon = $(this).attr('data-currency-icon')
		if ($('.tarrifs__currency button.active').text() === 'UAH') {
			for (let i = 0; i < $('.card__price').length; i++) {
				$('.card__price').eq(i).html(Math.ceil((tarrifsPrices[i])/(currencyValue*100))*100 + ` <span>${currencyIcon}</span>`)
			}
		} else {
			for (let i = 0; i < $('.card__price').length; i++) {
				$('.card__price').eq(i).html(Math.ceil((tarrifsPrices[i])/currencyValue) + ` <span>${currencyIcon}</span>`)
			}
		}
	})

	// Слайдер вкладок на мобильных устройствах

	if (winWidth <= 650) {
		$('.tarrifs__tabs').slick({
			dots: false,
			arrows: false,
			infinite: false,
			slidesToShow: 1.5,
			slidesToScroll: 1,
		})
	}

	/******Секция отзывов******/

	// Слайдер секции отзывов

	let reviewsCurrentSlide = 1
	let reviewsNum = $('.reviews__slider-item').length - 1
	let reviewsSliderBlock = 1

	const reviewsSliderNum = function() {
		$('.reviews__btns .current-slide').html(reviewsCurrentSlide+`<span> / ${reviewsNum}</span>`)
	}

	reviewsSliderNum()

	$('.reviews__slider').slick({
		dots: false,
		draggable: false,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 600,
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 1,
					speed: 400,
				}
			}
		]
	})

	$('.reviews__btns .slider-btn-prev').click(function() {
		if (reviewsCurrentSlide > 1 && reviewsSliderBlock) {
			reviewsSliderBlock = 0
			reviewsCurrentSlide--
			reviewsSliderNum()
			$('.reviews__slider .slick-prev').trigger('click')
			setTimeout(() => reviewsSliderBlock = 1, 600)
		}
	})

	$('.reviews__btns .slider-btn-next').click(function() {
		if (reviewsCurrentSlide < reviewsNum && reviewsSliderBlock) {
			reviewsSliderBlock = 0
			reviewsCurrentSlide++
			reviewsSliderNum()
			$('.reviews__slider .slick-next').trigger('click')
			setTimeout(() => reviewsSliderBlock = 1, 600)
		}
	})


	/******Попапы******/

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	})

	$('.card__order').click(function() {
		let tarrif = $(this).parent().children('.card__header').text()
		let price = $(this).parent().children('.card__price').text()
		let goodsNum = $(this).parent().children('.card__goods-num').text()
		let sources = + $(this).parent().children('.card__sources').attr('data-sources')
		$('.popup-tarrif h3').text('Тариф '+tarrif)
		$('.popup-tarrif .popup-tarrif-price').text(price+'/месяц')
		$('.popup-tarrif .popup-tarrif-include-item').eq(0).text('• Ежедневное обновление цен и наличия')
		$('.popup-tarrif .popup-tarrif-include-item').eq(1).text(`• Обновление до ${goodsNum}`)
		$('.popup-tarrif__tarrif-input').val(tarrif)
		if (sources === 0) {
			$('.popup-tarrif .popup-tarrif-include-item').eq(2).text('• До 3 источников цен')
		} else if (sources === 1) {
			$('.popup-tarrif .popup-tarrif-include-item').eq(2).text('• До 10 источников цен')
		} else {
			$('.popup-tarrif .popup-tarrif-include-item').eq(2).text('• Неограниченное количество источников цен')
		}
		$('.popup-tarrif .popup-tarrif-include-item').eq(3).text(`• Добавление новых товаров`)
	})


	/******Слайдер основных услуг******/

		$('.basic-services-mob').slick({
			dots: true,
			arrows: false,
			speed: 400,
			infinite: false,
		})


	/******Адаптивность******/


	if (winWidth <= 1050) {
		for (let i = 0; i < $('.how-it-works__tab').length; i++) {
			$('.how-it-works__tab').eq(i).children().eq(0).text($('.how-it-works__tab').eq(i).children().eq(0).text().replace('.', ''))
		}
	}


	/******Секция Как начать мобильная******/

	setTimeout(function() {
		$('.how-to-start__tab-mob').eq(0).trigger('click')
	}, 3000)

	$('.how-to-start__tab-mob').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).next().removeClass('active')
			$('.how-to-start__content-item-mob').height(0)
		} else {
			$('.how-to-start__tab-mob').removeClass('active')
			$('.how-to-start__content-item-mob').removeClass('active')
			$(this).addClass('active')
			$(this).next().addClass('active')
			$('.how-to-start__content-item-mob').height(0)
			let htsHeight = $('.how-to-start__content-item-mob.active').children().eq(0).outerHeight() + 16
			$('.how-to-start__content-item-mob.active').height(htsHeight)
		}
	})


	/******Слайдер карточек******/

	if (winWidth <= 1050) {
		$('.tarrifs__cards').slick({
			dots: true,
			dotsClass: 'cards-dots',
			arrows: true,
			speed: 400,
			infinite: false,

		})
		$('.cards-dots li button').each(function(i, el) {
			if (i%8 === 0) {
				$(this).text('1 тыс')
			} else if (i%8 === 1) {
				$(this).text('2 тыс')
			} else if (i%8 === 2) {
				$(this).text('5 тыс')
			} else if (i%8 === 3) {
				$(this).text('10 тыс')
			} else if (i%8 === 4) {
				$(this).text('20 тыс')
			} else if (i%8 === 5) {
				$(this).text('50 тыс')
			} else if (i%8 === 6) {
				$(this).text('80 тыс')
			} else if (i%8 === 7) {
				$(this).text('100 тыс')
			}
		})
	}

	// Прокрутка кнопок с количеством товаров

	if (winWidth <= 640) {
		let cardsDotsTouschStart = 0
		let cardsDotsTouschMove = 0
		let cardsDotsTouschEnd = 0
		let cardsDotsTranslate = 0
		let cardsDotsTranslateLatest = [0, 0, 0, 0, 0, 0, 0, 0, 0]
		let cardsDotStopTranslate = $('.cards-dots').outerWidth() - winWidth + 15
		document.querySelectorAll('.cards-dots').forEach(function(el, i) {
			el.addEventListener('touchstart', function(e) {
				cardsDotsTouschStart = e.changedTouches[0].clientX
				document.querySelector('body').style.overflow = 'hidden'
				el.style.transform = `translateX(${cardsDotsTranslateLatest[i]}px)`
				el.addEventListener('touchmove', function(e) {
					cardsDotsTouschMove = e.changedTouches[0].clientX
					cardsDotsTranslate = cardsDotsTouschMove - cardsDotsTouschStart + cardsDotsTranslateLatest[i]
					if (cardsDotsTranslate >= - cardsDotStopTranslate && cardsDotsTranslate <= 15) {
						el.style.transform = `translateX(${cardsDotsTranslate}px)`
					}
				})
			})
			el.addEventListener('touchend', function(e) {
			cardsDotsTranslateLatest[i] = + this.style.transform.replace('translateX(', '').replace('px)', '')
			document.querySelector('body').style.overflow = 'auto'
			})
		})
	}

	/******Ссылки******/

	if (winWidth <= 1050) {
		$('a[href="viber://chat?number=+380939500555"]').attr('href', 'viber://add?number=380939500555')
	}


	/******Формы******/

	$('.reset-form').click(function() {
		$('.popup form').trigger('reset')
		$('.popup form').css('background', '#fff')
		$('.popup form').find('.form__content-wrapper').css('opacity', '1')
		$('.popup form').find('.form__content-wrapper').css('visibility', 'visible')
		$('.popup form').find('.form__thanks').css('opacity', '0')
		$('.popup form').find('.form__thanks').css('visibility', 'hidden')
	})

	let err = 0

	$('form').submit(function(event) {
		event.preventDefault()
		$(this).find('[data-required]').each(function(index, el) {
			if ($(this).val() === '' || $(this).hasClass('error')) {
				$(this).addClass('error')
				$(this).addClass('wasErrored')
			}
		})
		err = $(this).find('.error').length

		if (!err) {
			$.ajax({
				type: 'POST',
				url: 'phpmailer/mail.php',
				data: $(this).serialize()
			})
			$(this).css('background', '#EAFCFF')
			$(this).find('.form__content-wrapper').css('opacity', '0')
			$(this).find('.form__content-wrapper').css('visibility', 'hidden')
			$(this).find('.form__thanks').css('opacity', '1')
			$(this).find('.form__thanks').css('visibility', 'visible')
		}
	})
	document.querySelectorAll('input').forEach(function(el, i) {
			el.addEventListener('input', function() {
				if (el.getAttribute('type') === 'tel') {
					el.value = el.value.replace(/[A-Za-zA-Яа-я-Ёе]/, '')
				}
				if (el.value !== '' && el.classList.contains('wasErrored')) {
					el.classList.remove('error')
				} else if (el.classList.contains('wasErrored')) {
					el.classList.add('error')
				}
				if (el.getAttribute('name') === 'email' && el.value === '') {
					el.nextElementSibling.innerText = 'Введите email'
				}
		})
	})
	document.querySelectorAll('textarea').forEach(function(el, i) {
			el.addEventListener('input', function() {
				if (el.value !== '' && el.classList.contains('wasErrored')) {
					el.classList.remove('error')
				} else if (el.classList.contains('wasErrored')) {
					el.classList.add('error')
				}
		})
	})
	$('select').change(function() {
		if ($(this).val() !== '' && $(this).hasClass('wasErrored')) {
			$(this).removeClass('error')
		} else if ($(this).hasClass('wasErrored')) {
			$(this).addClass('error')
		}
	})
	$('input[name="email"]').change(function(e) {
		if ((!$(this).val().includes('@') || !$(this).val().includes('.')) && $(this).val() !== '') {
			$(this).addClass('error')
			$(this).next().text('Email содержит "@" и "."')
		} else if ($(this).val() !== ''){
			$(this).removeClass('error')
		}
	})
	$('input[name="email"]').blur(function(e) {
		if ((!$(this).val().includes('@') || !$(this).val().includes('.')) && $(this).val() !== '') {
			$(this).addClass('error')
			$(this).next().text('Email содержит "@" и "."')
		}
	})
	$('input[name="email"]').focus(function(e) {
		if (!$(this).hasClass('wasErrored') || $(this).val() !== '') {
			$(this).removeClass('error')
		}
	})

	/******Навигация******/

	// Меню-бургер

	let burgerClickInd = 1

	$('.burger-btn').click(function() {
		if (winWidth > 1050) {
			$('.burger-btn').toggleClass('active')
			$('.header__container nav ul').toggleClass('active')
			$('.header__container nav').toggleClass('active')
			$('.header__container p').toggleClass('active')
			$('.log-in').toggleClass('active')
		} else if (burgerClickInd) {
			$('.burger-btn').addClass('active')
			$('.menu-mob').addClass('active')
			$('.menu-mob-bg').addClass('active')
			$('body').css('overflow', 'hidden')
			burgerClickInd = 0
		} else if (!burgerClickInd) {
			$('.burger-btn').removeClass('active')
			$('.menu-mob').removeClass('active')
			$('.menu-mob-bg').removeClass('active')
			$('body').css('overflow', 'auto')
			burgerClickInd = 1
		}
	})

	$('.menu-mob-bg').click(function() {
		$('.burger-btn').removeClass('active')
		$('.menu-mob').removeClass('active')
		$('.menu-mob-bg').removeClass('active')
		$('body').css('overflow', 'auto')
		burgerClickInd = 1
	})

	let currentScroll = 0
	let currentScroll2 = 0
	let headerFixedBlock = 1

	// Фиксация шапки и кнопок

	$('header.fixed').fadeOut()
	$('.up-btn').fadeOut()
	$('.fixed-contacts-btn').fadeOut()

	// Активный пункт меню

	$(window).scroll(function() {
		if (headerFixedBlock) {
			currentScroll = $(this).scrollTop()
			if (currentScroll > 1000 && currentScroll2 > currentScroll) {
				$('header.fixed').fadeIn()
			} else {
				$('header.fixed').fadeOut()
			}
			currentScroll2 = $(this).scrollTop()
		}
		if ($(this).scrollTop() > 1000) {
			$('.up-btn').css('visibility', 'visible')
			$('.up-btn').fadeIn()
			$('.fixed-contacts-btn').css('visibility', 'visible')
			$('.fixed-contacts-btn').fadeIn()
			$('.fixed-contacts').fadeIn()

		} else {
			$('.up-btn').fadeOut()
			$('.fixed-contacts-btn').fadeOut()
			$('.fixed-contacts').fadeOut()
		}

		let scrollTop = $(window).scrollTop()

		let st1 = $('.about-company').offset().top - $(window).height()/2
		let st2 = $('.our-offers').offset().top - $(window).height()/2
		let st3 = $('.our-clients').offset().top - $(window).height()/2
		let st4 = $('.how-it-works').offset().top - $(window).height()/2
		let st5 = $('.cms').offset().top - $(window).height()/2
		let st6 = $('.what-you-get').offset().top - $(window).height()/2
		let st7 = $('.how-to-start').offset().top - $(window).height()/2
		let st8 = $('.tarrifs').offset().top - $(window).height()/2
		let st9 = $('.reviews').offset().top - $(window).height()/2
		let st10 = $('.contact-to-us').offset().top - $(window).height()/2

		if (scrollTop >= st1 && scrollTop < st2) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(0).addClass('active')
			$('.menu-mob nav a').eq(0).addClass('active')
		} else if (scrollTop >= st2 && scrollTop < st3) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(0).addClass('active')
			$('.menu-mob nav a').eq(1).addClass('active')
		} else if (scrollTop >= st3 && scrollTop < st4) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(1).addClass('active')
			$('.menu-mob nav a').eq(2).addClass('active')
		} else if (scrollTop >= st4 && scrollTop < st5) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(2).addClass('active')
			$('.menu-mob nav a').eq(3).addClass('active')
		} else if (scrollTop >= st5 && scrollTop < st6) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(2).addClass('active')
			$('.menu-mob nav a').eq(6).addClass('active')
		} else if (scrollTop >= st6 && scrollTop < st7) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(2).addClass('active')
			$('.menu-mob nav a').eq(5).addClass('active')
		} else if (scrollTop >= st7 && scrollTop < st8) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(3).addClass('active')
			$('.menu-mob nav a').eq(4).addClass('active')
		} else if (scrollTop >= st8 && scrollTop < st9) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(4).addClass('active')
			$('.menu-mob nav a').eq(7).addClass('active')
		} else if (scrollTop >= st9 && scrollTop < st10) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(5).addClass('active')
			$('.menu-mob nav a').eq(8).addClass('active')
		} else if (scrollTop >= st10) {
			$('header nav a').removeClass('active')
			$('.menu-mob nav a').removeClass('active')
			$('header nav a').eq(6).addClass('active')
			$('.menu-mob nav a').eq(9).addClass('active')
		}

	})

	// Функции при клике по фикскированным кнопкам

	$('.up-btn').click(function() {
		$('html').animate({scrollTop: 0}, {easing: "swing"}, 1000)
	})

	let fixedContactsIndex = 1

	$('.fixed-contacts-btn').click(function() {
		$(this).toggleClass('active')
		if (fixedContactsIndex) {
			$('.fixed-contacts').css('visibility', 'visible')
			for (let i = 0; i < $('.fixed-contacts a').length; i++) {
				$('.fixed-contacts a').eq(i).css('transform', `translateY(${-82*(i+1)}rem) translateX(-50%)`)
				$('.fixed-contacts a').eq(i).css('opacity', `1`)
			}
			fixedContactsIndex = 0
		} else {
			for (let i = 0; i < $('.fixed-contacts a').length; i++) {
				$('.fixed-contacts a').eq(i).css('opacity', `0`)
				$('.fixed-contacts a').eq(i).css('transform', `translateX(-50%)`)
			}
			setTimeout(() => $('.fixed-contacts').css('visibility', 'hidden'), 600)
			fixedContactsIndex = 1
		}
	})

	// Работа навигации

	$('header nav a').click(function(e) {
		e.preventDefault()
		headerFixedBlock = 0
		$('.burger-btn').removeClass('active')
		$('.header__container nav ul').removeClass('active')
		$('.header__container nav').removeClass('active')
		$('.header__container p').removeClass('active')
		$('.log-in').removeClass('active')
		let sectionToScroll = $(this).attr('href')
		let offset = $(`.${sectionToScroll}`).offset().top
		$('html').animate({scrollTop: offset}, {easing: "swing"}, 1000)
		$('header.fixed').fadeOut()
		setTimeout(() => headerFixedBlock = 1, 1000)
	})

	$('.footer__nav a').click(function(e) {
		e.preventDefault()
		headerFixedBlock = 0
		$('.burger-btn').removeClass('active')
		$('.header__container nav ul').removeClass('active')
		$('.header__container nav').removeClass('active')
		$('.header__container p').removeClass('active')
		$('.log-in').removeClass('active')
		let sectionToScroll = $(this).attr('href')
		let offset = $(`.${sectionToScroll}`).offset().top
		$('html').animate({scrollTop: offset}, {easing: "swing"}, 1000)
		setTimeout(() => headerFixedBlock = 1, 1000)
	})

	$('.menu-mob nav a').click(function(e) {
		e.preventDefault()
		$('header.fixed').fadeOut()
		$('.menu-mob nav a').removeClass('active')
		$(this).addClass('active')
		headerFixedBlock = 0
		$('.burger-btn').removeClass('active')
		$('.menu-mob').removeClass('active')
		$('.menu-mob-bg').removeClass('active')
		$('body').css('overflow', 'auto')
		burgerClickInd = 1
		setTimeout(function() {
			let sectionToScroll = $('.menu-mob nav a.active').attr('href')
			let offset = $(`.${sectionToScroll}`).offset().top
			$('html').animate({scrollTop: offset}, {easing: "swing"}, 1000)
			setTimeout(() => headerFixedBlock = 1, 1000)
		}, 500)
	})
	
})