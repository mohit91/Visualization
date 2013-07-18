<?php
$username = "root";
$password = "";
$hostname = "localhost"; 
//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";
$db="db_lms";
$link = mysql_connect($hostname,$username,$password) or die("Could not connect to MySql");
mysql_select_db('fyup_7_6_13_11-53am',$dbhandle) or die("Could not connect to MySql");
//echo "Yes!!!!!.<br>";
?>

