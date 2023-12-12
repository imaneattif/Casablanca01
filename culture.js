$(document).ready(function() {
    $('.term').on('click', function(event) {
        $(this).next('.definition').slideToggle();
         event.preventDefault(); 
    });
});

