$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                
            }

        }
    })

    //about_owl
    $('.about_us_carosol,.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                margin: 20,
            },
            1000: {
                items: 3,
                margin: 40,
                
            }

        }
    })

      //latest_owl
      $('.latest_news_lft .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
                 
                
            }

        }
    })


    // header_to top
    $(window).scroll(function(){
        if($(window).scrollTop() >  80){
            $('.navbar').addClass('active_nav')
        }
        else{
            $('.navbar').removeClass('active_nav')
        }
    })

    // SEARCH BUTTON
    $('.search_btn').click(function(){
        $('.search').toggleClass('active_btn');
    })

    $('.collapsed').click(function(){
        $(this).toggleClass('collapsed')
        $('.navbar-collapse').toggleClass('show')
    })
 
      //counter
      $(window).scroll(function () {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
       
      
    })
    
    AOS.init({
        duration: 1200,
      })
 

})



