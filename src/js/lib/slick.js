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
        breakpoint: 2000,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1435,
        settings: "unslick"
      },
      {
        breakpoint: 900,
        settings: "unslick"
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
      asNavFor: `.${addedClass} .item-slide`,
      responsive: [
        {
          breakpoint: 1435,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });

    $(this).find('.item-slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: `.${addedClass} .project-list__img`,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1435,
          settings: "unslick"
        }
      ]
    });
  });