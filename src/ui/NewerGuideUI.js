"use strict";

(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Text = PIXI.Text;

  lib.click_txt = Container.extend(function () {
    Container.call(this);
    var instance1 = new Text("--- 点击屏幕继续 ---").setStyle({
      fontFamily: "_sans",
      fontSize: 24,
      fill: "#ff0"
    }).setAlign("center").setTransform(375);this.addChild(instance1);
  });

  lib.ClickContinue = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 60
    });
    var instance1 = new lib.click_txt();this.addTimedChild(instance1, 0, 60, {
      "0": {
        a: 1
      },
      "2": {
        a: 0.99
      },
      "3": {
        a: 0.97
      },
      "4": {
        a: 0.95
      },
      "5": {
        a: 0.93
      },
      "6": {
        a: 0.9
      },
      "7": {
        a: 0.86
      },
      "8": {
        a: 0.82
      },
      "9": {
        a: 0.78
      },
      "10": {
        a: 0.73
      },
      "11": {
        a: 0.68
      },
      "12": {
        a: 0.63
      },
      "13": {
        a: 0.58
      },
      "14": {
        a: 0.53
      },
      "15": {
        a: 0.47
      },
      "16": {
        a: 0.42
      },
      "17": {
        a: 0.37
      },
      "18": {
        a: 0.32
      },
      "19": {
        a: 0.27
      },
      "20": {
        a: 0.22
      },
      "21": {
        a: 0.18
      },
      "22": {
        a: 0.14
      },
      "23": {
        a: 0.1
      },
      "24": {
        a: 0.07
      },
      "25": {
        a: 0.05
      },
      "26": {
        a: 0.03
      },
      "27": {
        a: 0.01
      },
      "28": {
        a: 0
      },
      "31": {
        a: 0.01
      },
      "32": {
        a: 0.02
      },
      "33": {
        a: 0.04
      },
      "34": {
        a: 0.07
      },
      "35": {
        a: 0.09
      },
      "36": {
        a: 0.13
      },
      "37": {
        a: 0.16
      },
      "38": {
        a: 0.21
      },
      "39": {
        a: 0.25
      },
      "40": {
        a: 0.3
      },
      "41": {
        a: 0.34
      },
      "42": {
        a: 0.39
      },
      "43": {
        a: 0.45
      },
      "44": {
        a: 0.5
      },
      "45": {
        a: 0.55
      },
      "46": {
        a: 0.61
      },
      "47": {
        a: 0.66
      },
      "48": {
        a: 0.7
      },
      "49": {
        a: 0.75
      },
      "50": {
        a: 0.79
      },
      "51": {
        a: 0.84
      },
      "52": {
        a: 0.87
      },
      "53": {
        a: 0.91
      },
      "54": {
        a: 0.93
      },
      "55": {
        a: 0.96
      },
      "56": {
        a: 0.98
      },
      "57": {
        a: 0.99
      },
      "58": {
        a: 1
      }
    });
  });

  lib.hand = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_NewerGuideUI/finger.png"));this.addChild(instance1);
  });

  var Graphic1 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 124, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addTimedChild(instance1);
  });

  var Graphic2 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 42, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_NewerGuideUI/beat_guide.png")).setTransform(0, 0, 1.5, 1.5);this.addTimedChild(instance1);
  });

  var Graphic3 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 9, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic4 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 9, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic5 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 35, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic6 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 7, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  lib.shaking = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 7
    });
    var instance1 = new Graphic6(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 7, {
      "0": {
        x: 2.3,
        y: 2.35,
        sx: 0.9,
        sy: 0.9
      },
      "1": {
        x: 0.77,
        y: 0.824,
        sx: 0.967,
        sy: 0.967
      },
      "2": {
        x: -0.809,
        y: -0.752,
        sx: 1.033,
        sy: 1.033
      },
      "3": {
        x: -2.2,
        y: -2.15,
        sx: 1.1,
        sy: 1.1
      },
      "4": {
        x: -0.617,
        y: -0.57,
        sx: 1.033,
        sy: 1.033
      },
      "5": {
        x: 0.967,
        y: 1.011,
        sx: 0.967,
        sy: 0.967
      },
      "6": {
        x: 2.35,
        y: 2.3,
        sx: 0.9,
        sy: 0.9
      }
    });
  });

  var Graphic7 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  lib.ring = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 73,
      labels: {
        idle: 0,
        beat_great: 1,
        bad: 15,
        beat_perfect: 26,
        holding: 35,
        hold_great: 50,
        hold_perfect: 64
      }
    });
    var instance1 = new Graphic5(MovieClip.SYNCHED);var instance2 = new Graphic3(MovieClip.SYNCHED);var instance3 = new lib.shaking();var instance4 = new Graphic7(MovieClip.SYNCHED);var instance5 = new Graphic4(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 35, {
      "0": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        a: 1
      },
      "1": {
        sx: 1.74,
        sy: 1.74
      },
      "2": {
        x: 0.05,
        y: 0.05,
        sx: 1.683,
        sy: 1.683
      },
      "3": {
        x: 0,
        y: 0.1,
        sx: 1.626,
        sy: 1.626
      },
      "4": {
        x: 0.05,
        sx: 1.569,
        sy: 1.569
      },
      "5": {
        sx: 1.512,
        sy: 1.512
      },
      "6": {
        y: 0.15,
        sx: 1.455,
        sy: 1.455
      },
      "7": {
        x: 0.1,
        sx: 1.398,
        sy: 1.398
      },
      "8": {
        sx: 1.341,
        sy: 1.341
      },
      "9": {
        x: 0.15,
        sx: 1.284,
        sy: 1.284
      },
      "10": {
        x: 0.1,
        y: 0.2,
        sx: 1.228,
        sy: 1.228
      },
      "11": {
        x: 0.15,
        sx: 1.171,
        sy: 1.171
      },
      "12": {
        y: 0.25,
        sx: 1.114,
        sy: 1.114
      },
      "13": {
        sx: 1.057,
        sy: 1.057
      },
      "14": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1
      },
      "15": {
        a: 0.3
      },
      "16": {
        x: -2,
        a: 0.27
      },
      "17": {
        x: -4,
        a: 0.24
      },
      "18": {
        x: -6,
        a: 0.21
      },
      "19": {
        x: -8,
        a: 0.18
      },
      "20": {
        x: -10,
        a: 0.15
      },
      "21": {
        x: -8,
        a: 0.18
      },
      "22": {
        x: -6,
        a: 0.21
      },
      "23": {
        x: -4,
        a: 0.24
      },
      "24": {
        x: -2,
        a: 0.27
      },
      "25": {
        x: 0,
        a: 0.3
      },
      "26": {
        sx: 1.729,
        sy: 1.729,
        a: 1
      },
      "27": {
        x: 0.05,
        y: 0.05,
        sx: 1.638,
        sy: 1.638
      },
      "28": {
        x: 0.1,
        y: 0.1,
        sx: 1.547,
        sy: 1.547
      },
      "29": {
        x: 0.15,
        y: 0.15,
        sx: 1.456,
        sy: 1.456
      },
      "30": {
        sx: 1.365,
        sy: 1.365
      },
      "31": {
        x: 0.25,
        y: 0.25,
        sx: 1.273,
        sy: 1.273
      },
      "32": {
        sx: 1.182,
        sy: 1.182
      },
      "33": {
        x: 0.3,
        y: 0.3,
        sx: 1.091,
        sy: 1.091
      },
      "34": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1
      }
    }).addTimedChild(instance2, 26, 9, {
      "26": {
        x: 0,
        y: 0,
        sx: 3,
        sy: 3,
        a: 0.1
      },
      "27": {
        x: 0.05,
        sx: 2.75,
        sy: 2.75,
        a: 0.21
      },
      "28": {
        sx: 2.5,
        sy: 2.5,
        a: 0.33
      },
      "29": {
        y: -0.05,
        sx: 2.25,
        sy: 2.25,
        a: 0.44
      },
      "30": {
        x: 0.1,
        sx: 2,
        sy: 2,
        a: 0.55
      },
      "31": {
        y: -0.1,
        sx: 1.75,
        sy: 1.75,
        a: 0.66
      },
      "32": {
        sx: 1.5,
        sy: 1.5,
        a: 0.78
      },
      "33": {
        x: 0.05,
        y: -0.15,
        sx: 1.25,
        sy: 1.25,
        a: 0.89
      },
      "34": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        a: 1
      }
    }).addTimedChild(instance3, 35, 15, {
      "35": {
        x: -2.3,
        y: -2.35,
        c: [1, 0, 1, 0, 1, 0]
      },
      "36": {
        c: [0.96, 0.04, 0.96, 0, 0.96, 0]
      },
      "37": {
        c: [0.91, 0.09, 0.91, 0, 0.91, 0]
      },
      "38": {
        c: [0.87, 0.13, 0.87, 0, 0.87, 0]
      },
      "39": {
        c: [0.83, 0.17, 0.83, 0, 0.83, 0]
      },
      "40": {
        c: [0.79, 0.22, 0.79, 0, 0.79, 0]
      },
      "41": {
        c: [0.74, 0.26, 0.74, 0, 0.74, 0]
      },
      "42": {
        c: [0.7, 0.3, 0.7, 0, 0.7, 0]
      },
      "43": {
        c: [0.66, 0.34, 0.66, 0, 0.66, 0]
      },
      "44": {
        c: [0.61, 0.38, 0.61, 0, 0.61, 0]
      },
      "45": {
        c: [0.57, 0.43, 0.57, 0, 0.57, 0]
      },
      "46": {
        c: [0.53, 0.47, 0.53, 0, 0.53, 0]
      },
      "47": {
        c: [0.48, 0.51, 0.48, 0, 0.48, 0]
      },
      "48": {
        c: [0.44, 0.56, 0.44, 0, 0.44, 0]
      },
      "49": {
        c: [0.4, 0.6, 0.4, 0, 0.4, 0]
      }
    }).addTimedChild(instance4, 50, 23, {
      "50": {
        x: 0,
        y: 0,
        sx: 1.74,
        sy: 1.74,
        c: [0, 1, 0, 0, 0, 0]
      },
      "51": {
        x: 0.05,
        y: 0.05,
        sx: 1.683,
        sy: 1.683,
        c: [0.03, 0.97, 0.03, 0, 0.03, 0]
      },
      "52": {
        x: 0,
        y: 0.1,
        sx: 1.626,
        sy: 1.626,
        c: [0.06, 0.94, 0.06, 0, 0.06, 0]
      },
      "53": {
        x: 0.05,
        sx: 1.569,
        sy: 1.569,
        c: [0.09, 0.91, 0.09, 0, 0.09, 0]
      },
      "54": {
        sx: 1.512,
        sy: 1.512,
        c: [0.12, 0.88, 0.12, 0, 0.12, 0]
      },
      "55": {
        y: 0.15,
        sx: 1.455,
        sy: 1.455,
        c: [0.15, 0.85, 0.15, 0, 0.15, 0]
      },
      "56": {
        x: 0.1,
        sx: 1.398,
        sy: 1.398,
        c: [0.18, 0.82, 0.18, 0, 0.18, 0]
      },
      "57": {
        sx: 1.341,
        sy: 1.341,
        c: [0.21, 0.78, 0.21, 0, 0.21, 0]
      },
      "58": {
        x: 0.15,
        sx: 1.284,
        sy: 1.284,
        c: [0.25, 0.75, 0.25, 0, 0.25, 0]
      },
      "59": {
        x: 0.1,
        y: 0.2,
        sx: 1.228,
        sy: 1.228,
        c: [0.28, 0.72, 0.28, 0, 0.28, 0]
      },
      "60": {
        x: 0.15,
        sx: 1.171,
        sy: 1.171,
        c: [0.3, 0.69, 0.3, 0, 0.3, 0]
      },
      "61": {
        y: 0.25,
        sx: 1.114,
        sy: 1.114,
        c: [0.34, 0.66, 0.34, 0, 0.34, 0]
      },
      "62": {
        sx: 1.057,
        sy: 1.057,
        c: [0.37, 0.63, 0.37, 0, 0.37, 0]
      },
      "63": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        c: [0.4, 0.6, 0.4, 0, 0.4, 0]
      },
      "64": {
        sx: 1.729,
        sy: 1.729,
        c: [0, 1, 0, 0, 0, 0]
      },
      "65": {
        x: 0.05,
        y: 0.05,
        sx: 1.638,
        sy: 1.638,
        c: [0.05, 0.95, 0.05, 0, 0.05, 0]
      },
      "66": {
        x: 0.1,
        y: 0.1,
        sx: 1.547,
        sy: 1.547,
        c: [0.1, 0.9, 0.1, 0, 0.1, 0]
      },
      "67": {
        x: 0.15,
        y: 0.15,
        sx: 1.456,
        sy: 1.456,
        c: [0.15, 0.85, 0.15, 0, 0.15, 0]
      },
      "68": {
        sx: 1.365,
        sy: 1.365,
        c: [0.2, 0.8, 0.2, 0, 0.2, 0]
      },
      "69": {
        x: 0.25,
        y: 0.25,
        sx: 1.273,
        sy: 1.273,
        c: [0.25, 0.75, 0.25, 0, 0.25, 0]
      },
      "70": {
        sx: 1.182,
        sy: 1.182,
        c: [0.3, 0.7, 0.3, 0, 0.3, 0]
      },
      "71": {
        x: 0.3,
        y: 0.3,
        sx: 1.091,
        sy: 1.091,
        c: [0.35, 0.65, 0.35, 0, 0.35, 0]
      },
      "72": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        c: [0.4, 0.6, 0.4, 0, 0.4, 0]
      }
    }).addTimedChild(instance5, 64, 9, {
      "64": {
        x: 0,
        y: 0,
        sx: 3,
        sy: 3,
        a: 1,
        c: [1, 0.8, 1, 0, 1, 0]
      },
      "65": {
        sx: 2.75,
        sy: 2.75,
        a: 0.88,
        c: [1, 0.78, 0.88, 0, 0.88, 0]
      },
      "66": {
        x: -0.05,
        y: -0.05,
        sx: 2.5,
        sy: 2.5,
        a: 0.75,
        c: [1, 0.75, 0.75, 0, 0.75, 0]
      },
      "67": {
        x: -0.15,
        y: -0.1,
        sx: 2.25,
        sy: 2.25,
        a: 0.63,
        c: [1, 0.73, 0.63, 0, 0.63, 0]
      },
      "68": {
        y: -0.15,
        sx: 2,
        sy: 2,
        a: 0.5,
        c: [1, 0.7, 0.5, 0, 0.5, 0]
      },
      "69": {
        x: -0.2,
        y: -0.2,
        sx: 1.75,
        sy: 1.75,
        a: 0.38,
        c: [1, 0.67, 0.38, 0, 0.38, 0]
      },
      "70": {
        x: -0.25,
        y: -0.25,
        sx: 1.5,
        sy: 1.5,
        a: 0.25,
        c: [1, 0.65, 0.25, 0, 0.25, 0]
      },
      "71": {
        x: -0.35,
        y: -0.3,
        sx: 1.25,
        sy: 1.25,
        a: 0.13,
        c: [1, 0.62, 0.13, 0, 0.13, 0]
      },
      "72": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        a: 0,
        c: [1, 0.6, 0, 0, 0, 0]
      }
    }).addAction(function () {
      this.stop();
    }, 0).addAction(function () {
      this.gotoAndPlay('idle');
    }, 14).addAction(function () {
      this.gotoAndStop('idle');
    }, 25).addAction(function () {
      this.gotoAndStop('idle');
    }, 34).addAction(function () {
      this.stop();
    }, 49).addAction(function () {
      this.gotoAndPlay('idle');
    }, 63).addAction(function () {
      this.gotoAndStop('idle');
    }, 72);
  });

  lib.UI_Beat = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/beat.png")).setTransform(-15);this.addChild(instance1);
  });

  lib.hold_point = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/hold.png")).setTransform(-15);this.addChild(instance1);
  });

  lib.hold_point2 = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/release.png")).setTransform(-17, 45);var instance1 = new lib.hold_point().setTransform(15);this.addChild(instance2, instance1);
  });

  lib.hold_point1 = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/holding.png")).setTransform(-17, 45);var instance1 = new lib.hold_point().setTransform(15);this.addChild(instance2, instance1);
  });

  lib.trans = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/hold_bar.png")).setTransform(0, 0, 14.167);this.addChild(instance1);
  });

  var Graphic8 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 55, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addTimedChild(instance1);
  });

  lib.track = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 55
    });
    var instance1 = new Graphic8(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 55, {
      "0": {
        y: 0,
        sx: 7.5,
        sy: 0.582,
        a: 0.3
      },
      "1": {
        y: 0.05
      },
      "3": {
        a: 0.31
      },
      "5": {
        a: 0.32
      },
      "6": {
        a: 0.33
      },
      "7": {
        a: 0.34
      },
      "8": {
        a: 0.35
      },
      "9": {
        a: 0.36
      },
      "10": {
        a: 0.38
      },
      "11": {
        a: 0.39
      },
      "12": {
        a: 0.4
      },
      "13": {
        a: 0.41
      },
      "14": {
        a: 0.43
      },
      "15": {
        a: 0.44
      },
      "16": {
        a: 0.45
      },
      "17": {
        a: 0.46
      },
      "18": {
        a: 0.47
      },
      "19": {
        a: 0.48
      },
      "20": {
        a: 0.49
      },
      "22": {
        a: 0.5
      },
      "24": {
        y: 0
      },
      "25": {
        y: 0.05
      },
      "28": {
        a: 0.49
      },
      "30": {
        a: 0.48
      },
      "31": {
        a: 0.47
      },
      "33": {
        a: 0.46
      },
      "34": {
        a: 0.45
      },
      "35": {
        a: 0.44
      },
      "36": {
        a: 0.43
      },
      "37": {
        a: 0.42
      },
      "38": {
        a: 0.41
      },
      "39": {
        a: 0.4
      },
      "40": {
        a: 0.39
      },
      "41": {
        a: 0.38
      },
      "42": {
        a: 0.37
      },
      "43": {
        a: 0.36
      },
      "44": {
        a: 0.35
      },
      "45": {
        a: 0.34
      },
      "46": {
        a: 0.33
      },
      "48": {
        a: 0.32
      },
      "49": {
        a: 0.31
      },
      "51": {
        a: 0.3
      },
      "54": {
        y: 0
      }
    });
  });

  var Graphic9 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic10 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic11 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic12 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic13 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic14 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  lib.lights = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 104
    });
    var instance6 = new Graphic14(MovieClip.SYNCHED);var instance5 = new Graphic13(MovieClip.SYNCHED);var instance4 = new Graphic12(MovieClip.SYNCHED);var instance3 = new Graphic11(MovieClip.SYNCHED);var instance2 = new Graphic10(MovieClip.SYNCHED);var instance1 = new Graphic9(MovieClip.SYNCHED);this.addTimedChild(instance6, 0, 104, {
      "0": {
        x: 186.5,
        y: 278.25,
        sx: 1.652,
        sy: 1.238,
        kx: 0,
        ky: 0,
        r: -0.566,
        a: 0.1,
        c: [1, 0, 0, 0, 1, 0]
      },
      "1": {
        x: 186.573,
        y: 278.315,
        sx: 1.649,
        sy: 1.236,
        r: -0.565
      },
      "2": {
        x: 186.557,
        y: 278.292,
        r: -0.564
      },
      "3": {
        x: 186.55,
        y: 278.281,
        r: -0.56
      },
      "4": {
        x: 186.56,
        y: 278.316,
        r: -0.556
      },
      "5": {
        x: 186.545,
        y: 278.292,
        r: -0.551
      },
      "6": {
        x: 186.544,
        y: 278.264,
        r: -0.547,
        a: 0.11
      },
      "7": {
        x: 186.542,
        y: 278.267,
        r: -0.538
      },
      "8": {
        x: 186.549,
        y: 278.3,
        r: -0.53
      },
      "9": {
        x: 186.568,
        y: 278.257,
        r: -0.521
      },
      "10": {
        x: 186.558,
        y: 278.275,
        r: -0.512
      },
      "11": {
        x: 186.562,
        y: 278.268,
        r: -0.499
      },
      "12": {
        x: 186.563,
        y: 278.262,
        r: -0.486
      },
      "13": {
        x: 186.574,
        y: 278.231,
        r: -0.473
      },
      "14": {
        x: 186.585,
        y: 278.243,
        r: -0.46
      },
      "15": {
        x: 186.609,
        y: 278.236,
        r: -0.446
      },
      "16": {
        x: 186.603,
        y: 278.237,
        sx: 1.65,
        r: -0.429,
        a: 0.12
      },
      "17": {
        x: 186.598,
        y: 278.231,
        r: -0.412
      },
      "18": {
        x: 186.644,
        y: 278.211,
        r: -0.394
      },
      "19": {
        x: 186.637,
        y: 278.171,
        r: -0.377
      },
      "20": {
        x: 186.643,
        y: 278.161,
        r: -0.359
      },
      "21": {
        x: 186.66,
        y: 278.17,
        r: -0.341,
        a: 0.13
      },
      "22": {
        y: 278.163,
        r: -0.32
      },
      "23": {
        x: 186.667,
        y: 278.139,
        r: -0.298
      },
      "24": {
        x: 186.676,
        y: 278.144,
        sy: 1.237,
        r: -0.28
      },
      "25": {
        x: 186.668,
        y: 278.112,
        r: -0.258
      },
      "26": {
        x: 186.686,
        y: 278.138,
        r: -0.236,
        a: 0.14
      },
      "27": {
        x: 186.683,
        y: 278.12,
        r: -0.214
      },
      "28": {
        x: 186.711,
        y: 278.1,
        sx: 1.651,
        r: -0.192
      },
      "29": {
        x: 186.717,
        y: 278.091,
        r: -0.167
      },
      "30": {
        x: 186.747,
        y: 278.09,
        r: -0.145
      },
      "31": {
        x: 186.736,
        y: 278.073,
        r: -0.123,
        a: 0.15
      },
      "32": {
        x: 186.744,
        y: 278.051,
        r: -0.101
      },
      "33": {
        x: 186.745,
        y: 278.086,
        r: -0.075
      },
      "34": {
        x: 186.715,
        y: 278.06,
        r: -0.053
      },
      "35": {
        x: 186.73,
        y: 278.073,
        r: -0.031,
        a: 0.16
      },
      "36": {
        x: 186.745,
        y: 278.022,
        sx: 1.652,
        sy: 1.238,
        r: -0.009
      },
      "37": {
        x: 186.771,
        y: 278.029,
        r: 0.013
      },
      "38": {
        x: 186.72,
        y: 278.056,
        sx: 1.651,
        sy: 1.237,
        r: 0.035
      },
      "39": {
        x: 186.742,
        y: 278.023,
        r: 0.057
      },
      "40": {
        x: 186.746,
        y: 278.027,
        r: 0.079,
        a: 0.17
      },
      "41": {
        x: 186.788,
        y: 278.028,
        r: 0.101
      },
      "42": {
        x: 186.776,
        y: 278.037,
        r: 0.119
      },
      "43": {
        x: 186.824,
        y: 278.006,
        r: 0.14,
        a: 0.18
      },
      "44": {
        x: 186.792,
        y: 277.982,
        r: 0.162
      },
      "45": {
        x: 186.807,
        r: 0.18
      },
      "46": {
        x: 186.839,
        y: 277.99,
        r: 0.197
      },
      "47": {
        x: 186.848,
        y: 278.013,
        sx: 1.65,
        r: 0.215
      },
      "48": {
        x: 186.881,
        y: 277.984,
        r: 0.232
      },
      "49": {
        x: 186.854,
        y: 277.977,
        r: 0.25
      },
      "50": {
        x: 186.905,
        y: 277.986,
        r: 0.267,
        a: 0.19
      },
      "51": {
        x: 186.912,
        y: 278.007,
        r: 0.28
      },
      "52": {
        x: 186.904,
        y: 277.987,
        r: 0.294
      },
      "53": {
        x: 186.88,
        y: 277.973,
        sy: 1.236,
        r: 0.307
      },
      "54": {
        x: 186.902,
        y: 277.984,
        r: 0.32
      },
      "55": {
        x: 186.919,
        y: 277.967,
        r: 0.332,
        a: 0.2
      },
      "56": {
        x: 186.914,
        y: 277.971,
        r: 0.341
      },
      "57": {
        x: 186.952,
        y: 277.98,
        r: 0.35
      },
      "58": {
        x: 186.931,
        y: 277.987,
        r: 0.359
      },
      "59": {
        x: 186.951,
        y: 277.948,
        r: 0.367
      },
      "60": {
        x: 186.942,
        y: 277.953,
        r: 0.372
      },
      "61": {
        x: 186.971,
        y: 277.979,
        r: 0.377
      },
      "62": {
        x: 186.935,
        y: 277.988,
        r: 0.381
      },
      "63": {
        x: 186.941,
        y: 277.967,
        r: 0.385
      },
      "64": {
        x: 186.96
      },
      "65": {
        x: 186.95,
        y: 278,
        sx: 1.652,
        sy: 1.238,
        r: 0.388
      },
      "66": {
        x: 186.994,
        y: 278.041,
        sx: 1.65,
        sy: 1.236,
        r: 0.385
      },
      "67": {
        x: 186.946,
        y: 278.05,
        r: 0.38
      },
      "68": {
        x: 186.965,
        y: 278.024,
        r: 0.372
      },
      "69": {
        x: 186.936,
        y: 278.046,
        r: 0.359
      },
      "70": {
        x: 186.928,
        y: 278.065,
        r: 0.346
      },
      "71": {
        x: 186.914,
        y: 278.027,
        r: 0.328,
        a: 0.19
      },
      "72": {
        x: 186.924,
        y: 278.06,
        r: 0.31
      },
      "73": {
        x: 186.886,
        y: 278.065,
        sy: 1.237,
        r: 0.285
      },
      "74": {
        x: 186.876,
        y: 278.068,
        r: 0.259
      },
      "75": {
        x: 186.868,
        y: 278.058,
        r: 0.232,
        a: 0.18
      },
      "76": {
        x: 186.864,
        y: 278.085,
        sx: 1.651,
        r: 0.202
      },
      "77": {
        x: 186.854,
        y: 278.067,
        r: 0.171
      },
      "78": {
        x: 186.851,
        y: 278.101,
        r: 0.136,
        a: 0.17
      },
      "79": {
        x: 186.824,
        y: 278.067,
        r: 0.101
      },
      "80": {
        x: 186.772,
        y: 278.082,
        kx: -0.065,
        ky: 0.062,
        r: 0
      },
      "81": {
        x: 186.749,
        y: 278.091,
        sy: 1.238,
        kx: 0,
        ky: 0,
        r: 0.027,
        a: 0.16
      },
      "82": {
        x: 186.733,
        y: 278.097,
        sx: 1.652,
        r: -0.009
      },
      "83": {
        x: 186.704,
        y: 278.154,
        sx: 1.651,
        sy: 1.237,
        kx: 0.048,
        ky: -0.049,
        r: 0
      },
      "84": {
        x: 186.745,
        y: 278.127,
        kx: 0,
        ky: 0,
        r: -0.088,
        a: 0.15
      },
      "85": {
        x: 186.731,
        y: 278.154,
        r: -0.127,
        a: 0.14
      },
      "86": {
        x: 186.699,
        y: 278.163,
        r: -0.166
      },
      "87": {
        x: 186.68,
        y: 278.202,
        r: -0.206
      },
      "88": {
        x: 186.692,
        y: 278.201,
        sx: 1.65,
        r: -0.241,
        a: 0.13
      },
      "89": {
        x: 186.661,
        y: 278.235,
        r: -0.28
      },
      "90": {
        x: 186.679,
        y: 278.232,
        sy: 1.236,
        r: -0.315
      },
      "91": {
        x: 186.625,
        y: 278.247,
        r: -0.35
      },
      "92": {
        y: 278.28,
        r: -0.381,
        a: 0.12
      },
      "93": {
        x: 186.633,
        y: 278.266,
        r: -0.411
      },
      "94": {
        x: 186.592,
        y: 278.318,
        sx: 1.649,
        r: -0.438,
        a: 0.11
      },
      "95": {
        x: 186.598,
        y: 278.326,
        r: -0.464
      },
      "96": {
        x: 186.589,
        y: 278.317,
        r: -0.486
      },
      "97": {
        x: 186.603,
        y: 278.322,
        r: -0.508
      },
      "98": {
        x: 186.579,
        y: 278.337,
        r: -0.525
      },
      "99": {
        x: 186.589,
        y: 278.35,
        kx: 0.538,
        ky: -0.539,
        r: 0
      },
      "100": {
        x: 186.582,
        y: 278.372,
        kx: 0,
        ky: 0,
        r: -0.551,
        a: 0.1
      },
      "101": {
        x: 186.579,
        y: 278.35,
        r: -0.56
      },
      "102": {
        x: 186.577,
        y: 278.391,
        r: -0.564
      },
      "103": {
        x: 186.5,
        y: 278.25,
        sx: 1.652,
        sy: 1.238,
        r: -0.566
      }
    }).addTimedChild(instance5, 0, 104, {
      "0": {
        x: 142.2,
        y: 297.5,
        sx: 1.652,
        sy: 1.238,
        r: 0.524,
        a: 0.2,
        c: [1, 0, 0.19, 0, 0.53, 0]
      },
      "1": {
        x: 142.202,
        y: 297.502,
        sx: 1.649,
        sy: 1.236,
        r: 0.521
      },
      "2": {
        x: 142.231,
        y: 297.491
      },
      "3": {
        x: 142.373,
        y: 297.468,
        r: 0.517,
        c: [1, 0, 0.19, 0, 0.54, 0]
      },
      "4": {
        x: 142.44,
        y: 297.497,
        r: 0.512
      },
      "5": {
        x: 142.55,
        y: 297.485,
        r: 0.508
      },
      "6": {
        x: 142.682,
        y: 297.468,
        r: 0.503
      },
      "7": {
        x: 142.906,
        y: 297.461,
        r: 0.494
      },
      "8": {
        x: 143.049,
        y: 297.495,
        r: 0.486,
        c: [1, 0, 0.18, 0, 0.55, 0]
      },
      "9": {
        x: 143.307,
        y: 297.464,
        r: 0.477
      },
      "10": {
        x: 143.63,
        y: 297.503,
        r: 0.464,
        c: [1, 0, 0.18, 0, 0.56, 0]
      },
      "11": {
        x: 143.862,
        y: 297.533,
        r: 0.455
      },
      "12": {
        x: 144.184,
        y: 297.553,
        r: 0.442,
        c: [1, 0, 0.18, 0, 0.57, 0]
      },
      "13": {
        x: 144.547,
        y: 297.538,
        sx: 1.65,
        r: 0.428,
        c: [1, 0, 0.17, 0, 0.57, 0]
      },
      "14": {
        x: 144.864,
        y: 297.56,
        r: 0.412,
        c: [1, 0, 0.17, 0, 0.58, 0]
      },
      "15": {
        x: 145.242,
        y: 297.557,
        r: 0.398,
        c: [1, 0, 0.17, 0, 0.59, 0]
      },
      "16": {
        x: 145.639,
        y: 297.555,
        r: 0.381,
        c: [1, 0, 0.16, 0, 0.6, 0]
      },
      "17": {
        x: 146.091,
        y: 297.535,
        r: 0.363,
        c: [1, 0, 0.16, 0, 0.61, 0]
      },
      "18": {
        x: 146.492,
        y: 297.551,
        r: 0.346
      },
      "19": {
        x: 146.93,
        y: 297.591,
        r: 0.328,
        c: [1, 0, 0.15, 0, 0.63, 0]
      },
      "20": {
        x: 147.408,
        y: 297.608,
        r: 0.307
      },
      "21": {
        x: 147.898,
        y: 297.595,
        r: 0.288,
        c: [1, 0, 0.14, 0, 0.64, 0]
      },
      "22": {
        x: 148.389,
        y: 297.581,
        sy: 1.237,
        r: 0.267,
        c: [1, 0, 0.14, 0, 0.65, 0]
      },
      "23": {
        x: 148.91,
        y: 297.615,
        r: 0.245,
        c: [1, 0, 0.14, 0, 0.66, 0]
      },
      "24": {
        x: 149.462,
        y: 297.605,
        r: 0.223,
        c: [1, 0, 0.13, 0, 0.67, 0]
      },
      "25": {
        x: 149.982,
        y: 297.651,
        sx: 1.651,
        r: 0.201,
        c: [1, 0, 0.13, 0, 0.68, 0]
      },
      "26": {
        x: 150.518,
        y: 297.658,
        r: 0.179,
        c: [1, 0, 0.13, 0, 0.69, 0]
      },
      "27": {
        x: 151.107,
        y: 297.699,
        r: 0.154,
        c: [1, 0, 0.12, 0, 0.7, 0]
      },
      "28": {
        x: 151.683,
        y: 297.68,
        r: 0.132,
        c: [1, 0, 0.12, 0, 0.71, 0]
      },
      "29": {
        x: 152.252,
        y: 297.686,
        r: 0.109,
        c: [1, 0, 0.11, 0, 0.73, 0]
      },
      "30": {
        x: 152.796,
        y: 297.738,
        r: 0.084,
        c: [1, 0, 0.11, 0, 0.74, 0]
      },
      "31": {
        x: 153.414,
        y: 297.743,
        r: 0.061,
        c: [1, 0, 0.1, 0, 0.75, 0]
      },
      "32": {
        x: 153.998,
        y: 297.784,
        r: 0.036,
        c: [1, 0, 0.1, 0, 0.76, 0]
      },
      "33": {
        x: 154.598,
        y: 297.771,
        sx: 1.652,
        sy: 1.238,
        r: 0.013,
        c: [1, 0, 0.09, 0, 0.77, 0]
      },
      "34": {
        x: 155.181,
        y: 297.799,
        r: -0.009,
        c: [1, 0, 0.09, 0, 0.78, 0]
      },
      "35": {
        x: 155.807,
        y: 297.78,
        sx: 1.651,
        sy: 1.237,
        r: -0.031,
        c: [1, 0, 0.09, 0, 0.79, 0]
      },
      "36": {
        x: 156.346,
        y: 297.858,
        r: -0.057,
        c: [1, 0, 0.08, 0, 0.8, 0]
      },
      "37": {
        x: 156.905,
        y: 297.871,
        r: -0.079,
        c: [1, 0, 0.07, 0, 0.82, 0]
      },
      "38": {
        x: 157.469,
        y: 297.88,
        r: -0.101,
        c: [1, 0, 0.07, 0, 0.83, 0]
      },
      "39": {
        x: 158.063,
        y: 297.864,
        r: -0.127,
        c: [1, 0, 0.07, 0, 0.84, 0]
      },
      "40": {
        x: 158.593,
        y: 297.901,
        r: -0.149,
        c: [1, 0, 0.06, 0, 0.85, 0]
      },
      "41": {
        x: 159.169,
        y: 297.952,
        r: -0.171,
        c: [1, 0, 0.06, 0, 0.86, 0]
      },
      "42": {
        x: 159.679,
        y: 297.974,
        r: -0.193,
        c: [1, 0, 0.05, 0, 0.87, 0]
      },
      "43": {
        x: 160.227,
        y: 297.971,
        sx: 1.65,
        r: -0.214,
        c: [1, 0, 0.05, 0, 0.88, 0]
      },
      "44": {
        x: 160.72,
        y: 298.005,
        r: -0.236,
        c: [1, 0, 0.05, 0, 0.89, 0]
      },
      "45": {
        x: 161.191,
        y: 297.996,
        r: -0.254,
        c: [1, 0, 0.04, 0, 0.9, 0]
      },
      "46": {
        x: 161.687,
        y: 298.03,
        r: -0.275,
        c: [1, 0, 0.04, 0, 0.91, 0]
      },
      "47": {
        x: 162.104,
        y: 298.051,
        r: -0.293,
        c: [1, 0, 0.04, 0, 0.92, 0]
      },
      "48": {
        x: 162.548,
        y: 298.098,
        sy: 1.236,
        r: -0.311,
        c: [1, 0, 0.03, 0, 0.93, 0]
      },
      "49": {
        x: 162.981,
        y: 298.086,
        r: -0.328
      },
      "50": {
        x: 163.399,
        y: 298.105,
        r: -0.345,
        c: [1, 0, 0.02, 0, 0.94, 0]
      },
      "51": {
        x: 163.805,
        y: 298.125,
        r: -0.359,
        c: [1, 0, 0.02, 0, 0.95, 0]
      },
      "52": {
        x: 164.123,
        y: 298.094,
        r: -0.376,
        c: [1, 0, 0.02, 0, 0.96, 0]
      },
      "53": {
        x: 164.461,
        y: 298.133,
        r: -0.389
      },
      "54": {
        x: 164.824,
        y: 298.131,
        r: -0.402,
        c: [1, 0, 0.01, 0, 0.97, 0]
      },
      "55": {
        x: 165.068,
        y: 298.167,
        r: -0.412
      },
      "56": {
        x: 165.363,
        y: 298.216,
        r: -0.424,
        c: [1, 0, 0.01, 0, 0.98, 0]
      },
      "57": {
        x: 165.613,
        y: 298.204,
        r: -0.433
      },
      "58": {
        x: 165.775,
        y: 298.226,
        sx: 1.649,
        r: -0.442,
        c: [1, 0, 0, 0, 0.99, 0]
      },
      "59": {
        x: 165.999,
        y: 298.184,
        r: -0.45
      },
      "60": {
        x: 166.139,
        y: 298.201,
        r: -0.455
      },
      "61": {
        x: 166.25,
        y: 298.211,
        r: -0.46,
        c: [1, 0, 0, 0, 1, 0]
      },
      "62": {
        x: 166.341,
        y: 298.208,
        r: -0.464
      },
      "63": {
        x: 166.418,
        y: 298.197,
        r: -0.468
      },
      "64": {
        x: 166.488,
        y: 298.21
      },
      "65": {
        x: 166.5,
        y: 298.35,
        sx: 1.652,
        sy: 1.238,
        r: -0.471
      },
      "66": {
        x: 166.56,
        sx: 1.649,
        sy: 1.236,
        r: -0.468
      },
      "67": {
        x: 166.448,
        y: 298.353,
        r: -0.464
      },
      "68": {
        x: 166.199,
        y: 298.32,
        r: -0.455,
        c: [1, 0, 0, 0, 0.99, 0]
      },
      "69": {
        x: 165.9,
        y: 298.322,
        sx: 1.65,
        r: -0.442
      },
      "70": {
        x: 165.577,
        y: 298.292,
        r: -0.429,
        c: [1, 0, 0.01, 0, 0.98, 0]
      },
      "71": {
        x: 165.131,
        y: 298.314,
        r: -0.411,
        c: [1, 0, 0.01, 0, 0.97, 0]
      },
      "72": {
        x: 164.59,
        y: 298.222,
        r: -0.389,
        c: [1, 0, 0.02, 0, 0.96, 0]
      },
      "73": {
        x: 163.983,
        y: 298.217,
        r: -0.364,
        c: [1, 0, 0.02, 0, 0.95, 0]
      },
      "74": {
        x: 163.328,
        y: 298.239,
        r: -0.337,
        c: [1, 0, 0.02, 0, 0.94, 0]
      },
      "75": {
        x: 162.584,
        y: 298.214,
        r: -0.31,
        c: [1, 0, 0.03, 0, 0.93, 0]
      },
      "76": {
        x: 161.889,
        y: 298.13,
        sy: 1.237,
        r: -0.276,
        c: [1, 0, 0.04, 0, 0.91, 0]
      },
      "77": {
        x: 161.03,
        y: 298.107,
        r: -0.245,
        c: [1, 0, 0.04, 0, 0.89, 0]
      },
      "78": {
        x: 160.143,
        y: 298.135,
        sx: 1.651,
        r: -0.21,
        c: [1, 0, 0.05, 0, 0.88, 0]
      },
      "79": {
        x: 159.274,
        y: 298.068,
        r: -0.171,
        c: [1, 0, 0.06, 0, 0.86, 0]
      },
      "80": {
        x: 158.333,
        y: 298.027,
        r: -0.132,
        c: [1, 0, 0.07, 0, 0.84, 0]
      },
      "81": {
        x: 157.36,
        y: 298.029,
        r: -0.093,
        c: [1, 0, 0.07, 0, 0.82, 0]
      },
      "82": {
        x: 156.394,
        y: 298.017,
        r: -0.053,
        c: [1, 0, 0.08, 0, 0.8, 0]
      },
      "83": {
        x: 155.337,
        y: 297.932,
        sx: 1.652,
        sy: 1.238,
        r: -0.014,
        c: [1, 0, 0.09, 0, 0.79, 0]
      },
      "84": {
        x: 154.375,
        y: 297.942,
        sx: 1.651,
        sy: 1.237,
        r: 0.026,
        c: [1, 0, 0.1, 0, 0.77, 0]
      },
      "85": {
        x: 153.303,
        y: 297.895,
        r: 0.066,
        c: [1, 0, 0.11, 0, 0.75, 0]
      },
      "86": {
        x: 152.266,
        y: 297.857,
        r: 0.106,
        c: [1, 0, 0.11, 0, 0.73, 0]
      },
      "87": {
        x: 151.307,
        y: 297.863,
        r: 0.148,
        c: [1, 0, 0.12, 0, 0.71, 0]
      },
      "88": {
        x: 150.295,
        y: 297.83,
        r: 0.188,
        c: [1, 0, 0.13, 0, 0.69, 0]
      },
      "89": {
        x: 149.401,
        y: 297.754,
        sx: 1.65,
        r: 0.224,
        c: [1, 0, 0.13, 0, 0.67, 0]
      },
      "90": {
        x: 148.509,
        y: 297.777,
        r: 0.262,
        c: [1, 0, 0.14, 0, 0.65, 0]
      },
      "91": {
        x: 147.647,
        y: 297.781,
        sy: 1.236,
        r: 0.297,
        c: [1, 0, 0.15, 0, 0.64, 0]
      },
      "92": {
        x: 146.792,
        y: 297.775,
        r: 0.332,
        c: [1, 0, 0.16, 0, 0.62, 0]
      },
      "93": {
        x: 146.087,
        y: 297.694,
        r: 0.363,
        c: [1, 0, 0.16, 0, 0.61, 0]
      },
      "94": {
        x: 145.313,
        y: 297.672,
        r: 0.39,
        c: [1, 0, 0.17, 0, 0.59, 0]
      },
      "95": {
        x: 144.718,
        y: 297.697,
        r: 0.416,
        c: [1, 0, 0.17, 0, 0.58, 0]
      },
      "96": {
        x: 144.133,
        y: 297.696,
        r: 0.442,
        c: [1, 0, 0.18, 0, 0.57, 0]
      },
      "97": {
        x: 143.564,
        y: 297.648,
        sx: 1.649,
        r: 0.463,
        c: [1, 0, 0.18, 0, 0.56, 0]
      },
      "98": {
        x: 143.159,
        y: 297.657,
        r: 0.481,
        c: [1, 0, 0.18, 0, 0.55, 0]
      },
      "99": {
        x: 142.789,
        y: 297.634,
        r: 0.495,
        c: [1, 0, 0.19, 0, 0.54, 0]
      },
      "100": {
        x: 142.492,
        y: 297.628,
        r: 0.507
      },
      "101": {
        x: 142.256,
        y: 297.625,
        r: 0.516
      },
      "102": {
        x: 142.177,
        y: 297.653,
        r: 0.521,
        c: [1, 0, 0.19, 0, 0.53, 0]
      },
      "103": {
        x: 142.2,
        y: 297.5,
        sx: 1.652,
        sy: 1.238,
        r: 0.524
      }
    }).addTimedChild(instance4, 0, 104, {
      "0": {
        x: 399.95,
        y: 278.2,
        sx: 1.652,
        sy: 1.238,
        kx: 0,
        ky: 0,
        r: -0.431,
        a: 0.05,
        c: [0, 0, 1, 0, 1, 0]
      },
      "1": {
        x: 400.068,
        y: 278.297,
        sx: 1.65,
        sy: 1.236,
        r: -0.429
      },
      "2": {
        x: 400.081,
        y: 278.29,
        r: -0.425,
        c: [0, 0, 0.99, 0, 1, 0]
      },
      "3": {
        x: 400.05,
        r: -0.42,
        c: [0, 0, 0.98, 0, 1, 0]
      },
      "4": {
        x: 400.052,
        y: 278.277,
        r: -0.411
      },
      "5": {
        x: 400.054,
        y: 278.266,
        r: -0.398,
        c: [0, 0, 0.96, 0, 1, 0]
      },
      "6": {
        x: 400.097,
        y: 278.253,
        r: -0.385,
        a: 0.06,
        c: [0, 0, 0.95, 0, 1, 0]
      },
      "7": {
        x: 400.018,
        y: 278.246,
        r: -0.368,
        c: [0, 0, 0.93, 0, 1, 0]
      },
      "8": {
        x: 400.054,
        y: 278.23,
        r: -0.35,
        a: 0.07,
        c: [0, 0, 0.91, 0, 1, 0]
      },
      "9": {
        x: 400.069,
        y: 278.259,
        r: -0.328,
        c: [0, 0, 0.88, 0, 1, 0]
      },
      "10": {
        x: 400.045,
        y: 278.233,
        r: -0.306,
        c: [0, 0, 0.86, 0, 1, 0]
      },
      "11": {
        x: 400.06,
        y: 278.223,
        sy: 1.237,
        r: -0.281,
        a: 0.08,
        c: [0, 0, 0.82, 0, 1, 0]
      },
      "12": {
        x: 400.095,
        y: 278.227,
        r: -0.254,
        c: [0, 0, 0.79, 0, 1, 0]
      },
      "13": {
        x: 400.054,
        y: 278.194,
        r: -0.228,
        a: 0.09,
        c: [0, 0, 0.76, 0, 1, 0]
      },
      "14": {
        x: 400.026,
        y: 278.182,
        sx: 1.651,
        r: -0.198,
        c: [0, 0, 0.73, 0, 1, 0]
      },
      "15": {
        x: 400.056,
        y: 278.2,
        r: -0.17,
        a: 0.1,
        c: [0, 0, 0.69, 0, 1, 0]
      },
      "16": {
        x: 400.067,
        y: 278.164,
        r: -0.136,
        c: [0, 0, 0.66, 0, 1, 0]
      },
      "17": {
        x: 400.027,
        y: 278.145,
        r: -0.105,
        a: 0.11,
        c: [0, 0, 0.62, 0, 1, 0]
      },
      "18": {
        x: 400.063,
        y: 278.142,
        r: -0.074,
        c: [0, 0, 0.58, 0, 1, 0]
      },
      "19": {
        x: 400.094,
        y: 278.154,
        r: -0.04,
        a: 0.12,
        c: [0, 0, 0.54, 0, 1, 0]
      },
      "20": {
        y: 278.191,
        sx: 1.652,
        sy: 1.238,
        r: -0.005,
        a: 0.13,
        c: [0, 0, 0.5, 0, 1, 0]
      },
      "21": {
        x: 400.038,
        y: 278.155,
        sx: 1.651,
        r: 0.022,
        c: [0, 0, 0.46, 0, 1, 0]
      },
      "22": {
        x: 400.076,
        y: 278.133,
        sy: 1.237,
        r: 0.057,
        a: 0.14,
        c: [0, 0, 0.42, 0, 1, 0]
      },
      "23": {
        x: 400.095,
        y: 278.141,
        r: 0.088,
        c: [0, 0, 0.38, 0, 1, 0]
      },
      "24": {
        x: 400.034,
        y: 278.152,
        r: 0.119,
        a: 0.15,
        c: [0, 0, 0.34, 0, 1, 0]
      },
      "25": {
        x: 400.088,
        y: 278.132,
        r: 0.153,
        c: [0, 0, 0.31, 0, 1, 0]
      },
      "26": {
        x: 400.102,
        y: 278.12,
        r: 0.183,
        a: 0.16,
        c: [0, 0, 0.27, 0, 1, 0]
      },
      "27": {
        x: 400.109,
        y: 278.133,
        sx: 1.65,
        r: 0.21,
        c: [0, 0, 0.24, 0, 1, 0]
      },
      "28": {
        x: 400.074,
        y: 278.116,
        r: 0.237,
        a: 0.17,
        c: [0, 0, 0.21, 0, 1, 0]
      },
      "29": {
        x: 400.067,
        y: 278.125,
        r: 0.263,
        c: [0, 0, 0.18, 0, 1, 0]
      },
      "30": {
        x: 400.117,
        y: 278.117,
        r: 0.289,
        a: 0.18,
        c: [0, 0, 0.14, 0, 1, 0]
      },
      "31": {
        x: 400.119,
        y: 278.102,
        sy: 1.236,
        r: 0.311,
        c: [0, 0, 0.12, 0, 1, 0]
      },
      "32": {
        x: 400.112,
        y: 278.109,
        r: 0.332,
        c: [0, 0, 0.09, 0, 1, 0]
      },
      "33": {
        x: 400.131,
        y: 278.118,
        r: 0.35,
        a: 0.19,
        c: [0, 0, 0.07, 0, 1, 0]
      },
      "34": {
        x: 400.096,
        y: 278.094,
        r: 0.367,
        c: [0, 0, 0.05, 0, 1, 0]
      },
      "35": {
        x: 400.089,
        y: 278.089,
        r: 0.381,
        a: 0.2,
        c: [0, 0, 0.04, 0, 1, 0]
      },
      "36": {
        x: 400.101,
        y: 278.12,
        r: 0.393,
        c: [0, 0, 0.02, 0, 1, 0]
      },
      "37": {
        x: 400.11,
        y: 278.081,
        r: 0.402
      },
      "38": {
        x: 400.089,
        y: 278.083,
        r: 0.407,
        c: [0, 0, 0.01, 0, 1, 0]
      },
      "39": {
        x: 400.135,
        y: 278.079,
        r: 0.411,
        c: [0, 0, 0, 0, 1, 0]
      },
      "40": {
        x: 400.1,
        y: 277.95,
        sx: 1.652,
        sy: 1.238,
        r: 0.414
      },
      "41": {
        x: 400.112,
        y: 277.985,
        sx: 1.65,
        sy: 1.236,
        r: 0.412
      },
      "42": {
        x: 400.068,
        y: 278.022,
        r: 0.411
      },
      "43": {
        x: 400.106,
        y: 277.997,
        r: 0.407
      },
      "44": {
        x: 400.06,
        y: 278.016,
        r: 0.403,
        c: [0, 0, 0.01, 0, 1, 0]
      },
      "45": {
        x: 400.08,
        y: 278.026,
        r: 0.399,
        c: [0, 0, 0.02, 0, 1, 0]
      },
      "46": {
        x: 400.056,
        y: 278.019,
        r: 0.394
      },
      "47": {
        x: 400.098,
        y: 278.009,
        r: 0.389,
        c: [0, 0, 0.03, 0, 1, 0]
      },
      "48": {
        x: 400.064,
        y: 278.003,
        r: 0.38,
        c: [0, 0, 0.04, 0, 1, 0]
      },
      "49": {
        x: 400.058,
        y: 278.036,
        r: 0.372,
        a: 0.19,
        c: [0, 0, 0.05, 0, 1, 0]
      },
      "50": {
        x: 400.039,
        y: 278.038,
        r: 0.363,
        c: [0, 0, 0.06, 0, 1, 0]
      },
      "51": {
        x: 400.116,
        y: 278.016,
        r: 0.35,
        c: [0, 0, 0.07, 0, 1, 0]
      },
      "52": {
        x: 400.079,
        y: 278.031,
        r: 0.341,
        c: [0, 0, 0.09, 0, 1, 0]
      },
      "53": {
        x: 400.061,
        y: 278.009,
        r: 0.328,
        a: 0.18,
        c: [0, 0, 0.1, 0, 1, 0]
      },
      "54": {
        x: 400.065,
        y: 278.002,
        r: 0.315,
        c: [0, 0, 0.12, 0, 1, 0]
      },
      "55": {
        x: 400.047,
        y: 278.021,
        r: 0.301,
        c: [0, 0, 0.13, 0, 1, 0]
      },
      "56": {
        x: 400.041,
        y: 278.007,
        sy: 1.237,
        r: 0.285,
        c: [0, 0, 0.15, 0, 1, 0]
      },
      "57": {
        x: 400.029,
        y: 278.021,
        r: 0.271,
        c: [0, 0, 0.17, 0, 1, 0]
      },
      "58": {
        x: 400.028,
        y: 278.024,
        r: 0.254,
        a: 0.17,
        c: [0, 0, 0.19, 0, 1, 0]
      },
      "59": {
        x: 400.021,
        y: 278.056,
        r: 0.236,
        c: [0, 0, 0.21, 0, 1, 0]
      },
      "60": {
        x: 400.077,
        y: 278.047,
        r: 0.219,
        a: 0.16,
        c: [0, 0, 0.23, 0, 1, 0]
      },
      "61": {
        x: 400.053,
        y: 278.029,
        sx: 1.651,
        r: 0.201,
        c: [0, 0, 0.25, 0, 1, 0]
      },
      "62": {
        x: 400.03,
        y: 278.031,
        r: 0.184,
        c: [0, 0, 0.27, 0, 1, 0]
      },
      "63": {
        x: 400.045,
        y: 278.041,
        kx: -0.163,
        ky: 0.162,
        r: 0,
        c: [0, 0, 0.29, 0, 1, 0]
      },
      "64": {
        x: 400.04,
        y: 278.067,
        kx: 0,
        ky: 0,
        r: 0.145,
        a: 0.15,
        c: [0, 0, 0.32, 0, 1, 0]
      },
      "65": {
        x: 400.001,
        y: 278.042,
        r: 0.123,
        c: [0, 0, 0.34, 0, 1, 0]
      },
      "66": {
        x: 400.055,
        y: 278.085,
        r: 0.105,
        a: 0.14,
        c: [0, 0, 0.36, 0, 1, 0]
      },
      "67": {
        x: 400.046,
        y: 278.058,
        r: 0.084,
        c: [0, 0, 0.39, 0, 1, 0]
      },
      "68": {
        x: 399.983,
        y: 278.093,
        r: 0.062,
        c: [0, 0, 0.41, 0, 1, 0]
      },
      "69": {
        x: 399.997,
        y: 278.104,
        r: 0.044,
        a: 0.13,
        c: [0, 0, 0.44, 0, 1, 0]
      },
      "70": {
        x: 399.981,
        y: 278.102,
        sy: 1.238,
        r: 0.022,
        c: [0, 0, 0.46, 0, 1, 0]
      },
      "71": {
        x: 400,
        y: 278.094,
        sx: 1.652,
        r: 0,
        c: [0, 0, 0.49, 0, 1, 0]
      },
      "72": {
        x: 400.01,
        y: 278.051,
        sx: 1.651,
        r: -0.018,
        c: [0, 0, 0.51, 0, 1, 0]
      },
      "73": {
        x: 400.008,
        sy: 1.237,
        r: -0.04,
        a: 0.12,
        c: [0, 0, 0.54, 0, 1, 0]
      },
      "74": {
        x: 399.964,
        y: 278.074,
        r: -0.061,
        c: [0, 0, 0.56, 0, 1, 0]
      },
      "75": {
        x: 399.985,
        y: 278.063,
        r: -0.079,
        a: 0.11,
        c: [0, 0, 0.59, 0, 1, 0]
      },
      "76": {
        x: 399.97,
        y: 278.076,
        r: -0.101,
        c: [0, 0, 0.61, 0, 1, 0]
      },
      "77": {
        x: 399.943,
        y: 278.097,
        r: -0.122,
        c: [0, 0, 0.64, 0, 1, 0]
      },
      "78": {
        x: 400.004,
        y: 278.077,
        r: -0.141,
        a: 0.1,
        c: [0, 0, 0.66, 0, 1, 0]
      },
      "79": {
        x: 400.009,
        y: 278.098,
        r: -0.162,
        c: [0, 0, 0.68, 0, 1, 0]
      },
      "80": {
        x: 399.974,
        y: 278.1,
        r: -0.18,
        a: 0.09,
        c: [0, 0, 0.71, 0, 1, 0]
      },
      "81": {
        x: 399.967,
        y: 278.066,
        sx: 1.65,
        r: -0.201,
        c: [0, 0, 0.73, 0, 1, 0]
      },
      "82": {
        x: 399.951,
        y: 278.077,
        r: -0.219,
        c: [0, 0, 0.75, 0, 1, 0]
      },
      "83": {
        x: 399.926,
        y: 278.105,
        r: -0.236,
        c: [0, 0, 0.77, 0, 1, 0]
      },
      "84": {
        x: 400.008,
        y: 278.116,
        r: -0.254,
        a: 0.08,
        c: [0, 0, 0.79, 0, 1, 0]
      },
      "85": {
        x: 400.002,
        y: 278.108,
        r: -0.271,
        c: [0, 0, 0.81, 0, 1, 0]
      },
      "86": {
        x: 399.956,
        y: 278.141,
        r: -0.288,
        a: 0.07,
        c: [0, 0, 0.83, 0, 1, 0]
      },
      "87": {
        x: 399.963,
        y: 278.111,
        sy: 1.236,
        r: -0.302,
        c: [0, 0, 0.85, 0, 1, 0]
      },
      "88": {
        x: 399.982,
        y: 278.148,
        r: -0.319,
        c: [0, 0, 0.87, 0, 1, 0]
      },
      "89": {
        x: 399.951,
        y: 278.16,
        r: -0.332,
        c: [0, 0, 0.88, 0, 1, 0]
      },
      "90": {
        x: 399.966,
        y: 278.14,
        r: -0.345,
        c: [0, 0, 0.9, 0, 1, 0]
      },
      "91": {
        x: 399.949,
        y: 278.135,
        r: -0.358,
        a: 0.06,
        c: [0, 0, 0.91, 0, 1, 0]
      },
      "92": {
        x: 399.917,
        y: 278.174,
        r: -0.368,
        c: [0, 0, 0.93, 0, 1, 0]
      },
      "93": {
        x: 400.009,
        y: 278.15,
        r: -0.38,
        c: [0, 0, 0.94, 0, 1, 0]
      },
      "94": {
        x: 399.973,
        y: 278.163,
        r: -0.389,
        c: [0, 0, 0.95, 0, 1, 0]
      },
      "95": {
        x: 399.967,
        y: 278.156,
        r: -0.398,
        a: 0.05,
        c: [0, 0, 0.96, 0, 1, 0]
      },
      "96": {
        x: 399.996,
        y: 278.16,
        r: -0.406,
        c: [0, 0, 0.97, 0, 1, 0]
      },
      "97": {
        x: 399.974,
        y: 278.207,
        r: -0.411,
        c: [0, 0, 0.98, 0, 1, 0]
      },
      "98": {
        x: 399.97,
        y: 278.175,
        r: -0.416
      },
      "99": {
        x: 399.972,
        y: 278.212,
        r: -0.42,
        c: [0, 0, 0.99, 0, 1, 0]
      },
      "100": {
        x: 399.961,
        y: 278.165,
        r: -0.425,
        c: [0, 0, 1, 0, 1, 0]
      },
      "101": {
        x: 399.965,
        y: 278.207,
        r: -0.429
      },
      "102": {
        y: 278.212
      },
      "103": {
        x: 399.95,
        y: 278.2,
        sx: 1.652,
        sy: 1.238,
        r: -0.431
      }
    }).addTimedChild(instance3, 0, 104, {
      "0": {
        x: 430.1,
        y: 287.95,
        sx: 1.652,
        sy: 1.238,
        kx: 0,
        ky: 0,
        r: 0.414,
        a: 0.2,
        c: [0, 0, 0, 0, 1, 0]
      },
      "1": {
        x: 430.153,
        y: 288.011,
        sx: 1.65,
        sy: 1.236,
        r: 0.411
      },
      "2": {
        x: 430.176,
        y: 288.032,
        r: 0.407,
        c: [0, 0, 0.01, 0, 1, 0]
      },
      "3": {
        x: 430.163,
        y: 288.012,
        r: 0.402,
        c: [0, 0, 0.02, 0, 1, 0]
      },
      "4": {
        x: 430.145,
        y: 288.044,
        r: 0.393
      },
      "5": {
        x: 430.17,
        y: 288.035,
        r: 0.381,
        c: [0, 0, 0.04, 0, 1, 0]
      },
      "6": {
        x: 430.135,
        y: 288.024,
        r: 0.367,
        a: 0.19,
        c: [0, 0, 0.05, 0, 1, 0]
      },
      "7": {
        x: 430.175,
        y: 288.041,
        r: 0.35,
        c: [0, 0, 0.07, 0, 1, 0]
      },
      "8": {
        x: 430.186,
        y: 288.028,
        r: 0.332,
        a: 0.18,
        c: [0, 0, 0.09, 0, 1, 0]
      },
      "9": {
        x: 430.171,
        y: 288.006,
        r: 0.311,
        c: [0, 0, 0.12, 0, 1, 0]
      },
      "10": {
        x: 430.122,
        y: 288.042,
        sy: 1.237,
        r: 0.289,
        c: [0, 0, 0.14, 0, 1, 0]
      },
      "11": {
        x: 430.126,
        y: 288.017,
        r: 0.263,
        a: 0.17,
        c: [0, 0, 0.18, 0, 1, 0]
      },
      "12": {
        x: 430.099,
        y: 288.044,
        r: 0.237,
        c: [0, 0, 0.21, 0, 1, 0]
      },
      "13": {
        x: 430.136,
        y: 288.054,
        r: 0.21,
        a: 0.16,
        c: [0, 0, 0.24, 0, 1, 0]
      },
      "14": {
        x: 430.141,
        y: 288.049,
        sx: 1.651,
        r: 0.183,
        c: [0, 0, 0.27, 0, 1, 0]
      },
      "15": {
        x: 430.102,
        y: 288.028,
        r: 0.153,
        a: 0.15,
        c: [0, 0, 0.31, 0, 1, 0]
      },
      "16": {
        y: 288.06,
        r: 0.119,
        c: [0, 0, 0.34, 0, 1, 0]
      },
      "17": {
        x: 430.108,
        y: 288.046,
        r: 0.088,
        a: 0.14,
        c: [0, 0, 0.38, 0, 1, 0]
      },
      "18": {
        x: 430.115,
        y: 288.08,
        r: 0.057,
        c: [0, 0, 0.42, 0, 1, 0]
      },
      "19": {
        x: 430.075,
        y: 288.086,
        sy: 1.238,
        r: 0.023,
        a: 0.13,
        c: [0, 0, 0.46, 0, 1, 0]
      },
      "20": {
        x: 430.112,
        y: 288.08,
        sx: 1.652,
        r: -0.005,
        c: [0, 0, 0.5, 0, 1, 0]
      },
      "21": {
        x: 430.075,
        y: 288.034,
        sx: 1.651,
        sy: 1.237,
        r: -0.04,
        a: 0.12,
        c: [0, 0, 0.54, 0, 1, 0]
      },
      "22": {
        x: 430.082,
        y: 288.037,
        r: -0.074,
        a: 0.11,
        c: [0, 0, 0.58, 0, 1, 0]
      },
      "23": {
        x: 430.053,
        y: 288.077,
        r: -0.105,
        c: [0, 0, 0.62, 0, 1, 0]
      },
      "24": {
        x: 430.086,
        y: 288.049,
        r: -0.136,
        a: 0.1,
        c: [0, 0, 0.66, 0, 1, 0]
      },
      "25": {
        x: 430.075,
        y: 288.058,
        r: -0.17,
        c: [0, 0, 0.69, 0, 1, 0]
      },
      "26": {
        x: 430.071,
        y: 288.043,
        r: -0.198,
        a: 0.09,
        c: [0, 0, 0.73, 0, 1, 0]
      },
      "27": {
        x: 430.053,
        y: 288.037,
        sx: 1.65,
        r: -0.228,
        c: [0, 0, 0.76, 0, 1, 0]
      },
      "28": {
        x: 430.064,
        y: 288.075,
        r: -0.254,
        a: 0.08,
        c: [0, 0, 0.79, 0, 1, 0]
      },
      "29": {
        x: 430.044,
        y: 288.09,
        r: -0.28,
        c: [0, 0, 0.82, 0, 1, 0]
      },
      "30": {
        x: 430.038,
        y: 288.109,
        sy: 1.236,
        r: -0.306,
        a: 0.07,
        c: [0, 0, 0.86, 0, 1, 0]
      },
      "31": {
        x: 430.049,
        y: 288.075,
        r: -0.328,
        c: [0, 0, 0.88, 0, 1, 0]
      },
      "32": {
        x: 430.015,
        y: 288.092,
        r: -0.35,
        c: [0, 0, 0.91, 0, 1, 0]
      },
      "33": {
        x: 430.027,
        y: 288.13,
        r: -0.368,
        a: 0.06,
        c: [0, 0, 0.93, 0, 1, 0]
      },
      "34": {
        x: 430.036,
        r: -0.385,
        c: [0, 0, 0.95, 0, 1, 0]
      },
      "35": {
        x: 430.051,
        y: 288.15,
        r: -0.398,
        a: 0.05,
        c: [0, 0, 0.96, 0, 1, 0]
      },
      "36": {
        x: 430.05,
        y: 288.153,
        r: -0.411,
        c: [0, 0, 0.98, 0, 1, 0]
      },
      "37": {
        x: 430.057,
        y: 288.124,
        r: -0.42
      },
      "38": {
        x: 430.029,
        y: 288.118,
        r: -0.425,
        c: [0, 0, 0.99, 0, 1, 0]
      },
      "39": {
        x: 430.031,
        y: 288.14,
        r: -0.429,
        c: [0, 0, 1, 0, 1, 0]
      },
      "40": {
        x: 429.95,
        y: 288.2,
        sx: 1.652,
        sy: 1.238,
        r: -0.431
      },
      "41": {
        x: 430.015,
        y: 288.222,
        sx: 1.65,
        sy: 1.236,
        r: -0.429
      },
      "42": {
        x: 429.996,
        y: 288.249
      },
      "43": {
        x: 430.01,
        y: 288.23,
        r: -0.425
      },
      "44": {
        x: 429.987,
        y: 288.219,
        kx: 0.42,
        ky: -0.421,
        r: 0,
        c: [0, 0, 0.99, 0, 1, 0]
      },
      "45": {
        x: 429.983,
        y: 288.228,
        kx: 0,
        ky: 0,
        r: -0.416,
        c: [0, 0, 0.98, 0, 1, 0]
      },
      "46": {
        x: 429.996,
        y: 288.227,
        r: -0.411
      },
      "47": {
        x: 430.028,
        y: 288.233,
        r: -0.406,
        c: [0, 0, 0.97, 0, 1, 0]
      },
      "48": {
        x: 430.032,
        y: 288.214,
        r: -0.398,
        c: [0, 0, 0.96, 0, 1, 0]
      },
      "49": {
        x: 430.042,
        y: 288.218,
        r: -0.389,
        a: 0.06,
        c: [0, 0, 0.95, 0, 1, 0]
      },
      "50": {
        x: 430.038,
        y: 288.198,
        r: -0.38,
        c: [0, 0, 0.94, 0, 1, 0]
      },
      "51": {
        x: 429.961,
        y: 288.204,
        r: -0.368,
        c: [0, 0, 0.93, 0, 1, 0]
      },
      "52": {
        x: 429.976,
        y: 288.215,
        r: -0.358,
        c: [0, 0, 0.91, 0, 1, 0]
      },
      "53": {
        x: 429.999,
        y: 288.214,
        r: -0.345,
        a: 0.07,
        c: [0, 0, 0.9, 0, 1, 0]
      },
      "54": {
        x: 429.973,
        y: 288.186,
        r: -0.332,
        c: [0, 0, 0.88, 0, 1, 0]
      },
      "55": {
        x: 430.011,
        y: 288.185,
        r: -0.319,
        c: [0, 0, 0.87, 0, 1, 0]
      },
      "56": {
        x: 430.01,
        y: 288.184,
        r: -0.302,
        c: [0, 0, 0.85, 0, 1, 0]
      },
      "57": {
        x: 430.016,
        y: 288.143,
        sy: 1.237,
        r: -0.288,
        c: [0, 0, 0.83, 0, 1, 0]
      },
      "58": {
        x: 430.035,
        y: 288.147,
        r: -0.271,
        a: 0.08,
        c: [0, 0, 0.81, 0, 1, 0]
      },
      "59": {
        y: 288.16,
        r: -0.254,
        c: [0, 0, 0.79, 0, 1, 0]
      },
      "60": {
        x: 429.973,
        y: 288.121,
        r: -0.236,
        a: 0.09,
        c: [0, 0, 0.77, 0, 1, 0]
      },
      "61": {
        x: 429.995,
        y: 288.123,
        r: -0.219,
        c: [0, 0, 0.75, 0, 1, 0]
      },
      "62": {
        x: 430,
        y: 288.107,
        sx: 1.651,
        r: -0.201,
        c: [0, 0, 0.73, 0, 1, 0]
      },
      "63": {
        x: 429.997,
        y: 288.102,
        r: -0.18,
        c: [0, 0, 0.71, 0, 1, 0]
      },
      "64": {
        x: 430.024,
        y: 288.092,
        r: -0.162,
        a: 0.1,
        c: [0, 0, 0.68, 0, 1, 0]
      },
      "65": {
        x: 430.058,
        y: 288.086,
        r: -0.141,
        c: [0, 0, 0.66, 0, 1, 0]
      },
      "66": {
        x: 429.975,
        y: 288.115,
        r: -0.122,
        a: 0.11,
        c: [0, 0, 0.64, 0, 1, 0]
      },
      "67": {
        x: 430.021,
        y: 288.06,
        r: -0.101,
        c: [0, 0, 0.61, 0, 1, 0]
      },
      "68": {
        x: 429.998,
        y: 288.084,
        r: -0.079,
        c: [0, 0, 0.59, 0, 1, 0]
      },
      "69": {
        x: 430.05,
        y: 288.061,
        r: -0.061,
        a: 0.12,
        c: [0, 0, 0.56, 0, 1, 0]
      },
      "70": {
        x: 430.033,
        y: 288.055,
        r: -0.04,
        c: [0, 0, 0.54, 0, 1, 0]
      },
      "71": {
        x: 430.069,
        y: 288.039,
        sy: 1.238,
        r: -0.018,
        a: 0.13,
        c: [0, 0, 0.51, 0, 1, 0]
      },
      "72": {
        x: 430.026,
        y: 288.088,
        sx: 1.652,
        r: 0,
        c: [0, 0, 0.49, 0, 1, 0]
      },
      "73": {
        x: 430.043,
        y: 288.099,
        sx: 1.651,
        r: 0.022,
        c: [0, 0, 0.46, 0, 1, 0]
      },
      "74": {
        x: 430.048,
        y: 288.085,
        sy: 1.237,
        r: 0.044,
        c: [0, 0, 0.44, 0, 1, 0]
      },
      "75": {
        x: 430.043,
        y: 288.064,
        r: 0.062,
        a: 0.14,
        c: [0, 0, 0.41, 0, 1, 0]
      },
      "76": {
        x: 430.077,
        y: 288.091,
        r: 0.084,
        c: [0, 0, 0.39, 0, 1, 0]
      },
      "77": {
        x: 430.07,
        y: 288.089,
        r: 0.105,
        c: [0, 0, 0.36, 0, 1, 0]
      },
      "78": {
        x: 430.05,
        y: 288.065,
        r: 0.123,
        a: 0.15,
        c: [0, 0, 0.34, 0, 1, 0]
      },
      "79": {
        x: 430.034,
        y: 288.08,
        r: 0.144,
        c: [0, 0, 0.32, 0, 1, 0]
      },
      "80": {
        x: 430.046,
        y: 288.031,
        r: 0.162,
        a: 0.16,
        c: [0, 0, 0.29, 0, 1, 0]
      },
      "81": {
        x: 430.057,
        y: 288.066,
        r: 0.184,
        c: [0, 0, 0.27, 0, 1, 0]
      },
      "82": {
        x: 430.106,
        y: 288.041,
        r: 0.201,
        c: [0, 0, 0.25, 0, 1, 0]
      },
      "83": {
        x: 430.1,
        y: 288.042,
        sx: 1.65,
        r: 0.219,
        c: [0, 0, 0.23, 0, 1, 0]
      },
      "84": {
        x: 430.076,
        y: 288.018,
        r: 0.236,
        a: 0.17,
        c: [0, 0, 0.21, 0, 1, 0]
      },
      "85": {
        x: 430.065,
        y: 288.023,
        r: 0.254,
        c: [0, 0, 0.19, 0, 1, 0]
      },
      "86": {
        x: 430.094,
        y: 288.058,
        r: 0.271,
        a: 0.18,
        c: [0, 0, 0.17, 0, 1, 0]
      },
      "87": {
        x: 430.064,
        y: 288.037,
        r: 0.285,
        c: [0, 0, 0.15, 0, 1, 0]
      },
      "88": {
        x: 430.108,
        y: 288.009,
        sy: 1.236,
        r: 0.301,
        c: [0, 0, 0.13, 0, 1, 0]
      },
      "89": {
        x: 430.105,
        y: 288.033,
        r: 0.315,
        c: [0, 0, 0.12, 0, 1, 0]
      },
      "90": {
        x: 430.088,
        y: 288.006,
        r: 0.328,
        c: [0, 0, 0.1, 0, 1, 0]
      },
      "91": {
        x: 430.111,
        y: 288.003,
        r: 0.341,
        a: 0.19,
        c: [0, 0, 0.09, 0, 1, 0]
      },
      "92": {
        x: 430.14,
        y: 288.028,
        r: 0.35,
        c: [0, 0, 0.07, 0, 1, 0]
      },
      "93": {
        x: 430.1,
        y: 288.046,
        r: 0.363,
        c: [0, 0, 0.06, 0, 1, 0]
      },
      "94": {
        x: 430.078,
        y: 288.028,
        r: 0.372,
        c: [0, 0, 0.05, 0, 1, 0]
      },
      "95": {
        x: 430.086,
        y: 288.048,
        r: 0.38,
        a: 0.2,
        c: [0, 0, 0.04, 0, 1, 0]
      },
      "96": {
        x: 430.095,
        y: 288.049,
        r: 0.389,
        c: [0, 0, 0.03, 0, 1, 0]
      },
      "97": {
        x: 430.109,
        y: 288.042,
        r: 0.394,
        c: [0, 0, 0.02, 0, 1, 0]
      },
      "98": {
        x: 430.112,
        y: 288.008,
        r: 0.399
      },
      "99": {
        x: 430.131,
        y: 288.04,
        r: 0.403,
        c: [0, 0, 0.01, 0, 1, 0]
      },
      "100": {
        x: 430.133,
        y: 288,
        r: 0.407,
        c: [0, 0, 0, 0, 1, 0]
      },
      "101": {
        x: 430.111,
        y: 288.027,
        r: 0.411
      },
      "102": {
        y: 288.012,
        r: 0.412
      },
      "103": {
        x: 430.1,
        y: 287.95,
        sx: 1.652,
        sy: 1.238,
        r: 0.414
      }
    }).addTimedChild(instance2, 0, 104, {
      "0": {
        x: 620,
        y: 278.1,
        sx: 1.652,
        sy: 1.238,
        r: -0.262,
        a: 0.05,
        c: [1, 0, 1, 0, 0, 0]
      },
      "1": {
        x: 620.056,
        y: 278.075,
        sx: 1.65,
        sy: 1.237,
        r: -0.259
      },
      "2": {
        x: 620.058,
        y: 278.087,
        r: -0.258
      },
      "3": {
        x: 620.041,
        y: 278.093,
        c: [0.99, 0, 1, 0, 0, 0]
      },
      "4": {
        x: 620.058,
        y: 278.119,
        r: -0.254
      },
      "5": {
        x: 620.033,
        y: 278.118,
        r: -0.249,
        c: [0.98, 0, 0.99, 0, 0, 0]
      },
      "6": {
        x: 620.049,
        y: 278.102,
        r: -0.245,
        c: [0.97, 0, 0.99, 0, 0.01, 0]
      },
      "7": {
        x: 620.031,
        y: 278.076,
        r: -0.237,
        a: 0.06,
        c: [0.96, 0, 0.99, 0, 0.01, 0]
      },
      "8": {
        x: 620.03,
        y: 278.071,
        r: -0.232,
        c: [0.95, 0, 0.98, 0, 0.01, 0]
      },
      "9": {
        x: 620.036,
        y: 278.062,
        r: -0.223,
        c: [0.94, 0, 0.98, 0, 0.02, 0]
      },
      "10": {
        x: 620.021,
        y: 278.1,
        r: -0.215,
        c: [0.92, 0, 0.97, 0, 0.02, 0]
      },
      "11": {
        x: 620.012,
        y: 278.095,
        r: -0.206,
        a: 0.07,
        c: [0.91, 0, 0.97, 0, 0.02, 0]
      },
      "12": {
        x: 619.991,
        y: 278.067,
        sx: 1.651,
        r: -0.197,
        c: [0.89, 0, 0.96, 0, 0.02, 0]
      },
      "13": {
        x: 620.026,
        y: 278.069,
        r: -0.188,
        c: [0.88, 0, 0.96, 0, 0.03, 0]
      },
      "14": {
        x: 620.019,
        y: 278.038,
        r: -0.175,
        c: [0.86, 0, 0.95, 0, 0.03, 0]
      },
      "15": {
        x: 620.034,
        y: 278.055,
        r: -0.162,
        a: 0.08,
        c: [0.83, 0, 0.95, 0, 0.04, 0]
      },
      "16": {
        x: 620.042,
        y: 278.051,
        r: -0.15,
        c: [0.81, 0, 0.94, 0, 0.04, 0]
      },
      "17": {
        x: 620.062,
        y: 278.049,
        r: -0.14,
        a: 0.09,
        c: [0.79, 0, 0.93, 0, 0.05, 0]
      },
      "18": {
        x: 620.03,
        y: 278.071,
        r: -0.123,
        c: [0.77, 0, 0.92, 0, 0.05, 0]
      },
      "19": {
        x: 620.012,
        y: 278.104,
        r: -0.11,
        c: [0.74, 0, 0.91, 0, 0.06, 0]
      },
      "20": {
        x: 620.001,
        y: 278.06,
        r: -0.097,
        a: 0.1,
        c: [0.72, 0, 0.91, 0, 0.06, 0]
      },
      "21": {
        x: 620.009,
        y: 278.073,
        r: -0.083,
        c: [0.7, 0, 0.9, 0, 0.07, 0]
      },
      "22": {
        x: 620.066,
        y: 278.046,
        r: -0.066,
        a: 0.11,
        c: [0.67, 0, 0.89, 0, 0.07, 0]
      },
      "23": {
        x: 620.042,
        y: 278.068,
        r: -0.053,
        c: [0.64, 0, 0.88, 0, 0.08, 0]
      },
      "24": {
        x: 620.028,
        y: 278.066,
        r: -0.036,
        c: [0.62, 0, 0.87, 0, 0.09, 0]
      },
      "25": {
        x: 619.993,
        y: 278.06,
        sy: 1.238,
        r: -0.022,
        a: 0.12,
        c: [0.59, 0, 0.86, 0, 0.09, 0]
      },
      "26": {
        x: 620.024,
        y: 278.067,
        sx: 1.652,
        r: -0.005,
        c: [0.56, 0, 0.86, 0, 0.1, 0]
      },
      "27": {
        x: 620.044,
        y: 278.05,
        r: 0.005,
        a: 0.13,
        c: [0.54, 0, 0.84, 0, 0.1, 0]
      },
      "28": {
        x: 620.013,
        y: 278.024,
        r: 0.022,
        c: [0.51, 0, 0.84, 0, 0.11, 0]
      },
      "29": {
        x: 620.063,
        y: 278.033,
        sx: 1.651,
        r: 0.036,
        a: 0.14,
        c: [0.48, 0, 0.83, 0, 0.11, 0]
      },
      "30": {
        x: 619.997,
        y: 278.029,
        sy: 1.237,
        r: 0.053,
        c: [0.46, 0, 0.82, 0, 0.12, 0]
      },
      "31": {
        x: 620.034,
        y: 278.009,
        r: 0.066,
        c: [0.43, 0, 0.81, 0, 0.13, 0]
      },
      "32": {
        x: 619.993,
        y: 278.026,
        r: 0.083,
        a: 0.15,
        c: [0.41, 0, 0.8, 0, 0.13, 0]
      },
      "33": {
        x: 620.039,
        y: 278.052,
        r: 0.097,
        c: [0.38, 0, 0.79, 0, 0.14, 0]
      },
      "34": {
        x: 620.028,
        y: 277.999,
        r: 0.11,
        a: 0.16,
        c: [0.36, 0, 0.79, 0, 0.14, 0]
      },
      "35": {
        x: 620.052,
        y: 278.004,
        r: 0.123,
        c: [0.33, 0, 0.78, 0, 0.15, 0]
      },
      "36": {
        x: 619.994,
        y: 278.052,
        r: 0.14,
        c: [0.31, 0, 0.77, 0, 0.15, 0]
      },
      "37": {
        x: 620.001,
        y: 278.073,
        r: 0.149,
        a: 0.17,
        c: [0.29, 0, 0.76, 0, 0.16, 0]
      },
      "38": {
        y: 278.049,
        r: 0.162,
        c: [0.27, 0, 0.75, 0, 0.16, 0]
      },
      "39": {
        x: 620.064,
        r: 0.175,
        a: 0.18,
        c: [0.25, 0, 0.75, 0, 0.17, 0]
      },
      "40": {
        x: 620.017,
        y: 278.037,
        r: 0.188,
        c: [0.23, 0, 0.74, 0, 0.17, 0]
      },
      "41": {
        x: 620.027,
        y: 278.057,
        r: 0.197,
        c: [0.21, 0, 0.73, 0, 0.18, 0]
      },
      "42": {
        x: 620.034,
        y: 278.068,
        r: 0.206,
        c: [0.2, 0, 0.73, 0, 0.18, 0]
      },
      "43": {
        x: 620.059,
        y: 278.051,
        r: 0.215,
        a: 0.19,
        c: [0.18, 0, 0.73, 0, 0.18, 0]
      },
      "44": {
        x: 619.995,
        y: 278.069,
        sx: 1.65,
        r: 0.223,
        c: [0.16, 0, 0.72, 0, 0.18, 0]
      },
      "45": {
        x: 620.023,
        r: 0.232,
        c: [0.15, 0, 0.71, 0, 0.19, 0]
      },
      "46": {
        x: 620.042,
        y: 278.053,
        r: 0.237,
        c: [0.14, 0, 0.71, 0, 0.19, 0]
      },
      "47": {
        x: 620.041,
        y: 278.068,
        r: 0.245,
        a: 0.2,
        c: [0.13, 0, 0.71, 0, 0.19, 0]
      },
      "48": {
        x: 620.021,
        y: 278.043,
        r: 0.249,
        c: [0.12, 0, 0.71, 0, 0.2, 0]
      },
      "49": {
        x: 620.016,
        y: 278.021,
        r: 0.254,
        c: [0.11, 0, 0.7, 0, 0.2, 0]
      },
      "50": {
        x: 620.027,
        y: 278.052,
        r: 0.258
      },
      "51": {
        x: 620.063,
        y: 278.028
      },
      "52": {
        x: 620.023,
        y: 278.066,
        r: 0.259,
        c: [0.1, 0, 0.7, 0, 0.2, 0]
      },
      "53": {
        x: 620,
        y: 277.95,
        sx: 1.652,
        sy: 1.238,
        r: 0.262
      },
      "54": {
        x: 620.098,
        y: 278.018,
        sx: 1.65,
        sy: 1.237,
        r: 0.259
      },
      "55": {
        x: 620.068,
        y: 278.036,
        r: 0.258,
        c: [0.11, 0, 0.7, 0, 0.2, 0]
      },
      "56": {
        x: 620.094,
        y: 278.046,
        r: 0.254
      },
      "57": {
        x: 620.085,
        y: 278.047,
        r: 0.253,
        c: [0.12, 0, 0.7, 0, 0.2, 0]
      },
      "58": {
        x: 620.096,
        y: 278.036,
        r: 0.249,
        c: [0.13, 0, 0.71, 0, 0.2, 0]
      },
      "59": {
        x: 620.085,
        y: 278.027,
        r: 0.241,
        c: [0.13, 0, 0.71, 0, 0.19, 0]
      },
      "60": {
        x: 620.089,
        y: 278.015,
        r: 0.236,
        a: 0.19,
        c: [0.14, 0, 0.71, 0, 0.19, 0]
      },
      "61": {
        x: 620.08,
        y: 278.025,
        r: 0.228,
        c: [0.16, 0, 0.72, 0, 0.19, 0]
      },
      "62": {
        x: 620.041,
        y: 278.035,
        r: 0.219,
        c: [0.17, 0, 0.72, 0, 0.18, 0]
      },
      "63": {
        x: 620.123,
        y: 278.042,
        sx: 1.651,
        r: 0.21,
        a: 0.18,
        c: [0.19, 0, 0.73, 0, 0.18, 0]
      },
      "64": {
        x: 620.085,
        y: 278.051,
        r: 0.201,
        c: [0.2, 0, 0.73, 0, 0.18, 0]
      },
      "65": {
        x: 620.071,
        y: 278.018,
        r: 0.189,
        c: [0.22, 0, 0.74, 0, 0.17, 0]
      },
      "66": {
        x: 620.107,
        y: 278.027,
        r: 0.179,
        c: [0.24, 0, 0.75, 0, 0.17, 0]
      },
      "67": {
        x: 620.082,
        y: 278.038,
        r: 0.166,
        a: 0.17,
        c: [0.27, 0, 0.75, 0, 0.16, 0]
      },
      "68": {
        x: 620.046,
        y: 278.062,
        r: 0.153,
        c: [0.29, 0, 0.76, 0, 0.16, 0]
      },
      "69": {
        x: 620.03,
        y: 278.051,
        r: 0.14,
        a: 0.16,
        c: [0.31, 0, 0.77, 0, 0.15, 0]
      },
      "70": {
        x: 620.118,
        y: 277.974,
        r: 0.123,
        c: [0.34, 0, 0.78, 0, 0.15, 0]
      },
      "71": {
        x: 620.087,
        y: 277.962,
        r: 0.11,
        c: [0.36, 0, 0.79, 0, 0.14, 0]
      },
      "72": {
        x: 620.073,
        y: 278.005,
        r: 0.096,
        a: 0.15,
        c: [0.39, 0, 0.79, 0, 0.14, 0]
      },
      "73": {
        x: 620.084,
        y: 277.985,
        r: 0.079,
        c: [0.41, 0, 0.8, 0, 0.13, 0]
      },
      "74": {
        x: 620.059,
        y: 277.971,
        r: 0.062,
        a: 0.14,
        c: [0.44, 0, 0.81, 0, 0.13, 0]
      },
      "75": {
        x: 620.044,
        y: 278.003,
        r: 0.048,
        c: [0.46, 0, 0.82, 0, 0.12, 0]
      },
      "76": {
        x: 620.088,
        y: 277.976,
        sy: 1.238,
        r: 0.031,
        a: 0.13,
        c: [0.5, 0, 0.83, 0, 0.11, 0]
      },
      "77": {
        x: 620.085,
        y: 278.011,
        sx: 1.652,
        r: 0.014,
        c: [0.52, 0, 0.84, 0, 0.11, 0]
      },
      "78": {
        x: 620.05,
        y: 277.98,
        r: 0,
        c: [0.55, 0, 0.85, 0, 0.1, 0]
      },
      "79": {
        x: 620.051,
        y: 278.021,
        r: -0.014,
        a: 0.12,
        c: [0.58, 0, 0.86, 0, 0.09, 0]
      },
      "80": {
        x: 620.05,
        y: 277.997,
        sx: 1.651,
        r: -0.031,
        c: [0.61, 0, 0.87, 0, 0.09, 0]
      },
      "81": {
        x: 620.108,
        y: 278.026,
        sy: 1.237,
        r: -0.048,
        a: 0.11,
        c: [0.64, 0, 0.88, 0, 0.08, 0]
      },
      "82": {
        x: 620.063,
        y: 278.022,
        r: -0.062,
        c: [0.66, 0, 0.89, 0, 0.07, 0]
      },
      "83": {
        x: 620.066,
        y: 278.04,
        r: -0.079,
        a: 0.1,
        c: [0.69, 0, 0.89, 0, 0.07, 0]
      },
      "84": {
        x: 620.057,
        y: 278.034,
        r: -0.096,
        c: [0.71, 0, 0.91, 0, 0.06, 0]
      },
      "85": {
        x: 620.035,
        y: 278.061,
        r: -0.11,
        a: 0.09,
        c: [0.74, 0, 0.91, 0, 0.06, 0]
      },
      "86": {
        x: 620.064,
        y: 278.063,
        r: -0.123,
        c: [0.77, 0, 0.92, 0, 0.05, 0]
      },
      "87": {
        x: 620.084,
        y: 278.01,
        r: -0.14,
        c: [0.79, 0, 0.93, 0, 0.05, 0]
      },
      "88": {
        x: 620.082,
        y: 278.031,
        r: -0.153,
        a: 0.08,
        c: [0.82, 0, 0.94, 0, 0.04, 0]
      },
      "89": {
        x: 620.055,
        y: 277.954,
        r: -0.166,
        c: [0.84, 0, 0.95, 0, 0.04, 0]
      },
      "90": {
        x: 620.067,
        y: 277.98,
        r: -0.179,
        a: 0.07,
        c: [0.86, 0, 0.95, 0, 0.03, 0]
      },
      "91": {
        x: 620.043,
        y: 277.96,
        r: -0.189,
        c: [0.88, 0, 0.96, 0, 0.03, 0]
      },
      "92": {
        x: 620.061,
        y: 277.99,
        r: -0.201,
        c: [0.9, 0, 0.96, 0, 0.02, 0]
      },
      "93": {
        x: 620.064,
        y: 277.985,
        r: -0.21,
        c: [0.91, 0, 0.97, 0, 0.02, 0]
      },
      "94": {
        x: 620.113,
        y: 277.972,
        sx: 1.65,
        r: -0.219,
        a: 0.06,
        c: [0.93, 0, 0.98, 0, 0.02, 0]
      },
      "95": {
        x: 620.067,
        y: 278.008,
        r: -0.228,
        c: [0.95, 0, 0.98, 0, 0.01, 0]
      },
      "96": {
        x: 620.1,
        y: 278.014,
        r: -0.236,
        c: [0.96, 0, 0.98, 0, 0.01, 0]
      },
      "97": {
        x: 620.075,
        y: 277.979,
        r: -0.241,
        a: 0.05,
        c: [0.97, 0, 0.99, 0, 0.01, 0]
      },
      "98": {
        x: 620.093,
        y: 278.007,
        r: -0.249,
        c: [0.98, 0, 0.99, 0, 0, 0]
      },
      "99": {
        x: 620.059,
        y: 278.016,
        r: -0.253,
        c: [0.98, 0, 1, 0, 0, 0]
      },
      "100": {
        x: 620.05,
        y: 278.011,
        r: -0.254,
        c: [0.99, 0, 1, 0, 0, 0]
      },
      "101": {
        x: 620.045,
        y: 278.013,
        r: -0.258,
        c: [1, 0, 1, 0, 0, 0]
      },
      "102": {
        x: 620.065,
        y: 277.995,
        r: -0.259
      },
      "103": {
        x: 620,
        y: 278.2,
        sx: 1.652,
        sy: 1.238,
        r: -0.262
      }
    }).addTimedChild(instance1, 0, 104, {
      "0": {
        x: 640,
        y: 287.95,
        sx: 1.652,
        sy: 1.238,
        r: 0.262,
        a: 0.2,
        c: [0.33, 0, 0.96, 0, 0, 0]
      },
      "1": {
        x: 640.013,
        y: 288.061,
        sx: 1.65,
        sy: 1.237,
        r: 0.259
      },
      "2": {
        x: 640.019,
        y: 288.036,
        r: 0.258
      },
      "3": {
        x: 640.026,
        y: 288.02
      },
      "4": {
        x: 640.049,
        y: 288.063,
        r: 0.254,
        c: [0.34, 0, 0.96, 0, 0, 0]
      },
      "5": {
        x: 640.015,
        y: 288.046,
        r: 0.249
      },
      "6": {
        x: 640.026,
        y: 288.042,
        r: 0.245,
        c: [0.35, 0, 0.96, 0, 0, 0]
      },
      "7": {
        x: 640.035,
        y: 288.031,
        r: 0.237,
        a: 0.19,
        c: [0.36, 0, 0.96, 0, 0, 0]
      },
      "8": {
        x: 640.04,
        y: 288.032,
        r: 0.232
      },
      "9": {
        x: 639.99,
        y: 288.071,
        r: 0.223,
        c: [0.38, 0, 0.96, 0, 0, 0]
      },
      "10": {
        x: 640.053,
        y: 288.052,
        r: 0.215,
        c: [0.39, 0, 0.96, 0, 0, 0]
      },
      "11": {
        x: 640.055,
        y: 288.044,
        sx: 1.651,
        r: 0.206,
        a: 0.18,
        c: [0.4, 0, 0.96, 0, 0, 0]
      },
      "12": {
        x: 640.071,
        y: 288.053,
        r: 0.197,
        c: [0.41, 0, 0.96, 0, 0, 0]
      },
      "13": {
        x: 640.012,
        y: 288.068,
        r: 0.188,
        c: [0.42, 0, 0.96, 0, 0, 0]
      },
      "14": {
        x: 640.008,
        y: 288.049,
        r: 0.175,
        c: [0.44, 0, 0.97, 0, 0, 0]
      },
      "15": {
        x: 640.045,
        y: 288.085,
        r: 0.162,
        a: 0.17,
        c: [0.45, 0, 0.97, 0, 0, 0]
      },
      "16": {
        x: 639.995,
        y: 288.08,
        r: 0.15,
        c: [0.47, 0, 0.97, 0, 0, 0]
      },
      "17": {
        x: 640.022,
        y: 288.053,
        r: 0.14,
        a: 0.16,
        c: [0.48, 0, 0.97, 0, 0, 0]
      },
      "18": {
        x: 640.027,
        y: 288.012,
        r: 0.123,
        c: [0.5, 0, 0.97, 0, 0, 0]
      },
      "19": {
        x: 640.063,
        y: 288.013,
        r: 0.11,
        c: [0.52, 0, 0.97, 0, 0, 0]
      },
      "20": {
        x: 640.035,
        y: 288.008,
        r: 0.097,
        a: 0.15,
        c: [0.54, 0, 0.97, 0, 0, 0]
      },
      "21": {
        x: 640.017,
        y: 288.012,
        r: 0.083,
        c: [0.55, 0, 0.97, 0, 0, 0]
      },
      "22": {
        x: 640.004,
        r: 0.066,
        a: 0.14,
        c: [0.57, 0, 0.98, 0, 0, 0]
      },
      "23": {
        x: 640.025,
        y: 288.004,
        r: 0.053,
        c: [0.59, 0, 0.98, 0, 0, 0]
      },
      "24": {
        x: 640.039,
        y: 288.045,
        sy: 1.238,
        r: 0.036,
        c: [0.61, 0, 0.98, 0, 0, 0]
      },
      "25": {
        x: 640.032,
        y: 288.033,
        r: 0.022,
        a: 0.13,
        c: [0.63, 0, 0.98, 0, 0, 0]
      },
      "26": {
        x: 640.042,
        y: 288.014,
        sx: 1.652,
        r: 0.005,
        c: [0.65, 0, 0.98, 0, 0, 0]
      },
      "27": {
        x: 640.009,
        y: 288.051,
        r: -0.005,
        a: 0.12,
        c: [0.68, 0, 0.98, 0, 0, 0]
      },
      "28": {
        x: 640.022,
        y: 288.067,
        sx: 1.651,
        r: -0.022,
        c: [0.7, 0, 0.98, 0, 0, 0]
      },
      "29": {
        x: 640.008,
        y: 288.056,
        sy: 1.237,
        r: -0.036,
        a: 0.11,
        c: [0.71, 0, 0.98, 0, 0, 0]
      },
      "30": {
        x: 640.043,
        y: 288.062,
        r: -0.053,
        c: [0.73, 0, 0.98, 0, 0, 0]
      },
      "31": {
        x: 640.028,
        y: 288.068,
        r: -0.066,
        c: [0.75, 0, 0.98, 0, 0, 0]
      },
      "32": {
        x: 640.009,
        y: 288.069,
        r: -0.083,
        a: 0.1,
        c: [0.77, 0, 0.99, 0, 0, 0]
      },
      "33": {
        x: 640.044,
        y: 288.098,
        r: -0.097,
        c: [0.79, 0, 0.99, 0, 0, 0]
      },
      "34": {
        x: 640.012,
        y: 288.071,
        r: -0.11,
        a: 0.09,
        c: [0.81, 0, 0.99, 0, 0, 0]
      },
      "35": {
        x: 639.99,
        y: 288.067,
        r: -0.123,
        c: [0.83, 0, 0.99, 0, 0, 0]
      },
      "36": {
        x: 640.049,
        y: 288.041,
        r: -0.14,
        c: [0.84, 0, 0.99, 0, 0, 0]
      },
      "37": {
        x: 640.038,
        y: 288.042,
        r: -0.149,
        a: 0.08,
        c: [0.86, 0, 0.99, 0, 0, 0]
      },
      "38": {
        x: 640.051,
        y: 287.983,
        r: -0.162,
        c: [0.88, 0, 0.99, 0, 0, 0]
      },
      "39": {
        x: 640.008,
        y: 288.034,
        r: -0.175,
        a: 0.07,
        c: [0.89, 0, 0.99, 0, 0, 0]
      },
      "40": {
        x: 640.005,
        y: 288.03,
        r: -0.188,
        c: [0.91, 0, 1, 0, 0, 0]
      },
      "41": {
        x: 640.025,
        y: 288.002,
        r: -0.197,
        c: [0.92, 0, 1, 0, 0, 0]
      },
      "42": {
        x: 640.003,
        y: 288.001,
        r: -0.206,
        c: [0.93, 0, 1, 0, 0, 0]
      },
      "43": {
        x: 640.029,
        y: 288.012,
        sx: 1.65,
        r: -0.215,
        a: 0.06,
        c: [0.94, 0, 1, 0, 0, 0]
      },
      "44": {
        x: 640.067,
        y: 288.024,
        r: -0.223,
        c: [0.95, 0, 1, 0, 0, 0]
      },
      "45": {
        x: 640.048,
        y: 288.035,
        r: -0.232,
        c: [0.96, 0, 1, 0, 0, 0]
      },
      "46": {
        x: 640.037,
        y: 288.026,
        r: -0.237,
        c: [0.97, 0, 1, 0, 0, 0]
      },
      "47": {
        x: 640.033,
        y: 288.018,
        r: -0.245,
        a: 0.05,
        c: [0.98, 0, 1, 0, 0, 0]
      },
      "48": {
        x: 640.041,
        y: 288.062,
        r: -0.249
      },
      "49": {
        x: 640.02,
        y: 288.058,
        r: -0.254,
        c: [0.99, 0, 1, 0, 0, 0]
      },
      "50": {
        x: 640.03,
        y: 288.018,
        r: -0.258,
        c: [1, 0, 1, 0, 0, 0]
      },
      "51": {
        x: 640.045,
        y: 288.057
      },
      "52": {
        x: 640.026,
        y: 288.019,
        r: -0.259
      },
      "53": {
        x: 640,
        y: 288.2,
        sx: 1.652,
        sy: 1.238,
        r: -0.262
      },
      "54": {
        x: 640.007,
        y: 288.185,
        sx: 1.65,
        sy: 1.237,
        r: -0.259
      },
      "55": {
        x: 639.997,
        y: 288.193,
        r: -0.258
      },
      "56": {
        x: 640.007,
        y: 288.199,
        r: -0.254,
        c: [0.99, 0, 1, 0, 0, 0]
      },
      "57": {
        x: 640.002,
        y: 288.211,
        r: -0.253
      },
      "58": {
        x: 639.993,
        y: 288.184,
        r: -0.249,
        c: [0.98, 0, 1, 0, 0, 0]
      },
      "59": {
        x: 640.034,
        y: 288.181,
        r: -0.241
      },
      "60": {
        x: 640.013,
        y: 288.205,
        r: -0.236,
        a: 0.06,
        c: [0.97, 0, 1, 0, 0, 0]
      },
      "61": {
        x: 640.039,
        y: 288.17,
        r: -0.228,
        c: [0.96, 0, 1, 0, 0, 0]
      },
      "62": {
        x: 640.045,
        y: 288.159,
        r: -0.219,
        c: [0.95, 0, 1, 0, 0, 0]
      },
      "63": {
        x: 640.001,
        y: 288.163,
        sx: 1.651,
        r: -0.21,
        a: 0.07,
        c: [0.94, 0, 1, 0, 0, 0]
      },
      "64": {
        x: 639.99,
        y: 288.173,
        r: -0.201,
        c: [0.92, 0, 1, 0, 0, 0]
      },
      "65": {
        x: 640.016,
        y: 288.148,
        r: -0.189,
        c: [0.91, 0, 1, 0, 0, 0]
      },
      "66": {
        x: 639.99,
        y: 288.135,
        r: -0.179,
        c: [0.89, 0, 0.99, 0, 0, 0]
      },
      "67": {
        x: 640.029,
        y: 288.142,
        r: -0.166,
        a: 0.08,
        c: [0.88, 0, 0.99, 0, 0, 0]
      },
      "68": {
        x: 639.998,
        y: 288.143,
        r: -0.153,
        c: [0.86, 0, 0.99, 0, 0, 0]
      },
      "69": {
        x: 640.015,
        y: 288.12,
        r: -0.14,
        a: 0.09,
        c: [0.84, 0, 0.99, 0, 0, 0]
      },
      "70": {
        x: 639.959,
        y: 288.19,
        r: -0.123,
        c: [0.82, 0, 0.99, 0, 0, 0]
      },
      "71": {
        x: 639.98,
        y: 288.171,
        r: -0.11,
        c: [0.81, 0, 0.99, 0, 0, 0]
      },
      "72": {
        x: 639.973,
        y: 288.162,
        r: -0.096,
        a: 0.1,
        c: [0.79, 0, 0.99, 0, 0, 0]
      },
      "73": {
        x: 640.007,
        y: 288.184,
        r: -0.079,
        c: [0.77, 0, 0.99, 0, 0, 0]
      },
      "74": {
        x: 639.996,
        y: 288.178,
        r: -0.062,
        a: 0.11,
        c: [0.75, 0, 0.98, 0, 0, 0]
      },
      "75": {
        x: 640.004,
        y: 288.145,
        r: -0.048,
        c: [0.73, 0, 0.98, 0, 0, 0]
      },
      "76": {
        x: 639.983,
        y: 288.13,
        sy: 1.238,
        r: -0.031,
        a: 0.12,
        c: [0.71, 0, 0.98, 0, 0, 0]
      },
      "77": {
        x: 639.954,
        y: 288.117,
        sx: 1.652,
        r: -0.014,
        c: [0.68, 0, 0.98, 0, 0, 0]
      },
      "78": {
        x: 639.955,
        y: 288.116,
        r: 0,
        a: 0.13,
        c: [0.66, 0, 0.98, 0, 0, 0]
      },
      "79": {
        x: 639.987,
        y: 288.108,
        r: 0.014,
        c: [0.64, 0, 0.98, 0, 0, 0]
      },
      "80": {
        x: 639.967,
        y: 288.098,
        sx: 1.651,
        sy: 1.237,
        r: 0.031,
        c: [0.62, 0, 0.98, 0, 0, 0]
      },
      "81": {
        x: 639.958,
        y: 288.135,
        r: 0.048,
        a: 0.14,
        c: [0.6, 0, 0.98, 0, 0, 0]
      },
      "82": {
        x: 639.938,
        y: 288.14,
        r: 0.062,
        c: [0.58, 0, 0.98, 0, 0, 0]
      },
      "83": {
        x: 639.964,
        y: 288.119,
        r: 0.079,
        a: 0.15,
        c: [0.56, 0, 0.97, 0, 0, 0]
      },
      "84": {
        x: 639.973,
        y: 288.125,
        r: 0.096,
        c: [0.54, 0, 0.97, 0, 0, 0]
      },
      "85": {
        x: 639.983,
        y: 288.079,
        r: 0.11,
        a: 0.16,
        c: [0.52, 0, 0.97, 0, 0, 0]
      },
      "86": {
        x: 639.97,
        y: 288.1,
        r: 0.123,
        c: [0.5, 0, 0.97, 0, 0, 0]
      },
      "87": {
        x: 639.929,
        y: 288.154,
        r: 0.14,
        c: [0.48, 0, 0.97, 0, 0, 0]
      },
      "88": {
        x: 639.959,
        y: 288.136,
        r: 0.153,
        a: 0.17,
        c: [0.46, 0, 0.97, 0, 0, 0]
      },
      "89": {
        x: 639.967,
        y: 288.111,
        r: 0.166,
        c: [0.45, 0, 0.97, 0, 0, 0]
      },
      "90": {
        x: 639.958,
        y: 288.127,
        r: 0.179,
        a: 0.18,
        c: [0.43, 0, 0.97, 0, 0, 0]
      },
      "91": {
        x: 639.977,
        y: 288.133,
        r: 0.189,
        c: [0.42, 0, 0.96, 0, 0, 0]
      },
      "92": {
        x: 639.971,
        y: 288.14,
        r: 0.201,
        c: [0.41, 0, 0.96, 0, 0, 0]
      },
      "93": {
        x: 639.968,
        y: 288.123,
        r: 0.21,
        c: [0.39, 0, 0.96, 0, 0, 0]
      },
      "94": {
        x: 639.927,
        y: 288.119,
        sx: 1.65,
        r: 0.219,
        a: 0.19,
        c: [0.38, 0, 0.96, 0, 0, 0]
      },
      "95": {
        x: 639.935,
        y: 288.096,
        r: 0.228,
        c: [0.37, 0, 0.96, 0, 0, 0]
      },
      "96": {
        x: 639.934,
        y: 288.126,
        r: 0.236,
        c: [0.36, 0, 0.96, 0, 0, 0]
      },
      "97": {
        x: 639.935,
        y: 288.098,
        r: 0.241,
        a: 0.2,
        c: [0.35, 0, 0.96, 0, 0, 0]
      },
      "98": {
        x: 639.953,
        y: 288.115,
        r: 0.249,
        c: [0.34, 0, 0.96, 0, 0, 0]
      },
      "99": {
        x: 639.944,
        y: 288.097,
        r: 0.253
      },
      "100": {
        x: 639.937,
        y: 288.113,
        r: 0.254
      },
      "101": {
        x: 639.961,
        y: 288.092,
        r: 0.258,
        c: [0.33, 0, 0.96, 0, 0, 0]
      },
      "102": {
        x: 639.937,
        y: 288.09,
        r: 0.259
      },
      "103": {
        x: 640,
        y: 287.95,
        sx: 1.652,
        sy: 1.238,
        r: 0.262
      }
    });
  });

  lib.rhythm_guide = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 124
    });
    var instance7 = new lib.lights().setTransform(30.9, 23, 1, 0.729);var instance6 = new lib.track().setTransform(0, 117.95);var instance5 = new lib.UI_Beat();this[instance5.name = "_phBeat"] = instance5;var instance10 = new lib.trans();this[instance10.name = "trans"] = instance10;var instance9 = new lib.hold_point1();this[instance9.name = "point1"] = instance9;var instance8 = new lib.hold_point2();this[instance8.name = "point2"] = instance8;var instance4 = new lib.ring().setTransform(247, 147.05, 0.852, 0.852);this[instance4.name = "ring"] = instance4;var instance3 = new Graphic2(MovieClip.SYNCHED);var instance2 = new Graphic1(MovieClip.SYNCHED);var instance1 = new lib.hand();this.addTimedChild(instance7).addTimedChild(instance6).addTimedChild(instance5, 0, 21, {
      "0": {
        x: 723,
        y: 127.8,
        sx: 1.5,
        sy: 1.5
      },
      "1": {
        x: 689.189,
        y: 127.898
      },
      "2": {
        x: 655.339,
        y: 127.948
      },
      "3": {
        x: 621.489,
        y: 127.998
      },
      "4": {
        x: 587.589,
        y: 128.048
      },
      "5": {
        x: 553.739,
        y: 128.098
      },
      "6": {
        x: 519.889,
        y: 128.148
      },
      "7": {
        x: 486.039,
        y: 128.198
      },
      "8": {
        x: 452.189,
        y: 128.298
      },
      "9": {
        x: 418.339,
        y: 128.348
      },
      "10": {
        x: 384.489,
        y: 128.398
      },
      "11": {
        x: 350.589,
        y: 128.448
      },
      "12": {
        x: 316.739,
        y: 128.498
      },
      "13": {
        x: 282.889,
        y: 128.548
      },
      "14": {
        x: 249,
        y: 128.55
      }
    }).addTimedChild(instance10, 44, 58, {
      "44": {
        x: 587.6,
        y: 145.8,
        sx: 1.5,
        sy: 1.5
      },
      "45": {
        x: 574.491,
        y: 145.798
      },
      "46": {
        x: 561.441,
        y: 145.698
      },
      "47": {
        x: 548.341,
        y: 145.648
      },
      "48": {
        x: 535.291,
        y: 145.548
      },
      "49": {
        x: 522.191,
        y: 145.498
      },
      "50": {
        x: 509.091,
        y: 145.448
      },
      "51": {
        x: 496.041,
        y: 145.348
      },
      "52": {
        x: 482.941,
        y: 145.298
      },
      "53": {
        x: 469.891,
        y: 145.198
      },
      "54": {
        x: 456.791,
        y: 145.148
      },
      "55": {
        x: 443.691,
        y: 145.098
      },
      "56": {
        x: 430.641,
        y: 144.998
      },
      "57": {
        x: 417.541,
        y: 144.948
      },
      "58": {
        x: 404.491,
        y: 144.848
      },
      "59": {
        x: 391.391,
        y: 144.798
      },
      "60": {
        x: 378.291,
        y: 144.748
      },
      "61": {
        x: 365.241,
        y: 144.648
      },
      "62": {
        x: 352.141,
        y: 144.598
      },
      "63": {
        x: 339.091,
        y: 144.498
      },
      "64": {
        x: 325.991,
        y: 144.448
      },
      "65": {
        x: 312.891,
        y: 144.398
      },
      "66": {
        x: 299.841,
        y: 144.298
      },
      "67": {
        x: 286.741,
        y: 144.248
      },
      "68": {
        x: 273.691,
        y: 144.148
      },
      "69": {
        x: 260.6,
        y: 144.05
      },
      "70": {
        x: 260.557,
        y: 144.048,
        sx: 1.455
      },
      "71": {
        x: 260.618,
        sx: 1.409
      },
      "72": {
        x: 260.574,
        sx: 1.364
      },
      "73": {
        x: 260.635,
        sx: 1.318
      },
      "74": {
        x: 260.596,
        sx: 1.273
      },
      "75": {
        x: 260.607,
        sx: 1.227
      },
      "76": {
        x: 260.613,
        sx: 1.182
      },
      "77": {
        x: 260.624,
        sx: 1.137
      },
      "78": {
        x: 260.635,
        sx: 1.091
      },
      "79": {
        x: 260.595,
        sx: 1.046
      },
      "80": {
        x: 260.656,
        sx: 1
      },
      "81": {
        x: 260.617,
        sx: 0.955
      },
      "82": {
        x: 260.628,
        sx: 0.91
      },
      "83": {
        x: 260.638,
        sx: 0.864
      },
      "84": {
        x: 260.645,
        sx: 0.819
      },
      "85": {
        x: 260.656,
        y: 144.098,
        sx: 0.773
      },
      "86": {
        x: 260.617,
        sx: 0.728
      },
      "87": {
        x: 260.627,
        sx: 0.683
      },
      "88": {
        x: 260.638,
        sx: 0.637
      },
      "89": {
        x: 260.649,
        sx: 0.592
      },
      "90": {
        x: 260.66,
        sx: 0.546
      },
      "91": {
        x: 260.67,
        sx: 0.501
      },
      "92": {
        x: 260.677,
        sx: 0.455
      },
      "93": {
        x: 260.688,
        sx: 0.41
      },
      "94": {
        x: 260.649,
        sx: 0.365
      },
      "95": {
        x: 260.659,
        sx: 0.319
      },
      "96": {
        x: 260.67,
        sx: 0.274
      },
      "97": {
        x: 260.681,
        sx: 0.228
      },
      "98": {
        x: 260.692,
        sx: 0.183
      },
      "99": {
        x: 260.652,
        sx: 0.138
      },
      "100": {
        x: 260.709,
        sx: 0.092
      },
      "101": {
        x: 260.65,
        y: 144.05,
        sx: 0.047
      }
    }).addTimedChild(instance9, 44, 54, {
      "44": {
        x: 551.6,
        y: 124.8,
        sx: 1.5,
        sy: 1.5,
        a: 1
      },
      "45": {
        x: 538.492,
        y: 124.798
      },
      "46": {
        x: 525.442,
        y: 124.698
      },
      "47": {
        x: 512.342,
        y: 124.648
      },
      "48": {
        x: 499.292,
        y: 124.548
      },
      "49": {
        x: 486.192,
        y: 124.498
      },
      "50": {
        x: 473.092,
        y: 124.448
      },
      "51": {
        x: 460.042,
        y: 124.348
      },
      "52": {
        x: 446.942,
        y: 124.298
      },
      "53": {
        x: 433.892,
        y: 124.198
      },
      "54": {
        x: 420.792,
        y: 124.148
      },
      "55": {
        x: 407.692,
        y: 124.098
      },
      "56": {
        x: 394.642,
        y: 123.998
      },
      "57": {
        x: 381.542,
        y: 123.948
      },
      "58": {
        x: 368.492,
        y: 123.848
      },
      "59": {
        x: 355.392,
        y: 123.798
      },
      "60": {
        x: 342.292,
        y: 123.748
      },
      "61": {
        x: 329.242,
        y: 123.648
      },
      "62": {
        x: 316.142,
        y: 123.598
      },
      "63": {
        x: 303.092,
        y: 123.498
      },
      "64": {
        x: 289.992,
        y: 123.448
      },
      "65": {
        x: 276.892,
        y: 123.398
      },
      "66": {
        x: 263.842,
        y: 123.298
      },
      "67": {
        x: 250.742,
        y: 123.248
      },
      "68": {
        x: 237.692,
        y: 123.148
      },
      "69": {
        x: 224.6,
        y: 123.05
      },
      "70": {
        x: 224.597,
        y: 123.048
      },
      "75": {
        x: 224.593,
        y: 123.096
      },
      "85": {
        x: 224.59,
        y: 123.094
      },
      "90": {
        x: 224.55,
        y: 123
      },
      "91": {
        x: 224.547,
        y: 123.048,
        a: 0.86
      },
      "92": {
        a: 0.71
      },
      "93": {
        a: 0.57
      },
      "94": {
        a: 0.43
      },
      "95": {
        a: 0.29
      },
      "96": {
        x: 224.55,
        y: 123,
        a: 0.14
      },
      "97": {
        x: 224.6,
        y: 123.05,
        a: 0
      }
    }).addTimedChild(instance8, 44, 58, {
      "44": {
        x: 701.6,
        y: 124.8,
        sx: 1.5,
        sy: 1.5
      },
      "45": {
        x: 688.489,
        y: 124.798
      },
      "46": {
        x: 675.439,
        y: 124.698
      },
      "47": {
        x: 662.339,
        y: 124.648
      },
      "48": {
        x: 649.289,
        y: 124.548
      },
      "49": {
        x: 636.189,
        y: 124.498
      },
      "50": {
        x: 623.089,
        y: 124.448
      },
      "51": {
        x: 610.039,
        y: 124.348
      },
      "52": {
        x: 596.939,
        y: 124.298
      },
      "53": {
        x: 583.889,
        y: 124.198
      },
      "54": {
        x: 570.789,
        y: 124.148
      },
      "55": {
        x: 557.689,
        y: 124.098
      },
      "56": {
        x: 544.639,
        y: 123.998
      },
      "57": {
        x: 531.539,
        y: 123.948
      },
      "58": {
        x: 518.489,
        y: 123.848
      },
      "59": {
        x: 505.389,
        y: 123.798
      },
      "60": {
        x: 492.289,
        y: 123.748
      },
      "61": {
        x: 479.239,
        y: 123.648
      },
      "62": {
        x: 466.139,
        y: 123.598
      },
      "63": {
        x: 453.089,
        y: 123.498
      },
      "64": {
        x: 439.989,
        y: 123.448
      },
      "65": {
        x: 426.889,
        y: 123.398
      },
      "66": {
        x: 413.839,
        y: 123.298
      },
      "67": {
        x: 400.739,
        y: 123.248
      },
      "68": {
        x: 387.689,
        y: 123.148
      },
      "69": {
        x: 374.6,
        y: 123.05
      },
      "70": {
        x: 369.894,
        y: 123.048
      },
      "71": {
        x: 365.244
      },
      "72": {
        x: 360.544
      },
      "73": {
        x: 355.844
      },
      "74": {
        x: 351.144
      },
      "75": {
        x: 346.494
      },
      "76": {
        x: 341.794
      },
      "77": {
        x: 337.094
      },
      "78": {
        x: 332.394
      },
      "79": {
        x: 327.744
      },
      "80": {
        x: 323.044
      },
      "81": {
        x: 318.344
      },
      "82": {
        x: 313.644
      },
      "83": {
        x: 308.994
      },
      "84": {
        x: 304.294
      },
      "85": {
        x: 299.594
      },
      "86": {
        x: 294.894
      },
      "87": {
        x: 290.244
      },
      "88": {
        x: 285.544
      },
      "89": {
        x: 280.844
      },
      "90": {
        x: 276.144
      },
      "91": {
        x: 271.494
      },
      "92": {
        x: 266.794
      },
      "93": {
        x: 262.094
      },
      "94": {
        x: 257.394
      },
      "95": {
        x: 252.744
      },
      "96": {
        x: 248.044
      },
      "97": {
        x: 243.344
      },
      "98": {
        x: 238.644
      },
      "99": {
        x: 233.994
      },
      "100": {
        x: 229.294
      },
      "101": {
        x: 224.6,
        y: 123.05
      }
    }).addTimedChild(instance4).addTimedChild(instance3, 0, 42, {
      "0": {
        x: 648,
        y: 194,
        sx: 1,
        sy: 1,
        a: 1
      },
      "1": {
        x: 614.05
      },
      "2": {
        x: 580.15
      },
      "3": {
        x: 546.2
      },
      "4": {
        x: 512.25
      },
      "5": {
        x: 478.3
      },
      "6": {
        x: 444.4
      },
      "7": {
        x: 410.45
      },
      "8": {
        x: 376.5
      },
      "9": {
        x: 342.6
      },
      "10": {
        x: 308.65
      },
      "11": {
        x: 274.7
      },
      "12": {
        x: 240.75
      },
      "13": {
        x: 206.85
      },
      "14": {
        x: 172.9
      },
      "21": {
        x: 134.9,
        y: 183,
        sx: 1.507,
        sy: 1.507
      },
      "22": {
        x: 138.709,
        y: 184.14,
        sx: 1.456,
        sy: 1.456
      },
      "23": {
        x: 142.474,
        y: 185.238,
        sx: 1.405,
        sy: 1.405
      },
      "24": {
        x: 146.288,
        y: 186.334,
        sx: 1.355,
        sy: 1.355
      },
      "25": {
        x: 150.053,
        y: 187.433,
        sx: 1.304,
        sy: 1.304
      },
      "26": {
        x: 153.864,
        y: 188.525,
        sx: 1.253,
        sy: 1.253
      },
      "27": {
        x: 157.628,
        y: 189.621,
        sx: 1.203,
        sy: 1.203
      },
      "28": {
        x: 161.443,
        y: 190.719,
        sx: 1.152,
        sy: 1.152
      },
      "29": {
        x: 165.256,
        y: 191.815,
        sx: 1.101,
        sy: 1.101
      },
      "30": {
        x: 169.021,
        y: 192.914,
        sx: 1.051,
        sy: 1.051
      },
      "31": {
        x: 172.9,
        y: 194,
        sx: 1,
        sy: 1
      },
      "32": {
        a: 0.9
      },
      "33": {
        a: 0.8
      },
      "34": {
        a: 0.7
      },
      "35": {
        a: 0.6
      },
      "36": {
        a: 0.5
      },
      "37": {
        a: 0.4
      },
      "38": {
        a: 0.3
      },
      "39": {
        a: 0.2
      },
      "40": {
        a: 0.1
      },
      "41": {
        a: 0
      }
    }).addTimedChild(instance2, 0, 124, {
      "0": {
        x: 180.85,
        y: 4.45,
        sx: 1.25,
        sy: 2.193,
        kx: 1.378,
        ky: -0.524,
        c: [0, 0.8, 0, 0.8, 0, 0.8]
      },
      "21": {
        c: [0, 1, 0, 0, 0, 0.55]
      },
      "22": {
        x: 180.973,
        y: 4.327,
        sx: 1.248,
        sy: 2.191,
        ky: -0.521,
        c: [0, 0.96, 0, 0.16, 0, 0.6]
      },
      "23": {
        c: [0, 0.92, 0, 0.32, 0, 0.65]
      },
      "24": {
        c: [0, 0.88, 0, 0.48, 0, 0.7]
      },
      "25": {
        c: [0, 0.84, 0, 0.64, 0, 0.75]
      },
      "26": {
        x: 180.85,
        y: 4.45,
        sx: 1.25,
        sy: 2.193,
        ky: -0.524,
        c: [0, 0.8, 0, 0.8, 0, 0.8]
      },
      "69": {
        c: [0, 1, 0, 0, 0, 0.55]
      },
      "98": {
        x: 180.973,
        y: 4.327,
        sx: 1.248,
        sy: 2.191,
        ky: -0.521,
        c: [0, 0.96, 0, 0.16, 0, 0.6]
      },
      "99": {
        c: [0, 0.92, 0, 0.32, 0, 0.65]
      },
      "100": {
        c: [0, 0.88, 0, 0.48, 0, 0.7]
      },
      "101": {
        c: [0, 0.84, 0, 0.64, 0, 0.75]
      },
      "102": {
        x: 180.85,
        y: 4.45,
        sx: 1.25,
        sy: 2.193,
        ky: -0.524,
        c: [0, 0.8, 0, 0.8, 0, 0.8]
      }
    }).addTimedChild(instance1, 0, 124, {
      "0": {
        x: 403.35,
        y: -79.85,
        sx: 1,
        sy: 1,
        r: -0.262
      },
      "19": {
        x: 395.638,
        y: -60.274,
        sx: 0.999,
        sy: 0.999,
        r: -0.39
      },
      "20": {
        x: 387.655,
        y: -17.908,
        sx: 0.998,
        sy: 0.998,
        r: -0.652
      },
      "21": {
        x: 387.5,
        y: 3.95,
        sx: 1,
        sy: 1,
        r: -0.785
      },
      "22": {
        x: 387.646,
        y: 0.761,
        sx: 0.998,
        sy: 0.998,
        r: -0.766
      },
      "23": {
        x: 387.382,
        y: -8.599,
        r: -0.709
      },
      "24": {
        x: 388.019,
        y: -22.961,
        r: -0.622
      },
      "25": {
        x: 390.574,
        y: -40.756,
        sx: 0.999,
        sy: 0.999,
        r: -0.512
      },
      "26": {
        x: 395.736,
        y: -60.207,
        r: -0.39
      },
      "27": {
        x: 402.954,
        y: -78.428,
        r: -0.271
      },
      "28": {
        x: 411.447,
        y: -94.296,
        r: -0.162
      },
      "29": {
        x: 419.401,
        y: -106.263,
        sx: 1,
        sy: 1,
        r: -0.074
      },
      "30": {
        x: 425.143,
        y: -113.594,
        r: -0.018
      },
      "31": {
        x: 426.95,
        y: -115.9,
        r: 0
      },
      "66": {
        x: 415.66,
        y: -101.052,
        r: -0.114
      },
      "67": {
        x: 395.746,
        y: -60.37,
        sx: 0.999,
        sy: 0.999,
        r: -0.39
      },
      "68": {
        x: 387.567,
        y: -15.231,
        sx: 0.998,
        sy: 0.998,
        r: -0.67
      },
      "69": {
        x: 387.55,
        y: 3.95,
        sx: 1,
        sy: 1,
        r: -0.785
      },
      "98": {
        x: 387.466,
        y: -4.268,
        sx: 0.998,
        sy: 0.998,
        r: -0.735
      },
      "99": {
        x: 388.272,
        y: -25.891,
        r: -0.604
      },
      "100": {
        x: 393.205,
        y: -51.998,
        sx: 0.999,
        sy: 0.999,
        r: -0.442
      },
      "101": {
        x: 400.109,
        y: -72.442,
        r: -0.311
      },
      "102": {
        x: 403.35,
        y: -79.85,
        sx: 1,
        sy: 1,
        r: -0.262
      }
    });
  });

  lib.Graphic15 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.UI_NewerGuide = Container.extend(function () {
    Container.call(this);
    var instance5 = new lib.Graphic15().setTransform(0, 0, 7.5, 10.8).setAlpha(0.8).setColorTransform(0, 0, 0, 0, 0, 0);var instance4 = new lib.rhythm_guide().setTransform(0, 624);var instance3 = new Text("玩法说明").setStyle({
      fontFamily: "Source Code Pro",
      fontSize: 84,
      fill: "#fff"
    }).setAlign("center").setTransform(375, 109.6);var instance2 = new Text("1. 听音乐，找节奏\n2. 蓝色脚印单击屏幕\n3. 红色脚印长按放开\n4. 记住，狗狗不能吃巧克力！").setStyle({
      fontFamily: "Source Code Pro",
      fontSize: 36,
      fill: "#fff"
    }).setAlign("center").setTransform(375, 249.6);this[instance2.name = "tfIntro"] = instance2;var instance1 = new lib.ClickContinue().setTransform(0, 956.25);this.addChild(instance5, instance4, instance3, instance2, instance1);
  });

  lib.NewerGuideUI = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 60
    });
    var instance1 = new lib.UI_NewerGuide();this.addChild(instance1);
  });

  lib.NewerGuideUI.assets = ["res/images/fla_NewerGuideUI/finger.png", "res/images/common/white.png", "res/images/fla_NewerGuideUI/beat_guide.png", "res/images/fla_PlayViewUI/indicator/ring.png", "res/images/fla_PlayViewUI/indicator/beat.png", "res/images/fla_PlayViewUI/indicator/hold.png", "res/images/fla_PlayViewUI/indicator/release.png", "res/images/fla_PlayViewUI/indicator/holding.png", "res/images/fla_PlayViewUI/indicator/hold_bar.png", "res/images/fla_PlayViewUI/indicator/light.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;