"use strict";

(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Text = PIXI.Text;

  lib.logo = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_CommonUI/logo.png"));this.addChild(instance1);
  });

  lib.btnRank = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_CommonUI/btnRank.png"));this.addChild(instance1);
  });

  lib.btnShop = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_CommonUI/btnShop.png"));this.addChild(instance1);
  });

  lib.btnStart = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_CommonUI/btnStart.png"));this.addChild(instance1);
  });

  lib.UI_IntroView = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 35
    });
    var instance6 = new Text("个人最佳：100000").setStyle({
      fontFamily: "Microsoft YaHei UI",
      fontSize: 26,
      fill: "#fff"
    }).setAlign("center").setTransform(135.15, 23.3);this[instance6.name = "tfHighScore"] = instance6;var instance5 = new Text("小技巧：打开声音更容易哟~").setStyle({
      fontFamily: "Microsoft YaHei UI",
      fontSize: 26,
      fill: "#fff"
    }).setAlign("center").setTransform(375.025, 971.9);this[instance5.name = "tfHint"] = instance5;var instance4 = new lib.btnStart().setTransform(187, 465);this[instance4.name = "btnStart"] = instance4;var instance3 = new lib.btnShop().setTransform(187, 588);this[instance3.name = "btnShop"] = instance3;var instance2 = new lib.btnRank().setTransform(187, 711);this[instance2.name = "btnRank"] = instance2;var instance1 = new lib.logo();this.addTimedChild(instance6).addTimedChild(instance5).addTimedChild(instance4).addTimedChild(instance3).addTimedChild(instance2).addTimedChild(instance1, 0, 35, {
      "0": {
        x: 144,
        y: 117,
        sx: 1,
        sy: 1
      },
      "1": {
        x: 143.849,
        y: 116.93,
        sx: 1.001,
        sy: 1.001
      },
      "2": {
        x: 143.698,
        y: 116.861
      },
      "3": {
        x: 143.547,
        y: 116.741,
        sx: 1.002,
        sy: 1.002
      },
      "4": {
        x: 143.396,
        y: 116.671,
        sx: 1.003,
        sy: 1.003
      },
      "5": {
        x: 143.197,
        y: 116.553
      },
      "6": {
        x: 143.045,
        y: 116.484,
        sx: 1.004,
        sy: 1.004
      },
      "7": {
        x: 142.894,
        y: 116.364,
        sx: 1.005,
        sy: 1.005
      },
      "8": {
        x: 142.743,
        y: 116.294,
        sx: 1.006,
        sy: 1.006
      },
      "9": {
        x: 142.542,
        y: 116.175
      },
      "10": {
        x: 142.391,
        y: 116.105,
        sx: 1.007,
        sy: 1.007
      },
      "11": {
        x: 142.24,
        y: 115.985,
        sx: 1.008,
        sy: 1.008
      },
      "12": {
        x: 142.089,
        y: 115.916
      },
      "13": {
        x: 141.938,
        y: 115.796,
        sx: 1.009,
        sy: 1.009
      },
      "14": {
        x: 141.736,
        y: 115.727,
        sx: 1.01,
        sy: 1.01
      },
      "15": {
        x: 141.588,
        y: 115.609
      },
      "16": {
        x: 141.436,
        y: 115.539,
        sx: 1.011,
        sy: 1.011
      },
      "17": {
        x: 141.285,
        y: 115.419,
        sx: 1.012,
        sy: 1.012
      },
      "18": {
        x: 141.084,
        y: 115.35
      },
      "19": {
        x: 140.933,
        y: 115.23,
        sx: 1.013,
        sy: 1.013
      },
      "20": {
        x: 140.782,
        y: 115.16,
        sx: 1.014,
        sy: 1.014
      },
      "21": {
        x: 140.631,
        y: 115.041
      },
      "22": {
        x: 140.48,
        y: 114.971,
        sx: 1.015,
        sy: 1.015
      },
      "23": {
        x: 140.279,
        y: 114.851,
        sx: 1.016,
        sy: 1.016
      },
      "24": {
        x: 140.127,
        y: 114.782,
        sx: 1.017,
        sy: 1.017
      },
      "25": {
        x: 139.979,
        y: 114.664
      },
      "26": {
        x: 139.827,
        y: 114.594,
        sx: 1.018,
        sy: 1.018
      },
      "27": {
        x: 139.626,
        y: 114.474,
        sx: 1.019,
        sy: 1.019
      },
      "28": {
        x: 139.475,
        y: 114.405
      },
      "29": {
        x: 139.2,
        y: 114.25,
        sx: 1.02,
        sy: 1.02
      },
      "30": {
        x: 140.202,
        y: 114.8,
        sx: 1.016,
        sy: 1.016
      },
      "31": {
        x: 141.108,
        y: 115.354,
        sx: 1.012,
        sy: 1.012
      },
      "32": {
        x: 142.062,
        y: 115.906,
        sx: 1.008,
        sy: 1.008
      },
      "33": {
        x: 143.019,
        y: 116.46,
        sx: 1.004,
        sy: 1.004
      },
      "34": {
        x: 144,
        y: 117,
        sx: 1,
        sy: 1
      }
    });
  });

  lib.CommonUI = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 60
    });
    var instance1 = new lib.UI_IntroView();this.addChild(instance1);
  });

  lib.CommonUI.assets = ["res/images/fla_CommonUI/logo.png", "res/images/fla_CommonUI/btnRank.png", "res/images/fla_CommonUI/btnShop.png", "res/images/fla_CommonUI/btnStart.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;