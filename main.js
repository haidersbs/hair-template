
$(document) .ready(function(){

  // nav bar

  $('#homeLink') .click(function(){
    $(this).css('background', '#552882');
    $('ul li a:gt(0)').css('background', 'transparent');
  });

  $('#servicLink').click(function () {
    $(this).css('background', '#552882');
    $('ul li a:gt(1), ul li a:lt(1) ').css('background', 'transparent');
});

$('#aboutLink').click(function () {
  $(this).css('background', '#552882');
  $('ul li a:gt(2), ul li a:lt(2) ').css('background', 'transparent');
});

$('#portLink').click(function () {
  $(this).css('background', '#552882');
  $('ul li a:gt(3), ul li a:lt(3) ').css('background', 'transparent');
});

$('#teamLink').click(function () {
  $(this).css('background', '#552882');
  $('ul li a:gt(4), ul li a:lt(4) ').css('background', 'transparent');
});

$('#priceLink').click(function () {
  $(this).css('background', '#552882');
  $('ul li a:gt(5), ul li a:lt(5) ').css('background', 'transparent');
});

$('#conLink').click(function () {
  $(this).css('background', '#552882');
  $('ul li a:gt(3), ul li a:lt(3) ').css('background', 'transparent');
});

//Portfolio Filter		
$('.card-list').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.card-list').isotope({
      itemSelector: '.single-card-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
      }
    });    
    // filter items on button click
    $('.filter-menu').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
  });
  //for menu active class
  $('.filter-menu li').on('click', function (event) {
    $(this).siblings('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    event.preventDefault();
  });



  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });


})
