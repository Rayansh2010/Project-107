var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takezesnap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='imageclicked' src='" + data_uri + "'>"
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T2b9P_OYM/model.json', modelLoaded);

function modelLoaded() {
    console.log("model do be kinda loaded")
}

function speak() {
    synth = window.speechSynthesis;
    speak1 = "The first prediction is: " + prediction1;
    speak2 = "The second prediction is: " + prediction2;
    synth.speak(new SpeechSynthesisUtterance(speak1 + speak2));
}

function result() {
    setTimeout(function(){
        speak()
    },10000);
}