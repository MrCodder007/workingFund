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
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  let newsCards = $('.project-list')

  newsCards.each(function (idx) {
    const addedClass = `news-card--${idx}`;
    $(this).addClass(addedClass);
  
    $(this).find('.project-list__img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: `.${addedClass} .item-slide`
    });

    $(this).find('.item-slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: `.${addedClass} .project-list__img`,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  });