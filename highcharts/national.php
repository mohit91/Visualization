<?php
$type=$_REQUEST['graph_type'] ;
?>
<?php
include('connection.php');
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
	$jk=$row['Jammu and Kashmir'];
	$hp=$row['Himachal Pradesh'];
	$pjb=$row['Punjab'];
	$chandi=$row['Chandigarh'];
	$utr=$row['Uttaranchal'];
	$hr=$row['Haryana'];
	$dl=$row['Delhi'];
	$rj=$row['Rajasthan'];
	$up=$row['Uttar Pradesh'];
	$br=$row['Bihar'];
	$sik=$row['Sikkim'];
	$arun=$row['Arunachal Pradesh'];
	$nag=$row['Nagaland'];
	$mani=$row['Manipur'];
	$miz=$row['Mizoram'];
	$tri=$row['Tripura'];
	$megh=$row['Meghalaya'];
	$ass=$row['Assam'];
	$wb=$row['West Bengal'];
	$jhr=$row['Jharkhand'];
	$orr=$row['Orissa'];
	$chattis=$row['Chattisgarh'];
	$mp=$row['Madhya Pradesh'];
	$guj=$row['Gujarat'];
	$dnd=$row['Daman and Diu'];
	$dnh=$row['Dadra and Nagar Haveli'];
	$mh=$row['Maharashtra'];
	$andhra=$row['Andhra Pradesh'];
	$kr=$row['Karnataka'];
	$goa=$row['Goa'];
	$lkshdp=$row['Lakshwadeep'];
	$ker=$row['Kerala'];
	$tn=$row['Tamil Nadu'];
	$pond=$row['Pondicherry'];
	$andaman=$row['Andaman and Nicobar'];
}
	
?>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Highcharts Example</title>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script type="text/javascript">
$(function () {
	  
  var jk=<?php echo $jk?>;
  var hp=<?php echo $hp?>;
  var pjb=<?php echo $pjb?>;
  var chandi=<?php echo $chandi?>;
  var utr=<?php echo $utr?>;
  var hr=<?php echo $hr?>;
  var dl=<?php echo $dl?>;
  var rj=<?php echo $rj?>;
  var up =<?php echo $up?>;
  var br=<?php echo $br?>;
  var sik=<?php echo $sik?>;
  var arun =<?php echo $arun?>;
  var nag=<?php echo $nag ?>;
  var mani=<?php echo $mani?>;
  var miz=<?php echo $miz?>;
  var tri=<?php echo $tri?>;
  var megh=<?php echo $megh?>;
  var ass=<?php echo $ass?>;
  var wb=<?php echo $wb?>;
  var jhr=<?php echo $jhr?>;
  var orr=<?php echo $orr?>;
  var chattis=<?php echo $chattis?>;
  var mp=<?php echo $mp?>;
  var guj=<?php echo $guj?>;
  var dnd=<?php echo $dnd?>;
  var dnh=<?php echo $dnh?>;
  var mh=<?php echo $mh?>;
  var andhra=<?php echo $andhra?>;
  var kr=<?php echo $kr?>;
  var goa=<?php echo $goa?>;
  var lkshdp=<?php echo $lkshdp?>;
  var ker=<?php echo $ker?>;
  var tn=<?php echo $tn?>;
  var pond=<?php echo $pond?>;
  var andaman=<?php echo $andaman ?>;  
    $('#container').highcharts({
            chart: {
                type: '<?php echo $type ?>',
				zoomType: 'xy',
				plotBorderWidth: 1,
				width: 5000
            },
            title: {
                text: 'State Wise General Index'
            },
            subtitle: {
                text: 'Source:Data.gov.in'
            },
            xAxis: {
				max: 32,
				gridLineWidth: 1,
                categories: [
                    'Jammu and Kashmir',
                    'Himachal Pradesh',
                    'Punjab',
                    'Chandigarh',
                    'Uttaranchal',
                    'Haryana',
                    'Delhi',
                    'Rajasthan',
                    'Uttar Pradesh',
                    'Bihar',
                    'Sikkim',
                    'Arunachal Pradesh',
					'Nagaland',
					'Manipur',
					'Mizoram',
					'Tripura',
					'Meghalaya',
					'Assam',
					'West Bengal',
					'Jharkhand',
					'Orissa',
					'Chattisgarh',
					'Madhya Pradesh',
					'Gujarat',
					'Daman and Diu',
					'Dadra and Nagar Haveli',
					'Maharashtra',
					'Andhra Pradesh',
					'Karnataka',
					'Goa',
					'Tamil Nadu',
					'Pondicherry',
					'Andaman and Nicobar'
                ]
            },
            yAxis: {
                min: 0,
				startOnTick: false,
            	endOnTick: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
			},
			series: [{
				
                data: [ 
				[jk],
	 			[hp],
	 			[pjb],
	 			[chandi],
	 			[utr],
	 			[hr],
				[dl],
	 			[rj],
	 			[up],
	 			[br],
	 			[sik],
	 			[arun],
	 			[nag],
	 			[mani],
	 			[miz],
				[tri],
	 			[megh],
				[ass],
				[wb],
	 			[jhr],
	 			[orr],
	 			[chattis],
	 			[mp],
	 			[guj],
	 			[dnd],
	 			[dnh],
	 			[mh],
				[andhra],
				[kr],
				[goa],
				[lkshdp],
				[ker],
				[tn],
				[pond],
				[andaman]
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
<script src="js/highcharts.js"></script>
<script src="js/modules/exporting.js"></script>

<div id="container" style=" height: 400px; margin: 0 auto"></div>
<form action="#" method="get">
<select name="sector">
    <option value="Rural" >rural</option>
    <option  value="Rural+Urban" >rural+urban</option>
    <option  value="Urban" >urban</option>
</select>

<select name="year">
    <option value="2011" >2011</option>
    <option  value="2012" >2012</option>
    <option  value="2013" >2013</option>
  </select>  
 
 <select name="month">
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

  <select name="graph_type" id="graph_type">
 
    <option value="line">line</option>
    <option value="area">area</option>
    <option value="spline">spline</option>
    <option value="column">column</option>
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