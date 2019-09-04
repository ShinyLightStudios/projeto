$(document).ready(function(){

	$("button").click(function(){
		let query = $(".comandos").val();
		$.ajax({
			type: "POST",
			url: "procQuery.php",
			data: {sql: query}, //sql será enviado como post, com o valor da variável query
			success: function(result){
				//$(".chat").html(result);
				console.log(result);
				let json = $.parseJSON(result);
				//console.log(json);
				let string = "<div class='speech-bubble3'>Query: "+query+"</div>"
				if(json[0]== "FALSE"){
					string+= "<div class='speech-bubble3'>Erro: "+json[1]+"  Resultado: Falha na Execução. </div>";
				}
				else if(json[0] == "TRUE"){
					string+="<div class='speech-bubble3'>Resultado: Sucesso. </div>";
				}
				else{
					string += "<div class='speech-bubble2'><table>";
					let head = 1;
					$(json).each(function(i,val){
						if(head){
							string += "<tr>";
							$.each(val,function(k,v){
								string += "<th>" + k + "</th>";
							});
							string += "</tr>";
							head = 0;
						}
						string += "<tr>";
						$.each(val,function(k,v){
							string += "<td>" + v + "</td>";
						});
						string += "</tr>";
					});
					string += "</table></div>";
				}
				string +="<br>";
				$(".chat").append(string);
			}
		});
	});
});