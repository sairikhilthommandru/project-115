function preload(){
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    //ml5 is library and it is in the variable poseNet.the pose net function has a video input and a modelLoaded output
    poseNet=ml5.poseNet(video,modelLoaded)
    //the input is pose and the output is gotPoses
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is Initialized')
}
function draw(){
    image(video,0,0,300,300)
}

function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses(results)
{
    //this checks the amount people in front of the camera and has a if condition to upload these thing to the console
    if(results.length>0){
        console.log(results)
        console.log("nose x ="+results[0].pose.nose.x)
        console.log("nose y ="+results[0].pose.nose.y)
    }
}