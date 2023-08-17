$(document).ready(function () {

    $('.they_say_rt .owl-carousel').owlCarousel({
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

    $('.client_btm .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        margin: 100,
        responsive: {
            0: {
                items: 3,
                margin: 20
            },
            600: {
                items: 6,
                margin: 50
            },
            1000: {
                items: 7,

            }

        }
    })

    // header_to top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('header').addClass('active_nav')
        }
        else {
            $('header').removeClass('active_nav')
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

})



