$(function() {
	var url = window.location.pathname;
	var template = url.substring(url.lastIndexOf('/') + 1);
	if (template.length > 0){
		$("#navigation #"+ template).css({
			backgroundColor: "#ae0000"
		});
	}
	else {
		$("#navigation #home").css({
			backgroundColor: "#ae0000"
		});
	}
		
});