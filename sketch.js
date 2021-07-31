var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var ground;
var player, form,game;
var player1,player2;
var playB,resetB;
var players;
var water;
var waterGroup;
var w1_img, w2_img, w3_img, w_img, w5_img;
var player_img,infoIMG;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/bg.png");
  player_img = loadImage("images/playerb.png");
  infoIMG = loadImage("images/info.png");
  w1_img = loadImage("images/water.png");
  w2_img = loadImage("images/water.png");
  w3_img = loadImage("images/water.png");
  w4_img = loadImage("images/water.png");
  w5_img = loadImage("images/water.png");
  waterGroup = new Group();
}
function setup() {
  createCanvas(1700, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  background.scale =1;
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}