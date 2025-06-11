/*
Author       : Dreamguys
Template Name: Dreams Rent - Bootstrap Template
Version      : 1.0
*/

(function($) {
	"use strict";
	
	var $slimScrolls = $('.slimscroll');
	var $wrapper = $('.main-wrapper');
	
	// Sidebar
	
	if($(window).width() <= 991) {
		var Sidemenu = function() {
			this.$menuItem = $('.main-nav a');
		};

		function init() {
			var $this = Sidemenu;
			$('.main-nav a').on('click', function(e) {
				if($(this).parent().hasClass('has-submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('submenu')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('submenu');
					$(this).next('ul').slideDown(350);
					$(this).addClass('submenu');
				} else if($(this).hasClass('submenu')) {
					$(this).removeClass('submenu');
					$(this).next('ul').slideUp(350);
				}
			});
		}

	// Sidebar Initiate
	
	init();
	}

	// Sticky Header

	$(window).scroll(function () {
		var sticky = $('.header'),
			scroll = $(window).scrollTop();
		if (scroll >= 50) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});	
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	$(document).on('click', '#menu_close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}		
	// Aos 
	
	if($('.main-wrapper .aos').length>0){
		AOS.init({
			duration:1200,
			once:true
		});
	}
	
	// Datepicker	

	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
		
	//Stick Sidebar
	
	if ($(window).width() > 767) {
		if($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
			  // Settings
			  additionalMarginTop: 30
			});
		}
	}
	
	// Scroll Down
	
  	$('a.smooth-menu').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top});
        e.preventDefault();
    });
	
	// Content div min height set

	function resizeInnerDiv() {
		var height = $(window).height();
		var header_height = $(".header").height();
		var footer_height = $(".footer").height();
		var setheight = height - header_height;
		var trueheight = setheight - footer_height;
		$(".content").css("min-height", trueheight);
	}

	if ($('.content').length > 0) {
		resizeInnerDiv();
	}

	$(window).resize(function () {
		if ($('.content').length > 0) {
			resizeInnerDiv();
		}
	});

	// Banner Slider

	var mainSlider = $('.banner-slider');
	var thumbSlider = $('.thumb-slider');

	mainSlider.owlCarousel({
	    stagePadding: 20,
	    loop: true,
	    margin: 10,
	    items: 1,
	    lazyLoad: true,
	    smartSpeed: 2000,
	    responsive: {
	        500: { items: 1, stagePadding: 10 },
	        600: { items: 1, stagePadding: 100 },
	        1000: { items: 1, stagePadding: 200 },
	        1200: { items: 1, stagePadding: 250 },
	        1400: { items: 1, stagePadding: 300 },
	        1600: { items: 1, stagePadding: 350 },
	        1800: { items: 1, stagePadding: 400 }
	    }
	});

	thumbSlider.owlCarousel({
	    items: 5,
	    margin: 10,
	    dots: false,
	    nav: false,
	    mouseDrag: false,
	    touchDrag: false,
	    pullDrag: false,
	    freeDrag: false
	});

	// Click-only nav
	thumbSlider.on('click', '.owl-item', function(e){
	    e.preventDefault();
	    var index = $(this).index();
	    mainSlider.trigger('to.owl.carousel', [index, 500, true]);
		});

		thumbSlider.on('click', '.owl-item', function () {
	    // Remove active class from all thumbnails
	    $('.thumb-slider .owl-item').removeClass('active-thumb');
	    
	    // Add active class to clicked thumbnail
	    $(this).addClass('active-thumb');
	    
	    // Go to the corresponding slide in the main slider
	    var index = $(this).index();
	    mainSlider.trigger('to.owl.carousel', [index, 500, true]);
	});

	// Testimonial Slider

	if ($('.testimonial-slider').length > 0) {
		$('.testimonial-slider').owlCarousel({
			items:1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			smartSpeed: 2000,
			autoplay: true,
			navContainer: '.testimonial-nav-control',
			navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
			responsive: {
				0: {
					items: 1
				},
				992: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		})
	}


	// multi-level-slider

	if ($('.multi-level-slider').length > 0) {
		$('.multi-level-slider').owlCarousel({
			items:1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			smartSpeed: 2000,
			autoplay: false,
			navText: [ '<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>' ],
			responsive: {
				0: {
					items: 1
				},
				992: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		})
	}

	// Client Slider

	jQuery(document).ready(function($){
	  let slider = $('.client-slider');
	  slider.each(function () {
	    $(this).owlCarousel({
	      nav: true,
	      loop:true,
	      dots: false,
	      pagination: false,
	      margin: 24,
	      autoHeight: false,
	      stagePadding: 50,
	      smartSpeed: 2000,
		  autoplay: true,
		  navContainer: '.client-nav-control',
		  navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
	      responsive:{
	        0:{
	          items: 1,
	          stagePadding: 0,
	          margin: 30,
	        },
	        767:{
	          items: 3,
	          stagePadding: 25,
	        },
	        1000:{
	          items: 4,
	        }
	      }
	    });
	  });
	});

	if ($('#rangeslider').length > 0) {
		$( "#rangeslider" ).slider({
			range: "min",
			min: 0,
			max: 100,
			value: 25,
		});
	}


	
$(document).ready(function () {
    if ($('.dateinline').length > 0) {
      $('.dateinline').datetimepicker({
        inline: true,
        format: 'L', // Only date, no time
        icons: {
          up: 'fa fa-angle-up',
          down: 'fa fa-angle-down',
          next: 'fa fa-angle-right',
          previous: 'fa fa-angle-left'
        }
      });
    }
  });

})(jQuery);



	