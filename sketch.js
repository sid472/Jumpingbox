var canvas;
var music;

var g1,g2,g3,g4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    g1=createSprite(100,550,180,20);
    g1.shapeColor="blue";
    g2=createSprite(300,550,180,20);
    g2.shapeColor="red";
    g3=createSprite(500,550,180,20);
    g3.shapeColor="green";
    g4=createSprite(700,550,180,20);
    g4.shapeColor="yellow";

    ball=createSprite(400,200,20,20);
    ball.velocityX=5;
    ball.velocityY=10;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges);
   /* ball.bounceOff(g1);
    ball.bounceOff(g2);
    ball.bounceOff(g3);
    ball.bounceOff(g4);*/
    if(ball.isTouching(g1)&&ball.bounceOff(g1)){
        ball.shapeColor="blue"
        music.play()
    }
    if(ball.isTouching(g2)&&ball.bounceOff(g2)){
        ball.shapeColor="red"
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop()
    }
    if(ball.isTouching(g3)&&ball.bounceOff(g3)){
        ball.shapeColor="green"
        music.play()
    }
    if(ball.isTouching(g4)&&ball.bounceOff(g4)){
        ball.shapeColor="yellow"
    }


    drawSprites()
    //add condition to check if box touching surface and make it box
}
