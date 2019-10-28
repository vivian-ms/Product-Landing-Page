var slideIndex = 0;

$(function() {
  // Show the 1st slide on page ready
  showSlides(slideIndex);

  // Event listener for previous button
  $('#prev').on('click', () => {
    slideIndex += -1;
    showSlides(slideIndex);
  });

  // Event listener for next button
  $('#next').on('click', () => {
    slideIndex += 1;
    showSlides(slideIndex);
  });

  // Event listener for each dot/circle
  let dots = $('.dot');
  for (let i = 0; i < dots.length; i++) {
    $(dots[i]).on('click', () => {
      slideIndex = i;
      showSlides(slideIndex);
    });
  };

  // Automatically change slides every 5s
  setInterval(() => {
    $('#next').click();
  }, 5000);
});



function showSlides(n) {
  let slides = $('.product-slide');
  let dots = $('.dot');

  // If n > (slides.length - 1), go back to beginning
  if (n > (slides.length - 1)) {
    slideIndex = 0;
  }

  // If n < 0, go to the end of slides
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Remove .slide-right and add .slide-left if scrolling backwards
  let previousSlide = $('.dot').index($('.active'));

  if (
    (slideIndex !== 0 && previousSlide > slideIndex) ||
    (slideIndex === 0 & previousSlide === 1) ||
    (previousSlide === 0 && slideIndex === 3)
  ) {
    $(slides).removeClass('slide-right').addClass('slide-left');
  } else {
    $(slides).removeClass('slide-left').addClass('slide-right');
  }

  // Hide all slides and only show the one corresponding to slideIndex
  $(slides).css('display', 'none');
  $(slides[slideIndex]).css('display', 'block');

  // Remove .active on all dots and only add .active to the dot corresponding to slideIndex
  $(dots).removeClass('active');
  $(dots[slideIndex]).addClass('active');
}
