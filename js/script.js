$(document).ready(function(){

    // byrger 

    
    (function($){
        $(function() {
            $('.byrger-menu__byrger-icon').on('click', function() {
                $(this).closest('.byrger-menu').toggleClass('byrger-menu_state_open');
            });
        });
    })(jQuery);

});