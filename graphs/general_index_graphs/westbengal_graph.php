<?php
$type=$_REQUEST['graph_type'] ;
?>

<?php
include('../connection.php');
$sector=$_REQUEST['sector'];
$year=$_REQUEST['year'];
$month=$_REQUEST['month'];
echo "You have chosen-Sector=";
echo $sector;
echo "year=";
echo $year;
echo "Month=";
echo $month;
$result=mysql_query("SELECT * FROM stateindex_data WHERE Sector='$sector' and Year='$year' and Month='$month'",$link);
if(!$result)
{
	echo "no never";
}
while($row=mysql_fetch_array($result))
{
	$wb=$row['West Bengal'];
}
	
?>
<head>
  <script type="text/javascript">
  window.onload = function () {
	  
  var wb=<?php echo $wb?>;   
  var chart = new CanvasJS.Chart("chartContainer", {
		
      title:{
        text: "General State Index"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: '<?php echo $type ?>',
		 showInLegend: true,
		 color: "rgba(150,96,120,.6)",
        dataPoints: [
         {label: "West Bengal", y: wb }
		]
       }
       ]
     });

    chart.render();
  }
  </script>
  <script type="text/javascript" src="../canvasjs.min.js"></script>
</head>
<body>
  <div id="chartContainer" style="height: 350px; width: 400px; margin-top:350px;">  </div>
 <?php require_once('table.php') ?>
  <script>
  $(document).ready(function(e) {
    $('#graph_type').change(function(e) {
  var type = $(this).val();
  });
  </script>
  
</body>
</html>