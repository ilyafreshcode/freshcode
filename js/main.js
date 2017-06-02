$(function(){

    /** ===========================================
     Hide / show the navigation menu
     ============================================ */
    var previousScroll = 0;

    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
            if (currentScroll > previousScroll){
                hideNav();
            } else {
                showNav();
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

    /**------ Modal window ------*/
    $('.modal').modal();
    $('select').material_select();


    /**------- For parallax ------*/
    skrollr.init();


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

    $('.all-vertical-num').text($('#slides-vertical .card').length);
    $('.all-horizontal-num').text($('#slides-horizontal .card').length);
    console.log($('body').height());



});