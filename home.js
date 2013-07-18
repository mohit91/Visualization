// JavaScript Document

$(document).ready(function() {
	/* ---------- MAIN PAGE ------------- */
	$("#contents").hide().animate({opacity:0.2});
	$("#screen1").hide().animate({opacity:0.2});
	$("#screen2").hide().animate({opacity:0.2});
	
	$("#home-image").click(function() {
        $("#contents").show().animate({opacity:0.98},1000);
		$("#screen1").show().animate({opacity:0.98},1000);
		$("#screen2").show().animate({opacity:0.98},1000);
		$(this).hide();
		
		
		
		
   
		
		
		
    });
    
});