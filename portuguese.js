console.log("Bon dia");

var Localization = (function (localObj){
		var portugueseWords = ["Thanksgiving", "Christmas"];
		localObj.toPortuguese = function() {
			console.log("portuguese");
			let languageFlag = document.getElementById("optionSelect").value;//value of option
			console.log(portugueseFlag);
			if (languageFlag === "portuguese"){
				document.getElementById("translatedTxt").innerHTML = portugueseWords.join(" ");
				return localObj.portuguese;
			}
		}
		return localObj
})(Localization)


// var Localization = (function (localObj){
// 		let portugueseFlag = null;
// 		localObj.response = function() {
// 			if (portugueseFlag === "portuguese"){
// 				document.getElementById("translatedTxt").innerHTML = portugueseWords.join(" ");
// 			}
// 		};
// 		potugueseFlag = document.getElementById("optionSelect").addEventListener("change", localObj.response);
// 		var portugueseWords = ["Thanksgiving", "Christmas"];
// 		console.log(portugueseFlag);
// 		return localObj
// })(Localization)