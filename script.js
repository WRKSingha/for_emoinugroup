// navigation-bar sticky
$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
		var winWeidth = $(window).width();
		if (winWeidth >= 801)
		{
			if (winTop >= 90) {
				$(".header-wrapper").addClass("sticky-header");
			} else {
				$(".header-wrapper").removeClass("sticky-header");
			}
		}
    });
});
//nav-bar mobile
$('.menu-toggle').click(function () {
	$(".menu-item").toggleClass("mobile-nav");
	$(this).toggleClass("is-active");
  });
  
  $('.nav a').click(function () {
	$(".menu-toggle").toggleClass("is-active");
	$(".menu-item").toggleClass("mobile-nav");
  });

// img slider
$(document).ready(function($) {
	var sliderTimer = 5000;
  var beforeEnd = 500;
	var $imageSlider = $('.image-slider');
	$imageSlider.slick({
		autoplay: true,
		autoplaySpeed: sliderTimer,
		speed: 1000,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	});

	function progressBar(){
		$('.slider-progress').find('span').removeAttr('style');
		$('.slider-progress').find('span').removeClass('active');
		setTimeout(function(){
			$('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
		}, 100);
	}
	progressBar();
	$imageSlider.on('beforeChange', function(e, slick) {
		progressBar();
	});
  $imageSlider.on('afterChange', function(e, slick, nextSlide) {
		titleAnim(nextSlide);
	});

	// Title Animation JS
	function titleAnim(ele){
		$imageSlider.find('.slick-current').find('h1').addClass('show');
		setTimeout(function(){
			$imageSlider.find('.slick-current').find('h1').removeClass('show');
		}, sliderTimer - beforeEnd);
	}
	titleAnim();
});

if ($('#back-to-top').length) {
	var scrollTrigger = 100,
	  backToTop = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > scrollTrigger) {
		  $('#back-to-top').addClass('show');
		} else {
		  $('#back-to-top').removeClass('show');
		}
	  };
	backToTop();
	$(window).on('scroll', function() {
	  backToTop();
	});
	$('#back-to-top').on('click', function(e) {
	  e.preventDefault();
	  $('html,body').animate({
		scrollTop: 0
	  }, 700);
	});
}