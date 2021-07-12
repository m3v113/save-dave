function enemyBounceOff() {
    if (enemy.bounceOff(edges)) {
        enemy.y += 50;
        enemy.x -= 10;
      }
  
      if (enemy2.bounceOff(edges)) {
        enemy2.y += 50;
        enemy2.x -= 10;
      }
  
      if (enemy3.bounceOff(edges)) {
        enemy3.y += 50;
        enemy3.x -= 10;
      }
  
      if (enemy4.bounceOff(edges)) {
        enemy4.y += 50;
        enemy4.x -= 10;
      }
  
      if (enemy5.bounceOff(edges)) {
        enemy5.y += 50;
        enemy5.x -= 10;
      }
  
      if (enemy6.bounceOff(edges)) {
        enemy6.y += 50;
        enemy6.x -= 10;
      }
}