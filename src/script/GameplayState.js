// Generated by CoffeeScript 1.10.0
var GameplayState, bullets, stars;

stars = null;

bullets = null;

GameplayState = {
  preload: function() {},
  load: function() {},
  create: function() {
    var i, j, scoreText, star;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    levelInit();
    playerInit();
    inputInit();
    scoreInit();
    bullets = game.add.group();
    bullets.enableBody = true;
    stars = game.add.group();
    stars.enableBody = true;
    for (i = j = 1; j <= 12; i = ++j) {
      star = stars.create(i * 70, 0, 'star');
      star.body.gravity.y = 300;
    }
    scoreText = game.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      fill: '#fff'
    });
  },
  update: function() {
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    playerMovement();
  }
};