$(function(){

    var isMobile = true;

    var previousScroll = 0;
    var menuBar = $(".navigation-bar");


    var menu = $('.main-nav-menu');
    var toggleMenuInput =  $("#menuToggle input[type='checkbox']");
    var horizontalBox = $(".horizontal-box").find(".card");

    var mobileMenuValue = 985,
        horizontalRemoveValue = 985;



    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
            if (currentScroll > previousScroll){
                hideNav();
            } else {
                showNav();
            }
            if(currentScroll <= 5 && !isMobile){
                menuBar.css("background-color", "rgba(255, 255, 255, 0.8)");
            } else {
                menuBar.css("background-color", "rgba(255, 255, 255, 1)");
            }
            previousScroll = currentScroll;
        }
    });
    function hideNav() {
        $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
    }
    function showNav() {
        $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
    }





    function toggleMenuWhenResize(){
        //$('.play-img').height($('.video-block img').height()); for video

        if($(window).width() <= horizontalRemoveValue){
            horizontalBox.removeClass("horizontal");
        }
        else {
            horizontalBox.addClass("horizontal");
        }

        if($(window).width() <= mobileMenuValue){
            isMobile = true;
            menuBar.css("background-color", "rgba(255, 255, 255, 1)");
            menu.hide();
        }
        else {
            isMobile = false;
            menu.show();
        }
        lines()
    }
    toggleMenuWhenResize();

    $(window).resize(toggleMenuWhenResize);

    toggleMenuInput.change(function(){
        if(toggleMenuInput.is(':checked')) {
            menu.fadeIn();
        }
        else {
            menu.fadeOut();
        }
    });



    $('.modal').modal(
        {
            dismissible: true,
            opacity: .5,
            inDuration: 400,
            outDuration: 400
        }
    );


    /**------- For parallax ------*/
    /*skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        mobileCheck: function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
            return false;
        }
    });*/



    $('#slides-vertical').slidesjs({
        width: 381,
        height: 579,
        navigation: false,
        pagination: false,
        callback: {
            loaded: function(number) {
                $('.slider-number-vertical').text(number);
            },
            start: function(number) {

            },
            complete: function(number) {
                $('.slider-number-vertical').text(number);
            }
        }
    });

    $('#slides-horizontal').slidesjs({
        width: 572,
        height: 381,
        navigation: false,
        pagination: false,
        callback: {
            loaded: function(number) {
                $('.slider-number-horizontal').text(number);
            },
            start: function(number) {
                $('#slides-horizontal .slidesjs-navigation').hide();
                $('#slides-horizontal .card-content').addClass("card-content-1");
            },
            complete: function(number) {
                $('#slides-horizontal .slidesjs-navigation').show();
                $('.slider-number-horizontal').text(number);
            }
        }
    });

    var IMG_NUM = 3;

    $('#slides-horizontal-1').slidesjs({
        width: 969,
        height: 500,
        navigation: false,
        pagination: false,
        callback: {
            loaded: function(number) {
                $('.slider-number-horizontal-1').text(number * IMG_NUM);
            },
            start: function(number) {

            },
            complete: function(number) {
                $('.slider-number-horizontal-1').text(number * IMG_NUM);
                $('.top-navigation').css("lest", "0");
            }
        }
    });


    $('.all-vertical-num').text($('#slides-vertical .card').length);
    $('.all-horizontal-num').text($('#slides-horizontal .card').length);
    $('.all-horizontal-num-1').text($('#slides-horizontal-1 .get-num').length * IMG_NUM);



    function reviewPageFixHeight(){
        $('.review').height($('.review').height() + 200);
        console.log( $('.review').height());
    }


    var LINES_NUM = 4;
    var MOB_LINES_NUM = 2;

    function lines(){
        var linesConteiner = $('.lines');
        var conteiner = $('#skrollr-body .container');
        var line = linesConteiner.find("div");

        var linesWidth = conteiner.width();
        var linesHeight = conteiner.height() + 200;

        linesConteiner.width(linesWidth);
        linesConteiner.height(linesHeight);

        if(!isMobile)
            line.width(linesWidth / LINES_NUM - 1.1);
        else
            line.width(linesWidth / MOB_LINES_NUM - 1.1);
        line.height(linesHeight);
    }

    reviewPageFixHeight();
    lines();


});