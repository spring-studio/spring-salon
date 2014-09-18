<?php $to="nskarica1@gmail.com";
	$ime=$_POST['ime']; 
	$broj=$_POST['broj']; 
	$poruka=$_POST['poruka'];
	$header="From: $broj"; 
	$subject="Kontakt sa Vaše web stranice"; 
	$sadrzaj="\n Ime: " . $ime . "\n Kontakt broj: " . $broj . " \n Poruka: " . $poruka ; 
	if(isset($_POST['submit']))
	{ mail($to,$subject,$sadrzaj,$header);
		?> 