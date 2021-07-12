function enemySpawning() {
    if (frameCount % 60 === 0) {
      enemy = createSprite(100, 100, 50, 50);
      enemy.addImage(enemyimg);
      enemy.scale = 1.5;
  
      enemy2 = createSprite(200, 100, 50, 50);
      enemy2.addImage(enemyimg);
      enemy2.scale = 1.5;
  
      enemy3 = createSprite(300, 100, 50, 50);
      enemy3.addImage(enemyimg);
      enemy3.scale = 1.5;
  
      enemy4 = createSprite(400, 100, 50, 50);
      enemy4.addImage(enemyimg);
      enemy4.scale = 1.5;
  
      enemy5 = createSprite(500, 100, 50, 50);
      enemy5.addImage(enemyimg);
      enemy5.scale = 1.5;
  
      enemy6 = createSprite(600, 100, 50, 50);
      enemy6.addImage(enemyimg);
      enemy6.scale = 1.5;
    }
  }