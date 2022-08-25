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

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WNaI6pD-z/model.json',modelloaded) 

function modelloaded() {
    console.log("model loaded"); 
}

function gotresult(error,results) {
    if(error){
        console.error(error); 
    }else{
        console.log(results);
        document.getElementById("expresstion_name").innerHTML=results[0].label; 
        document.getElementById("expresstion_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}

function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotresult); 
}