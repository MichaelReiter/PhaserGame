// Generated by CoffeeScript 1.10.0
var levelInit;

levelInit = function() {
  var ground, ledge, platforms;
  game.add.sprite(0, 0, 'background');
  platforms = game.add.group();
  platforms.enableBody = true;
  ground = platforms.create(0, game.world.height - 64, 'platform');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;
  ledge = platforms.create(400, 400, 'platform');
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'platform');
  ledge.body.immovable = true;
};
