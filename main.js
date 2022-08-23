Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}); 

camara=document.getElementById("camara"); 
Webcam.attach('#camara'); 

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version',ml5.version); 

classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-EORlraO2/model.jason',modelloaded)

function modelloaded() {
    console.log("model loaded"); 
}