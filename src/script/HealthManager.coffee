class HealthManager

  heartScale: 0.08

  constructor: ->
    @hearts = game.add.group()

    for i in [1..player.health]
      heart = @hearts.create(GameResolution.width - 60*i, 15, 'heart')
      heart.scale.setTo(@heartScale, @heartScale)
      heart.fixedToCamera = true


  loseHealth: ->
    player.health--
    if player.health > 0
      @hearts.children[player.health].destroy()
    else
      enemyList = []
      new Explosion(player.ref.x-30, player.ref.y-70)
      player.ref.kill()
      game.time.events.add(Phaser.Timer.SECOND * 0.5, @backToMenu, this)


  tintHearts: ->
    for heart in @hearts.children
      if heart.tint != 0x9b59b6
        heart.tint = 0x9b59b6
      else
        heart.tint = 0xffffff


  backToMenu: ->
    game.state.start('Menu')