$(document).ready(function(){
	console.log('reaching');
	$('.container').track();
});

(function($){
	$.fn.track = function(){
		
		return this.each(function(){
			console.log(this);
		});
	}
}(jQuery));	