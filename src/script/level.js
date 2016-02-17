// Generated by CoffeeScript 1.10.0
var GameWorld, background, levelInit, platforms;

platforms = null;

background = null;

GameWorld = {
  height: GameResolution.height,
  width: 2000,
  groundHeight: 608
};

levelInit = function() {
  var ground, ledge;
  background = game.add.sprite(0, 0, 'background');
  background.scale.setTo(GameResolution.width, 1);
  platforms = game.add.group();
  platforms.enableBody = true;
  ground = platforms.create(-game.world.height.width / 2, game.world.height - 352, 'platform');
  ground.smoothed = false;
  ground.scale.setTo(10, 1);
  ground.body.immovable = true;
  ground.fixedToCamera = true;
  ledge = platforms.create(400, 470, 'platform');
  ledge.smoothed = false;
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 350, 'platform');
  ledge.smoothed = false;
  ledge.body.immovable = true;
};
