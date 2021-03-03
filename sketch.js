var box1,box2,box3,box4;
var runner, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(windowWidth,windowHeight);

    box1 = createSprite(225,580,270,25);
    box1.shapeColor = "red";

    box2 = createSprite(555,580,270,25);
    box2.shapeColor = "blue";

    box3 = createSprite(875,580,270,25);
    box3.shapeColor = "green";

    box4 = createSprite(1195,580,270,25);
    box4.shapeColor = "orange";

    runner = createSprite(random(380,750),100, 40,40);
    runner.shapeColor = "white";
    runner.velocityX = 4;
    runner.velocityY = 9;

}

function draw() {
    background("lightgrey");
    edges=createEdgeSprites();
    runner.bounceOff(edges);

    if(box1.isTouching(runner) && runner.bounceOff(box1)){
        runner.shapeColor = "red";
        music.play();
    }

    if(box2.isTouching(runner)){
        runner.shapeColor = "blue"
        runner.velocityX = 0;
        runner.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(runner) && runner.bounceOff(box3)){
        runner.shapeColor = "green";
    }

    if(box4.isTouching(runner) && runner.bounceOff(box4)){
        runner.shapeColor = "orange";
    }
    
    drawSprites();
}
