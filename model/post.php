<?php

	if(!empty($_POST['antiSpam'])) die();

	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['content'])) {
        
        echo "<p><strong>Error: </strong>All fields are requred!</p>";
		
	} else {
	
		$to = "dimitrioskidarko91@gmail.com";
		$name = trim($_POST['name']);
		$email = trim($_POST['email']);
		$content = trim($_POST['content']);
		
		$subject = "Message Form Your Portfolio";
		$headers = "From: $email";
		$messages = "Name: $name \
    Email: $email \
    Message: $content";
		$mailsent = mail($to, $subject, $messages, $headers);
		
		if($mailsent) {

            echo "Mail sent, thank you!<br>Due to my free server mail may be not sent.<br>Contact me on: dimitrioskidarko91@gmail.com";
            
		} else {

            echo "Problem with server, your message coulnd\'t be sent - please try again!";
            
        }
	}
?>