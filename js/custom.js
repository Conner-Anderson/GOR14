$(document).ready(function() {
    var angle = 0;
        setInterval(function() {
            angle += 1;
                $("#turbine1").rotate(angle);
                /* angle += 1; Increases the rotating speed */
            }, 35);

    $( "#wind" ).click(function() {
        $('#blade1, #blade2, #blade3').toggleClass('moved');
    });

    // $(function() {
    //     $('.blade').each(function() {
    //         var $this = $(this);
    //         $.data(this, 'moved', false);
    //         $.data(this, 'css', {
    //             top: $this.css('top'),
    //             left: $this.css('left'),
    //             '-webkit-transform': $this.css('webkitTransform'),
    //             '-ms-transform': $this.css('msTransform'),
    //             'transform': $this.css('transform')
    //         });
    //     });
    // });

    // $( "#wind" ).click(function() {
    //     $('.blade').each(function() {
    //         var orig = $.data(this, 'css');

    //         if(!$.data(this, 'moved')) {
    //             $(this).animate({top: 100, left: 100, transform: 'rotate(50deg)', '-webkit-transform': 'rotate(20deg)', '-ms-rotate': "20deg"}, 2000);
    //             $.data(this, 'moved', true);
    //         }
    //         else if($.data(this, 'moved')) {
    //             $(this).animate({top: orig.top, left: orig.left, transform: orig.rotate, '-webkit-rotate': orig['-webkit-rotate'], '-ms-rotate': orig['-ms-rotate']}, 2000);
    //             $.data(this, 'moved', false);
    //         }
            
    //     });
    // });




    //Closes mobile menu on link click
    $('.top-bar section.top-bar-section li a').on( "click", function() {
        $('.top-bar').removeClass('expanded');
        $('.top-bar').parent().addClass('fixed');
    });
});