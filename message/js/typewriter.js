
let i = 0;
let text1 = "Hi my little dumpling :) Happy 8 year anniverary! I love you sosososoos much and i cant wait to marry you";
let text2 = "I made a little website to commemorate our memories over the past 8 years in the form of pics, we can continue to add"
let text3 = "i cant wait for 100 more i love u <3"
let text4 = "Today is the day we've officially been together for 8 years!"
let speed = 50;


function typeWriter(text, para) {
    if (i < text.length) {
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
    } else {
        if (ok < 4) { // Reset for the next line
            i = 0;
        }
        ok += 1; // Move to the next state
    }
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		} 
		else if (ok == 2) {
            typeWriter(text3, "txt3");
        } 
		else if (ok == 3) {
            typeWriter(text4, "txt4");
		}
		else{
			clearInterval(typeInterval);
		}
}, speed);
//};