$(document).ready(function () {

    $('.banner .owl-carousel').owlCarousel({
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
    $('.test-right .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
      
        responsive: {
            0: {
                items: 1,
                stagePadding:10,
                margin:0,
            },
            596: {
                items: 2,
                margin:30,
                stagePadding: 20,
            },
            768: {
                items: 2.5,
                margin:30,
                stagePadding: 20,
            },
            992: {
                items: 2.5,
                margin:40,
            },
            1200: {
                items: 2,
                stagePadding: 40,
                margin:60,
                
            },
            1400: {
                items: 2.5,
                stagePadding: 50,
                margin:67,
                
            }

        }
    })

    $('.case-bottom .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
      
        responsive: {
            0: {
                items: 1,
                margin:20
            },
            768: {
                items: 2,
                margin:40
            },
            992: {
                items: 3,
                margin:40
            },
            1200: {
                items: 3,
                margin:71,
                
            }

        }
    })
    $('.sticky-ptags .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        margin:20,
      
        responsive: {
            0: {
                items: 1,
                
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
                 
            },
            1200: {
                items: 1,
                
                
            }

        }
    })
    $('.stdying-carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        
      
        responsive: {
            0: {
                items: 1,
                margin:20,
            },
            596: {
                items: 2,
                margin:20,
            },
            768: {
                items: 3,
                margin:30,
            },
            992: {
                items: 3,
                 margin:30,
            },
            1200: {
                items: 3,
                margin:34,
                
                
            }

        }
    })

   
    // header_to top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('header').addClass('active_nav');
            $('.header_top ').addClass('active-hed');
            $('.navbar').addClass('active-navbar');

    
        }
        else {
            $('header').removeClass('active_nav')
            $('.header_top ').removeClass('active-hed');
            $('.navbar').removeClass('active-navbar');
        }
    })


    $('.navbar-toggler.collapsed').click(function () {
        $(this).toggleClass('collapsed')
        $('.navbar-collapse').toggleClass('show')
    })

    // highlight on scroll navlink
    $(window).on('scroll', function () {
        $("section").each(function (index, element) {
            $(".ul_header li .linkz").each(function (index, ele) {
                var link = $(ele).attr("href")
                if (isScrolledForSection($(element))) {
                    var id = "#" + $(element).attr("id")
                    if (id == link) {   
                        console.log(id)
                        $(ele).addClass("bolder")
                    }
                    else {
                        $(ele).removeClass("bolder")
                    }
                }
            })
        });
    });

    function isScrolledForSection(elem) {
        var header_top = $('header').scrollTop();
        var header_btm = header_top + $('header').height();
        var header_height = header_top + header_btm;
        console.log(header_height);
        var docViewTop = $(window).scrollTop() + header_height;
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if (docViewTop > elemTop) {
            return (true);
            console.log(true);
        }
        if (docViewTop > elemBottom) {
            return (false)
            console.log(false)
        }
    }
    
    // $('.navbar-nav .nav-item').mouseover(function(){
    //     $('.dropdown-menu').addClass('show');
        
    // })
})



