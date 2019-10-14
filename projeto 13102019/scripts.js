$(document).ready(function(){
	var contador = 0;
	//Queries esperadas em ordem
	var query_Tutorial = '[{"Nome":"Carne de Vaca","preco":"20","validade":"3"},{"Nome":"Carne de Porco","preco":"15","validade":"2"},{"Nome":"Repolho","preco":"5","validade":"6"},{"Nome":"Cenoura","preco":"6","validade":"7"}]';
	var query1 = '[{"nome_cidade":"Canerut","guilda":"Canerut Guild","guildmaster":"Canerut Master","quantidade_habitantes":"8896"},{"nome_cidade":"Ganglegoft","guilda":"Ganglegoft Guild","guildmaster":"Ganglegoft Master","quantidade_habitantes":"12564"},{"nome_cidade":"SQL City","guilda":"SQL Guild","guildmaster":"SQL Master","quantidade_habitantes":"21659"}]';
	//console.log(contador);
	$(".btnBotao").prop("disabled",true);
	var falas = [
		[
			/*Fala do Diamond*/["Olá! Você acordou finalmente! Estive te esperando por 234 horas, 34 minutos, 25 segundos e 510 milésimos!"],
			/*Estado do botão de enviar query (0 - Bloqueado 1- Desbloqueado)*/[0],
			/*Resultado esperado da query enviada*/[""],
			/*Query escrita automaticamente, no caso de tutoriais*/[""],
			/*Estado do botão de continuar, das falas do Diamond*/[1]
		],
		[
			["Eu estava tão sozinho! O Mestre SQL quase não tem uso pra mim com suas incríveis habilidades! Então saber que posso ajudar o seu novo discípulo me deixa cheio de orgulho e satisfação!"],
			[0],
			[""],
			[""],
			[1]
		],
		[
			["Ah! Quem sou eu? Desculpe, esqueci de me apresentar! Ahem!"],
			[0],
			[""],
			[""],
			[1]
		],
		[
			["Meu nome é Duplicated Inteligence Adapter – Mobile Operation Nullifier D... Ou melhor conhecido como: D.I.A.M.O.N.D"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["É um prazer em te conhecer, jovem aprendiz!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Bom, agora que me apresentei, devo dizer que estou triste de nos conhecermos apenas nessa situação! Você parece ter tanto potencial!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Explicar a situação? Ah! Claro! Eu me esqueci que você acaba de acordar! HaHaHaHa"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Nós estamos na situação mais desesperadora possível! A ilha SQL irá explodir em breve. Isso tudo porque o Mestre SQL sumiu! Do nada, sabe?! De repente ele estava ali e do nada ele BUM! Sumiu!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Não deixou nem um bilhete falando onde ia... Ei! Pera aí..."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Sim! Já sei! Deve ser isso mesmo!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Acho que sei o motivo de ele sumir! Principalmente em uma situação dessas!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ele deve querer que eu, o incrível, charmoso e extremamente inteligente DIAMOND ajude seu novo discípulo a salvar a ilha!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Que genial! Só o Mestre SQL seria capaz de pensar em um plano genial e criar uma inteligência artificial tão incrível quanto eu!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Tudo bem! Vamos lá então! Primeiro, aprendiz, vamos te ensinar o que é um banco de dados!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Em um banco de dados, existem diversas tabelas cheias de colunas, que são cheias de linhas também, imagine igual uma lista de compras!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Na lista de compras, o banco de dados seria a lista toda!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Dentro da lista, todos os tipos de produtos, como Comida, Produtos de Limpeza, Remédios, etc. Essas seriam as tabelas."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E dentro dessas tabelas, na tabela de comida por exemplo, nós temos as colunas. As colunas são Nome da Comida, Tipo, validade..."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["E o que vai preenchendo as colunas é o conteúdo que guardamos! Considerando a comida, no lugar do nome teríamos por exemplo Frango, no tipo seria carne e na validade seria três ou quatro dias."],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Seguindo esse exemplo, dá uma olhada, já selecionei o banco de dados 'lista_de_compras' pra você!É só clicar no botão enviar, e esse comando vai te mostrar todas as comidas na lista de compras!"],
			[1],
			[query_Tutorial],
			["SELECT * from Comidas"],
			[0]

		],
		[
			["Viu? É bem simples! ‘Select’ quer dizer selecionar, o asterisco(*) é usado quando queremos selecionar tudo dentro de uma tabela, digitar ‘from’ é o equivalente a digitar ‘de’, mas de uma maneira que o banco de dados vai entender,  e ‘Comidas’ é o nome da tabela que queremos olhar!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ou seja, ‘Selecionar tudo de Comidas’ é igual a digitar ‘SELECT * from Comidas’!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			["Ótimo! Agora que expliquei o básico, por que você não tenta? O nome da tabela que queremos olhar é ‘cidade’, dentro dessa tabela achamos as cidades da ilha sql e suas informações!"],
			[1],
			[query1],
			[""],
			[0]

		],
		[
			["Uau! Você aprendeu tão rápido! Essa proeza é digna de um aprendiz do grande Mestre SQL!"],
			[0],
			[""],
			[""],
			[1]

		],
		[
			[""],
			[0],
			[""],
			[""],
			[1]

		],
		
	];
	$(".btnContinuar").click(function(){
		contador++;
		$("#quest").text(falas[contador][0]);
		//console.log(contador);
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
		if(falas[contador][4] == 0){
			$(".comandos").val(falas[contador][3]);
			$(".btnContinuar").prop("disabled",true);
		}
		if(contador!=19){
			$(".comandos").prop("readonly",false);
		}else{
			$(".comandos").prop("readonly",true);
		}
		if(falas[contador-1][4] == 0){
			$(".comandos").val('');
		}
	});
	$(".btnVoltar").click(function(){
		contador--;
		if(contador<0){
			contador=0;
		}
		$("#quest").text(falas[contador][0]);
		//console.log(contador);
		if(falas[contador][1] == 0){
			$(".btnBotao").prop("disabled",true);
		}else{
			$(".btnBotao").prop("disabled",false);
		}
		if(falas[contador][4] == 0){
			$(".comandos").val(falas[contador][3]);
			$(".btnContinuar").prop("disabled",true);
		}
		if(falas[contador+1][4] == 0){
			$(".comandos").val('');
			$(".btnContinuar").prop("disabled",false);
		}
		if(contador!=19){
			$(".comandos").prop("readonly",false);
		}else{
			$(".comandos").prop("readonly",true);
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

				if(falas[contador][2] == result){
					string+= "<div class='speech-bubble4'>Sucesso!</div>";
					$(".btnContinuar").prop("disabled",false);
				}else{
					string+= "<div class='speech-bubble4'>Tem certeza que esse é o comando certo? Tente novamente.</div>";
				}

				$(".chat").append(string);
				
			}

		});


		/*if(falas[contador][4] == 0){
			$(".btnContinuar").prop("disabled",false);
		}
		*/
	});
});