<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chatprog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT DISTINCT usuario.nome, mensagem.conteudo
		FROM mensagem
		JOIN usuario ON usuario.idusuario = mensagem.usuario_id_usuario
		ORDER BY mensagem.hora_envio";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "".$row['nome'].": ".$row["conteudo"]."<br>";
    }
} else {
}
$conn->close();
?>