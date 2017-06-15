var Localization = (function (localObj){
		var portugueseWords = "Feliz Ano Novo! Você será meu namorado e vai beber comigo no dia de São Patrício até que nós passemos e nos levante novamente na Páscoa e obtenhamos uma vantagem para a compra de fogos de artifício para o Dia da Independência, a fim de celebrar a nossa liberdade de nos vestir no Halloween, coma a Turquia No Dia de Ação de Graças e comemorar os feriados.";
		toPortuguese = function() {
			let languageFlag = document.getElementById("optionSelect").value;//value of option
			if (languageFlag === "portuguese"){
				document.getElementById("translatedTxt").innerHTML = portugueseWords;
				return localObj.portuguese;
			}
		}
		return localObj
})(Localization)


