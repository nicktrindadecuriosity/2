// JavaScript source code
function check(){

var question2 = document.question2.choice.value; 

	if (question2 == "nenhum") { document.getElementById("certo1").style.visibility = "visible"; document.getElementById("falha").style.visibility = "hidden"; }
		else { document.getElementById("falha").style.visibility = "visible"; document.getElementById("certo1").style.visibility = "hidden";
}
	}