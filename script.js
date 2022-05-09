$(function(){

	$('.next-page').on( 'click', nextPage );
});

function nextPage(e){
	e.preventDefault();
	var $prevPage = $(this).parents('.page');

	$('body').removeClass( $prevPage.attr('id') );

	$prevPage.fadeOut('slow',function(e){

		var $nextPage = $(this).next('.page');

		$nextPage.fadeIn();
		$('body').addClass( $nextPage.attr('id') );
	});
}