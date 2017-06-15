//This function changes the value of the option select menu to the chosen language
let optionValue = "";
document.getElementById("optionSelect").addEventListener("change", function() {
	optionValue = document.getElementById("optionSelect").value;
	console.log("optionValue", optionValue);
});



//This function is activated by the button click
//which determines the value of the optionSelect and calls the corresponding function
let determineLanguage = function() {
			//optionSelect value returned
	if ( optionValue === "portuguese") {
		toPortuguese();
	} else if (optionValue === "russian") {
			toRussian();
		} else {
			toJapanese();
			}
};

//When this button is clicked, the determine language function is called
document.getElementById("translateBtn").addEventListener("click", determineLanguage);