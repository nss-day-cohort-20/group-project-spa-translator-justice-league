//Russian translator for localization object.


var Localization = (function (localObj){
		let russianFlag = null;
		let russianFlag = document.getElementById("optionSelect").addEventListener("change").value;//value of option
		var russianWords = ["valentines", "Easter"];
		localObj.response = function() {
			if (russianFlag === "russian"){
				document.getElementById("translatedTxt").innerHTML = russianWords.join(" ");
				 
			}
		}
		return localObj
})(Localization)
//array of russian words.
	// if (russianFlag === Russian){
	// 			//join to page after splicing russian into the response array
	// }


	//document.getElementById("translated").innerHTML = result of if statement;
	






// function() {
// 	if (russianFlag === Russian){
// 		russianWords.join(" ")
// 	}
// }
