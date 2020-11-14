import 'slick-carousel';

$('.hero-slider__wrap').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.project-list__wrap').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });

// $('.project-list__img').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.item-slide'
//   });

//   $('.item-slide').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     asNavFor: '.project-list__img',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true
//   });