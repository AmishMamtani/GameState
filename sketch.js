var ground;
var gameState="play";
var doctor;
var bg,backGround;
var obstacle1,collect1;
var score=0;
var coronaGroup,maskGroup1,maskGroup2,maskGroup3,sanitizerGroup;
var hpValue=6,hp;
var hp1,hp2,hp3,hp4,hp5,hp6;
var deductLimit=1;
var collect;
function preload(){
collect = loadSound("Sounds/Pickup.mp3")
standing = loadImage("Images/doctor2_opt.png")
bg = loadImage("Images/BG.png");
hp1=loadImage("Images/hp1.png");
hp2=loadImage("Images/hp2.png");
hp3=loadImage("Images/hp3.png");
hp4=loadImage("Images/hp4.png");
hp5=loadImage("Images/hp5.png");
hp6=loadImage("Images/hp6.png");
}
function setup(){
    createCanvas(1200,800);
    backGround = createSprite(6000,400,12000,800);
    ground = new Ground(600,780,1200,20);
    doctor = new Doctor(100,700,40,100);
    obstacle1 = new Obstacle(600,400,100,100);
    hp=createSprite(width-250,80,50,50);
    hp.addImage("hp6",hp6);
    hp.addImage("hp5",hp5);
    hp.addImage("hp4",hp4);
    hp.addImage("hp3",hp3);
    hp.addImage("hp2",hp2);
    hp.addImage("hp1",hp1);
    hp.scale=0.3;
    //mask1 = new Collect();
    collect1 = new Collect();
    coronaGroup = new Group();
    maskGroup1 = new Group();
    maskGroup2 = new Group();
    maskGroup3 = new Group();
    sanitizerGroup = new Group();
}
function draw(){
    background(0);
    if(gameState==="play"){
        backGround.velocityX=-2;
        if(backGround.x===-4800){
            backGround.x=6000;
        }
            ground.reset();
    doctor.jump();
    collect1.spawnMask1();
    collect1.spawnMask2();
    collect1.spawnMask3();
    collect1.collectMask1();
    collect1.collectMask2();
    collect1.collectMask3();
    collect1.spawnSanitizer();
    collect1.collectSanitizer();
    obstacle1.spawn();
    obstacle1.deduct();
        
    }
    backGround.addImage("background",bg);
    backGround.scale = 1.6;
   
    
    
    //doctor.depth = backGround.depth+1;
    //ground.depth = backGround.depth+1;
    doctor.body.collide(ground.body);
    //doctor.body.bounceOff(ground.body);
    
   // obstacle1.deduct();
    /*if(deductLimit===1){
        hpValue=hpValue-1;
        deductLimit=0;
    }
    console.log(hpValue);
    switch(hpValue){
        case 6:
            hp.changeImage(hp6);
            break;
        case 5:
            hp.changeImage(hp5);
            break;
        case 4:
            hp.changeImage(hp4);
            break;
        case 3:
            hp.changeImage(hp3);
            break;
        case 2:
            hp.changeImage(hp2);
            break;
        case 1:
            hp.changeImage(hp1);
}*/

    drawSprites();
    fill (255);
    textSize(25);
    text("Score: "+score,width-300,50);

    if(gameState==="end"){
        text("Game Over",600,400);
        ground.body.velocityX=0;
        background.velocityX=0;
        doctor.body.changImage("stand",standing);
    }
    
    
}