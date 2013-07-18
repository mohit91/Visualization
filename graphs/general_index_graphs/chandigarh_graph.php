<!DOCTYPE HTML>
<html>
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
	$chandi=$row['Chandigarh'];
}
	
?>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Highcharts Example</title>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script type="text/javascript">
$(function() {
	var chandi=<?php echo $chandi?>;
    $('#container').highcharts({

        chart: {
            type: '<?php echo $type ?>',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        title: {
            text: 'General State Index'
        },

        xAxis: {
            gridLineWidth: 1,
			categories: ['Chandigarh']
        },

        yAxis: {
			min: 0,
            startOnTick: false,
            endOnTick: false
        },

        series: [{
			name: 'Chandigarh',
            data: [
                [chandi, chandi]
            ],
            marker: {
                 fillColor: {
                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                     stops: [
                         [0, 'rgba(255,250,255,0.5)'],
                         [1, 'rgba(69,114,167,0.5)']
                     ]
                 }
            }
        }]

    });
});
		</script>
	</head>
	<body>
<script src="../highcharts/js/highcharts.js"></script>
<script src="../highcharts/js/highcharts-more.js"></script>

<div id="container" style="width: 600px; height: 400px; margin: 0 auto;"></div>

 <?php require_once('table.php') ?>	
  <script>
  $(document).ready(function(e) {
    $('#graph_type').change(function(e) {
  var type = $(this).val();
  });
  </script>
 
  </body>
</html>
