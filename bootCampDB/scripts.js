$(document).ready(function(){

	$("button").click(function(){
		let query = $(".comandos").val();
		$.ajax({
			type: "POST",
			url: "procQuery.php",
			data: {sql: query}, //sql será enviado como post, com o valor da variável query
			success: function(result){
				$(".chat").html(result);
				let json = $.parseJSON(result);
				let string = "<table>";
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
				string += "</table>";
				$(".chat").html(string);
			}
		});
	});
});