// for the javascrript, there's a lot more functions to import and play audio

// each group of audio are separated through extra spaces
// these functions work in the same way they did in the previous soundboard activity

// (more comments further down)
function tenpastfive(){
    var snd = new Audio("10-past-5.mp3");
    snd.play()
}

function aboot(){
    var snd = new Audio("aboot.mp3");
    snd.play()
}

function afraidso(){
    var snd = new Audio("afraid-so.mp3");
    snd.play()
}

function ahcomeon(){
    var snd = new Audio("ah-come-on.mp3");
    snd.play()
}

function aye(){
    var snd = new Audio("aye.mp3");
    snd.play()
}

function bestfriends(){
    var snd = new Audio("best-friends.mp3");
    snd.play()
}

function bollocks(){
    var snd = new Audio("bollocks.mp3");
    snd.play()
}

function bugger(){
    var snd = new Audio("bugger.mp3");
    snd.play()
}

function cashback(){
    var snd = new Audio("cashback.mp3");
    snd.play()
}



function ahha(){
    var snd = new Audio("Ah-Ha.mp3");
    snd.play()
}

function dan(){
    var snd = new Audio("Dan.mp3");
    snd.play()
}

function backofthenet(){
    var snd = new Audio("Back of the Net.mp3");
    snd.play()
}

function bangoutoforder(){
    var snd = new Audio("Bang Out Of Order.mp3");
    snd.play()
}

function jurassicpark(){
    var snd = new Audio("Jurassic Park.mp3");
    snd.play()
}

function smellmycheese(){
    var snd = new Audio("Smell My Cheese.mp3");
    snd.play()
}

function goal(){
    var snd = new Audio("Goal.mp3");
    snd.play()
}

function kissmyface(){
    var snd = new Audio("Kiss my Face.mp3");
    snd.play()
}

function hellopartridge(){
    var snd = new Audio("Hello Partridge.mp3");
    snd.play()
}



function conman(){
    var snd = new Audio("conman.mp3");
    snd.play()
}

function doyoulikeowls(){
    var snd = new Audio("do-you-like-owls.mp3");
    snd.play()
}

function firstclass(){
    var snd = new Audio("first-class.mp3");
    snd.play()
}

function forgetit(){
    var snd = new Audio("forget-it.mp3");
    snd.play()
}

function getridofit(){
    var snd = new Audio("get-rid-of-it.mp3");
    snd.play()
}

function helloooo(){
    var snd = new Audio("helloooo.mp3");
    snd.play()
}

function howoldareyou(){
    var snd = new Audio("how-old-are-you.mp3");
    snd.play()
}

function idloveto(){
    var snd = new Audio("id-love-to.mp3");
    snd.play()
}

function idiot(){
    var snd = new Audio("idiot.mp3");
    snd.play()
}



function mentalist(){
    var snd = new Audio("mentalist.mp3");
    snd.play()
}

function nirvana(){
    var snd = new Audio("nirvana.mp3");
    snd.play()
}

function no(){
    var snd = new Audio("no.mp3");
    snd.play()
}

function ok(){
    var snd = new Audio("ok.mp3");
    snd.play()
}

function striker(){
    var snd = new Audio("striker.mp3");
    snd.play()
}

function thirdtime(){
    var snd = new Audio("third-time.mp3");
    snd.play()
}

function toughone(){
    var snd = new Audio("tough-one.mp3");
    snd.play()
}

function um(){
    var snd = new Audio("um.mp3");
    snd.play()
}

function what(){
    var snd = new Audio("what.mp3");
    snd.play()
}



function why(){
    var snd = new Audio("why.mp3");
    snd.play()
}

function yeahsodoi(){
    var snd = new Audio("yeah-so-do-i.mp3");
    snd.play()
}

// after all of those sound functions are defined, i move on to the text-to-speech function

function text2Speech(){
    // first i declared two variables

    // this one is to get the text input from the user in the .html file
    let messaj = document.getElementById("text2speech").value;
    // and this one allows the text to become speech
    let speak = new SpeechSynthesisUtterance();

    // the five commands here set up the computer voice
    speak.lang = "en-US"; // language
    speak.text = messaj; // the text for the computer to read
    speak.volume = 10; // how loud the voice will be
    speak.rate = 1; // how fast it will be reading
    speak.pitch = 1; // and how high the pitch is
    // the one here uses the SpeechSynthesisUtterance() function and finally allows the text to be read
    window.speechSynthesis.speak(speak);

    // and once the function is called by pressing the button, the user will hear the cimputer read the text for them
}

// in this section, i set five variables using var to get information from the .html file
var page1 = document.getElementById("group1");
var page2 = document.getElementById("group2");
var page3 = document.getElementById("group3");
var page4 = document.getElementById("group4");
var page5 = document.getElementById("group5");

/* 
    i then set all the pages to "display: none;" except the first...
    this will make it so that the user will only see one page at a time
*/
page1.style.display = "block";
page2.style.display = "none";
page3.style.display = "none";
page4.style.display = "none";
page5.style.display = "none";

function nextGroup(){
    // the function here is made for the right arrow button to turn to the next page

    /*
        there is a lengthy if-else statement here...

        it basically says that if page1 is shown and the button is pressed, hide page1 and show page2;
        if page2 is shown and the button is clicked, show page3... and so on
    */
    if (page1.style.display == "block") {
        page1.style.display = "none";
        page2.style.display = "block";
    }

    else if (page2.style.display == "block") {
        page2.style.display = "none";
        page3.style.display = "block";
    }
    
    else if (page3.style.display == "block") {
        page3.style.display = "none";
        page4.style.display = "block";
    }
    
    else if (page4.style.display == "block") {
        page4.style.display = "none";
        page5.style.display = "block";
    }
    
    else if (page5.style.display == "block") {
        page5.style.display = "none";
        page1.style.display = "block";
    }

    // and if anything else ever happens, there's always this alert code that will inform the user that there's been an error
    else {
        alert("Error.");
    }
}

function prevGroup(){
    // now this function works very similarly to the one above
    // the only difference is that it's reversed

    /*
        if page1 is shown and the button is pressed, instead of showing page2, it'll show page5;
        if page5 is shown and the user clicks the button, the program will hide the current page and show page4... and so on
    */
    if (page1.style.display == "block") {
        page1.style.display = "none";
        page5.style.display = "block";
    }

    else if (page2.style.display == "block") {
        page2.style.display = "none";
        page1.style.display = "block";
    }
    
    else if (page3.style.display == "block") {
        page3.style.display = "none";
        page2.style.display = "block";
    }
    
    else if (page4.style.display == "block") {
        page4.style.display = "none";
        page3.style.display = "block";
    }
    
    else if (page5.style.display == "block") {
        page5.style.display = "none";
        page4.style.display = "block";
    }

    else {
        alert("Error.");
    }
}