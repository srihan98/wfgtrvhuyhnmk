img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    documentGetElementById("status").innerHTML = "Status : Detecting objects";
}
function draw() {
    fill("#FF000");
    text("Cat", 320, 120);
    noFill();
    stroke("FF0000");
    rect(300, 90, 270, 320 );
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}