<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<title>Data Visualization</title>
<script src="Scripts/jquery.min.js" type="text/javascript"></script>
<script src="Scripts/animate.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="css/style.css" />
<style>

/* ----------------------------------------------------------------------------
* The Sliding Menu Effect - (http://www.entheosweb.com/tutorials/css/default.asp)
* This notice must stay intact for use
* Visit http://www.entheosweb.com/ for more
------------------------------------------------------------------------------ */

	* { margin: 0; padding: 0; }
	body { padding: 40px; background: #eee; font-family: Arial; font-size: 16px; line-height: 18px; }
#preloader {
	background: #000;
	position:fixed;
	left:0px; 
	top:0px; 
	width:100%; 
	height:100%; 
	text-align:center;
	color:#fff;
}
a {
	color:#3CC;
	text-decoration:none;
}
a:hover {
	color:#F69;
	text-decoration:underline;
}
#preloader div {
	width:400px;
	margin:auto;
	height: 3px;
	text-align:center;
	border: 4px solid #111;
	overflow:hidden;
}
#preloader_image {
	position: relative;
	left:0px;
	top:-10px;
}
.images { 
 width: 300px; 
 display: inline-block;
 margin: auto;
}
.link { text-decoration: none; color: #000;  }

/* ----------------------------------------------------------------------------
* The Sliding Menu Effect - (http://www.entheosweb.com/tutorials/css/default.asp)
* This notice must stay intact for use
* Visit http://www.entheosweb.com/ for more
------------------------------------------------------------------------------ */


/*  --------------- button ---------------------- */
	.button {
		padding: 11px 21px 13px;
		display: inline;
		border: 2px solid #FFF;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		text-shadow: 1px 1px #666;
box-shadow:inset 0px -4px 21px 0px #f0f0f0;
-moz-box-shadow:inset 0px -4px 21px 0px #f0f0f0;
-webkit-box-shadow:inset 0px -4px 21px 0px #f0f0f0;
box-shadow:0px 2px 21px 5px #3f3f3f;
-moz-box-shadow:0px 2px 21px 5px #3f3f3f;
-webkit-box-shadow: 0px 2px 21px 5px #3f3f3f;

		}
	.button:hover {

		}
	.button:active {
		position: relative;
		top: 6px;
		text-shadow: 2px 2px #666;
		padding: 10px 21px 10px;
box-shadow:inset 0px 4px 21px 5px #e5e5e5;
-moz-box-shadow:inset 0px 4px 21px 5px #e5e5e5;
-webkit-box-shadow:inset 0px 4px 21px 5px #e5e5e5;

box-shadow: 0px 0px 21px 0px #3f3f3f;
-moz-box-shadow: 0px 0px 21px 0px #3f3f3f;
-webkit-box-shadow: 0px 0px 21px 0px #3f3f3f;
}


	.blue { background-color: #56c6d9; }
	iframe {
  max-width: 100%;
}
</style>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" language="javascript">
function adjustIframes()
{
  $('iframe').each(function(){
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }
  
    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    }
  });
}
$(window).on('resize load',adjustIframes);

/***********************************************
* The Sliding Menu Effect - (http://www.entheosweb.com/tutorials/css/default.asp)
* This notice must stay intact for use
* Visit http://www.entheosweb.com/ for more
***********************************************/


rotate = 1;
function hide_preloader() { //DOM
rotate = 0;
$("#preloader").fadeOut(1000);
}



$(document).ready(function(){

// calculate height 
var screen_ht = $(window).height();
var preloader_ht = 10;
var padding =(screen_ht/2)-preloader_ht;

$("#preloader").css("padding-top",padding+"px");

// loading animation using script

	function anim(){ $("#preloader_image").animate({left:'-1400px'}, 8000,
	function(){ $("#preloader_image").animate({left:'0px'}, 5000 ); if(rotate==1){ anim();}  } );
	}

	anim();

});

/***********************************************
* The Sliding Menu Effect - (http://www.entheosweb.com/tutorials/css/default.asp)
* This notice must stay intact for use
* Visit http://www.entheosweb.com/ for more
***********************************************/
</script>

</head>
<body onload="hide_preloader();">

<div id="preloader">Page loading...
<div><img src="images/loading.jpg" id="preloader_image" ></div>
</div> <!-- #preloader -->
<div class="align-center">
		<div class="header">
			<div id="logo"><pre id="name"><b>D A T A</b>   V I S U A L I S A T I O N </pre> </div>
			<div class="navigator">
				<div class="nav" id="nav1"> DISTRICT </div><div class="nav" id="nav2"> STATE </div><div class="nav" id="nav3"> NATIONAL </div>			
			</div>		
		</div>
	</div>
	<div class="main">
	<div id="home">
		<div class="main-elem-odd" id="odd1"><img src="images/graph1.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem1"></div></div>
		<div class="main-elem-even" id="even2"> <img src="images/graph2.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem2"></div></div>
		<div class="main-elem-odd" id="odd3"> <img src="images/graph3.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem3"></div></div>
		<div class="main-elem-even" id="even4"><img src="images/graph4.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem4"></div></div>
		<div class="main-elem-odd" id="odd5"> <img src="images/graph5.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem5"></div></div>
		<div class="main-elem-even" id="even6"> <img src="images/graph6.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem6"></div></div>
		<div class="main-elem-odd" id="odd7"><img src="images/graph7.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem7"></div></div>
		<div class="main-elem-even" id="even8"> <img src="images/graph8.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem8"></div></div>
		<div class="main-elem-odd" id="odd9"> <img src="images/graph9.png" height="300" width="300" alt="" /><div class="elem-hover" id="elem9"></div></div>	
	</div>
	</div>
	<div class="national">
	<div id="home">
	<!--<img src="India.png" alt="National Level" height="900" width="900" />--> 
<!--<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="900" height="900" id="DN_India_Map" align="middle">
<param name="allowScriptAccess" value="sameDomain" />
<param name="movie" value="DN_India_Map.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="DN_India_Map.swf" quality="high" bgcolor="#ffffff" width="900" height="900" name="DN_India_Map" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
</object>-->
	</div>	
	</div>
	<div class="footer"> 
	<div class="align-center" >
		<div class="f-elem" id="fe1"> <pre><i>H O M E</i></pre> </div>
		<div class="f-elem" id="fe2"> <pre><i>C O N T A C T    U S</i></pre> </div>
		<div class="f-elem" id="fe3"> <pre><i>A B O U T    U S</i></pre> </div>
	</div>
	</div>
</body>
</html>