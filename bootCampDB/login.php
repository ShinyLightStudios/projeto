<?php session_start();  ?>
<?php 
	//if(isset($_SESSION["nomeUser"])){
	//	header('Location: chat.php');
	//}else{
		?>
		<!DOCTYPE html>
		<html>
		<head>
			<title>Login</title>
			<meta charset="utf-8">
			<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
			<link rel="stylesheet" type="text/css" href="styles.css">
		</head>
		<body>
			<div id="loginDiv">
				<form autocomplete="off" method="post" action="procLogin.php">

					<div id="usuarioLogin">
						<label id="loginLabel">Usuário</label><br>
						<input id="campoLogin" type="text" name="nomeUser">
					</div>
					<input id="btnLogin" type="Submit" name="Login">
				</form>

			</div>

		</body>
		</html>
		<?php
	//}
 ?>