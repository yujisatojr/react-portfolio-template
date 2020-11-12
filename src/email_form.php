<?php

$email_address = $_POST['email_address'];
$body = $_POST['body'];

$headers = "From: $email_address";
$sent = mail('yujisatojr@gmail.com', 'Body:', $body, $headers);

?>