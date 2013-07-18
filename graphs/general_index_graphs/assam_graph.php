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
	$ass=$row['Assam'];
}
	
?>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Highcharts Example</title>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script type="text/javascript">
$(function() {
	var ass=<?php echo $ass?>;
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
			categories: ['Assam']
        },

        yAxis: {
			min: 0,
            startOnTick: false,
            endOnTick: false
        },

        series: [{
			name: 'Assam',
            data: [
                [ass, ass]
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
	<form action="#" method="post">
<select name="sector">
 	<option selected value="Sector">Sector</option>
    <option value="Rural" >rural</option>
    <option  value="Rural+Urban" >rural+urban</option>
    <option  value="Urban" >urban</option>
</select>

<select name="year">
 	<option selected value="Year">Year</option>
    <option value="2011" >2011</option>
    <option  value="2012" >2012</option>
    <option  value="2013" >2013</option>
  </select>  
 
 <select name="month">
 <option selected value="Month" >Month</option>
    <option value="January" >January</option>
    <option  value="February" >February</option>
    <option  value="March" >March</option>
    <option  value="April" >April</option>
    <option  value="May" >May</option>
    <option  value="June" >June</option>
    <option  value="July" >July</option>
    <option  value="August" >August</option>
    <option  value="September" >September</option>
    <option  value="October" >October</option>
    <option  value="November" >November</option>
    <option  value="December" >December</option>
  </select>
  <?php echo 'Your type is '.$type. ' ' ; ?>
  <select name="graph_type" multiple="multiple" id="graph_type">
  
 <option selected value=" <?php if(!empty($type)) echo $type ; ?>"><?php if(!empty($type)) echo $type ; ?></option>
    <option value="column">column</option>
    <option value="bubble">bubble</option>
    <option value="bar">bar</option>
  </select>
  <script>
  $(document).ready(function(e) {
    $('#graph_type').change(function(e) {
  var type = $(this).val();
  });
  </script>
  <input type="submit" name="submit" value="submit" />
  </form>
  </body>
</html>
