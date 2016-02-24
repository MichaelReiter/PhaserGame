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
    player = new Player(150, GameWorld.groundHeight, 'player');
    enemyManager = new EnemyManager();
    healthManager = new HealthManager();
    scoreManager = new ScoreManager();
    inputManager = new InputManager();
    game.world.setBounds(0, 0, GameWorld.width, GameWorld.height);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    return game.camera.follow(player.ref, Phaser.Camera.FOLLOW_PLATFORMER);
  },
  update: function() {
    var enemy, i, j, len, len1, results;
    game.physics.arcade.collide(player.ref, platforms);
    game.physics.arcade.collide(enemies, platforms);
    game.physics.arcade.collide(enemies, enemies);
    for (i = 0, len = enemyList.length; i < len; i++) {
      enemy = enemyList[i];
      game.physics.arcade.overlap(player.ref, enemy.bullets, player.hit, null, this);
      game.physics.arcade.overlap(enemy.ref, player.bullets, enemy.hit, null, this);
    }
    inputManager.keyboardMovement();
    inputManager.buttonMovement();
    player.animate();
    enemyManager.spawnLoop();
    results = [];
    for (j = 0, len1 = enemyList.length; j < len1; j++) {
      enemy = enemyList[j];
      results.push(enemy.AI());
    }
    return results;
  }
};
