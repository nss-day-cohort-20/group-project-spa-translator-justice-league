var Localization = (function (localObj){
		var russianWords = ["New Years", "Christmas"];
		toRussian = function() {
			console.log("russian");
			let languageFlag = document.getElementById("optionSelect").value;//value of option
			console.log("langFlag", languageFlag);
			if (languageFlag === "russian"){
				document.getElementById("translatedTxt").innerHTML = russianWords.join(" ");
				return localObj.russian;
			}
		}
		return localObj
})(Localization)