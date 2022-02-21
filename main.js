
$(document) .ready(function(){

  // nav bar

  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
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



  // form

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


})
