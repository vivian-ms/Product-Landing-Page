$(function() {
  // Event listener to open welcome offer
  $('#offer').on('click', () => {
    $('#offer').fadeOut('slideDown', () => {
      $('#form').fadeIn('slow');
    });
  });

  // Event listener to close welcome offer
  $('.close').on('click', () => {
    $('#form').fadeOut('slow', () => {
      $('#offer').fadeIn('slow');
    });
  });
});
