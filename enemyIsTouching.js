function enemyIsTouching() {
    if (bulletGroup.isTouching(enemy)) {
        bulletGroup.destroyEach();
        enemy.destroy();
        score += 2;
      }
  
      if (bulletGroup.isTouching(enemy2)) {
        bulletGroup.destroyEach();
        enemy2.destroy();
        score += 2;
      }
  
      if (bulletGroup.isTouching(enemy3)) {
        bulletGroup.destroyEach();
        enemy3.destroy();
        score += 2;
      }
  
      if (bulletGroup.isTouching(enemy4)) {
        bulletGroup.destroyEach();
        enemy4.destroy();
        score += 2;
      }
  
      if (bulletGroup.isTouching(enemy5)) {
        bulletGroup.destroyEach();
        enemy5.destroy();
        score += 2;
      }
  
      if (bulletGroup.isTouching(enemy6)) {
        bulletGroup.destroyEach();
        enemy6.destroy();
        score += 2;
      }
}