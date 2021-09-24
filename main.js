function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(800,100);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FF7F7F');
}


function modelLoaded() {
    console.log('poseNet loaded !!!');
    
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}