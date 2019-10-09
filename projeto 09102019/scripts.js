$(document).ready(function(){
	var contador = 0;
	var falas = [
		[
			["Olá! Você acordou finalmente! Estive te esperando por 234 horas, 34 minutos, 25 segundos e 510 milésimos!"],
			[0],
			[""]
		],
		[
			["Eu estava tão sozinho! O Mestre SQL quase não tem uso pra mim com suas incríveis habilidades! Então saber que posso ajudar o seu novo discípulo me deixa cheio de orgulho e satisfação!"],
			[1],
			[""]
		],
		[
			["Ah! Quem sou eu? Desculpe, esqueci de me apresentar! Ahem!"],
			[0],
			[""]
		]
	];
	$(".btnContinuar").click(function(){
		contador++;
		$("#quest").text(falas[contador][0]);
		
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
	});
	$(".btnVoltar").click(function(){
		contador--;
		if(contador<0){
			contador=0;
		}
		$("#quest").text(falas[contador][0]);
		
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
	});

	$(".btnBotao").click(function(){
		let query = $(".comandos").val();
		$.ajax({
			type: "POST",
			url: "procQuery.php",
			data: {sql: query}, //sql será enviado como post, com o valor da variável query
			success: function(result){
				//$(".chat").html(result);
				//console.log(result);
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