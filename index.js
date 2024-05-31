function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
      $('footer').css({
          'bottom': '0px'
      });
  } else {
      $('footer').css({
          'bottom': '-' + heightFooter + 'px'
      });
  }
}

$(window).on('load', function () {
  var windowHeight = $(window).height(),
      footerHeight = $('footer').height(),
      contentHeight = $('.content').height(),
      heightDocument = windowHeight + contentHeight + footerHeight - 20;

  // Defining the height of the element to animate
  $('#scroll-animate, #scroll-animate-main').css({
      'height': heightDocument + 'px'
  });

  // Defining the height of header and content elements
  $('header').css({
      'height': windowHeight + 'px',
      'line-height': windowHeight + 'px'
  });

  $('.wrapper-parallax').css({
      'margin-top': windowHeight + 'px'
  });

  scrollFooter($(window).scrollTop(), footerHeight);

  // On scroll
  $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      $('#scroll-animate-main').css({
          'top': '-' + scroll + 'px'
      });

      $('header').css({
          'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
      });

      scrollFooter(scroll, footerHeight);
  });
});
