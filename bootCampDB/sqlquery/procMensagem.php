<?php session_start(); ?>
<?php 

date_default_timezone_set('America/Sao_Paulo');
$date = date('d/m h:i a', time());

if (isset($_POST["mensagem"])) {
	$userID = $_SESSION["userID"];
	$hora_envio = microtime(true);
	$conteudo = $_POST["mensagem"];
	
	$servername = "fdb22.awardspace.com";
	$username = "2823994_bootcampdb";
	$password = "YTshEe4nDu7mK9DVrMK2NdxzyHhyR7Mn";
	$dbname = "2823994_bootcampdb";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$sql1 = "INSERT INTO usuario (idusuario,nome) VALUES (".$userID.",'".$_SESSION["nomeUser"]."');";
	$result = $conn->query($sql1);
	$sql2 = "INSERT INTO mensagem (hora_envio,usuario_id_usuario,conteudo,tempoMensagem) VALUES (".$hora_envio.",".$userID.",'".$conteudo."','".$date."')";
	$result = $conn->query($sql2);
        $conn->close();
	header("Location: chat.php");
}

?>