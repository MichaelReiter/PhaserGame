enemies = null
enemyList = []

class EnemyManager

  maxEnemies: 15
  spawnFrequency: 3 #seconds

  constructor: ->
    @enemiesOnScreen = 0
    enemies = game.add.group()
    enemies.enableBody = true

    game.time.events.loop(Phaser.Timer.SECOND * @spawnFrequency, @spawnWrapper, this)


  spawn: (x, y) ->
    @enemiesOnScreen++
    enemy = new Enemy(x, y)
    enemies.add(enemy.ref)
    enemyList.push(enemy)


  spawnWrapper: ->
    if @enemiesOnScreen < @maxEnemies
      x = Math.floor(Math.random()*(player.ref.x + 300) + player.ref.x - 300)
      while Math.abs(player.ref.x - x) <= 175
        x = Math.floor(Math.random()*(player.ref.x + 300) + player.ref.x - 300)
      y = Math.floor(Math.random()*(GameWorld.groundHeight-1000) + GameWorld.groundHeight-100)
      new Explosion(x-32, y-50, 0xffffff, player.scale, 5)
      @spawn(x, y)