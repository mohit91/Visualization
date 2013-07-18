<?php
include('connection.php');
?>
<?php
 $type=$_REQUEST['graph_type'];
 $state=$_REQUEST['state'];
 $year=$_REQUEST['year'];
echo "You have chosen State=";
echo $state."<br>";
echo "year=";
echo $year."<br>";
if($year==2009)
{
$result=mysql_query("SELECT * FROM year_2009 WHERE State='$state'",$link);
while($row=mysql_fetch_array($result))
{
	 $male=$row['Male'];
	 $female=$row['Female'];
	 $person=$row['Person'];
}
}
else if($year==2010)
{
$result=mysql_query("SELECT * FROM year_2010 WHERE State='$state'",$link);
while($row=mysql_fetch_array($result))
{
	$male=$row['Male'];
	$female=$row['Female'];
	$person=$row['Person'];
}
}
else if($year==2011)
{
$result=mysql_query("SELECT * FROM year_2011 WHERE State='$state'",$link);
while($row=mysql_fetch_array($result))
{
	$male=$row['Male'];
	$female=$row['Female'];
	$person=$row['Person'];
}
}
?>
<html>
<head>

<script type="text/javascript">
  window.onload = function () {
  var male=<?php echo $male ?>;
  var female=<?php echo $female ?>;
  var person=<?php echo $person ?>;   
  var chart = new CanvasJS.Chart("chartContainer", {
		
      title:{
        text: "Infant Mortality Rate"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: '<?php echo $type ?>',
		 showInLegend: true,
		 legendText: "Male",
		 color: "rgba(255,0,0,1)",
        dataPoints: [
         {label: " ", y: male}
		]
       },
	   {
	     type: '<?php echo $type ?>',
		 showInLegend: true,
		 legendText: "Female",
		 color: "rgba(0,255,0,1)",
		 dataPoints: [
		 {label: " ", y: female}
		 ]
	   },
	   {
	     type: '<?php echo $type ?>',
		 showInLegend: true,
		 legendText: "Person",
		 color: "rgba(0,0,255,1)",
		 dataPoints: [
		 {label: " ", y: person}
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
<div id="chartContainer" style="height: 350px; width: 400px; margin-top:100px; margin-left: 100px;">  </div>
<form action="#" method="post" style="margin-left: 100px;">
<select name="state">
 	<option selected value="State">State</option>
    <option  value="Andaman and Nicobar" >Andaman and Nicobar</option>
    <option  value="Andhra Pradesh" >Andhra Pradesh</option>
    <option  value="Arunachal Pradesh" >Arunachal Pradesh</option>
    <option  value="Assam" >Assam</option>
    <option  value="Bihar" >Bihar</option>
    <option  value="Chandigarh" >Chandigarh</option>
    <option  value="Chattisgarh" >Chattisgarh</option>
    <option  value="Dadra and Nagar Haveli" >Dadra and Nagar Haveli</option>
    <option  value="Daman and Diu" >Daman and Diu</option>
    <option  value="Delhi" >Delhi</option>
    <option  value="Goa" >Goa</option>
    <option  value="Gujarat" >Gujarat</option>
    <option  value="Haryana" >Haryana</option>
    <option  value="Himachal Pradesh" >Himachal Pradesh</option>
    <option  value="Jammu and Kashmir" >Jammu and Kashmir</option>
    <option  value="Jharkhand" >Jharkhand</option>
    <option  value="Karnataka" >Karnataka</option>
    <option  value="Kerala" >Kerala</option>
    <option  value="Lakshwadeep" >Lakshwadeep</option>
    <option  value="Madhya Pradesh" >Madhya Pradesh</option>
    <option  value="Maharashtra" >Maharashtra</option>
    <option  value="Manipur" >Manipur</option>
    <option  value="Meghalaya" >Meghalaya</option>
    <option  value="Mizoram" >Mizoram</option>
    <option  value="Nagaland" >Nagaland</option>
    <option  value="Orissa" >Orissa</option>
    <option  value="Pondicherry" >Pondicherry</option>
    <option  value="Punjab" >Punjab</option>
    <option  value="Rajasthan" >Rajasthan</option>
    <option  value="Sikkim" >Sikkim</option>
    <option  value="Tamil Nadu" >Tamil Nadu</option>
    <option  value="Tripura" >Tripura</option>
    <option  value="Uttar Pradesh" >Uttar Pradesh</option>
    <option  value="Uttaranchal" >Uttaranchal</option>
    <option  value="West Bengal" >West Bengal</option>
</select>

<select name="year">
 	<option selected value="Year">Year</option>
    <option value="2009" >2009</option>
    <option  value="2010" >2010</option>
    <option  value="2011" >2011</option>
  </select>
  
  <select name="graph_type" multiple="multiple" id="graph_type">
  
 <option selected value=" <?php if(!empty($type)) echo $type ; ?>"><?php if(!empty($type)) echo $type ; ?></option>
    <option value="column">column</option>
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