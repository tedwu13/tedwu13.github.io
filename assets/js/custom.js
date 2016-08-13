(function($) {
    $("input").hover(
        function(){
            $('#icon').fadeOut(400);
            $('#search').fadeIn(400);
        },
        function(){
          $('#search').fadeOut(400);
          $('#icon').fadeIn(400);
        }
    );

    $( "input" ).keypress(function(evt) {
        var queryValue;
        if(evt.keyCode === 13) {
            queryValue = $(this).val();
        }
    });      
		
})(jQuery);