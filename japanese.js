var Localization = (function (localObj){
    var japaneseWords = "Akemashiteomedetōgozaimasu! Anata wa watashi no Barentain ni nari, Hijiri Patorikku no hi ni watashitoisshoni sakenomi o shite, īsutā ni dete futatabi tachiagari, harou~īn de doresuappu suru, shichimenchō o taberu, watashitachi no jiyū o iwau tame ni, kansha-sai ni, soshite shukujitsu o iwau.";
    toJapanese = function() {
      let languageFlag = document.getElementById("optionSelect").value;//value of option
      if (languageFlag === "japanese"){
        document.getElementById("translatedTxt").innerHTML = japaneseWords;
        return localObj.japanese;
      }
    }
    return localObj
})(Localization)