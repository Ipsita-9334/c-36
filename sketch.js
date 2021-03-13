var playerCount, gameState, allPlayers;
var game, form, player;
var database;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
   
    game = new Game();
    game.start();

}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   
   if(gameState === 1){
       clear();
       game.play();
   }

   if(gameState === 2){
       game.end();
   }
}

