                                 $(document).ready( function() {
	//Google Maps JS
	//Set Map
	function initialize() {
		var myLatlng = new google.maps.LatLng(45.7977839,15.9530061);
		var centerMap = new google.maps.LatLng(45.803898, 15.952785);
		var imagePath = 'http://www.jamesnew.co.uk/googlePin.png';
		var mapOptions = {
			zoom: 15,
			center: centerMap,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		//Callout Content
		var contentString = 
		'<div id="googleMapsFormContent">'+
			'<form id="googlemap_contact"  method="post" action="mail.php" enctype="text/plain">'+'<h1 class="h1Kontakt">Dogovorite svoj termin</h1>'+
				'<h4 class="h4Kontakt">Preko telefona</h3>'+
				'<h3 class="h3Kontakt">098 99 47 231</h3>'+
				'<h3 class="h3Kontakt">01 55 20 428</h3>'+
				'<h4 class="h4Kontakt">Ili</h4>'+
				'<h4 class="h4Kontakt">Slanjem E-maila</h4>'+
				'<input type="text" name="ime" placeholder="Vaše ime i prezime" required>'+'<br/>'+
				'<input type="tel" name="mobitel" placeholder="Vaš kontakt broj" required>'+'<br/>'+
				'<input type="email" name="email" placeholder="Vaš e-mail" required>'+'<br/>'+
				'<textarea name="poruka" placeholder="Unesite Vašu poruku.."  required></textarea>'+'<br/>'+
				'<input type="submit" value="Pošalji" class="submit" name="submit"> '+		
				'<div id="googlemap_responseMsg"> </div>'+
				'<h4 class="h4Kontakt">Gdje se nalazimo?</h3>'+
				'<h3 class="h3Kontakt dobojskaMargin">Dobojska 5, Zagreb</h3>'+
				'<h4 class="h4Kontakt">Radno vrijeme</h4>'+
				'<h3 class="h3Kontakt">10:00 - 20:00</h3>'+
				'<h5 class="h5Kontakt">ponedjeljak do subote</h5>'+
		'</form>'+
		'</div>';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 900
		});

		google.maps.event.addListener(infowindow, 'domready', function() {
	      //bind mailer
	      bindMailToForm('#googlemap_contact', '#googlemap_responseMsg');
		});


		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});


		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		infowindow.open(map,marker);

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
			infowindow.open(map);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});
                            