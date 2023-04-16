function textToAudio(){
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 5;
    speech.pitch = 100;
    window.speechSynthesis.speak(speech);
}