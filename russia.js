//Russian translator for localization object.


var localization = (function (localObj){
		let russianFlag = document.getElementById("optionSelect");//value of option
		var russianWords = [];
		localObj.response = (function() {
			if (russianFlag === Russian){
				document.getElementById("translatedTxt").innerHTML = russianWords.join(" ");
				
			}
		}())
		return localObj
})(localization)
//array of russian words.
	// if (russianFlag === Russian){
	// 			//join to page after splicing russian into the response array
	// }


	//document.getElementById("translated").innerHTML = result of if statement;
	

const transBtn = document.getElementById("translateBtn")



// function() {
// 	if (russianFlag === Russian){
// 		russianWords.join(" ")
// 	}
// }
