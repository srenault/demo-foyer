// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click touchstart', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    $('nav a.page-scroll').bind('click touchstart', function(event) {
        $('.navbar-toggle:visible').click();
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('.frm-presel').on('click touchstart', function(){
        var val = $(this).attr('data-frm-presel');
        $('#demande').find('option').removeAttr('selected').parent().find('[value="' + val + '"]').prop('selected', true);
    });

})(jQuery); // End of use strict