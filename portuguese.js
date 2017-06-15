var Localization = (function (localObj){
		var portugueseWords = ["Thanksgiving", "Christmas"];
		toPortuguese = function() {
			console.log("portuguese");
			let languageFlag = document.getElementById("optionSelect").value;//value of option
			console.log("langFlag", languageFlag);
			if (languageFlag === "portuguese"){
				document.getElementById("translatedTxt").innerHTML = portugueseWords.join(" ");
				return localObj.portuguese;
			}
		}
		return localObj
})(Localization)


