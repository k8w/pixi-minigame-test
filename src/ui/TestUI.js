"use strict";

(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  lib.coin = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/coin.png"));this.addChild(instance1);
  });

  lib.TestCoin = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 20
    });
    var instance1 = new lib.coin();this.addTimedChild(instance1, 0, 20, {
      "0": {
        x: -15,
        y: -47,
        sx: 1
      },
      "1": {
        x: -13.391,
        sx: 0.893
      },
      "2": {
        x: -11.731,
        sx: 0.785
      },
      "3": {
        x: -10.072,
        sx: 0.678
      },
      "4": {
        x: -8.413,
        sx: 0.571
      },
      "5": {
        x: -6.704,
        sx: 0.464
      },
      "6": {
        x: -5.045,
        sx: 0.356
      },
      "7": {
        x: -3.386,
        sx: 0.249
      },
      "8": {
        x: -1.726,
        sx: 0.142
      },
      "9": {
        x: 0,
        sx: 0.034
      },
      "10": {
        x: -1.35,
        sx: 0.131
      },
      "11": {
        x: -2.7,
        sx: 0.228
      },
      "12": {
        x: -4.05,
        sx: 0.324
      },
      "13": {
        x: -5.4,
        sx: 0.421
      },
      "14": {
        x: -6.75,
        sx: 0.517
      },
      "15": {
        x: -8.1,
        sx: 0.614
      },
      "16": {
        x: -9.45,
        sx: 0.71
      },
      "17": {
        x: -10.8,
        sx: 0.807
      },
      "18": {
        x: -12.15,
        sx: 0.903
      },
      "19": {
        x: -15,
        sx: 1
      }
    });
    /* CONSTRUCTOR */
    this.collideArea = [-13, -45, 26, 45];
    /* END CONSTRUCTOR */
  });

  lib.TestPanda = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 4
    });
    var instance1 = new Sprite(fromFrame("res/images/walk_0.png"));var instance2 = new Sprite(fromFrame("res/images/walk_1.png"));var instance3 = new Sprite(fromFrame("res/images/walk_2.png"));var instance4 = new Sprite(fromFrame("res/images/walk_3.png")).setTransform(-23, -62);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -23,
        y: -62
      }
    }).addTimedChild(instance2, 1, 1, {
      "1": {
        x: -23,
        y: -63
      }
    }).addTimedChild(instance3, 2, 1, {
      "2": {
        x: -23,
        y: -62
      }
    }).addTimedChild(instance4, 3, 1);
    /* CONSTRUCTOR */
    this.framerate = 8;
    this.collideArea = [-14, -58, 28, 58];
    /* END CONSTRUCTOR */
  });

  lib.TestUI = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 60
    });
    var instance2 = new lib.TestPanda().setTransform(238, 152.05);var instance1 = new lib.TestCoin().setTransform(355.5, 252.55);this.addChild(instance2, instance1);
  });

  lib.TestUI.assets = ["res/images/coin.png", "res/images/walk_0.png", "res/images/walk_1.png", "res/images/walk_2.png", "res/images/walk_3.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;