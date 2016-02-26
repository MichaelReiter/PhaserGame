// Generated by CoffeeScript 1.10.0
var Player,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  Player.prototype.jumpExtendFactor = 0;

  Player.prototype.health = 4;

  Player.prototype.invincible = true;

  Player.prototype.powerupDuration = 5;

  function Player(x, y) {
    this.hit = bind(this.hit, this);
    Player.__super__.constructor.call(this, x, y, 'player');
  }

  Player.prototype.hit = function(entity, bullet) {
    if (!this.invincible) {
      healthManager.loseHealth();
      this.hurtTint();
    }
    return Player.__super__.hit.apply(this, arguments);
  };

  Player.prototype.jump = function() {
    Player.__super__.jump.apply(this, arguments);
    return this.jumpExtendFactor = 1;
  };

  Player.prototype.extendJump = function() {
    this.ref.body.velocity.y -= this.jumpSpeed * 0.1 * this.jumpExtendFactor;
    if (this.jumpExtendFactor > 0.1) {
      return this.jumpExtendFactor *= 0.9;
    } else {
      return this.jumpExtendFactor = 0;
    }
  };

  Player.prototype.becomeInvincible = function() {
    this.invincible = true;
    this.ref.tint = 0x34495e;
    return game.time.events.add(Phaser.Timer.SECOND * this.powerupDuration, this.resetPowerup, this);
  };

  Player.prototype.resetPowerup = function() {
    this.invincible = false;
    return this.ref.tint = 0xffffff;
  };

  return Player;

})(Entity);
