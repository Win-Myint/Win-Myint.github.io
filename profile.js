console.log("connected");

// Smooth scroll function
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});

// Scroll to top anon function
(function(){

	$(window).scroll(function(){
		// check if window is scrolled down more than 200
		if( $(this).scrollTop() > 200) {
			// show scrollTop option
			$("#scrollTop").fadeIn(1000);
		} else {
			// otherwise hide the option
			$("#scrollTop").fadeOut(1000);
		}
	});

})();
