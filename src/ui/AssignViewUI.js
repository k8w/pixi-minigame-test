"use strict";

(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Text = PIXI.Text;

  var Graphic1 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 30, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/s_hint.png"));this.addTimedChild(instance1);
  });

  var Graphic2 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 30, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addTimedChild(instance1);
  });

  lib.UI_ChallengeHint = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 30
    });
    var instance4 = new Graphic2(MovieClip.SYNCHED).setTransform(0, 0, 7.5, 10.8).setAlpha(0.8).setColorTransform(0, 0, 0, 0, 0, 0);var instance3 = new Graphic1(MovieClip.SYNCHED);var instance2 = new Text("邀请1个新好友可获得3条狗命\n每天前3次分享可获得1条狗命").setStyle({
      fontFamily: "_sans",
      fontSize: 32,
      fill: "#999"
    }).setAlign("center").setTransform(374.9999999999999, 928.4);var instance1 = new Text("挑战已生成!\n赶快邀请好友吧~").setStyle({
      fontFamily: "_sans",
      fontSize: 32,
      fill: "#fff"
    }).setAlign("center").setTransform(484.575, 308.25);this.addTimedChild(instance4).addTimedChild(instance3, 0, 30, {
      "0": {
        x: 530,
        y: 62
      },
      "1": {
        x: 530.25,
        y: 61.5
      },
      "2": {
        x: 531,
        y: 60
      },
      "3": {
        x: 532.2,
        y: 57.65
      },
      "4": {
        x: 533.75,
        y: 54.45
      },
      "5": {
        x: 535.65,
        y: 50.7
      },
      "6": {
        x: 537.75,
        y: 46.45
      },
      "7": {
        x: 540,
        y: 42
      },
      "8": {
        x: 542.25,
        y: 37.55
      },
      "9": {
        x: 544.35,
        y: 33.3
      },
      "10": {
        x: 546.25,
        y: 29.55
      },
      "11": {
        x: 547.8,
        y: 26.35
      },
      "12": {
        x: 549,
        y: 24
      },
      "13": {
        x: 549.75,
        y: 22.5
      },
      "14": {
        x: 550,
        y: 22
      },
      "15": {
        x: 549.8,
        y: 22.45
      },
      "16": {
        x: 549.15,
        y: 23.75
      },
      "17": {
        x: 548.1,
        y: 25.8
      },
      "18": {
        x: 546.7,
        y: 28.6
      },
      "19": {
        x: 545,
        y: 32
      },
      "20": {
        x: 543.1,
        y: 35.8
      },
      "21": {
        x: 541.05,
        y: 39.9
      },
      "22": {
        x: 538.95,
        y: 44.1
      },
      "23": {
        x: 536.9,
        y: 48.2
      },
      "24": {
        x: 535,
        y: 52
      },
      "25": {
        x: 533.3,
        y: 55.4
      },
      "26": {
        x: 531.9,
        y: 58.2
      },
      "27": {
        x: 530.85,
        y: 60.25
      },
      "28": {
        x: 530.2,
        y: 61.55
      },
      "29": {
        x: 530,
        y: 62
      }
    }).addTimedChild(instance2).addTimedChild(instance1);
  });

  lib.UI_BtnBack = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/btnBack.png"));this.addChild(instance1);
  });

  lib.btn_reject_chan = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/btn_reject_chan.png"));this.addChild(instance1);
  });

  lib.btn_accept_chan = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/btn_accept_chan.png"));this.addChild(instance1);
  });

  lib.UI_BtnDashang = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/dashang.png"));this.addChild(instance1);
  });

  lib.blink_new = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/new.png"));this.addTimedChild(instance1, 0, 1, {
      "0": {
        sx: 1.5,
        sy: 1.5
      }
    }).addAction(function () {
      this.framerate = 4;
    }, 0);
  });

  lib.UI_BtnShop = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_AssignViewUI/shop.png"));var instance1 = new lib.blink_new().setTransform(274, -9);this.addChild(instance2, instance1);
  });

  lib.UI_BtnAgain = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/again.png"));this.addChild(instance1);
  });

  lib.UI_BtnTiaozhan = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/tiaozhan.png"));this.addChild(instance1);
  });

  lib.UI_TabCnRank = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      labels: {
        up: 0,
        down: 1
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/cn_rank.png"));var instance2 = new Sprite(fromFrame("res/images/fla_AssignViewUI/cn_rank_down.png"));this.addTimedChild(instance1, 0, 1).addTimedChild(instance2, 1, 1);
  });

  lib.UI_TabFriendRank = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      labels: {
        up: 0,
        down: 1
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/friend_rank.png"));var instance2 = new Sprite(fromFrame("res/images/fla_AssignViewUI/friend_rank_down.png"));this.addTimedChild(instance1, 0, 1).addTimedChild(instance2, 1, 1);
  });

  lib.star = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/star.png"));this.addChild(instance1);
  });

  lib.UI_StarGroup = Container.extend(function () {
    Container.call(this);
    var instance5 = new lib.star();var instance4 = new lib.star().setTransform(49.75);var instance3 = new lib.star().setTransform(99.5);var instance2 = new lib.star().setTransform(149.25);var instance1 = new lib.star().setTransform(199.05);this.addChild(instance5, instance4, instance3, instance2, instance1);
  });

  lib.placeholder = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.UI_RankListItem = Container.extend(function () {
    Container.call(this);
    var instance5 = new Text("123456").setStyle({
      fontFamily: "_sans",
      fontSize: 36,
      fill: "#a04300"
    }).setAlign("right").setTransform(106.99999999999999, 5.4);this[instance5.name = "tfNo"] = instance5;var instance4 = new Text("19000").setStyle({
      fontFamily: "_sans",
      fontSize: 36,
      fill: "#a04300"
    }).setAlign("right").setTransform(617.2, 5.4);this[instance4.name = "tfScore"] = instance4;var instance3 = new lib.placeholder().setTransform(121, 3.5, 0.48, 0.48).setColorTransform(0, 1, 0, 0, 0, 0);this[instance3.name = "_phHeadPic"] = instance3;var instance2 = new Text("这里是昵称").setStyle({
      fontFamily: "_sans",
      fontSize: 36,
      fill: "#a04300"
    }).setTransform(185, 7.4);this[instance2.name = "tfName"] = instance2;var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/headpic_border.png")).setTransform(118);this.addChild(instance5, instance4, instance3, instance2, instance1);
  });

  lib.Placeholder_Rank = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/rank_panel.png")).setTransform(0, 0, 17.15, 10.5);this.addChild(instance1);
  });

  lib.UI_RankList = Container.extend(function () {
    Container.call(this);
    var instance2 = new lib.Placeholder_Rank();this[instance2.name = "bg"] = instance2;var instance1 = new lib.UI_RankListItem().setTransform(17.95, 41.5);this[instance1.name = "_phFirstItem"] = instance1;this.addChild(instance2, instance1);
  });

  lib.Graphic3 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.bg = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg.png")).setTransform(0, 0, 75, 108);this.addChild(instance1);
  });

  lib.UI_AssignView = Container.extend(function () {
    Container.call(this);
    var instance25 = new lib.bg();this[instance25.name = "bg"] = instance25;var instance24 = new lib.Graphic3().setTransform(0, 26.05, 7.5, 2.76).setColorTransform(0, 1, 0, 0.84, 0, 0.6);var instance23 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(-30);var instance22 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(119);var instance21 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(268);var instance20 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(417);var instance19 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(566);var instance18 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_top.png")).setTransform(715);var instance17 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_corner.png")).setTransform(0, 234);var instance16 = new Sprite(fromFrame("res/images/fla_AssignViewUI/bg_corner.png")).setTransform(750, 234, 1, 1, 0, 0, 3.142);var instance15 = new lib.UI_RankList().setTransform(32, 870.5);this[instance15.name = "rankList"] = instance15;var instance14 = new lib.placeholder().setTransform(64.05, 90.1, 1, 1.92);this[instance14.name = "_phRole"] = instance14;var instance13 = new Text("一共奔跑了3400米~\n离家不远啦！过年喽~~~").setStyle({
      fontFamily: "Hiragino Sans GB W3",
      fontSize: 40,
      fill: "#a04300"
    }).setTransform(188.1, 132.75);this[instance13.name = "tfWord"] = instance13;var instance12 = new Text("100000\n").setStyle({
      fontFamily: "Hiragino Sans GB W3",
      fontSize: 72,
      fill: "#fff"
    }).setAlign("center").setTransform(375, 297.75);this[instance12.name = "tfScore"] = instance12;var instance11 = new lib.UI_StarGroup().setTransform(254, 396);this[instance11.name = "starGroup"] = instance11;var instance10 = new lib.UI_TabFriendRank().setTransform(88, 806);this[instance10.name = "btnFriendRank"] = instance10;var instance9 = new lib.UI_TabCnRank().setTransform(440, 806);this[instance9.name = "btnCnRank"] = instance9;var instance8 = new lib.UI_BtnTiaozhan().setTransform(32.5, 547);this[instance8.name = "btnTiaozhan"] = instance8;var instance7 = new lib.UI_BtnAgain().setTransform(386.5, 547);this[instance7.name = "btnAgain"] = instance7;var instance6 = new lib.UI_BtnShop().setTransform(32.5, 656);this[instance6.name = "btnShop"] = instance6;var instance5 = new lib.UI_BtnDashang().setTransform(386.5, 656);this[instance5.name = "btnDashang"] = instance5;var instance4 = new lib.btn_accept_chan().setTransform(188, 547);this[instance4.name = "btnAcceptChallenge"] = instance4;var instance3 = new lib.btn_reject_chan().setTransform(188, 656);this[instance3.name = "btnRejectChallenge"] = instance3;var instance2 = new lib.UI_BtnBack().setTransform(188, 532);this[instance2.name = "btnBack"] = instance2;var instance1 = new lib.UI_ChallengeHint();this[instance1.name = "challengeHint"] = instance1;this.addChild(instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
  });

  lib.AssignViewUI = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 60
    });
    var instance1 = new lib.UI_AssignView();this.addChild(instance1);
  });

  lib.AssignViewUI.assets = ["res/images/fla_AssignViewUI/s_hint.png", "res/images/common/white.png", "res/images/fla_AssignViewUI/btnBack.png", "res/images/fla_AssignViewUI/btn_reject_chan.png", "res/images/fla_AssignViewUI/btn_accept_chan.png", "res/images/fla_AssignViewUI/dashang.png", "res/images/fla_AssignViewUI/new.png", "res/images/fla_AssignViewUI/shop.png", "res/images/fla_AssignViewUI/again.png", "res/images/fla_AssignViewUI/tiaozhan.png", "res/images/fla_AssignViewUI/cn_rank.png", "res/images/fla_AssignViewUI/cn_rank_down.png", "res/images/fla_AssignViewUI/friend_rank.png", "res/images/fla_AssignViewUI/friend_rank_down.png", "res/images/fla_AssignViewUI/star.png", "res/images/fla_AssignViewUI/headpic_border.png", "res/images/fla_AssignViewUI/rank_panel.png", "res/images/fla_AssignViewUI/bg_corner.png", "res/images/fla_AssignViewUI/bg_top.png", "res/images/fla_AssignViewUI/bg.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;