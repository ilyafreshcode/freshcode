/**
 * @depends lib/jquery-3.2.1.min.js
 * @depends lib/parsley.min.js
 */

$(function(){

    /** ===========================================
     Hide / show the navigation menu
     ============================================ */
    var previousScroll = 0;
    var menuBar = $(".navigation-bar");

    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
            if (currentScroll > previousScroll){
                hideNav();
            } else {
                showNav();
            }

            if(currentScroll <= 5){
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

    /**-----------------------
     * Mobile
     * ----------------------*/

    var menu = $('.main-nav-menu');
    var toggleMenuInput =  $("#menuToggle input[type='checkbox']");
    var horizontalBox = $(".horizontal-box").find(".card");

    var mobileMenuValue = 985;
    var horizontalRemoveValue = 985;

    function toggleMenuWhenResize(){
        //$('.play-img').height($('.video-block img').height());

        if($(window).width() <= horizontalRemoveValue){
            horizontalBox.removeClass("horizontal");
        }
        else {
            horizontalBox.addClass("horizontal");
        }

        if($(window).width() <= mobileMenuValue){
            menu.hide();
        }
        else {
            menuBar.css("background-color", "rgba(255, 255, 255, 1)");
            menu.show();
        }
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




    /**------ Modal window ------*/
    $('.modal').modal();
    $('select').material_select();


    /**------- For parallax ------*/
    /*skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        mobileCheck: function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
            return false;
        }
    });*/

    /**------------------------------
     * Slideshow
     * ----------------------------*/
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
                $('#slides-horizontal .card-content').addClass("card-content-1");
            },
            complete: function(number) {
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


    /**------------------------------------------------------------------------*/
    /**------------------------ Submit Form -----------------------------------*/
    /**------------------------------------------------------------------------*/

    var form = $('form.cv_form'),
        name = form.find("input[name='first_name']"),
        email = form.find("input[name='email']"),
        phone = form.find("input[name='phone']"),
        vacancy = form.find("select[name=selector]"),
        about = form.find("textarea[name='about']"),
        file = form.find("input[name='file']");

    form.submit(function(e) {
        e.preventDefault();
        form.parsley();
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/",
            data: {
                name: name.val(),
                email: email.val(),
                phone: phone.val(),
                vacancy: vacancy.val(),
                about: about.val(),
                file: file.val()
            },
            crossDomain: true,
            error: function (xhr){
                console.log("error");
            }
        });
        resetForm();
    });

    function resetForm() {
        form[0].reset();
    }



});