$(document).ready(function () {
	//alert("Under Construction!");
	$(".main-elem-odd").animate({"opacity":1},2000,"swing");
	$(".main-elem-even").animate({"opacity":1},500, "swing");
	$(".national").hide();
/* ------------------ MAIN --------------------- */	
   $("#odd1").mouseenter(function () {
   	$("#elem1").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute;width:300px; top:50px; ">NATIONAL <br /> <br /> LINE GRAPH <br /> <br /> <a href="./MixedGraph/"> Click Here </a> to view. </p>');
   });
     $("#odd1").mouseleave(function () {
   	$("#elem1").stop().animate({top:300},500,"linear");
   });
   $("#odd3").mouseenter(function () {
   	$("#elem3").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute;width:300px; top:50px; ">NATIONAL <br /> <br /> SPLINE GRAPH <br /> <br /> <a href="./highcharts/national.php?sector=Rural&year=2011&month=January&graph_type=spline&submit=submit"> Click Here </a> to view. </p>');
   });
   $("#odd3").mouseleave(function () {
   	$("#elem3").stop().animate({top:300},500,"linear");
   });
   
   $("#odd5").mouseenter(function () {
   	$("#elem5").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute; bottom:20px; width:300px; "> Some text 1 </p>');;
   });
   $("#odd5").mouseleave(function () {
   	$("#elem5").stop().animate({top:300},500,"linear");
   });
   
   $("#odd7").mouseenter(function () {
   	$("#elem7").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute; bottom:20px; width:300px; "> Some text 1 </p>');;
   });
   $("#odd7").mouseleave(function () {
   	$("#elem7").stop().animate({top:300},500,"linear");
   });
   
   $("#odd9").mouseenter(function () {
   	$("#elem9").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute; bottom:20px; width:300px; "> Some text 1 </p>');;
   });
   $("#odd9").mouseleave(function () {
   	$("#elem9").stop().animate({top:300},500,"linear");
   });
   
   $("#even2").mouseenter(function () {
   	$("#elem2").stop().animate({top:0},1000,"linear");
   });
   $("#even2").mouseleave(function () {
   	$("#elem2").stop().animate({top:300},500,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute; bottom:20px; width:300px; "> Some text 1 </p>');;
   }); 
   $("#even4").mouseenter(function () {
   	$("#elem4").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute;width:300px; top:50px; ">NATIONAL <br /> <br /> BAR GRAPH <br /> <br /> <a href="./highcharts/national.php?sector=Rural&year=2011&month=January&graph_type=column&submit=submit"> Click Here </a> to view. </p>');
   });
   $("#even4").mouseleave(function () {
   	$("#elem4").stop().animate({top:300},500,"linear");
   }); 
   $("#even6").mouseenter(function () {
   	$("#elem6").stop().animate({top:0},1000,"linear");
   });
   $("#even6").mouseleave(function () {
   	$("#elem6").stop().animate({top:300},500,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute; bottom:20px; width:300px; "> Some text 6 </p>');;
   }); 
   $("#even8").mouseenter(function () {
   	$("#elem8").stop().animate({top:0},1000,"linear").html('<p style="color:#FFF; font-weight:bold; position:absolute;width:300px; top:50px; ">NATIONAL <br /> <br />AREA GRAPH <br /> <br /> <a href="./highcharts/national.php?sector=Rural&year=2011&month=January&graph_type=area&submit=submit"> Click Here </a> to view. </p>');
   });
   $("#even8").mouseleave(function () {
   	$("#elem8").stop().animate({top:300},500,"linear");
   }); 
   $(".elem-hover").mouseleave(function () {
   	$(this).stop().animate({top:300},500);
   });	
	
/* --------------------------- MAIN ENDS ---------------- */

/*------------------------- Home Page Slides - NATIONAL PAGE ENTERS -------------- */
	$("#nav2").click(function () {
		window.location.href = './nicmap.php' ;
		//$(".main").animate({"margin-left":300},1000);	
		//$(".main").animate({"margin-left":-900},500).hide(200);
		//$(".national").show(1000).animate({"margin-left":200,"opacity":1},1500);
	});
	$("#nav3").click(function() {
        window.location.href="./highcharts/national.php?sector=Rural&year=2011&month=January&graph_type=column&submit=submit";
    });
	
	$("#fe1").click(function () {
		$(".national").animate({"margin-left":-900,"opacity":0},1000).hide(500);
	   $(".main").animate({"margin-left":200,"opacity":1},1000).show(200);
	});

/* --------------------- Home Page Slides Ends ----------- */


	
});