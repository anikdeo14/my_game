class Game{
    constructor(){


    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

       
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale = 0.4;
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.scale = 0.4;
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1700, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         strokeWeight(3);
                         stroke("white")
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         strokeWeight(3);
                         stroke("red")
                         fill("white");
                         text("Water Drops Saved by 1 :" +allPlayers.player1.score,50,50);
                         text("Water Drops Saved by 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                ground = createSprite(500,600,1700,10);
                ground.visible = false;            

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 50 === 0) {
                     water = createSprite(random(100, 1000), 0, 100, 100);
                     water.scale = 0.12;
                     water.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: water.addImage("fruit1",w1_img);
                         break;
                         case 2: water.addImage("fruit1", w2_img);
                         break;
                         case 3: water.addImage("fruit1", w3_img);
                         break;
                         case 4: water.addImage("fruit1", w4_img);
                         break;
                         case 5: water.addImage("fruit1", w5_img);
                         break;
                     }
                     waterGroup.add(water);
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < waterGroup.length; i++) {
                          if (waterGroup.get(i).isTouching(players)) {//|| (waterGroup.get(i).isTouching(ground)) {
                            waterGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                         }
                  }
                
                  
         
         
        
         //drawSprites();

    }

    end(){
       console.log("Game Ended");
    }
}