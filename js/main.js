
function main() {

(function () {
   'use strict';


    $('a.page-scroll').click(function(){
        $('html,body').animate({scrollTop:$(this.hash).offset().top-40},1000);
    });
    $('#about-sections a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('.portfolio-item .hover-bg .hover-text a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top + 70);
            if (tabId) {
                $('#display-section a[href=#' + tabId + ']').tab('show');
            }
        }
    });


    ///*====================================
    //Show Menu on Book
    //======================================*/
    $(window).bind('scroll', function() {   //当滚动超过一定范围时显示菜单栏
        var navHeight = $(window).height() - 100;
        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
            $('.navbar-header a .company-logo').css({
                'background':'url("./image/LOGO3.png") no-repeat',
                'width':'120px',
                'height':'35px'})
        } else {
            $('.navbar-default').removeClass('on');
            $('.navbar-header a .company-logo').css({
                'background':'url("./image/logo2.png")  no-repeat',
                'background-size':' 100%',
                'width':'65px',
                'height':'60px'})
        }
    });

    $('body').scrollspy({      //bootstrap的滚动监听方法
        target: '.navbar-default',
        offset: 80
    }) //可以直接加在html中

  	$(document).ready(function() {
        $('#owl-dis1').owlCarousel({
            items: 1,
            navigation: true,
            navigationText: ["上一个","下一个"],
            autoPlay: true,
            stopOnHover: true,
        });
        $("#owl-dis2").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            stopOnHover:true,  //鼠标悬停停止播放
            rewindSpeed:1000,  //重回速度
            singleItem:true,
            items: 1,
            autoPlay: 2000
            //自动播放，可选布尔值或整数，若使用整数，如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        });
        $("#owl-dis3").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            stopOnHover:true,  //鼠标悬停停止播放
            rewindSpeed:1000,  //重回速度
            singleItem:true,
            items: 1,
            autoPlay: 2000
            //自动播放，可选布尔值或整数，若使用整数，如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        });
        $("#owl-dis4").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            stopOnHover:true,  //鼠标悬停停止播放
            rewindSpeed:1000,  //重回速度
            singleItem:true,
            items: 1,
            autoPlay: 2000
            //自动播放，可选布尔值或整数，若使用整数，如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
        });



  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
	});

    $('a.page-scroll').click(function() {

        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile:false,
            live: true
        });
        wow.init();

    });


}());


}
main();

$(window).on('load',function(){
    var documentH = $( window ).height();//页面高度
    console.log(documentH);
    $('.header-container').css('height',documentH+'px');
})