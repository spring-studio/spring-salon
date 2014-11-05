$(function(){
	var form_desktop = $('#ajax-contact-desktop');

	var formMessages =$('#form-messages');

	form_desktop.submit(function(e){
		e.preventDefault();
		var formData = form_desktop.serialize();
		$.ajax({
		    type: "POST",
		    url: form_desktop.attr('action'),
		    data: formData
		}).done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    // Set the message text.
		    formMessages.text('Hvala Vam. Uskoro ce Vas netko kontaktirati');
		    // Clear the form.
			form_desktop[0].reset();
		}).fail(function(data) {
		        formMessages.text('Oops! An error occured and your message could not be sent.');
		    
		});
	});



});


