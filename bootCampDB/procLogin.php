<?php session_start(); ?>
<?php 
	
	if (isset($_POST["nomeUser"])) {
		$_SESSION["nomeUser"] = $_POST["nomeUser"];
		$_SESSION["userID"] = mt_rand();
		header('Location: chat.php');
	}else{
		header('Location: login.php');
	}

 ?>