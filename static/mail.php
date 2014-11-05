<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["ime"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $number = trim($_POST["mobitel"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["poruka"]);

    

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "nskarica1@gmail.com";

        // Set the email subject.
        $subject = "Upit sa weba";

        // Build the email content.
        $email_content = "From: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Number: $number\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

  
       // Send the email.
        mail($recipient, $subject, $email_content,$email_headers );
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(500);
        echo "There was a problem with your submission, please try again.";
    } 
?>