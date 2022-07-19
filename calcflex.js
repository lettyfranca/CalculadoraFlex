/* 
Calculadora Flex
@author Letícia França
 */

//Declaração das variáveis.
let etanol, gasolina;

//essa função verifica se o etanol está com um valor menor que o da gasolina.
function calcular(){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

	if (etanol < 0.7 * gasolina) {
		document.getElementById("status").src="etanol.png";
	} else {
		document.getElementById("status").src="gasolina.png";
	}
}

//essa função limpa os campos e coloca a imagem inicial novamente.
function resetar() {
	document.getElementById("status").src="neutro.png";
}