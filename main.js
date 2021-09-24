function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r_7w0EAYQ/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
    console.log(gotResults);
}