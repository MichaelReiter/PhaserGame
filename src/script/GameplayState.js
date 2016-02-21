// Generated by CoffeeScript 1.10.0
var GameplayState, enemyManager, healthManager, inputManager, player, scoreManager;

player = null;

healthManager = null;

scoreManager = null;

inputManager = null;

enemyManager = null;

GameplayState = {
  preload: function() {},
  load: function() {},
  create: function() {
    game.world.setBounds(0, 0, GameWorld.width, GameWorld.height);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    levelInit();
    player = new Player(150, GameWorld.groundHeight, 'player');
    game.camera.follow(player.ref, Phaser.Camera.FOLLOW_PLATFORMER);
    enemyManager = new EnemyManager();
    healthManager = new HealthManager();
    scoreManager = new ScoreManager();
    return inputManager = new InputManager();
  },
  update: function() {
    var enemy, i, j, len, len1, results;
    game.physics.arcade.collide(player.ref, platforms);
    game.physics.arcade.collide(enemies, platforms);
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
