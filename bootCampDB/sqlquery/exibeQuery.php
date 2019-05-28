<?php
session_start();

$servername = "localhost";
$username = "admin";
$password = "";
$dbname = "sqljogodb";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 

$sql = $_SESSION["chamada"];
$result = $conn->query($sql);
$conn->close();
?>