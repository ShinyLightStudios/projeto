var timeout = setInterval(loadDoc, 100);
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("exibirChamada").innerHTML =
			this.responseText;
		}
	};
	xhttp.open("GET", "exibeQuery.php", true);
	xhttp.send();
}

function scrollToBottom(id){
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}