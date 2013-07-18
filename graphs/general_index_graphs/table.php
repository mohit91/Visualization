<form action="#" method="get" style="background:#FF9933; padding:10px;">
<table style="background: #0099CC; padding:10px; margin-left:50px; " cellpadding="10" id="tablestate"  >

<tr><th>Sector</th>
 <td> <select name="sector">
 	
    <option selected value="Rural" >rural</option>
    <option  value="Rural+Urban" >rural+urban</option>
    <option  value="Urban" >urban</option>
</select></td></tr>

<tr><th> Year </th>
<td><select name="year">
    <option selected value="2011" >2011</option>
    <option  value="2012" >2012</option>
    <option  value="2013" >2013</option>
  </select></td></tr>  
 
<tr><th> Month </th>
<td><select name="month">
    <option selected value="January" >January</option>
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
  </select></td></tr>
  
<tr><th>Graph Type </th>  
<td><select name="graph_type" id="graph_type">
    <option value="column" selected>column</option>
    <option value="bubble">bubble</option>
    <option value="bar">bar</option>
  </select></td></tr>
  </table>
   <input type="submit" name="submit" value="submit" style="background:#0099CC; padding:5px; margin-left:125px; border:none; margin-top:10px; color:#FFFFFF; font-size:24px; "  />
  </form>
  <div style="position:absolute; left:400px; bottom: 100px; color:#FFFFFF; font-family:'Arial Black', Gadget, sans-serif; font-size:24px; font-weight:bold; ">
<?php
	echo "<pre>You have chosen:  Sector= ".$sector."   year = ".$year." 	Month = ".$month." </pre>"; 
?>
</div>
<p style="padding:5px; width:120px; background:#999999; text-align:center; font-size:24px; font-weight:bold; position:absolute; right:20px; bottom:-50px;">
<a href="../../" style="color:#FFF; text-decoration:none;"> Go Back </a>
</p>