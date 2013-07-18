// JavaScript Document


$(document).ready(function() {
	
	$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});
	
	
	$("#graph-container").hide();
	$("#graph-container-up").hide();
	$("#23").hide();
	$("#36").hide();
	$("#43").hide();	
	$("#42").hide();
	$("#22").hide();
	$("#44").hide();
	$("#38").hide();
	$("#29").hide();
	$("#15").hide();
	$("#16").hide();
	$("#21").hide();
	$("#28").hide();
	$("#25").hide();
	$("#20").hide();
	$("#26").hide();
	$("#40").hide();
	$("#12").hide();
	$("#35").hide();
	$("#24").hide();
	$("#45").hide();
	$("#39").hide();
	$("#41").hide();
	$("#32").hide();
	$("#31").hide();
	$("#34").hide();
	$("#13").hide();
	$("#14").hide();
	$("#30").hide();
	
	
	$(".links22").hide();
	$(".links23").hide();
	$(".links36").hide();
	$(".links43").hide();
	$(".links42").hide();
	$(".links44").hide();
	$(".links38").hide();
	$(".links29").hide();
	$(".links15").hide();
	$(".links16").hide();
	$(".links21").hide();
	$(".links28").hide();
	$(".links25").hide();
	$(".links20").hide();
	$(".links26").hide();
	$(".links40").hide();
	$(".links12").hide();
	$(".links35").hide();
	$(".links24").hide();
	$(".links45").hide();
	$(".links39").hide();
	$(".links41").hide();
	$(".links32").hide();
	$(".links31").hide();
	$(".links34").hide();
	$(".links13").hide();
	$(".links14").hide();
	$(".links30").hide();
	
	
	
	$("span.close").click(function() {
        $("#graph-container").slideUp(1000);
		
    });
	
	
	
	
			
	$("#230").click(function() {
		
		$("#23").stop().show().animate({opacity:0.8,"z-index":1});
		$(".cont-23").stop().show().animate({opacity:.9,"z-index":1});
		$(".links23").stop().show().animate({opacity:0.9},1000);
		$("#22").hide();
		$(".links22").stop().animate({opacity:0}).hide();
		$("#43").hide();
		$(".links43").stop().animate({opacity:0}).hide();
		$("#36").hide();
		$(".links36").stop().animate({opacity:0}).hide();
		$("#42").hide();
		$(".links42").stop().animate({opacity:0}).hide();
		$("#44").hide();
		$(".links44").stop().animate({opacity:0}).hide();
		$("#38").hide();
		$(".links38").stop().animate({opacity:0}).hide();
		$("#29").hide();
		$(".links29").stop().animate({opacity:0}).hide();
		$("#15").hide();
		$(".links15").stop().animate({opacity:0}).hide();
		$("#16").hide();
		$(".links16").stop().animate({opacity:0}).hide();
		$("#21").hide();
		$(".links21").stop().animate({opacity:0}).hide();
		$("#28").hide();
		$(".links28").stop().animate({opacity:0}).hide();
		$("#25").hide();
		$(".links25").stop().animate({opacity:0}).hide();
		$("#20").hide();
		$(".links20").stop().animate({opacity:0}).hide();
		$("#26").hide();
		$(".links26").stop().animate({opacity:0}).hide();
		$("#40").hide();
		$(".links40").stop().animate({opacity:0}).hide();
		$("#12").hide();
		$(".links12").stop().animate({opacity:0}).hide();
		$("#35").hide();
		$(".links35").stop().animate({opacity:0}).hide();
		$("#24").hide();
		$(".links24").stop().animate({opacity:0}).hide();
		$("#45").hide();
		$(".links45").stop().animate({opacity:0}).hide();
		$("#39").hide();
		$(".links39").stop().animate({opacity:0}).hide();
		$("#41").hide();
		$(".links41").stop().animate({opacity:0}).hide();
		$("#32").hide();
		$(".links32").stop().animate({opacity:0}).hide();
		$("#31").hide();
		$(".links31").stop().animate({opacity:0}).hide();
		$("#34").hide();
		$(".links34").stop().animate({opacity:0}).hide();
		$("#13").hide();
		$(".links13").stop().animate({opacity:0}).hide();
		$("#14").hide();
		$(".links14").stop().animate({opacity:0}).hide();
		$("#30").hide();
		$(".links30").stop().animate({opacity:0}).hide();
		
		
		
    	});
    
	$("#23").click(function() {
		$(".links23").stop().hide().animate({opacity:0});
        $(".cont-23").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
    });
		
	
	$("#A23").click(function() {
		$("#graph-container").slideToggle(1000);
		
		$("#graph-contents").html("<a href=graphs/general_index_graphs/jk_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit >Jammu Kashmir</a>");
	});
	
	
	/* ----------- Jammu Kashmir ------------- */
	
		
	$("#430").click(function() {
		
		$("#43").stop().show().animate({opacity:0.8});
		$(".cont-43").stop().show().animate({opacity:.9});
		$(".links43").stop().show().animate({opacity:0.9},1000);
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#43").click(function() {
		$(".links43").stop().hide().animate({opacity:0});
        $(".cont-43").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A43").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/up_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit >Uttar Pradesh<a>") ;
	});	
	
	/* ---------------Uttar Pradesh------------------ */
	
	$("#220").click(function() {
		
		$("#22").stop().show().animate({opacity:0.8});
		$(".cont-22").stop().show().animate({opacity:.9});
		$(".links22").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#22").click(function() {
		$(".links22").stop().hide().animate({opacity:0});
        $(".cont-22").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A22").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/hp_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit >Himachal Pradesh</a>") ;
	});	
	
	/* --------------- himachal pradesh ------------------ */
	
	
	$("#360").click(function() {
		
		$("#36").stop().show().animate({opacity:0.8});
		$(".cont-36").stop().show().animate({opacity:0.9});
		$(".links36").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#36").click(function() {
		$(".links36").stop().hide().animate({opacity:0});
        $(".cont-36").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A36").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/punjab_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Punjab</a>") ;
	});	
	
	/* --------------- Punjab ------------------ */
	
	
	$("#420").click(function() {
		
		$("#42").stop().show().animate({opacity:0.8});
		$(".cont-42").stop().show().animate({opacity:0.9});
		$(".links42").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#42").click(function() {
		$(".links42").stop().hide().animate({opacity:0});
        $(".cont-42").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A42").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/uttaranchal_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Uttrakhand</a>") ;
	});	
	
	/* --------------- Uttrakhand------------------ */
	
	
		
	$("#440").click(function() {
		
		$("#44").stop().show().animate({opacity:0.8});
		$(".cont-44").stop().show().animate({opacity:0.9});
		$(".links44").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#44").click(function() {
		$(".links44").stop().hide().animate({opacity:0});
        $(".cont-44").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A44").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/haryana_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Haryana</a>") ;
	});	
	
	/* ---------------Haryana------------------ */
	
	
			
	$("#380").click(function() {
		
		$("#38").stop().show().animate({opacity:0.8});
		$(".cont-38").stop().show().animate({opacity:0.9});
		$(".links38").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#38").click(function() {
		$(".links38").stop().hide().animate({opacity:0});
        $(".cont-38").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A38").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/rajasthani_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Rajesthan</a>") ;
	});	
	
	/* ---------------Rajesthan------------------ */
	
	
				
	$("#290").click(function() {
		
		$("#29").stop().show().animate({opacity:0.8});
		$(".cont-29").stop().show().animate({opacity:0.9});
		$(".links29").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#29").click(function() {
		$(".links29").stop().hide().animate({opacity:0});
        $(".cont-29").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A29").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/mp_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Madhya pradesh</a>") ;
	});	
	
	/* ---------------Madhya pradesh------------------ */
	
		$("#150").click(function() {
		
		$("#15").stop().show().animate({opacity:0.8});
		$(".cont-15").stop().show().animate({opacity:0.9});
		$(".links15").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#15").click(function() {
		$(".links15").stop().hide().animate({opacity:0});
        $(".cont-15").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A15").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/bihar_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Bihar<a>");
	});	
	
	/* ---------------Bihar------------------ */
	
	
	$("#160").click(function() {
		
		$("#16").stop().show().animate({opacity:0.8});
		$(".cont-16").stop().show().animate({opacity:0.9});
		$(".links16").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
		
    });
    $("#16").click(function() {
		$(".links16").stop().hide().animate({opacity:0});
        $(".cont-16").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A16").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/chattisgarh_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Chhattisgarh</a>") ;
	});	
	
	/* ---------------Chhattisgarh------------------ */
	
	
		$("#210").click(function() {
		
		$("#21").stop().show().animate({opacity:0.8});
		$(".cont-21").stop().show().animate({opacity:0.9});
		$(".links21").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#21").click(function() {
		$(".links21").stop().hide().animate({opacity:0});
        $(".cont-21").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A21").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/gujarat_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Gujraat</a>") ;
	});	
	
	/* ---------------Gujraat------------------ */
	
		
		$("#280").click(function() {
		
		$("#28").stop().show().animate({opacity:0.8});
		$(".cont-28").stop().show().animate({opacity:0.9});
		$(".links28").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#28").click(function() {
		$(".links28").stop().hide().animate({opacity:0});
        $(".cont-28").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A28").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/maharashtra_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Maharastra</a>") ;
	});	
	
	/* ---------------Maharastra------------------ */
	
		$("#250").click(function() {
		
		$("#25").stop().show().animate({opacity:0.8});
		$(".cont-25").stop().show().animate({opacity:0.9});
		$(".links25").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#25").click(function() {
		$(".links25").stop().hide().animate({opacity:0});
        $(".cont-25").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A25").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/karnataka_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Karnatka</a>") ;
	});	
	
	/* ---------------Karnatka------------------ */
	
		$("#200").click(function() {
		
		$("#20").stop().show().animate({opacity:0.8});
		$(".cont-20").stop().show().animate({opacity:0.9});
		$(".links20").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#20").click(function() {
		$(".links20").stop().hide().animate({opacity:0});
        $(".cont-20").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A20").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/goa_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Goa</a>") ;
	});	
	
	/* ---------------Goa------------------ */
	
	
		$("#260").click(function() {
		
		$("#26").stop().show().animate({opacity:0.8});
		$(".cont-26").stop().show().animate({opacity:0.9});
		$(".links26").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#26").click(function() {
		$(".links26").stop().hide().animate({opacity:0});
        $(".cont-26").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A26").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/kerala_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Kerala</a>") ;
	});	
	
	/* ---------------Kerala------------------ */
	
		$("#400").click(function() {
		
		$("#40").stop().show().animate({opacity:0.8});
		$(".cont-40").stop().show().animate({opacity:0.9});
		$(".links40").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#40").click(function() {
		$(".links40").stop().hide().animate({opacity:0});
        $(".cont-40").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A40").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/tamil_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Tamilnadu</a>") ;
	});	
	
	/* ---------------Tamilnadu------------------ */
	
	
		$("#120").click(function() {
		
		$("#12").stop().show().animate({opacity:0.8});
		$(".cont-12").stop().show().animate({opacity:0.9});
		$(".links12").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#12").click(function() {
		$(".links12").stop().hide().animate({opacity:0});
        $(".cont-12").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A12").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/andhra_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Andhra Pradesh</a>") ;
	});	
	
	/* ---------------Andhra Pradesh------------------ */
	
	
	
		$("#350").click(function() {
		
		$("#35").stop().show().animate({opacity:0.8});
		$(".cont-35").stop().show().animate({opacity:0.9});
		$(".links35").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#35").click(function() {
		$(".links35").stop().hide().animate({opacity:0});
        $(".cont-35").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A35").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/orissa_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Orissa</a>") ;
	});	
	
	/* ---------------Orissa------------------ */
	
		$("#240").click(function() {
		
		$("#24").stop().show().animate({opacity:0.8});
		$(".cont-24").stop().show().animate({opacity:0.9});
		$(".links24").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#24").click(function() {
		$(".links24").stop().hide().animate({opacity:0});
        $(".cont-24").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A24").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/jharkhand_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Jharkhand</a>") ;
	});	
	
	/* ---------------Jharkhand------------------ */
	
	
		$("#450").click(function() {
		
		$("#45").stop().show().animate({opacity:0.8});
		$(".cont-45").stop().show().animate({opacity:0.9});
		$(".links45").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#45").click(function() {
		$(".links45").stop().hide().animate({opacity:0});
        $(".cont-45").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A45").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/westbengal_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>West Bangal</a>") ;
	});	
	
	/* ---------------West Bangal------------------ */
	
		$("#390").click(function() {
		
		$("#39").stop().show().animate({opacity:0.8});
		$(".cont-39").stop().show().animate({opacity:0.9});
		$(".links39").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#39").click(function() {
		$(".links39").stop().hide().animate({opacity:0});
        $(".cont-39").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A39").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/sikkim_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Sikkim</a>") ;
	});	
	
	/* ---------------Sikkim------------------ */
	
	
		$("#410").click(function() {
		
		$("#41").stop().show().animate({opacity:0.8});
		$(".cont-41").stop().show().animate({opacity:0.9});
		$(".links41").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#41").click(function() {
		$(".links41").stop().hide().animate({opacity:0});
        $(".cont-41").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A41").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/tripura_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Tripura</a>") ;
	});	
	
	/* ---------------Tripura------------------ */
	
	
	
	
		$("#320").click(function() {
		
		$("#32").stop().show().animate({opacity:0.8});
		$(".cont-32").stop().show().animate({opacity:0.9});
		$(".links32").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#32").click(function() {
		$(".links32").stop().hide().animate({opacity:0});
        $(".cont-32").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A32").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/mizoram_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Mizoram</a>") ;
	});	
	
	/* ---------------Mizoram------------------ */
	
	
		
		$("#310").click(function() {
		
		$("#31").stop().show().animate({opacity:0.8});
		$(".cont-31").stop().show().animate({opacity:0.9});
		$(".links31").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
    });
    $("#31").click(function() {
		$(".links31").stop().hide().animate({opacity:0});
        $(".cont-31").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A31").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/manipur_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Manipur</a>") ;
	});	
	
	/* ---------------Manipur------------------ */
	
		$("#340").click(function() {
		
		$("#34").stop().show().animate({opacity:0.8});
		$(".cont-34").stop().show().animate({opacity:0.9});
		$(".links34").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#34").click(function() {
		$(".links34").stop().hide().animate({opacity:0});
        $(".cont-34").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A34").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/nagaland_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Nagaland</a>") ;
	});	
	
	/* ---------------Nagaland------------------ */
	
	
		$("#130").click(function() {
		
		$("#13").stop().show().animate({opacity:0.8});
		$(".cont-13").stop().show().animate({opacity:0.9});
		$(".links13").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
    });
    $("#13").click(function() {
		$(".links13").stop().hide().animate({opacity:0});
        $(".cont-13").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A13").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/arunachal_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Arunachal Pradesh</a>") ;
	});	
	
	/* ---------------Arunachal Pradesh------------------ */
	
	
		
		$("#140").click(function() {
		
		$("#14").stop().show().animate({opacity:0.8});
		$(".cont-14").stop().show().animate({opacity:0.9});
		$(".links14").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#30").hide();
		$(".links30").stop().animate({opacity:0});
		
		
		
    });
    $("#14").click(function() {
		$(".links14").stop().hide().animate({opacity:0});
        $(".cont-14").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A14").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/assam_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Assam</a>") ;
	});	
	
	/* ---------------Assam------------------ */
	
	
			$("#300").click(function() {
		
		$("#30").stop().show().animate({opacity:0.8});
		$(".cont-30").stop().show().animate({opacity:0.9});
		$(".links30").stop().show().animate({opacity:0.9},1000);
		$("#43").hide();
		$(".links43").stop().animate({opacity:0});
		$("#23").hide();
		$(".links23").stop().animate({opacity:0});
		$("#22").hide();
		$(".links22").stop().animate({opacity:0});
		$("#36").hide();
		$(".links36").stop().animate({opacity:0});
		$("#42").hide();
		$(".links42").stop().animate({opacity:0});
		$("#44").hide();
		$(".links44").stop().animate({opacity:0});
		$("#38").hide();
		$(".links38").stop().animate({opacity:0});
		$("#29").hide();
		$(".links29").stop().animate({opacity:0});
		$("#15").hide();
		$(".links15").stop().animate({opacity:0});
		$("#16").hide();
		$(".links16").stop().animate({opacity:0});
		$("#21").hide();
		$(".links21").stop().animate({opacity:0});
		$("#28").hide();
		$(".links28").stop().animate({opacity:0});
		$("#25").hide();
		$(".links25").stop().animate({opacity:0});
		$("#20").hide();
		$(".links20").stop().animate({opacity:0});
		$("#26").hide();
		$(".links26").stop().animate({opacity:0});
		$("#40").hide();
		$(".links40").stop().animate({opacity:0});
		$("#12").hide();
		$(".links12").stop().animate({opacity:0});
		$("#35").hide();
		$(".links35").stop().animate({opacity:0});
		$("#24").hide();
		$(".links24").stop().animate({opacity:0});
		$("#45").hide();
		$(".links45").stop().animate({opacity:0});
		$("#39").hide();
		$(".links39").stop().animate({opacity:0});
		$("#41").hide();
		$(".links41").stop().animate({opacity:0});
		$("#32").hide();
		$(".links32").stop().animate({opacity:0});
		$("#31").hide();
		$(".links31").stop().animate({opacity:0});
		$("#34").hide();
		$(".links34").stop().animate({opacity:0});
		$("#13").hide();
		$(".links13").stop().animate({opacity:0});
		$("#14").hide();
		$(".links14").stop().animate({opacity:0});
		
		
		
    });
    $("#30").click(function() {
		$(".links30").stop().hide().animate({opacity:0});
        $(".cont-30").stop().animate({opacity:0}).hide();
		$(this).stop().animate({opacity:0}).hide();	
		
    });
	
	$("#A30").click(function() {
		$("#graph-container").slideToggle(1000);
		$("#graph-contents").html("<a href=graphs/general_index_graphs/meghalaya_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit>Meghalayah</a>") ;
	});	
	
	/* ---------------Meghalaya------------------ */
	
	$("#mygraph1").click(function() {
		$("#showmygraph").animate({top:0},1000);
        $("#showmygraph").load("Project(NIC)/jk_graph.php?sector=Rural&year=2011&month=July&graph_type=bubble&submit=submit");
   
    });
	$("#goback").click(function() {
		window.location.href = './' ;
        
    });
	
	
	});