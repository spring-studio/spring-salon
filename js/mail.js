function bindMailToForm(form_id, responseMsg_id){
	var form_desktop = $(form_id);
	var responseMsg = $(responseMsg_id);

	form_desktop.submit(function(e){
		e.preventDefault();
		var formData = form_desktop.serialize();
		responseMsg.hide()
			.attr('class', '')
           .addClass('response-waiting')
           .fadeIn(200);

		$.ajax({
		    type: "POST",
		    url: form_desktop.attr('action'),
		    data: formData
		}).done(function(response) {
		    // Make sure that the responseMsg div has the 'success' class.
		    // Set the message text.
		    responseMsg.hide()
		   	 .attr('class', '')
		     .addClass('response-success')
		    .text('Vaša poruka je poslana. Hvala Vam')
		    .fadeIn(2000);
		    // Clear the form.
			form_desktop[0].reset();
		}).fail(function(data) {
		        responseMsg.hide()
		        .attr('class', '')
		     	.addClass('response-error')
		        .text('Dogodila se greška, poruka nije poslana. Molimo Vas, pokušajte ponovno.')
		        .fadeIn(2000);
		    
		});
	});
}

 $(document).ready( function() {
	bindMailToForm('#responsive_contact', '#responseMsg');
});

 // conditional loading of contact.js
(function(){
			function isMobile(){ return 'ontouchstart' in document.documentElement; }

			function loadContactJs(){
				var element = document.createElement("script");
				element.src = "../js/googlemapContact.js";
				document.body.appendChild(element);
			}
			// load only if desktop
			if( !isMobile()) loadContactJs();
})();