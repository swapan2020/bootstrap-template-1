$(document).ready(function(){
    // Main slider active
    $(".sliders").owlCarousel({
        'items':1,
        'loop':true,
        'autoplay':true,
        'autoplayHoverPause':true,
        'smartSpeed':1500,
        'autoplaySpeed':1000,
    });
    // Testimonial carousel active
    $(".testimonial").owlCarousel({
        'items':3,
        'loop':true,
        'autoplay':true,
        'autoplayHoverPause':true,
        'smartSpeed':1500,
        'autoplaySpeed':1000,
        'margin':30,
        'center':true,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2,
                'center':false
            },
            1100:{
                items:3
            }
        }
    });

    // Counter up active js plugin
    $('.counter').counterUp();

        // init Isotope
        var $grid = $('.protfolio-items').isotope({
        });
        // filter items on menu click
        $('.protfolio-menu').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // filter menu active
        $('.protfolio-menu').on( 'click', 'li', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    //    magnificPopup js
            $('.gallery').magnificPopup({
                type:'image',
                gallery:{
                    enabled:true
                  }
            });
          

  });

//   sticky menu js

$(window).load(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 50){
            $('.header-area').addClass('sticky');
        }
        else{
            $('.header-area').removeClass('sticky');
        }
    });
    $('.preloader').fadeOut();
});


$(window).scroll(function(){
    if($(this).scrollTop() > 200) {
        $('#scroll-up-btn').addClass('scroll-show');
    } else{
        $('#scroll-up-btn').removeClass('scroll-show');
    }
});


$('#scroll-up-btn').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 500)
})

