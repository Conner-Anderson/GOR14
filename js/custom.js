$(document).ready(function() {
    var angle = 0;
        setInterval(function() {
            angle += 1;
                $("#turbine1").rotate(angle);
                /* angle += 1; Increases the rotating speed */
            }, 35);
    //Closes mobile menu on link click
    $('.top-bar section.top-bar-section li a').on( "click", function() {
        $('.top-bar').removeClass('expanded');
        $('.top-bar').parent().addClass('fixed');
    });
});