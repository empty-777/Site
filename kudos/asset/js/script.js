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
// change btn color
    $(window).scroll(function(){
        if($(window).scrollTop() >  80){
            $('.togg_btn').addClass('btn_cl_cha')
        }
        else{
            $('.togg_btn').removeClass('btn_cl_cha')
        }
    })
//change logo
    $(window).scroll(function(){
        if($(window).scrollTop() > 80){
            $('.logo_swap').addClass('logo_change')
        }
        else{
            $('.logo_swap').removeClass('logo_change')
        }
    })

})



