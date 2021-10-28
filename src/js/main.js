const mainBanner = () => {
	let names = []
	$(".swiper-wrapper .swiper-slide").each(function (i) {
		names.push($(this).data("name"));
	});

	console.log(names)

	let swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">'
					+ '<div class="bullet-inner">'
					+ '<p class="number">' + "0" + ([index + 1]) + '</p>'
					+ '<p class="name">' + (names[index]) + '</p>'
					+ '</div>'
					+ '</span>';
			},
		},
		watchSlidesProgress: true,
		autoplay: {
			delay: 2580,
			disableOnInteraction: false,
		},
		loop: true,
	});

	document.addEventListener('mouseenter', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.stop();
			el.classList.add('swiper-paused');

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
			// activeNavItem.style.animationPlayState = "paused";
		}
	}, true);

	document.addEventListener('mouseleave', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.start();
			el.classList.remove('swiper-paused');

			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

			activeNavItem.classList.remove('swiper-pagination-bullet-active');

			setTimeout(() => {
				activeNavItem.classList.add('swiper-pagination-bullet-active');
			}, 10);
		}
	}, true);
}

const counterNumber = () => {
	var isAlreadyRun = false;

	$(window).scroll(function () {

		$('.counter-sec').each(function (i) {

			var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
			var bottom_of_window = $(window).scrollTop() + $(window).height();


			if (bottom_of_window > (bottom_of_object + 20)) {
				if (!isAlreadyRun) {
					$('.counter').each(function () {
						$(this).prop('Counter', 0).animate({
							Counter: $(this).text()
						}, {
							duration: 3000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
				}
				isAlreadyRun = true;
			}
		});

	});

}


const setBackground = () => {
	$("[setBackground]").each(function () {
		var background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
			"background-repeat": "no-repeat",
		});
	});
}

const accordianList = () => {
	$('.accordion-title').click(function (e) {
		e.preventDefault();
		let $this = $(this);
		if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().slideUp(350);
			$this.parent().removeClass('active');
		} else {
			$this.parents().find('.side-inner').removeClass('show');
			$this.parents().find('.side-inner').slideUp(350);
			$this.parent().removeClass('active');
			$this.next().toggleClass('show');
			$this.next().slideDown(350);
			$this.parent().addClass('active');
		}
	});
	if ($('.side-navigation li').hasClass('active')) {
		$('.side-navigation li.active').find('.side-inner').slideDown()
	}
};

const sliderSwiper = () => {
	let swiper = new Swiper(".mySwiper .swiper-container", {
		observer: true,
		observeParents: true,
		breakpointsInverse: true,
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".mySwiper .swiper-button-next",
			prevEl: ".mySwiper .swiper-button-prev",
		},
	});
}

const navToggle = () => {
	$('.btn-toggle').on('click', function () {
		$(this).toggleClass('active')
		$(this).siblings('.navbar').toggleClass('active')
	})
}

const headerScroll = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	});
};
/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainBanner();
	counterNumber();
	setBackground();
	accordianList();
	navToggle();
	headerScroll()
});
