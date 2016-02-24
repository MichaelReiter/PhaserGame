player        = null
levelManager  = null
healthManager = null
scoreManager  = null
inputManager  = null
enemyManager  = null
currentLevel  = "one"

GameplayState =

  preload: ->

  load: ->

  create: ->
    levelManager  = new LevelManager()
    player        = new Player(150, GameWorld.groundHeight, 'player')
    enemyManager  = new EnemyManager()
    healthManager = new HealthManager()
    scoreManager  = new ScoreManager()
    inputManager  = new InputManager()

    game.world.setBounds(0, 0, GameWorld.width, GameWorld.height)
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.camera.follow(player.ref, Phaser.Camera.FOLLOW_PLATFORMER)


  update: ->
    game.physics.arcade.collide(player.ref, platforms)
    game.physics.arcade.collide(enemies, platforms)
    game.physics.arcade.collide(enemies, enemies)

    for enemy in enemyList
      game.physics.arcade.overlap(player.ref, enemy.bullets, player.hit, null, this)
      game.physics.arcade.overlap(enemy.ref, player.bullets, enemy.hit, null, this)

    inputManager.keyboardMovement()
    inputManager.buttonMovement()
    player.animate()

    enemyManager.spawnLoop()
    for enemy in enemyList
      enemy.AI()