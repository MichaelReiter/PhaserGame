// Generated by CoffeeScript 1.10.0
var EnemyManager, enemies, enemyList;

enemies = null;

enemyList = [];

EnemyManager = (function() {
  EnemyManager.prototype.enemyOnScreen = false;

  function EnemyManager() {
    enemies = game.add.group();
    enemies.enableBody = true;
  }

  EnemyManager.prototype.spawn = function(x, y) {
    var enemy;
    this.enemyOnScreen = true;
    enemy = new Enemy(x, y, 'enemy');
    enemies.add(enemy.ref);
    return enemyList.push(enemy);
  };

  EnemyManager.prototype.spawnLoop = function() {
    if (!this.enemyOnScreen) {
      return this.spawn(player.ref.x + 500, GameWorld.groundHeight);
    }
  };

  return EnemyManager;

})();
