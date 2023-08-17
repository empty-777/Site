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

    $('.navbar-toggler.collapsed').click(function(){
        $(this).toggleClass('collapsed')
        $('.navbar-collapse').toggleClass('show')
    })
 
    //tab

    $(".tab1_body").hide();
    $(".tab1_body.activetab").show();
    $('.tabs_wrap #tabz li a').click(function(){
        $(".tab1_body").hide();
        $(".tab1_body").removeClass("activetab");
        $('#tabz li').removeClass('active');
        var t =  $(this).attr("target");
        var find_ent = $(this).parents(".tabs_wrap");
       
        console.log(find,'find_ent')
        find_ent.find("#" + t).show();
        var tab = find_ent.find("#" + t);
        tab.addClass("activetab");
        $(".tab1_body.activetab").show();
        $('#tabz li').addClass('active')
       
    });
})
