 // ```unction start(){
 //      document.getElementById("optionSelect").addEventListener("change", Localization.response, false);
 //      }```

// let option = function() {
// 	document.getElementById("optionSelect").addEventListener("change", Localization.response, false)
// }

let determineLanguage = function(Localization) {
	if ( Localization.languageFlag === "portuguese") {
		Localization.Portuguese;
	} else if (Localization.languageFlag === "russia") {
			Localization.Russian;
		} else {
			console.log("go home");
			// Localization.toJapanese();
			}
}


document.getElementById("translateBtn").addEventListener("click", determineLanguage);

// console.log(option);

