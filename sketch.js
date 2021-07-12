var bg;
var bullet, bulletimg, bulletGroup;
var dropfwiend, dropfwiendimg;
var enemy, enemyimg;
var enemy2, enemy3, enemy4, enemy5, enemy6;
var player, playerimg;
var pot1, pot1img;
var pot2, pot2img;
var pot3, pot3img;
var pot4, pot4img;
var pot5, pot5img;
var pot6, pot6img;
var sunfwiend, sunfwiendimg;
var hb, hbsound;
var omin, ominsound;
var suspense, suspensesound;

var start = 0;
var play = 1;
var rules = 2;
var end = 3;
var gameState = start;

var score = 0;
var level = 1;

var edges;


function preload() {
  bg = loadImage("images/background.png");
  bulletimg = loadImage("images/bullet.png");
  dropfwiendimg = loadImage("images/dropfwiend.png");
  enemyimg = loadImage("images/enemy.png");
  playerimg = loadImage("images/player.png");
  pot1img = loadImage("images/pot1.png");
  pot2img = loadImage("images/pot2.png");
  pot3img = loadImage("images/pot3.png");
  pot4img = loadImage("images/pot4.png");
  pot5img = loadImage("images/pot5.png");
  pot6img = loadImage("images/pot6.png");
  sunfwiendimg = loadImage("images/sunfwiend.png");

  hbsound = loadSound("heartbeat.mp3");
  ominsound = loadSound("ominious.mp3");
  suspensesound = loadSound("suspense.mp3");
}

function setup () {

  createCanvas(displayWidth, displayHeight);

  //rocket
  player = createSprite(displayWidth/2, displayHeight/2 + 300, 50, 50);
  player.addImage(playerimg);
  player.scale = 2;
  
  //starter
  pot1 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  pot1.addImage(pot1img);
  pot1.scale = 0.3;

  //enemy
  enemySpawning();

  //bullet group
  bulletGroup = new Group();

  //pot2 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  //pot2.addImage(pot2img);
  //pot2.scale = 0.3;

  //pot3 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  //pot3.addImage(pot3img);
  //pot3.scale = 0.3;

  //pot4 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  //pot4.addImage(pot4img);
  //pot4.scale = 0.3;

  //pot5 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  //pot5.addImage(pot5img);
  //pot5.scale = 0.3;

  //pot6 = createSprite(displayWidth/2 - 600, displayHeight/2 + 300, 50, 50);
  //pot6.addImage(pot2img);
  //pot6.scale = 0.3;

  //dropfwiend = createSprite(displayWidth/2, displayHeight/2 + 300, 50, 50);
  //dropfwiend.addImage(dropfwiendimg);
  //dropfwiend.scale = 2;

  //sunfwiend = createSprite(displayWidth/2, displayHeight/2 + 300, 50, 50);
  //sunfwiend.addImage(sunfwiendimg);
  //sunfwiend.scale = 2;

}

function draw() {

  background(bg);
  console.log(mouseX, mouseY);

  edges = createEdgeSprites();
  player.collide(edges);

  player.visible = false;
  //pot1.visible = false;
  enemy.visible = false;
  enemy2.visible = false;
  enemy3.visible = false;
  enemy4.visible = false;
  enemy5.visible = false;
  enemy6.visible = false;

  //pot2.visible = false;
  //pot3.visible = false;
  //pot4.visible = false;
  //pot5.visible = false;
  //pot6.visible = false;

  //bullet.visible = false;

  //dropfwiend.visible = false;
  //sunfwiend.visible = false;

  if (gameState === 0) {

    textSize(100);
    fill("white");
    text("SAVE DAVE", 450, 270);
    textSize(20);
    fill("white");
    text("Press 'S' to Start.", displayWidth/2 - 650, displayHeight/2 + 180);
    text("Press 'R' to see Rules", displayWidth/2 - 650, displayHeight/2 + 200);
    enemy.velocityX = 0;

    if (keyDown('s')) {
      gameState = play;
      enemy.velocityX = 10;
      enemy2.velocityX = 10;
      enemy3.velocityX = 10;
      enemy4.velocityX = 10;
      enemy5.velocityX = 10;
      enemy6.velocityX = 10;
    }

    if (keyDown('r')) {
      gameState = rules;
    }
  }

  if (gameState === 1) {

    player.visible = true; 

    enemy.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    enemy4.visible = true;
    enemy5.visible = true;
    enemy6.visible = true;

    enemyBounceOff();

    if (keyDown("RIGHT")) {
      player.x += 20;
    }

    if (keyDown("LEFT")) {
      player.x -= +20;
    }

    textSize(20);
    fill("white");
    text("Press 'Q' to Quit", displayWidth/2 - 650, displayHeight/2 + 200);
    text("Press 'Space' to Shoot", displayWidth/2 - 650, displayHeight/2 + 220);
    textSize(40);
    text("Level "+level, displayWidth/2 - 650, displayHeight/2 - 300);
    text("Score: "+score, displayWidth/2 - 650, displayHeight/2 - 250);

    if (keyDown("q")) {
      gameState = start;
      enemy.x = 100;
      enemy2.x = 200;
      enemy3.x = 300;
      enemy4.x = 400;
      enemy5.x = 500;
      enemy6.x = 600;

      enemy.velocityX = 0;
      enemy2.velocityX = 0;
      enemy3.velocityX = 0;
      enemy4.velocityX = 0;
      enemy5.velocityX = 0;
      enemy6.velocityX = 0;
    }

    //bulletworkings

    if (keyDown("space")) {
      createBullet();
      bullet.velocityY = -20;
      bullet.visible = true;
    }

    enemyIsTouching();

  }

  if (score === 12 && level === 1) {
    level = 2;
    gameState = play;
  }

  if (level === 2 && score === 12) {
    enemy.velocityX = 10;
    enemy2.velocityX = 10;
    enemy3.velocityX = 10;
    enemy4.velocityX = 10;
    enemy5.velocityX = 10;
    enemy6.velocityX = 10;

    pot1.addImage(pot2img);

    createBullet();
    enemySpawning();
    enemyBounceOff();
    enemyIsTouching();
  }

  if (score === 24 && level === 2) {
    level = 3;
    gameState = play;
  }

  if (level === 3 && score === 24) {
    enemy.velocityX = 10;
    enemy2.velocityX = 10;
    enemy3.velocityX = 10;
    enemy4.velocityX = 10;
    enemy5.velocityX = 10;
    enemy6.velocityX = 10;

    pot1.addImage(pot3img);

    enemySpawning();
    enemyBounceOff();
    enemyIsTouching();
  }

  if (score === 36 && level === 3) {
    level = 4;
    gameState = play;
  }

  if (level === 4 && score === 36) {
    enemy.velocityX = 10;
    enemy2.velocityX = 10;
    enemy3.velocityX = 10;
    enemy4.velocityX = 10;
    enemy5.velocityX = 10;
    enemy6.velocityX = 10;

    pot1.addImage(pot4img);

    enemySpawning();
    enemyBounceOff();
    enemyIsTouching();
  }

  if (score === 48 && level === 4) {
    level = 5;
    gameState = play;
  }

  if (level === 5 && score === 48) {
    enemy.velocityX = 10;
    enemy2.velocityX = 10;
    enemy3.velocityX = 10;
    enemy4.velocityX = 10;
    enemy5.velocityX = 10;
    enemy6.velocityX = 10;

    pot1.addImage(pot5img);

    enemySpawning();
    enemyBounceOff();
    enemyIsTouching();
  }

  if (score === 60 && level === 5) {
    level = 6;
    gameState = play;
  }

  if (level === 6 && score === 60) {
    enemy.velocityX = 10;
    enemy2.velocityX = 10;
    enemy3.velocityX = 10;
    enemy4.velocityX = 10;
    enemy5.velocityX = 10;
    enemy6.velocityX = 10;

    pot1.addImage(pot6img);

    enemySpawning();
    enemyBounceOff();
    enemyIsTouching();
  }

  if (score === 72 && level === 6) {
    level = 7;
    gameState = end;
  }

  if (gameState === end) {
    pot1.x = displayWidth/2;
    pot1.y = displayHeight/2;

    pot1.scale = 0.5;

    fill("white");
    text("yey, you saved me im so happy thabks", pot1.x, pot1.y);
  }

  if (gameState === 2) {

    textSize(100);
    fill("white");
    text("RULES", 550, 270);

    textSize(20);
    text("1. Use the right and left arrow keys to move up and down.", 450, 320);
    text("2. Press the space bar to shoot bullets.", 450, 350);
    text("3. Your goal is to shoot all the aliens and save Dave.", 450, 380);
    text("4. Dave, the plant at the bottom left corner,", 450, 410);
    text("will grow happier and happier after each level you complete.", 450, 430);
    text("5. There are five levels, each one requiring more skill than the last.", 450, 460);
    text("6. Good Luck, and Have Fun!", 450, 490);
    text("Press 'Q' to Quit", displayWidth/2 - 650, displayHeight/2 + 200);

    if (keyDown("q")) {
      gameState = start;
    }
  }

  drawSprites();
}

function createBullet() {
  bullet = createSprite(displayWidth/2, displayHeight/2 + 300, 50, 50);
  bullet.addImage(bulletimg);
  bullet.scale = 2;
  bullet.x = player.x;
  bullet.y = 360;
  bullet.velocityY = 20;
  bullet.visible = false;
  bulletGroup.add(bullet);
  return bullet;
}

