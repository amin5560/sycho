(function ($) {
  'use strict';

  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '992',
  });

  // One Page Nav
  var nav_offset_top = $('.header').height() + 50;

  //* Navbar Fixed
  function navbarFixed() {
    if ($('.header').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header').addClass('navbar_fixed');
        } else {
          $('.header').removeClass('navbar_fixed');
        }
      });
    }
  }
  navbarFixed();

  $('.nav-button').on('click', function (e) {
    $('.header').toggleClass('menu-open');
    $('body').toggleClass('menu-open');
    $('.nav-button #nav-icon').toggleClass('open');
  });

  var top_offset = $('.header-area').height() - 10;
  $('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $('.header-sticky').removeClass('sticky');
    } else {
      $('.header-sticky').addClass('sticky');
    }
  });

  // mainSlider
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      'beforeChange',
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find('[data-animation]');
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
  $('.portfolio-active').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    // autoplay: true,
    // autoplayTimeout: 1500,
    nextArrow: '<i class="fas fa-arrow-right"></i>',
    prevArrow: '<i class="fas fa-arrow-left"></i>',
    responsive: [
      {
        breakpoint: 0,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
    ],
  });
  // affiliation
  $('.affiliation-carousel').owlCarousel({
    loop: true,
    margin: 100,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
  // testimonial-carousel
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 50,
    items: 3,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $('.brand-carousel').owlCarousel({
    loop: true,
    margin: 50,
    items: 5,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      767: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });



  // data-background
  $('[data-background]').each(function () {
    $(this).css(
      'background-image',
      'url(' + $(this).attr('data-background') + ')'
    );
  });
  $('[data-bg-color]').each(function () {
    $(this).css('background', $(this).attr('data-bg-color'));
  });
  // counterUp-js
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });

  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();
})(jQuery);
