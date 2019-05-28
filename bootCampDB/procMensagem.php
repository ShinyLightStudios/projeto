<?php session_start(); ?>
<?php 
	
	if (isset($_POST["mensagem"])) {
		$userID = $_SESSION["userID"];
		$hora_envio = microtime(true);
		$conteudo = $_POST["mensagem"];
		
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "chatprog";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$sql1 = "INSERT INTO usuario (idusuario,nome) VALUES (".$userID.",'".$_SESSION["nomeUser"]."');";
		$result = $conn->query($sql1);
		$sql2 = "INSERT INTO mensagem (hora_envio,usuario_id_usuario,conteudo) VALUES (".$hora_envio.",".$userID.",'".$conteudo."')";
		$result = $conn->query($sql2);
		$conn->close();
		header("Location: chat.php");
	}

 ?>