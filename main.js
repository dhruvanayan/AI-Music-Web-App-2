m1= "";
m2= "";

function preload()
{
    m1 = loadSound("music.mp3");
    m2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}