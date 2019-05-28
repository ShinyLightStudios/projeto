<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Query</title>
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="scripts.js" type="text/javascript"></script>
        <script type="text/javascript">loadDoc();</script>
    <meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<div id="divChamadas">
		<div id="exibirChamada">

		</div>
		<div id="querySql">
			<form method="post" action="procQuery.php" autocomplete="off">
				<input id="campoQuery" type="text" name="chamada" placeholder="Insira sua Query SQL aqui...">
				<input onclick="loadDoc();" id="enviarQuery" type="submit" name="Enviar">
			</form>
		</div>	
	</div>
</body>
</html>