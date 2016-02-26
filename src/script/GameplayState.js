// Generated by CoffeeScript 1.10.0
var GameplayState, currentLevel, enemyManager, healthManager, inputManager, levelManager, player, scoreManager;

player = null;

levelManager = null;

healthManager = null;

scoreManager = null;

inputManager = null;

enemyManager = null;

currentLevel = null;

GameplayState = {
  preload: function() {},
  load: function() {},
  create: function() {
    levelManager = new LevelManager();
    player = new Player(150, GameWorld.groundHeight);
    enemyManager = new EnemyManager();
    healthManager = new HealthManager();
    scoreManager = new ScoreManager();
    inputManager = new InputManager();
    game.world.setBounds(0, 0, GameWorld.width, GameWorld.height);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.camera.follow(player.ref, Phaser.Camera.FOLLOW_PLATFORMER);
    return new RapidFire(player.ref.x + 300, player.ref.y - 300);
  },
  update: function() {
    var enemy, i, j, k, len, len1, len2, powerup, results;
    game.physics.arcade.collide(player.ref, platforms);
    game.physics.arcade.collide(enemies, platforms);
    game.physics.arcade.collide(powerups, platforms);
    game.physics.arcade.collide(enemies, enemies);
    for (i = 0, len = powerupList.length; i < len; i++) {
      powerup = powerupList[i];
      game.physics.arcade.overlap(player.ref, powerups, powerup.collected, null, this);
    }
    for (j = 0, len1 = enemyList.length; j < len1; j++) {
      enemy = enemyList[j];
      game.physics.arcade.overlap(player.ref, enemy.bullets, player.hit, null, this);
      game.physics.arcade.overlap(enemy.ref, player.bullets, enemy.hit, null, this);
    }
    inputManager.keyboardMovement();
    inputManager.buttonMovement();
    player.animate();
    enemyManager.spawnLoop();
    results = [];
    for (k = 0, len2 = enemyList.length; k < len2; k++) {
      enemy = enemyList[k];
      results.push(enemy.AI());
    }
    return results;
  }
};
