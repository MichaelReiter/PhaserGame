// Generated by CoffeeScript 1.10.0
var Player, playerBullets,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

playerBullets = null;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player() {
    return Player.__super__.constructor.apply(this, arguments);
  }

  Player.prototype.takeDamage = function() {
    healthManager.loseHealth();
  };

  return Player;

})(Entity);
