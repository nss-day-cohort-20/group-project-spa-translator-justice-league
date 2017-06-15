var Localization = (function (localObj){
		var russianWords = "С новым годом! Будете ли вы моим Валентином и будете пить со мной в День Святого Патрика, пока мы не выйдем и не воскреснем на Пасху и не начнем покупать фейерверки в День независимости, чтобы отпраздновать нашу свободу одеваться на Хэллоуин, есть индейку На День Благодарения и отпраздновать Праздники.";
		toRussian = function() {
			// console.log("russian");
			let languageFlag = document.getElementById("optionSelect").value;//value of option
			// console.log("langFlag", languageFlag);
			if (languageFlag === "russian"){
				document.getElementById("translatedTxt").innerHTML = russianWords;
				return localObj.russian;
			}
		}
		return localObj
})(Localization)