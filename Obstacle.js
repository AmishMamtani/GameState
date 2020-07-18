class Obstacle{
    constructor(x,y,width,height){
        
        
    }
    spawn(){
        if(frameCount%200===0){
            this.body=createSprite(random(300,1200),700,50,50);
            this.image = loadImage("Images/Corona_opt.png")
            this.body.addImage("corona",this.image);
            this.body.scale=random(0.1,0.5);
            this.body.velocityX=Math.round(random(-4,-10));
            coronaGroup.add(this.body);   
        }
    }
    deduct(){
        if(coronaGroup.isTouching(doctor.body)){
            coronaGroup.destroyEach();
            hpValue=hpValue-1
            switch(hpValue){
                case 6:
                    hp.changeImage("hp6",hp6);
                    break;
                case 5:
                    hp.changeImage("hp5",hp5);
                       break;
                case 4:
                    hp.changeImage("hp4",hp4);
                     break;
                case 3:
                    hp.changeImage("hp3",hp3);
                    break;
                case 2:
                    hp.changeImage("hp2",hp2);
                    break;
                case 1:
                    hp.changeImage("hp1",hp1);
                    break;
                default:
                   gameState="end";
            }
        }
    }
}      

