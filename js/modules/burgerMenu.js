$('header').fadeIn();


$('#burgerBtn').click(function(evt){
	evt.preventDefault();

	$(this).fadeOut(500, function(){
		$('#closeBurger').fadeIn();
	})

	$('#burgerMenu').fadeIn();
})

$('#closeBurger').click(function(evt){
	evt.preventDefault();

	$(this).fadeOut(500, function(){
		$('#burgerBtn').fadeIn();
	})

	$('#burgerMenu').fadeOut();
});




var awayBurger = false;

$('#burgerMenu a').click(function(evt){

	if (awayBurger === true) {
        awayBurger = false;
        $('#closeBurger').fadeOut(function(){
        	$('#burgerBtn').fadeIn();
        });
        
        $('#burgerMenu').fadeOut();

        return;

    } else{
		evt.preventDefault();
		awayBurger = true;
	    $(this).trigger('click');
    }
});






$('footer h4 a').click(function(evt){
	evt.preventDefault();

	$('footer ul').slideToggle(250);
})