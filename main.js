function StartingSounds() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1enbtKBmy/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    console.log("model ready");
}