<?php
$name = "root";
$password = "";
$localhost = "localhost"; 
//connection to the database
$dbhandle = mysql_connect($localhost, $name, $password)
  or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";
$db="infant_mortality";
$link = mysql_connect($localhost,$name,$password) or die("Cd not connect to MySql");
mysql_select_db('infant_mortality',$dbhandle) or die("Could not connect to MySql");
//echo "Yes!!!!!.<br>";

?>
