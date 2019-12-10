$(function() {
  // Collapse navbar after clicking nav item (except the one for dropdown menu) or clicking the page
  $('#nav-bar .nav-item:not(.dropdown), #header-img, #title, main, footer').on('click', function(evt) {
    $('.navbar-collapse').collapse('hide');
  });

  $('.dropdown-item').on('click', function(evt) {
    // Collapse navbar after click
    $('.navbar-collapse').collapse('hide');

    // Use dropdown items as indicators for carousel
    let index = $('.dropdown-item').index($(this));
    $('#product_slides').carousel(index);
  });

  // Prevent search form from submitting
  $('.form inline').on('submit', function(evt) {
    evt.preventDefault();
  });

  // Sync tab-content with carousel
  $('#product_slides').on('slid.bs.carousel', function(evt) {
    let tabs = $('.nav-tabs a');
    $(tabs[evt.to]).tab('show');
  });

  // Use nav-tabs as indicators for carousel
  $('.nav-tabs a').on('click', function(evt) {
    let tabs = $('.nav-tabs a');
    let index = tabs.index($(this));
    $('#product_slides').carousel(index);
  });
});
