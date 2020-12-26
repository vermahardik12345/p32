const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var ground1;
var ground2;
var ground3;
var box1,box2,box3,box4,box5,box6;
var polimg;
var score;
var backgroundImg;
function preload(){
polimg=loadImage("polygon.png");

getBackgroundImg();
}
function setup(){
    createCanvas(1200,600);
    engine=Engine.create();
    world=engine.world;
    ground1=new ground(width/2,580,width,20);
    ground2=new ground(500,380,300,10);
    ground3=new ground(970,480,200,10);
    box1=new box(380,357,30,30);
    box2=new box(415,357,30,30);
    box3=new box(450,357,30,30);
    box4=new box(485,357,30,30);
    box5=new box(520,357,30,30);
    box6=new box(555,357,30,30);
    box7=new box(590,357,30,30);
    box8=new box(625,357,30,30);
    box9=new box(397.5,326,30,30);
    box10=new box(432.5,326,30,30);
    box11=new box(467.5,326,30,30);
    box12=new box(502.5,326,30,30);
    box13=new box(537.5,326,30,30);
    box14=new box(572.5,326,30,30);
    box15=new box(607.5,326,30,30);
    box16=new box(415,295,30,30);
    box17=new box(450,295,30,30);
    box18=new box(485,295,30,30);
    box19=new box(520,295,30,30);
    box20=new box(555,295,30,30);
    box21=new box(590,295,30,30);
    box22=new box(464,265,30,30);
    box23=new box(499,265,30,30);
    box24=new box(534,265,30,30);   
    box25=new box(499.5,235,30,30); 
    box26=new box(913,456,30,30); 
    box27=new box(948,456,30,30);   
    box28=new box(983,456,30,30);   
    box29=new box(1018,456,30,30);   
    box30=new box(930.5,426,30,30);   
    box31=new box(965.5,426,30,30);   
    box32=new box(1000.5,426,30,30);   
    box33=new box(948,396,30,30);   
    box34=new box(983,396,30,30);   
    box35=new box(965.5,366,30,30);   
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot1=new launcher(this.polygon,{x:100,y:200});

    score=0;

}
function draw(){
 if(backgroundImg)
    background(backgroundImg)
 
   push();
  fill("cyan");
   textSize(20);
   text("DRAG THE HEXAGON TO AIM👍👍",100,20);
   text("PRESS SPACE TO AGAIN AIM😁😁😁",100,50);
   text("ATTACK THE BOXES TO DESTROY IT💪💪",100,100);
   text("REFRESH 1 OR 2 TIMES IF IMAGE DO NOT APPEAR",100,150);
   pop();
   push();
   textSize(20);
   fill("ORANGE")
   text("SCORE:"+score,100,490);
   pop();
   //console.log(mouseX,mouseY); 

   Engine.update(engine);
    ground1.show();
    ground2.show();
    ground3.show();
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();
    box7.show();
    box8.show();
    box9.show();
    box10.show();
    box11.show();
    box12.show();
    box13.show();
    box14.show();
    box15.show();
    box16.show();
    box17.show();
    box18.show();
    box19.show();
    box20.show();
    box21.show();
    box22.show();
    box23.show();
    box24.show();
    box25.show();
    box26.show();
    box27.show();
    box28.show();
    box29.show();
    box30.show();
    box31.show();
    box32.show();
    box33.show();
    box34.show();
    box35.show();
    imageMode(CENTER);
    image(polimg,polygon.position.x,polygon.position.y,40,40);
    slingshot1.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();



}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot1.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon, {x:75, y:245}) 
    slingshot1.attach(polygon);
	  slingshot1.display();
	}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
       bg="day.jpg";
    }
    else{
       bg="night.jpg"; 
    }

    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}