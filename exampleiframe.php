<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Untitled Document</title>

 
</head>
    <script type="text/javascript" src="hilight.js"></script>
       <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript">$(function() {
        $('.map').maphilight();
        $('#squidheadlink').mouseover(function(e) {
            $('#squidhead').mouseover();
        }).mouseout(function(e) {
            $('#squidhead').mouseout();
        }).click(function(e) { e.preventDefault(); });
    });</script>

<body>


    <div id="map_canvas"> </div>
<a href="../images/agency_manager_concept.ashx.png" class="speedo-popup">
    Click me to open swf
</a>

<div data-role="popup" id="popupMap" data-overlay-theme="a" data-theme="a" data-corners="false" data-tolerance="15,15">

    <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>
	 
    <iframe src="iframe2.php" width="580" height="520" seamless >sdsds</iframe>
    
	 
</div>

</body>
</html>