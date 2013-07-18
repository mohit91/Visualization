<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>DU Student Status Charts</title>
         <link rel="icon" href="dulogo1.jpg">
		<script type="text/javascript" src="min.js"></script>
               <?php
		include('connection.php');
$result_m_5 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-05'"));
$result_f_5 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-05'"));
$result_m_6 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-06'"));
$result_f_6 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-06'"));
$result_m_7 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-07'"));
$result_f_7 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-07'"));

$result_m_8 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-08'"));
$result_f_8 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-08'"));
$result_m_9 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-09'"));
$result_f_9 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-09'"));
$result_m_10 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-10'"));
$result_f_10 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-10'"));

$result_m_11 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-11'"));
$result_f_11 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-11'"));
$result_m_12 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-12'"));
$result_f_12 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-12'"));
$result_m_13 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-13'"));
$result_f_13 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-13'"));


$result_m_14 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-14'"));
$result_f_14 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-14'"));
$result_m_15 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-15'"));
$result_f_15 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-15'"));
$result_m_16 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-16'"));
$result_f_16 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-16'"));

$result_m_17 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-17'"));
$result_f_17 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-17'"));
$result_m_18 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-18'"));
$result_f_18 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-18'"));
$result_m_19 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Male' and date_of_registration='2013-06-19'"));
$result_f_19 = mysql_num_rows(mysql_query("SELECT * FROM tbl_applicant_info_master WHERE ap_gender='Female' and date_of_registration='2013-06-19'"));
//////////////////////////////////

?>
   <?php 
         $v_m_5=$result_m_5;
		 $v_f_5=$result_f_5;
		 $v_m_6=$result_m_6;
		 $v_f_6=$result_f_6;
		 $v_m_7=$result_m_7;
		 $v_f_7=$result_f_7;
		 $v_m_8=$result_m_8;
		 $v_f_8=$result_f_8;
		 $v_m_9=$result_m_9;
		 $v_f_9=$result_f_9;
		 $v_m_10=$result_m_10;
		 $v_f_10=$result_f_10;
		 $v_m_11=$result_m_11;
		 $v_f_11=$result_f_11;
		 $v_m_12=$result_m_12;
		 $v_f_12=$result_f_12;
		 $v_m_13=$result_m_13;
		 $v_f_13=$result_f_13;
		 $v_m_14=$result_m_14;
		 $v_f_14=$result_f_14;
		 $v_m_15=$result_m_15;
		 $v_f_15=$result_f_15;
		 $v_m_16=$result_m_16;
		 $v_f_16=$result_f_16;
		 $v_m_17=$result_m_17;
		 $v_f_17=$result_f_17;
		 $v_m_18=$result_m_18;
		 $v_f_18=$result_f_18;
		 $v_m_19=$result_m_19;
		 $v_f_19=$result_f_19;
    ?>
		<script type="text/javascript">
		  var v_m_5=<?Php echo $v_m_5;?>;
               var v_f_5=<?Php echo $v_f_5;?>;
			   var vfm1=v_m_5+v_f_5;
			    var v_m_6=<?Php echo $v_m_6;?>;
               var v_f_6=<?Php echo $v_f_6;?>;
			   var vfm2=v_m_6+v_f_6;
			  var v_m_7=<?Php echo $v_m_7;?>;
               var v_f_7=<?Php echo $v_f_7;?>;
			   var vfm3=v_m_7+v_f_7;
			   var v_m_8=<?Php echo $v_m_8;?>;
               var v_f_8=<?Php echo $v_f_8;?>;
			   var vfm4=v_m_8+v_f_8;
			   var v_m_9=<?Php echo $v_m_9;?>;
               var v_f_9=<?Php echo $v_f_9;?>;
			   var vfm5=v_m_9+v_f_9;
			   var v_m_10=<?Php echo $v_m_10;?>;
               var v_f_10=<?Php echo $v_f_10;?>;
			   var vfm6=v_m_10+v_f_10;
			   var v_m_11=<?Php echo $v_m_11;?>;
               var v_f_11=<?Php echo $v_f_11;?>;
			    var vfm7=v_m_11+v_f_11;
			   var v_m_12=<?Php echo $v_m_12;?>;
               var v_f_12=<?Php echo $v_f_12;?>;
			   var vfm8=v_m_12+v_f_12;
			   var v_m_13=<?Php echo $v_m_13;?>;
               var v_f_13=<?Php echo $v_f_13;?>;
			   var vfm9=v_m_13+v_f_13;
			   var v_m_14=<?Php echo $v_m_14;?>;
               var v_f_14=<?Php echo $v_f_14;?>;
			    var vfm10=v_m_14+v_f_14;
			   var v_m_15=<?Php echo $v_m_15;?>;
               var v_f_15=<?Php echo $v_f_15;?>;
			   var vfm11=v_m_15+v_f_15;
			   var v_m_16=<?Php echo $v_m_16;?>;
               var v_f_16=<?Php echo $v_f_16;?>;
			   var vfm12=v_m_16+v_f_16;
			   var v_m_17=<?Php echo $v_m_17;?>;
               var v_f_17=<?Php echo $v_f_17;?>;
			   var vfm13=v_m_17+v_f_17;
			   var v_m_18=<?Php echo $v_m_18;?>;
               var v_f_18=<?Php echo $v_f_18;?>;
			   var vfm14=v_m_17+v_f_17;
			   var v_m_19=<?Php echo $v_m_19;?>;
               var v_f_19=<?Php echo $v_f_19;?>;
			   var vfm15=v_m_19+v_f_19;
		  //alert("Hello Dear! Rahul Bhati Welcomes You");
$(function () {
        $('#container').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'INDIAN POPULATION'
            },
            subtitle: {
                text: 'University of Delhi South Campus'
            },
            xAxis: {
                categories: ['Year 1998', 'Year 1999', 'Year 2000', 'Year 2001', 'Year 2002', 'Year 2003',
                    'Year 2004', 'Year 2005', 'Year 2006', 'Year 2007', 'Year 2008', 'Year 2009','Year 2010','Year 2011','Year 1012']
            },
            yAxis: {
                title: {
                    text: 'INDIAN POPULATION IN MILLIAN'
                },
                labels: {
                    formatter: function() {
                        return this.value +'k'
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
				 name: 'TOTAL',
                marker: {
                    symbol: 'square'
                },
                data: [vfm1, vfm2, vfm3, vfm4, vfm5, vfm6, vfm7, {
                    y: 20000.0,
                    marker: {
                        symbol: 'url(t.png)'
                    }
                }, vfm9, vfm10, vfm11, vfm12, vfm13, vfm14, vfm15]
    
            },{
                name: 'MALE',
                marker: {
                    symbol: 'square'
                },
                data: [v_m_5,v_m_6,v_m_7,v_m_8,v_m_9,v_m_10,v_m_11,{
                    y: 13000.0,
                    marker: {
                        symbol: 'url(m.png)'
                    }
                }, v_m_13,v_m_14,v_m_15,v_m_16,v_m_17,v_m_18,v_m_19]
    
            }, {
                name: 'FEMALE',
                marker: {
                    symbol: 'diamond'
                },
                data: [v_f_5,v_f_6,v_f_7,v_f_8,v_f_9,v_f_10,v_f_11,{
                    y: 7000.0,
                    marker: {
                        symbol: 'url(f.png)'
                    }
                },   v_f_13,v_f_14,v_f_15,v_f_16,v_f_17,v_f_18,v_f_19]
            }]
        });
    });
		</script>
	</head>
	<body>
<script src="highcharts.js"></script>
<script src="exporting.js"></script>
<div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
	</body>
</html>