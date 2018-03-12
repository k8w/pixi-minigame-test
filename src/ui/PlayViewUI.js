"use strict";

(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Text = PIXI.Text;

  lib.btnEnd = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/pause_modal/btnEnd.png"));this.addChild(instance1);
  });

  lib.btnContinue = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/pause_modal/btnContinue.png"));this.addChild(instance1);
  });

  lib.Graphic1 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.UI_PauseModal = Container.extend(function () {
    Container.call(this);
    var instance3 = new lib.Graphic1().setTransform(0, 0, 7.5, 10.8).setAlpha(0.7).setColorTransform(0, 0, 0, 0, 0, 0);var instance2 = new lib.btnContinue().setTransform(188, 216);this[instance2.name = "btnContinue"] = instance2;var instance1 = new lib.btnEnd().setTransform(188, 347);this[instance1.name = "btnEnd"] = instance1;this.addChild(instance3, instance2, instance1);
  });

  var Graphic2 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 26, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/holding.png")).setTransform(0, 1);this.addTimedChild(instance1);
  });

  var Graphic3 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 26, loop: false });
    var instance1 = new Graphic2(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 26, {
      "0": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "1": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "2": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "3": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "4": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "5": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      },
      "6": {
        x: -59.154,
        y: -238.56,
        sy: 1.013,
        kx: -0.022
      },
      "7": {
        x: -61.216,
        y: -237.592,
        sy: 1.008,
        kx: -0.014
      },
      "8": {
        x: -63.163,
        y: -236.666,
        sy: 1.004,
        kx: -0.005
      },
      "9": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "11": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "12": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "13": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "14": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "15": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      },
      "16": {
        x: -59.154,
        y: -238.56,
        sy: 1.013,
        kx: -0.022
      },
      "17": {
        x: -61.216,
        y: -237.592,
        sy: 1.008,
        kx: -0.014
      },
      "18": {
        x: -63.163,
        y: -236.666,
        sy: 1.004,
        kx: -0.005
      },
      "19": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "21": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "22": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "23": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "24": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "25": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      }
    });
  });

  lib.UI_RoleGreen = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 37,
      labels: {
        run: 0,
        holding: 9,
        jump: 35,
        "jump1": 36
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0000.png"));var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0001.png"));var instance3 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0002.png"));var instance4 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0003.png"));var instance5 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0004.png"));var instance6 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0005.png"));var instance7 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0006.png"));var instance8 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0007.png"));var instance9 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/run_0008.png"));var instance10 = new Graphic3(MovieClip.SYNCHED);var instance11 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/jump_0000.png"));var instance12 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_green/jump_0001.png")).setTransform(-69, -254);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -67,
        y: -235
      }
    }).addTimedChild(instance2, 1, 1, {
      "1": {
        x: -68,
        y: -236
      }
    }).addTimedChild(instance3, 2, 1, {
      "2": {
        x: -73,
        y: -240
      }
    }).addTimedChild(instance4, 3, 1, {
      "3": {
        x: -74,
        y: -239
      }
    }).addTimedChild(instance5, 4, 1, {
      "4": {
        x: -70,
        y: -235
      }
    }).addTimedChild(instance6, 5, 1, {
      "5": {
        x: -69,
        y: -235
      }
    }).addTimedChild(instance7, 6, 1, {
      "6": {
        x: -78,
        y: -237
      }
    }).addTimedChild(instance8, 7, 1, {
      "7": {
        x: -86,
        y: -239
      }
    }).addTimedChild(instance9, 8, 1, {
      "8": {
        x: -70,
        y: -239
      }
    }).addTimedChild(instance10, 9, 26, {
      "9": {
        t: "#fff"
      },
      "10": {
        t: "#fffafa"
      },
      "11": {
        t: "#fff7f5"
      },
      "12": {
        t: "#fff5f0"
      },
      "13": {
        t: "#fff2e8"
      },
      "14": {
        t: "#ffede3"
      },
      "15": {
        t: "#ffe8de"
      },
      "16": {
        t: "#ffe6d9"
      },
      "17": {
        t: "#ffe3d4"
      },
      "18": {
        t: "#ffe0cf"
      },
      "19": {
        t: "#ffdbc9"
      },
      "20": {
        t: "#ffd6c4"
      },
      "21": {
        t: "#ffd4bf"
      },
      "22": {
        t: "#ffd1b8"
      },
      "23": {
        t: "#ffccb3"
      },
      "24": {
        t: "#ffc9ad"
      },
      "25": {
        t: "#ffc4a8"
      },
      "26": {
        t: "#ffc2a3"
      },
      "27": {
        t: "#ffbf9e"
      },
      "28": {
        t: "#ffba99"
      },
      "29": {
        t: "#ffb891"
      },
      "30": {
        t: "#ffb38c"
      },
      "31": {
        t: "#ffb087"
      },
      "32": {
        t: "#ffad82"
      },
      "33": {
        t: "#ffa87d"
      },
      "34": {
        t: "#ffa678"
      }
    }).addTimedChild(instance11, 35, 1, {
      "35": {
        x: -86,
        y: -249
      }
    }).addTimedChild(instance12, 36, 1).addAction(function () {
      this.framerate = 12;
    }, 0).addAction(function () {
      this.gotoAndPlay('run');
    }, 8).addAction(function () {
      this.framerate = 60;
    }, 9).addAction(function () {
      this.stop();
    }, 34).addAction(function () {
      this.stop();
    }, 35).addAction(function () {
      this.stop();
    }, 36);
  });

  lib.placeholder = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.UI_BuffIndicator = Container.extend(function () {
    Container.call(this);
    var instance2 = new lib.placeholder().setTransform(0, 0, 0.64, 0.64);this[instance2.name = "_phIcon"] = instance2;var instance1 = new Text("巧克力免疫\n03:00").setStyle({
      fontFamily: "_sans",
      fontSize: 26,
      fill: "#a04300"
    }).setTransform(73, 2);this[instance1.name = "tfText"] = instance1;this.addChild(instance2, instance1);
  });

  var Graphic4 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 26, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/holding_0000.png"));this.addTimedChild(instance1);
  });

  var Graphic5 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 26, loop: false });
    var instance1 = new Graphic4(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 26, {
      "0": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "1": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "2": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "3": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "4": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "5": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      },
      "6": {
        x: -59.154,
        y: -238.56,
        sy: 1.013,
        kx: -0.022
      },
      "7": {
        x: -61.216,
        y: -237.592,
        sy: 1.008,
        kx: -0.014
      },
      "8": {
        x: -63.163,
        y: -236.666,
        sy: 1.004,
        kx: -0.005
      },
      "9": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "11": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "12": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "13": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "14": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "15": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      },
      "16": {
        x: -59.154,
        y: -238.56,
        sy: 1.013,
        kx: -0.022
      },
      "17": {
        x: -61.216,
        y: -237.592,
        sy: 1.008,
        kx: -0.014
      },
      "18": {
        x: -63.163,
        y: -236.666,
        sy: 1.004,
        kx: -0.005
      },
      "19": {
        x: -65,
        y: -236,
        sy: 1,
        kx: 0
      },
      "21": {
        x: -62.693,
        y: -237.289,
        sy: 1.005,
        kx: -0.009
      },
      "22": {
        x: -60.414,
        y: -238.467,
        sy: 1.011,
        kx: -0.018
      },
      "23": {
        x: -57.722,
        y: -239.694,
        sy: 1.016,
        kx: -0.031
      },
      "24": {
        x: -55.05,
        y: -240.45,
        sy: 1.021,
        kx: -0.041
      },
      "25": {
        x: -57.174,
        y: -239.503,
        sy: 1.017,
        kx: -0.031
      }
    });
  });

  lib.Graphic6 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/jump_0000.png"));this.addChild(instance1);
  });

  lib.UI_Paodekuai = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 37,
      labels: {
        run: 0,
        holding: 9,
        jump: 35,
        "jump1": 36
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0000.png"));var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0001.png"));var instance3 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0002.png"));var instance4 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0003.png"));var instance5 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0004.png"));var instance6 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0005.png"));var instance7 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0006.png"));var instance8 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0007.png"));var instance9 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/run_0008.png"));var instance10 = new Graphic5(MovieClip.SYNCHED);var instance11 = new lib.Graphic6();var instance12 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role/jump_0001.png")).setTransform(-69, -253);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -68,
        y: -239
      }
    }).addTimedChild(instance2, 1, 1, {
      "1": {
        x: -75,
        y: -239
      }
    }).addTimedChild(instance3, 2, 1, {
      "2": {
        x: -70,
        y: -229
      }
    }).addTimedChild(instance4, 3, 1, {
      "3": {
        x: -64,
        y: -235
      }
    }).addTimedChild(instance5, 4, 1, {
      "4": {
        x: -68,
        y: -235
      }
    }).addTimedChild(instance6, 5, 1, {
      "5": {
        x: -71,
        y: -239
      }
    }).addTimedChild(instance7, 6, 1, {
      "6": {
        x: -71,
        y: -240
      }
    }).addTimedChild(instance8, 7, 1, {
      "7": {
        x: -65,
        y: -236
      }
    }).addTimedChild(instance9, 8, 1, {
      "8": {
        x: -64,
        y: -235
      }
    }).addTimedChild(instance10, 9, 26, {
      "9": {
        t: "#fff"
      },
      "10": {
        t: "#fffafa"
      },
      "11": {
        t: "#fff7f5"
      },
      "12": {
        t: "#fff5f0"
      },
      "13": {
        t: "#fff2e8"
      },
      "14": {
        t: "#ffede3"
      },
      "15": {
        t: "#ffe8de"
      },
      "16": {
        t: "#ffe6d9"
      },
      "17": {
        t: "#ffe3d4"
      },
      "18": {
        t: "#ffe0cf"
      },
      "19": {
        t: "#ffdbc9"
      },
      "20": {
        t: "#ffd6c4"
      },
      "21": {
        t: "#ffd4bf"
      },
      "22": {
        t: "#ffd1b8"
      },
      "23": {
        t: "#ffccb3"
      },
      "24": {
        t: "#ffc9ad"
      },
      "25": {
        t: "#ffc4a8"
      },
      "26": {
        t: "#ffc2a3"
      },
      "27": {
        t: "#ffbf9e"
      },
      "28": {
        t: "#ffba99"
      },
      "29": {
        t: "#ffb891"
      },
      "30": {
        t: "#ffb38c"
      },
      "31": {
        t: "#ffb087"
      },
      "32": {
        t: "#ffad82"
      },
      "33": {
        t: "#ffa87d"
      },
      "34": {
        t: "#ffa678"
      }
    }).addTimedChild(instance11, 35, 1, {
      "35": {
        x: -86,
        y: -248
      }
    }).addTimedChild(instance12, 36, 1).addAction(function () {
      this.framerate = 12;
    }, 0).addAction(function () {
      this.gotoAndPlay('run');
    }, 8).addAction(function () {
      this.framerate = 60;
    }, 9).addAction(function () {
      this.stop();
    }, 34).addAction(function () {
      this.stop();
    }, 35).addAction(function () {
      this.stop();
    }, 36);
  });

  lib.fx_items = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 4,
      labels: {
        autoRun: 0,
        chocoFree: 1,
        recoverLife: 2,
        slowDown: 3
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/fx/autoRun.png"));var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/fx/chocoFree.png"));var instance3 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/fx/recoverLife.png"));var instance4 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/fx/slowDown.png")).setTransform(-32, -64, 0.5, 0.5);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -32,
        y: -64,
        sx: 0.5,
        sy: 0.5
      }
    }).addTimedChild(instance2, 1, 1, {
      "1": {
        x: -32,
        y: -64,
        sx: 0.5,
        sy: 0.5
      }
    }).addTimedChild(instance3, 2, 1, {
      "2": {
        x: -32,
        y: -64,
        sx: 0.5,
        sy: 0.5
      }
    }).addTimedChild(instance4, 3, 1).addAction(function () {
      /** CONSTRUCTOR */
      this.selfAdvance = false;
      /** END CONSTRUCTOR */
    }, 0);
  });

  var Graphic7 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic8 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic9 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic10 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic11 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic12 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  lib.UI_AniExplodeStar = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 24
    });
    var instance6 = new Graphic12(MovieClip.SYNCHED);var instance5 = new Graphic11(MovieClip.SYNCHED);var instance4 = new Graphic10(MovieClip.SYNCHED);var instance3 = new Graphic9(MovieClip.SYNCHED);var instance2 = new Graphic8(MovieClip.SYNCHED);var instance1 = new Graphic7(MovieClip.SYNCHED);this.addTimedChild(instance6, 0, 23, {
      "0": {
        x: -7.6,
        y: -38.7,
        sx: 0.283,
        sy: 0.283,
        r: -0.524,
        a: 0.7
      },
      "1": {
        x: -12.695,
        y: -42.909,
        sx: 0.273,
        sy: 0.273,
        r: -0.595,
        a: 0.66
      },
      "2": {
        x: -17.902,
        y: -47.078,
        sx: 0.264,
        sy: 0.264,
        r: -0.665,
        a: 0.62
      },
      "3": {
        x: -23.143,
        y: -51.331,
        sx: 0.255,
        sy: 0.255,
        r: -0.739,
        a: 0.58
      },
      "4": {
        x: -28.334,
        y: -55.528,
        sx: 0.246,
        sy: 0.246,
        r: -0.813,
        a: 0.55
      },
      "5": {
        x: -33.583,
        y: -59.761,
        sx: 0.237,
        sy: 0.237,
        r: -0.884,
        a: 0.51
      },
      "6": {
        x: -38.747,
        y: -63.909,
        sx: 0.229,
        sy: 0.229,
        r: -0.954,
        a: 0.47
      },
      "7": {
        x: -43.811,
        y: -68.037,
        sx: 0.22,
        sy: 0.22,
        r: -1.028,
        a: 0.43
      },
      "8": {
        x: -48.801,
        y: -72.012,
        sx: 0.211,
        sy: 0.211,
        r: -1.094,
        a: 0.39
      },
      "9": {
        x: -53.611,
        y: -75.961,
        sx: 0.203,
        sy: 0.203,
        r: -1.164,
        a: 0.36
      },
      "10": {
        x: -58.424,
        y: -79.74,
        sx: 0.195,
        sy: 0.195,
        r: -1.229,
        a: 0.32
      },
      "11": {
        x: -62.974,
        y: -83.465,
        sx: 0.187,
        sy: 0.187,
        r: -1.291,
        a: 0.29
      },
      "12": {
        x: -67.393,
        y: -87.027,
        sx: 0.179,
        sy: 0.179,
        r: -1.352,
        a: 0.25
      },
      "13": {
        x: -71.593,
        y: -90.384,
        sx: 0.172,
        sy: 0.172,
        r: -1.413,
        a: 0.22
      },
      "14": {
        x: -75.71,
        y: -93.708,
        sx: 0.165,
        sy: 0.165,
        r: -1.47,
        a: 0.2
      },
      "15": {
        x: -79.569,
        y: -96.797,
        sx: 0.158,
        sy: 0.158,
        r: -1.523,
        a: 0.16
      },
      "16": {
        x: -83.251,
        y: -99.798,
        sx: 0.152,
        sy: 0.152,
        r: -1.571,
        a: 0.14
      },
      "17": {
        x: -86.789,
        y: -102.637,
        sx: 0.146,
        sy: 0.146,
        r: -1.62,
        a: 0.11
      },
      "18": {
        x: -90.097,
        y: -105.364,
        sx: 0.14,
        sy: 0.14,
        r: -1.667,
        a: 0.09
      },
      "19": {
        x: -93.326,
        y: -107.885,
        sx: 0.134,
        sy: 0.134,
        r: -1.711,
        a: 0.06
      },
      "20": {
        x: -96.287,
        y: -110.289,
        sx: 0.129,
        sy: 0.129,
        r: -1.751,
        a: 0.04
      },
      "21": {
        x: -99.099,
        y: -112.561,
        sx: 0.124,
        sy: 0.124,
        r: -1.79,
        a: 0.02
      },
      "22": {
        x: -101.65,
        y: -114.5,
        sx: 0.12,
        sy: 0.12,
        r: -1.83,
        a: 0
      }
    }).addTimedChild(instance5, 0, 23, {
      "0": {
        x: -2.6,
        y: -22.55,
        sx: 0.373,
        sy: 0.373,
        r: -0.785,
        a: 0.6
      },
      "1": {
        x: -9.867,
        y: -19.154,
        sx: 0.361,
        sy: 0.361,
        r: -0.871,
        a: 0.57
      },
      "2": {
        x: -17.221,
        y: -15.746,
        sx: 0.349,
        sy: 0.349,
        r: -0.958,
        a: 0.54
      },
      "3": {
        x: -24.609,
        y: -12.214,
        sx: 0.337,
        sy: 0.337,
        r: -1.046,
        a: 0.5
      },
      "4": {
        x: -31.97,
        y: -8.734,
        sx: 0.325,
        sy: 0.325,
        r: -1.133,
        a: 0.47
      },
      "5": {
        x: -39.301,
        y: -5.229,
        sx: 0.313,
        sy: 0.313,
        r: -1.221,
        a: 0.44
      },
      "6": {
        x: -46.55,
        y: -1.762,
        sx: 0.301,
        sy: 0.301,
        r: -1.304,
        a: 0.4
      },
      "7": {
        x: -53.771,
        y: 1.566,
        sx: 0.29,
        sy: 0.29,
        r: -1.391,
        a: 0.37
      },
      "8": {
        x: -60.78,
        y: 4.956,
        sx: 0.278,
        sy: 0.278,
        r: -1.474,
        a: 0.34
      },
      "9": {
        x: -67.631,
        y: 8.178,
        sx: 0.267,
        sy: 0.267,
        r: -1.557,
        a: 0.31
      },
      "10": {
        x: -74.323,
        y: 11.335,
        sx: 0.256,
        sy: 0.256,
        r: -1.632,
        a: 0.28
      },
      "11": {
        x: -80.799,
        y: 14.442,
        sx: 0.246,
        sy: 0.246,
        r: -1.707,
        a: 0.25
      },
      "12": {
        x: -87.02,
        y: 17.441,
        sx: 0.235,
        sy: 0.235,
        r: -1.781,
        a: 0.22
      },
      "13": {
        x: -92.982,
        y: 20.233,
        sx: 0.226,
        sy: 0.226,
        r: -1.851,
        a: 0.19
      },
      "14": {
        x: -98.77,
        y: 22.956,
        sx: 0.216,
        sy: 0.216,
        r: -1.92,
        a: 0.17
      },
      "15": {
        x: -104.236,
        y: 25.568,
        sx: 0.207,
        sy: 0.207,
        r: -1.986,
        a: 0.14
      },
      "16": {
        x: -109.448,
        y: 28.022,
        sx: 0.199,
        sy: 0.199,
        r: -2.047,
        a: 0.12
      },
      "17": {
        x: -114.373,
        y: 30.423,
        sx: 0.19,
        sy: 0.19,
        r: -2.105,
        a: 0.1
      },
      "18": {
        x: -119.126,
        y: 32.613,
        sx: 0.183,
        sy: 0.183,
        r: -2.161,
        a: 0.07
      },
      "19": {
        x: -123.564,
        y: 34.808,
        sx: 0.175,
        sy: 0.175,
        r: -2.214,
        a: 0.05
      },
      "20": {
        x: -127.796,
        y: 36.852,
        sx: 0.169,
        sy: 0.169,
        r: -2.266,
        a: 0.04
      },
      "21": {
        x: -131.78,
        y: 38.732,
        sx: 0.162,
        sy: 0.162,
        r: -2.311,
        a: 0.02
      },
      "22": {
        x: -135.45,
        y: 40.4,
        sx: 0.156,
        sy: 0.156,
        r: -2.356,
        a: 0
      }
    }).addTimedChild(instance4, 0, 23, {
      "0": {
        x: 9.3,
        y: -22.45,
        sx: 0.283,
        sy: 0.283,
        r: 0,
        a: 0.9
      },
      "1": {
        x: 11.084,
        y: -14.551,
        sx: 0.27,
        sy: 0.27,
        r: 0.07,
        a: 0.85
      },
      "2": {
        x: 12.834,
        y: -6.455,
        sx: 0.258,
        sy: 0.258,
        r: 0.141,
        a: 0.8
      },
      "3": {
        x: 14.555,
        y: 1.605,
        sx: 0.246,
        sy: 0.246,
        r: 0.215,
        a: 0.75
      },
      "4": {
        x: 16.283,
        y: 9.721,
        sx: 0.233,
        sy: 0.233,
        r: 0.289,
        a: 0.7
      },
      "5": {
        x: 18.027,
        y: 17.775,
        sx: 0.221,
        sy: 0.221,
        r: 0.359,
        a: 0.65
      },
      "6": {
        x: 19.792,
        y: 25.731,
        sx: 0.209,
        sy: 0.209,
        r: 0.433,
        a: 0.6
      },
      "7": {
        x: 21.507,
        y: 33.682,
        sx: 0.197,
        sy: 0.197,
        r: 0.503,
        a: 0.55
      },
      "8": {
        x: 23.23,
        y: 41.356,
        sx: 0.185,
        sy: 0.185,
        r: 0.573,
        a: 0.5
      },
      "9": {
        x: 24.826,
        y: 48.891,
        sx: 0.174,
        sy: 0.174,
        r: 0.643,
        a: 0.46
      },
      "10": {
        x: 26.392,
        y: 56.235,
        sx: 0.162,
        sy: 0.162,
        r: 0.708,
        a: 0.41
      },
      "11": {
        x: 27.955,
        y: 63.336,
        sx: 0.152,
        sy: 0.152,
        r: 0.77,
        a: 0.37
      },
      "12": {
        x: 29.407,
        y: 70.133,
        sx: 0.141,
        sy: 0.141,
        r: 0.832,
        a: 0.33
      },
      "13": {
        x: 30.86,
        y: 76.777,
        sx: 0.131,
        sy: 0.131,
        r: 0.893,
        a: 0.29
      },
      "14": {
        x: 32.22,
        y: 83.083,
        sx: 0.121,
        sy: 0.121,
        r: 0.949,
        a: 0.25
      },
      "15": {
        x: 33.504,
        y: 89.063,
        sx: 0.112,
        sy: 0.112,
        r: 1.002,
        a: 0.21
      },
      "16": {
        x: 34.734,
        y: 94.855,
        sx: 0.104,
        sy: 0.104,
        r: 1.055,
        a: 0.18
      },
      "17": {
        x: 35.964,
        y: 100.237,
        sx: 0.095,
        sy: 0.095,
        r: 1.103,
        a: 0.14
      },
      "18": {
        x: 37.107,
        y: 105.496,
        sx: 0.087,
        sy: 0.087,
        r: 1.151,
        a: 0.11
      },
      "19": {
        x: 38.116,
        y: 110.414,
        sx: 0.08,
        sy: 0.08,
        r: 1.195,
        a: 0.08
      },
      "20": {
        x: 39.15,
        y: 115.075,
        sx: 0.073,
        sy: 0.073,
        r: 1.238,
        a: 0.05
      },
      "21": {
        x: 40.11,
        y: 119.414,
        sx: 0.066,
        sy: 0.066,
        r: 1.277,
        a: 0.02
      },
      "22": {
        x: 40.9,
        y: 123.5,
        sx: 0.06,
        sy: 0.06,
        r: 1.312,
        a: 0
      }
    }).addTimedChild(instance3, 0, 23, {
      "0": {
        x: 12.65,
        y: -29.85,
        sx: 0.283,
        sy: 0.283,
        kx: 0,
        ky: 0,
        r: 0.262,
        a: 0.7
      },
      "1": {
        x: 19.739,
        y: -26.966,
        sx: 0.271,
        sy: 0.271,
        r: 0.411,
        a: 0.66
      },
      "2": {
        x: 26.858,
        y: -24.099,
        sx: 0.259,
        sy: 0.259,
        r: 0.564,
        a: 0.62
      },
      "3": {
        x: 34.017,
        y: -21.164,
        sx: 0.247,
        sy: 0.247,
        r: 0.718,
        a: 0.58
      },
      "4": {
        x: 41.208,
        y: -18.207,
        sx: 0.235,
        sy: 0.235,
        r: 0.871,
        a: 0.55
      },
      "5": {
        x: 48.35,
        y: -15.221,
        sx: 0.224,
        sy: 0.224,
        r: 1.024,
        a: 0.51
      },
      "6": {
        x: 55.439,
        y: -12.386,
        sx: 0.212,
        sy: 0.212,
        r: 1.177,
        a: 0.47
      },
      "7": {
        x: 62.441,
        y: -9.49,
        sx: 0.201,
        sy: 0.201,
        r: 1.325,
        a: 0.43
      },
      "8": {
        x: 69.276,
        y: -6.715,
        sx: 0.19,
        sy: 0.19,
        r: 1.47,
        a: 0.39
      },
      "9": {
        x: 75.96,
        y: -3.956,
        sx: 0.179,
        sy: 0.179,
        kx: 4.673,
        ky: 1.611,
        r: 0,
        a: 0.36
      },
      "10": {
        x: 82.436,
        y: -1.324,
        sx: 0.168,
        sy: 0.168,
        kx: 4.533,
        ky: 1.75,
        a: 0.32
      },
      "11": {
        x: 88.762,
        y: 1.26,
        sx: 0.158,
        sy: 0.158,
        kx: 4.401,
        ky: 1.882,
        a: 0.29
      },
      "12": {
        x: 94.888,
        y: 3.684,
        sx: 0.147,
        sy: 0.147,
        kx: 4.27,
        ky: 2.013,
        a: 0.25
      },
      "13": {
        x: 100.719,
        y: 6.076,
        sx: 0.138,
        sy: 0.138,
        kx: 4.144,
        ky: 2.139,
        a: 0.22
      },
      "14": {
        x: 106.255,
        y: 8.401,
        sx: 0.129,
        sy: 0.129,
        kx: 4.026,
        ky: 2.258,
        a: 0.2
      },
      "15": {
        x: 111.613,
        y: 10.555,
        sx: 0.12,
        sy: 0.12,
        kx: 3.912,
        ky: 2.372,
        a: 0.16
      },
      "16": {
        x: 116.726,
        y: 12.644,
        sx: 0.112,
        sy: 0.112,
        kx: 3.802,
        ky: 2.481,
        a: 0.14
      },
      "17": {
        x: 121.564,
        y: 14.619,
        sx: 0.104,
        sy: 0.104,
        kx: 3.698,
        ky: 2.586,
        a: 0.11
      },
      "18": {
        x: 126.17,
        y: 16.514,
        sx: 0.096,
        sy: 0.096,
        kx: 3.601,
        ky: 2.682,
        a: 0.09
      },
      "19": {
        x: 130.557,
        y: 18.293,
        sx: 0.089,
        sy: 0.089,
        kx: 3.509,
        ky: 2.774,
        a: 0.06
      },
      "20": {
        x: 134.671,
        y: 19.992,
        sx: 0.082,
        sy: 0.082,
        kx: 3.421,
        ky: 2.862,
        a: 0.04
      },
      "21": {
        x: 138.55,
        y: 21.542,
        sx: 0.076,
        sy: 0.076,
        kx: 3.338,
        ky: 2.945,
        a: 0.02
      },
      "22": {
        x: 142.2,
        y: 23,
        sx: 0.07,
        sy: 0.07,
        kx: 3.261,
        ky: 3.023,
        a: 0
      }
    }).addTimedChild(instance2, 0, 23, {
      "0": {
        x: 7.55,
        y: -43.15,
        sx: 0.353,
        sy: 0.353,
        kx: 0,
        ky: 0,
        r: 0,
        a: 0.8
      },
      "1": {
        x: 15.211,
        y: -45.465,
        sx: 0.337,
        sy: 0.337,
        r: 0.171,
        a: 0.76
      },
      "2": {
        x: 22.957,
        y: -47.734,
        sx: 0.321,
        sy: 0.321,
        r: 0.342,
        a: 0.71
      },
      "3": {
        x: 30.755,
        y: -50.074,
        sx: 0.306,
        sy: 0.306,
        r: 0.517,
        a: 0.67
      },
      "4": {
        x: 38.546,
        y: -52.354,
        sx: 0.29,
        sy: 0.29,
        r: 0.692,
        a: 0.63
      },
      "5": {
        x: 46.27,
        y: -54.701,
        sx: 0.274,
        sy: 0.274,
        r: 0.866,
        a: 0.58
      },
      "6": {
        x: 53.989,
        y: -57.024,
        sx: 0.259,
        sy: 0.259,
        r: 1.038,
        a: 0.54
      },
      "7": {
        x: 61.529,
        y: -59.253,
        sx: 0.244,
        sy: 0.244,
        r: 1.208,
        a: 0.49
      },
      "8": {
        x: 68.969,
        y: -61.464,
        sx: 0.229,
        sy: 0.229,
        r: 1.374,
        a: 0.45
      },
      "9": {
        x: 76.162,
        y: -63.59,
        sx: 0.214,
        sy: 0.214,
        r: 1.539,
        a: 0.41
      },
      "10": {
        x: 83.231,
        y: -65.706,
        sx: 0.2,
        sy: 0.2,
        kx: 4.59,
        ky: 1.693,
        r: 0,
        a: 0.37
      },
      "11": {
        x: 90.054,
        y: -67.763,
        sx: 0.186,
        sy: 0.186,
        kx: 4.437,
        ky: 1.846,
        a: 0.33
      },
      "12": {
        x: 96.664,
        y: -69.677,
        sx: 0.173,
        sy: 0.173,
        kx: 4.292,
        ky: 1.991,
        a: 0.29
      },
      "13": {
        x: 102.933,
        y: -71.617,
        sx: 0.16,
        sy: 0.16,
        kx: 4.148,
        ky: 2.135,
        a: 0.26
      },
      "14": {
        x: 109.062,
        y: -73.407,
        sx: 0.148,
        sy: 0.148,
        kx: 4.012,
        ky: 2.271,
        a: 0.22
      },
      "15": {
        x: 114.842,
        y: -75.156,
        sx: 0.136,
        sy: 0.136,
        kx: 3.881,
        ky: 2.402,
        a: 0.19
      },
      "16": {
        x: 120.33,
        y: -76.743,
        sx: 0.125,
        sy: 0.125,
        kx: 3.758,
        ky: 2.525,
        a: 0.16
      },
      "17": {
        x: 125.56,
        y: -78.293,
        sx: 0.115,
        sy: 0.115,
        kx: 3.64,
        ky: 2.643,
        a: 0.13
      },
      "18": {
        x: 130.584,
        y: -79.838,
        sx: 0.105,
        sy: 0.105,
        kx: 3.53,
        ky: 2.753,
        a: 0.1
      },
      "19": {
        x: 135.266,
        y: -81.23,
        sx: 0.095,
        sy: 0.095,
        kx: 3.422,
        ky: 2.861,
        a: 0.07
      },
      "20": {
        x: 139.723,
        y: -82.473,
        sx: 0.086,
        sy: 0.086,
        kx: 3.322,
        ky: 2.962,
        a: 0.05
      },
      "21": {
        x: 143.973,
        y: -83.808,
        sx: 0.078,
        sy: 0.078,
        kx: 3.229,
        ky: 3.054,
        a: 0.02
      },
      "22": {
        x: 147.9,
        y: -85,
        sx: 0.07,
        sy: 0.07,
        kx: 3.142,
        ky: 3.142,
        a: 0
      }
    }).addTimedChild(instance1, 0, 23, {
      "0": {
        x: 1.7,
        y: -36.9,
        sx: 0.283,
        sy: 0.283,
        kx: 0,
        ky: 0,
        r: 0,
        a: 0.7
      },
      "1": {
        x: 2.598,
        y: -43.597,
        sx: 0.276,
        sy: 0.276,
        r: 0.127,
        a: 0.66
      },
      "2": {
        x: 3.446,
        y: -50.254,
        sx: 0.27,
        sy: 0.27,
        r: 0.254,
        a: 0.63
      },
      "3": {
        x: 4.225,
        y: -56.976,
        sx: 0.263,
        sy: 0.263,
        r: 0.381,
        a: 0.6
      },
      "4": {
        x: 5.025,
        y: -63.725,
        sx: 0.256,
        sy: 0.256,
        r: 0.512,
        a: 0.56
      },
      "5": {
        x: 5.901,
        y: -70.522,
        sx: 0.25,
        sy: 0.25,
        r: 0.639,
        a: 0.53
      },
      "6": {
        x: 6.698,
        y: -77.275,
        sx: 0.243,
        sy: 0.243,
        r: 0.77,
        a: 0.49
      },
      "7": {
        x: 7.54,
        y: -84.007,
        sx: 0.237,
        sy: 0.237,
        r: 0.897,
        a: 0.46
      },
      "8": {
        x: 8.401,
        y: -90.742,
        sx: 0.23,
        sy: 0.23,
        r: 1.028,
        a: 0.43
      },
      "9": {
        x: 9.225,
        y: -97.374,
        sx: 0.224,
        sy: 0.224,
        r: 1.155,
        a: 0.39
      },
      "10": {
        x: 10.093,
        y: -103.948,
        sx: 0.218,
        sy: 0.218,
        r: 1.282,
        a: 0.36
      },
      "11": {
        x: 10.865,
        y: -110.466,
        sx: 0.211,
        sy: 0.211,
        r: 1.404,
        a: 0.32
      },
      "12": {
        x: 11.612,
        y: -116.897,
        sx: 0.205,
        sy: 0.205,
        r: 1.527,
        a: 0.29
      },
      "13": {
        x: 12.422,
        y: -123.174,
        sx: 0.199,
        sy: 0.199,
        kx: 4.638,
        ky: 1.645,
        r: 0,
        a: 0.26
      },
      "14": {
        x: 13.201,
        y: -129.392,
        sx: 0.193,
        sy: 0.193,
        kx: 4.52,
        ky: 1.763,
        a: 0.23
      },
      "15": {
        x: 13.981,
        y: -135.505,
        sx: 0.187,
        sy: 0.187,
        kx: 4.406,
        ky: 1.878,
        a: 0.2
      },
      "16": {
        x: 14.711,
        y: -141.43,
        sx: 0.181,
        sy: 0.181,
        kx: 4.289,
        ky: 1.995,
        a: 0.17
      },
      "17": {
        x: 15.39,
        y: -147.285,
        sx: 0.176,
        sy: 0.176,
        kx: 4.179,
        ky: 2.104,
        a: 0.14
      },
      "18": {
        x: 16.148,
        y: -152.976,
        sx: 0.17,
        sy: 0.17,
        kx: 4.069,
        ky: 2.214,
        a: 0.11
      },
      "19": {
        x: 16.829,
        y: -158.502,
        sx: 0.165,
        sy: 0.165,
        kx: 3.964,
        ky: 2.319,
        a: 0.08
      },
      "20": {
        x: 17.473,
        y: -163.944,
        sx: 0.159,
        sy: 0.159,
        kx: 3.86,
        ky: 2.423,
        a: 0.05
      },
      "21": {
        x: 18.171,
        y: -169.115,
        sx: 0.154,
        sy: 0.154,
        kx: 3.762,
        ky: 2.521,
        a: 0.03
      },
      "22": {
        x: 18.7,
        y: -174.25,
        sx: 0.15,
        sy: 0.15,
        kx: 3.665,
        ky: 2.618,
        a: 0
      }
    }).addAction(function () {
      this.stop();
    }, 23);
  });

  lib.UI_FxEatItem = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 21,
      labels: {
        normal: 0,
        trigger: 20
      }
    });
    var instance1 = new lib.fx_items();this[instance1.name = "item"] = instance1;var instance2 = new lib.UI_AniExplodeStar().setTransform(-0.35, -1.2);this[instance2.name = "explode"] = instance2;this.addTimedChild(instance1, 0, 20, {
      "0": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        r: -0.017
      },
      "1": {
        x: 0.05,
        sx: 0.994,
        sy: 0.994,
        r: -0.013
      },
      "2": {
        y: -0.05,
        sx: 0.989,
        sy: 0.989,
        r: -0.009
      },
      "3": {
        y: 0,
        sx: 0.983,
        sy: 0.983,
        r: -0.005
      },
      "4": {
        x: 0.1,
        sx: 0.978,
        sy: 0.978,
        r: -0.001
      },
      "5": {
        x: 0.15,
        y: 0.05,
        sx: 0.972,
        sy: 0.972,
        r: 0
      },
      "6": {
        x: 0.2,
        sx: 0.967,
        sy: 0.967,
        r: 0.005
      },
      "7": {
        y: 0.1,
        sx: 0.961,
        sy: 0.961,
        r: 0.009
      },
      "8": {
        y: 0.05,
        sx: 0.955,
        sy: 0.955,
        r: 0.013
      },
      "9": {
        x: 0,
        y: 0,
        sx: 0.95,
        sy: 0.95,
        r: 0.017
      },
      "10": {
        y: -0.05,
        sx: 0.955,
        sy: 0.955,
        r: 0.013
      },
      "11": {
        sx: 0.96,
        sy: 0.96,
        r: 0.009
      },
      "12": {
        sx: 0.965,
        sy: 0.965,
        r: 0.005
      },
      "13": {
        y: -0.1,
        sx: 0.97,
        sy: 0.97,
        r: 0.001
      },
      "14": {
        x: -0.05,
        y: -0.05,
        sx: 0.975,
        sy: 0.975,
        r: 0
      },
      "15": {
        x: -0.15,
        y: -0.15,
        sx: 0.98,
        sy: 0.98,
        r: -0.001
      },
      "16": {
        sx: 0.985,
        sy: 0.985,
        r: -0.005
      },
      "17": {
        y: -0.2,
        sx: 0.99,
        sy: 0.99,
        r: -0.009
      },
      "18": {
        y: -0.15,
        sx: 0.995,
        sy: 0.995,
        r: -0.013
      },
      "19": {
        x: 0,
        y: 0,
        sx: 1,
        sy: 1,
        r: -0.017
      }
    }).addTimedChild(instance2, 20, 1).addAction(function () {
      this.gotoAndPlay(0);
    }, 19).addAction(function () {
      this.stop();
    }, 20);
  });

  lib.UI_BtnPause = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/pause.png")).setTransform(0, 0, 0.574, 0.574);this.addChild(instance1);
  });

  lib.UI_Heart = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      labels: {
        on: 0,
        off: 1
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/heart_on.png"));var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/heart_off.png"));this.addTimedChild(instance1, 0, 1).addTimedChild(instance2, 1, 1).addAction(function () {
      this.selfAdvance = false;
    }, 0);
  });

  lib.UI_HeartGroup = Container.extend(function () {
    Container.call(this);
    var instance4 = new lib.UI_Heart();var instance3 = new lib.UI_Heart().setTransform(50);var instance2 = new lib.UI_Heart().setTransform(100);var instance1 = new lib.UI_Heart().setTransform(150.05);this.addChild(instance4, instance3, instance2, instance1);
  });

  lib.UI_PlayViewHud = Container.extend(function () {
    Container.call(this);
    var instance4 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/tab_bg1.png")).setTransform(0, 0, 249.997);var instance3 = new lib.UI_HeartGroup().setTransform(17, 21);this[instance3.name = "hearts"] = instance3;var instance2 = new Text("1234567890").setStyle({
      fontFamily: "Source Code Pro",
      fontSize: 30,
      fill: "#923200"
    }).setTransform(220.1, 23);this[instance2.name = "tfScore"] = instance2;var instance1 = new lib.UI_BtnPause().setTransform(674.65, 6.1, 1.103, 1.103);this[instance1.name = "btnPause"] = instance1;this.addChild(instance4, instance3, instance2, instance1);
  });

  lib.UI_Cloud = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/cloud.png")).setTransform(-56, -22);this.addChild(instance1);
  });

  var Graphic13 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic14 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic15 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic16 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic17 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  lib.UI_Chocolate = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 21,
      labels: {
        normal: 0,
        trigger: 1
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/choco.png"));var instance6 = new Graphic17(MovieClip.SYNCHED);var instance5 = new Graphic16(MovieClip.SYNCHED);var instance4 = new Graphic15(MovieClip.SYNCHED);var instance3 = new Graphic14(MovieClip.SYNCHED);var instance2 = new Graphic13(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -36,
        y: -61,
        sx: 0.783,
        sy: 0.783
      }
    }).addTimedChild(instance6, 1, 19, {
      "1": {
        x: -26.6,
        y: -30.75,
        sx: 0.196,
        sy: 0.196,
        a: 1,
        c: [0, 0.59, 0, 0.39, 0, 0.31]
      },
      "2": {
        x: -40.85,
        y: -20.197,
        sx: 0.187,
        sy: 0.187,
        a: 0.85
      },
      "3": {
        x: -54.359,
        y: -10.162,
        sx: 0.178,
        sy: 0.178,
        a: 0.71
      },
      "4": {
        x: -66.636,
        y: -1.014,
        sx: 0.169,
        sy: 0.169,
        a: 0.58
      },
      "5": {
        x: -77.308,
        y: 6.916,
        sx: 0.162,
        sy: 0.162,
        a: 0.47
      },
      "6": {
        x: -86.238,
        y: 13.565,
        sx: 0.156,
        sy: 0.156,
        a: 0.38
      },
      "7": {
        x: -93.657,
        y: 19.101,
        sx: 0.151,
        sy: 0.151,
        a: 0.3
      },
      "8": {
        x: -99.751,
        y: 23.594,
        sx: 0.147,
        sy: 0.147,
        a: 0.24
      },
      "9": {
        x: -104.746,
        y: 27.32,
        sx: 0.144,
        sy: 0.144,
        a: 0.18
      },
      "10": {
        x: -108.774,
        y: 30.35,
        sx: 0.141,
        sy: 0.141,
        a: 0.14
      },
      "11": {
        x: -112.075,
        y: 32.796,
        sx: 0.139,
        sy: 0.139,
        a: 0.11
      },
      "12": {
        x: -114.729,
        y: 34.731,
        sx: 0.137,
        sy: 0.137,
        a: 0.08
      },
      "13": {
        x: -116.834,
        y: 36.355,
        sx: 0.135,
        sy: 0.135,
        a: 0.06
      },
      "14": {
        x: -118.527,
        y: 37.587,
        sx: 0.134,
        sy: 0.134,
        a: 0.04
      },
      "15": {
        x: -119.905,
        y: 38.628,
        sx: 0.133,
        sy: 0.133,
        a: 0.03
      },
      "16": {
        x: -120.914,
        y: 39.383,
        a: 0.02
      },
      "17": {
        x: -121.648,
        y: 39.91,
        sx: 0.132,
        sy: 0.132,
        a: 0.01
      },
      "18": {
        x: -122.102,
        y: 40.262,
        a: 0
      },
      "19": {
        x: -122.35,
        y: 40.5
      }
    }).addTimedChild(instance5, 1, 19, {
      "1": {
        x: -12.55,
        y: -41.25,
        sx: 0.282,
        sy: 0.282,
        a: 1,
        c: [0, 0.33, 0, 0.14, 0, 0.06]
      },
      "2": {
        x: -19.894,
        y: -53.32,
        sx: 0.254,
        sy: 0.254,
        a: 0.85
      },
      "3": {
        x: -26.797,
        y: -64.836,
        sx: 0.227,
        sy: 0.227,
        a: 0.71
      },
      "4": {
        x: -33.16,
        y: -75.216,
        sx: 0.202,
        sy: 0.202,
        a: 0.58
      },
      "5": {
        x: -38.617,
        y: -84.316,
        sx: 0.181,
        sy: 0.181,
        a: 0.47
      },
      "6": {
        x: -43.224,
        y: -91.859,
        sx: 0.163,
        sy: 0.163,
        a: 0.38
      },
      "7": {
        x: -47.068,
        y: -98.201,
        sx: 0.149,
        sy: 0.149,
        a: 0.3
      },
      "8": {
        x: -50.229,
        y: -103.331,
        sx: 0.136,
        sy: 0.136,
        a: 0.24
      },
      "9": {
        x: -52.74,
        y: -107.538,
        sx: 0.127,
        sy: 0.127,
        a: 0.18
      },
      "10": {
        x: -54.832,
        y: -111.01,
        sx: 0.119,
        sy: 0.119,
        a: 0.14
      },
      "11": {
        x: -56.54,
        y: -113.802,
        sx: 0.112,
        sy: 0.112,
        a: 0.11
      },
      "12": {
        x: -57.854,
        y: -116.077,
        sx: 0.107,
        sy: 0.107,
        a: 0.08
      },
      "13": {
        x: -59.015,
        y: -117.853,
        sx: 0.102,
        sy: 0.102,
        a: 0.06
      },
      "14": {
        x: -59.864,
        y: -119.36,
        sx: 0.099,
        sy: 0.099,
        a: 0.04
      },
      "15": {
        x: -60.547,
        y: -120.423,
        sx: 0.096,
        sy: 0.096,
        a: 0.03
      },
      "16": {
        x: -61.108,
        y: -121.332,
        sx: 0.094,
        sy: 0.094,
        a: 0.02
      },
      "17": {
        x: -61.444,
        y: -121.92,
        sx: 0.093,
        sy: 0.093,
        a: 0.01
      },
      "18": {
        x: -61.701,
        y: -122.329,
        sx: 0.092,
        sy: 0.092,
        a: 0
      },
      "19": {
        x: -61.75,
        y: -122.5
      }
    }).addTimedChild(instance4, 1, 19, {
      "1": {
        x: -3.45,
        y: -30.75,
        sx: 0.196,
        sy: 0.196,
        a: 1,
        c: [0, 0.55, 0, 0.32, 0, 0.3]
      },
      "2": {
        x: -0.311,
        y: -13.226,
        sx: 0.177,
        sy: 0.177,
        a: 0.85
      },
      "3": {
        x: 2.763,
        y: 3.506,
        sx: 0.159,
        sy: 0.159,
        a: 0.71
      },
      "4": {
        x: 5.456,
        y: 18.671,
        sx: 0.142,
        sy: 0.142,
        a: 0.58
      },
      "5": {
        x: 7.86,
        y: 31.889,
        sx: 0.127,
        sy: 0.127,
        a: 0.47
      },
      "6": {
        x: 9.875,
        y: 43.001,
        sx: 0.115,
        sy: 0.115,
        a: 0.38
      },
      "7": {
        x: 11.502,
        y: 52.181,
        sx: 0.105,
        sy: 0.105,
        a: 0.3
      },
      "8": {
        x: 12.898,
        y: 59.676,
        sx: 0.097,
        sy: 0.097,
        a: 0.24
      },
      "9": {
        x: 14.016,
        y: 65.835,
        sx: 0.09,
        sy: 0.09,
        a: 0.18
      },
      "10": {
        x: 14.913,
        y: 70.845,
        sx: 0.085,
        sy: 0.085,
        a: 0.14
      },
      "11": {
        x: 15.642,
        y: 74.898,
        sx: 0.08,
        sy: 0.08,
        a: 0.11
      },
      "12": {
        x: 16.205,
        y: 78.164,
        sx: 0.077,
        sy: 0.077,
        a: 0.08
      },
      "13": {
        x: 16.706,
        y: 80.821,
        sx: 0.074,
        sy: 0.074,
        a: 0.06
      },
      "14": {
        x: 17.097,
        y: 82.934,
        sx: 0.071,
        sy: 0.071,
        a: 0.04
      },
      "15": {
        x: 17.379,
        y: 84.616,
        sx: 0.069,
        sy: 0.069,
        a: 0.03
      },
      "16": {
        x: 17.603,
        y: 85.829,
        sx: 0.068,
        sy: 0.068,
        a: 0.02
      },
      "17": {
        x: 17.82,
        y: 86.734,
        sx: 0.067,
        sy: 0.067,
        a: 0.01
      },
      "18": {
        x: 17.882,
        y: 87.339,
        sx: 0.066,
        sy: 0.066,
        a: 0
      },
      "19": {
        x: 17.95,
        y: 87.7
      }
    }).addTimedChild(instance3, 1, 19, {
      "1": {
        x: 9.1,
        y: -45.45,
        sx: 0.282,
        sy: 0.282,
        a: 1,
        c: [0, 0.59, 0, 0.39, 0, 0.31]
      },
      "2": {
        x: 23.425,
        y: -52.08,
        sx: 0.265,
        sy: 0.265,
        a: 0.85
      },
      "3": {
        x: 37.075,
        y: -58.431,
        sx: 0.25,
        sy: 0.25,
        a: 0.71
      },
      "4": {
        x: 49.422,
        y: -64.117,
        sx: 0.236,
        sy: 0.236,
        a: 0.58
      },
      "5": {
        x: 60.178,
        y: -69.049,
        sx: 0.224,
        sy: 0.224,
        a: 0.47
      },
      "6": {
        x: 69.197,
        y: -73.245,
        sx: 0.213,
        sy: 0.213,
        a: 0.38
      },
      "7": {
        x: 76.673,
        y: -76.676,
        sx: 0.205,
        sy: 0.205,
        a: 0.3
      },
      "8": {
        x: 82.798,
        y: -79.504,
        sx: 0.198,
        sy: 0.198,
        a: 0.24
      },
      "9": {
        x: 87.814,
        y: -81.836,
        sx: 0.192,
        sy: 0.192,
        a: 0.18
      },
      "10": {
        x: 91.915,
        y: -83.74,
        sx: 0.188,
        sy: 0.188,
        a: 0.14
      },
      "11": {
        x: 95.193,
        y: -85.282,
        sx: 0.184,
        sy: 0.184,
        a: 0.11
      },
      "12": {
        x: 97.894,
        y: -86.489,
        sx: 0.181,
        sy: 0.181,
        a: 0.08
      },
      "13": {
        x: 100.015,
        y: -87.495,
        sx: 0.178,
        sy: 0.178,
        a: 0.06
      },
      "14": {
        x: 101.752,
        y: -88.28,
        sx: 0.177,
        sy: 0.177,
        a: 0.04
      },
      "15": {
        x: 103.103,
        y: -88.936,
        sx: 0.175,
        sy: 0.175,
        a: 0.03
      },
      "16": {
        x: 104.117,
        y: -89.352,
        sx: 0.174,
        sy: 0.174,
        a: 0.02
      },
      "17": {
        x: 104.839,
        y: -89.717,
        sx: 0.173,
        sy: 0.173,
        a: 0.01
      },
      "18": {
        x: 105.322,
        y: -89.928,
        sx: 0.172,
        sy: 0.172,
        a: 0
      },
      "19": {
        x: 105.55,
        y: -90
      }
    }).addTimedChild(instance2, 1, 19, {
      "1": {
        x: 25.05,
        y: -42.1,
        sx: 0.155,
        sy: 0.155,
        a: 1,
        c: [0, 0.65, 0, 0.44, 0, 0.36]
      },
      "2": {
        x: 42.187,
        y: -34.682,
        sx: 0.142,
        sy: 0.142,
        a: 0.85
      },
      "3": {
        x: 58.472,
        y: -27.58,
        sx: 0.13,
        sy: 0.13,
        a: 0.71
      },
      "4": {
        x: 73.288,
        y: -21.182,
        sx: 0.119,
        sy: 0.119,
        a: 0.58
      },
      "5": {
        x: 86.092,
        y: -15.633,
        sx: 0.109,
        sy: 0.109,
        a: 0.47
      },
      "6": {
        x: 96.887,
        y: -10.89,
        sx: 0.101,
        sy: 0.101,
        a: 0.38
      },
      "7": {
        x: 105.81,
        y: -7.03,
        sx: 0.095,
        sy: 0.095,
        a: 0.3
      },
      "8": {
        x: 113.127,
        y: -3.847,
        sx: 0.089,
        sy: 0.089,
        a: 0.24
      },
      "9": {
        x: 119.156,
        y: -1.234,
        sx: 0.085,
        sy: 0.085,
        a: 0.18
      },
      "10": {
        x: 124.018,
        y: 0.904,
        sx: 0.081,
        sy: 0.081,
        a: 0.14
      },
      "11": {
        x: 127.989,
        y: 2.609,
        sx: 0.078,
        sy: 0.078,
        a: 0.11
      },
      "12": {
        x: 131.201,
        y: 4.011,
        sx: 0.076,
        sy: 0.076,
        a: 0.08
      },
      "13": {
        x: 133.739,
        y: 5.185,
        sx: 0.074,
        sy: 0.074,
        a: 0.06
      },
      "14": {
        x: 135.842,
        y: 6,
        sx: 0.072,
        sy: 0.072,
        a: 0.04
      },
      "15": {
        x: 137.449,
        y: 6.724,
        sx: 0.071,
        sy: 0.071,
        a: 0.03
      },
      "16": {
        x: 138.653,
        y: 7.269,
        sx: 0.07,
        sy: 0.07,
        a: 0.02
      },
      "17": {
        x: 139.55,
        y: 7.643,
        sx: 0.069,
        sy: 0.069,
        a: 0.01
      },
      "18": {
        x: 140.078,
        y: 7.864,
        a: 0
      },
      "19": {
        x: 140.4,
        y: 8.05
      }
    }).addAction(function () {
      this.stop();
    }, 0).addAction(function () {
      this.stop();
    }, 20);
  });

  var Graphic18 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic19 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic20 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic21 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  var Graphic22 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  lib.coin = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/road/coin.png")).setTransform(0, 0, 0.78, 0.78);this.addChild(instance1);
  });

  var Graphic23 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 23, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  lib.UI_Coin = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 48,
      labels: {
        normal: 0,
        trigger: 24
      }
    });
    var instance1 = new lib.coin();var instance7 = new Graphic23(MovieClip.SYNCHED);var instance6 = new Graphic22(MovieClip.SYNCHED);var instance5 = new Graphic21(MovieClip.SYNCHED);var instance4 = new Graphic20(MovieClip.SYNCHED);var instance3 = new Graphic19(MovieClip.SYNCHED);var instance2 = new Graphic18(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 24, {
      "0": {
        x: -20,
        y: -68,
        sy: 1,
        r: 0
      },
      "1": {
        x: -19.963,
        y: -68.481,
        sy: 1.007,
        r: 0.001
      },
      "2": {
        x: -19.876,
        y: -68.814,
        sy: 1.014
      },
      "3": {
        x: -19.761,
        y: -69.361,
        sy: 1.021,
        r: 0.005
      },
      "4": {
        x: -19.721,
        y: -69.744,
        sy: 1.028
      },
      "5": {
        x: -19.55,
        y: -70.288,
        sy: 1.035,
        r: 0.009
      },
      "6": {
        x: -19.456,
        y: -70.62,
        sy: 1.042,
        r: 0.01
      },
      "7": {
        x: -19.328,
        y: -71.165,
        sy: 1.049,
        r: 0.014
      },
      "8": {
        x: -19.25,
        y: -71.5,
        sy: 1.056,
        r: 0.017
      },
      "9": {
        x: -19.294,
        y: -71.228,
        sy: 1.052,
        r: 0.014
      },
      "10": {
        x: -19.318,
        y: -71.025,
        sy: 1.048
      },
      "11": {
        x: -19.292,
        y: -70.82,
        sy: 1.044,
        r: 0.013
      },
      "12": {
        x: -19.495,
        y: -70.452,
        sy: 1.041,
        r: 0.01
      },
      "13": {
        x: -19.518,
        y: -70.296,
        sy: 1.037,
        r: 0.009
      },
      "14": {
        x: -19.541,
        y: -70.04,
        sy: 1.033
      },
      "15": {
        x: -19.512,
        y: -69.886,
        sy: 1.03
      },
      "16": {
        x: -19.713,
        y: -69.516,
        sy: 1.026,
        r: 0.005
      },
      "17": {
        x: -19.735,
        y: -69.311,
        sy: 1.022
      },
      "18": {
        x: -19.755,
        y: -69.106,
        sy: 1.018
      },
      "19": {
        x: -19.726,
        y: -68.899,
        sy: 1.015,
        r: 0.004
      },
      "20": {
        x: -19.921,
        y: -68.529,
        sy: 1.011,
        r: 0.001
      },
      "21": {
        x: -19.94,
        y: -68.373,
        sy: 1.007
      },
      "22": {
        x: -19.959,
        y: -68.119,
        sy: 1.004,
        r: 0
      },
      "23": {
        x: -20,
        y: -68,
        sy: 1
      }
    }).addTimedChild(instance7, 24, 23, {
      "24": {
        x: -7.6,
        y: -38.7,
        sx: 0.283,
        sy: 0.283,
        r: -0.524,
        a: 1,
        c: [0, 1, 0, 0.64, 0, 0.94]
      },
      "25": {
        x: -12.695,
        y: -42.909,
        sx: 0.273,
        sy: 0.273,
        r: -0.595,
        a: 0.95
      },
      "26": {
        x: -17.902,
        y: -47.078,
        sx: 0.264,
        sy: 0.264,
        r: -0.665,
        a: 0.89
      },
      "27": {
        x: -23.143,
        y: -51.331,
        sx: 0.255,
        sy: 0.255,
        r: -0.739,
        a: 0.84
      },
      "28": {
        x: -28.334,
        y: -55.528,
        sx: 0.246,
        sy: 0.246,
        r: -0.813,
        a: 0.78
      },
      "29": {
        x: -33.583,
        y: -59.761,
        sx: 0.237,
        sy: 0.237,
        r: -0.884,
        a: 0.72
      },
      "30": {
        x: -38.747,
        y: -63.909,
        sx: 0.229,
        sy: 0.229,
        r: -0.954,
        a: 0.67
      },
      "31": {
        x: -43.811,
        y: -68.037,
        sx: 0.22,
        sy: 0.22,
        r: -1.028,
        a: 0.62
      },
      "32": {
        x: -48.801,
        y: -72.012,
        sx: 0.211,
        sy: 0.211,
        r: -1.094,
        a: 0.56
      },
      "33": {
        x: -53.611,
        y: -75.961,
        sx: 0.203,
        sy: 0.203,
        r: -1.164,
        a: 0.51
      },
      "34": {
        x: -58.424,
        y: -79.74,
        sx: 0.195,
        sy: 0.195,
        r: -1.229,
        a: 0.46
      },
      "35": {
        x: -62.974,
        y: -83.465,
        sx: 0.187,
        sy: 0.187,
        r: -1.291,
        a: 0.41
      },
      "36": {
        x: -67.393,
        y: -87.027,
        sx: 0.179,
        sy: 0.179,
        r: -1.352,
        a: 0.37
      },
      "37": {
        x: -71.593,
        y: -90.384,
        sx: 0.172,
        sy: 0.172,
        r: -1.413,
        a: 0.32
      },
      "38": {
        x: -75.71,
        y: -93.708,
        sx: 0.165,
        sy: 0.165,
        r: -1.47,
        a: 0.28
      },
      "39": {
        x: -79.569,
        y: -96.797,
        sx: 0.158,
        sy: 0.158,
        r: -1.523,
        a: 0.23
      },
      "40": {
        x: -83.251,
        y: -99.798,
        sx: 0.152,
        sy: 0.152,
        r: -1.571,
        a: 0.2
      },
      "41": {
        x: -86.789,
        y: -102.637,
        sx: 0.146,
        sy: 0.146,
        r: -1.62,
        a: 0.16
      },
      "42": {
        x: -90.097,
        y: -105.364,
        sx: 0.14,
        sy: 0.14,
        r: -1.667,
        a: 0.13
      },
      "43": {
        x: -93.326,
        y: -107.885,
        sx: 0.134,
        sy: 0.134,
        r: -1.711,
        a: 0.09
      },
      "44": {
        x: -96.287,
        y: -110.289,
        sx: 0.129,
        sy: 0.129,
        r: -1.751,
        a: 0.06
      },
      "45": {
        x: -99.099,
        y: -112.561,
        sx: 0.124,
        sy: 0.124,
        r: -1.79,
        a: 0.03
      },
      "46": {
        x: -101.65,
        y: -114.5,
        sx: 0.12,
        sy: 0.12,
        r: -1.83,
        a: 0
      }
    }).addTimedChild(instance6, 24, 23, {
      "24": {
        x: -2.6,
        y: -22.55,
        sx: 0.373,
        sy: 0.373,
        r: -0.785,
        a: 1,
        c: [0, 1, 0, 0.55, 0, 0.72]
      },
      "25": {
        x: -9.867,
        y: -19.154,
        sx: 0.361,
        sy: 0.361,
        r: -0.871,
        a: 0.95
      },
      "26": {
        x: -17.221,
        y: -15.746,
        sx: 0.349,
        sy: 0.349,
        r: -0.958,
        a: 0.89
      },
      "27": {
        x: -24.609,
        y: -12.214,
        sx: 0.337,
        sy: 0.337,
        r: -1.046,
        a: 0.84
      },
      "28": {
        x: -31.97,
        y: -8.734,
        sx: 0.325,
        sy: 0.325,
        r: -1.133,
        a: 0.78
      },
      "29": {
        x: -39.301,
        y: -5.229,
        sx: 0.313,
        sy: 0.313,
        r: -1.221,
        a: 0.72
      },
      "30": {
        x: -46.55,
        y: -1.762,
        sx: 0.301,
        sy: 0.301,
        r: -1.304,
        a: 0.67
      },
      "31": {
        x: -53.771,
        y: 1.566,
        sx: 0.29,
        sy: 0.29,
        r: -1.391,
        a: 0.62
      },
      "32": {
        x: -60.78,
        y: 4.956,
        sx: 0.278,
        sy: 0.278,
        r: -1.474,
        a: 0.56
      },
      "33": {
        x: -67.631,
        y: 8.178,
        sx: 0.267,
        sy: 0.267,
        r: -1.557,
        a: 0.51
      },
      "34": {
        x: -74.323,
        y: 11.335,
        sx: 0.256,
        sy: 0.256,
        r: -1.632,
        a: 0.46
      },
      "35": {
        x: -80.799,
        y: 14.442,
        sx: 0.246,
        sy: 0.246,
        r: -1.707,
        a: 0.41
      },
      "36": {
        x: -87.02,
        y: 17.441,
        sx: 0.235,
        sy: 0.235,
        r: -1.781,
        a: 0.37
      },
      "37": {
        x: -92.982,
        y: 20.233,
        sx: 0.226,
        sy: 0.226,
        r: -1.851,
        a: 0.32
      },
      "38": {
        x: -98.77,
        y: 22.956,
        sx: 0.216,
        sy: 0.216,
        r: -1.92,
        a: 0.28
      },
      "39": {
        x: -104.236,
        y: 25.568,
        sx: 0.207,
        sy: 0.207,
        r: -1.986,
        a: 0.23
      },
      "40": {
        x: -109.448,
        y: 28.022,
        sx: 0.199,
        sy: 0.199,
        r: -2.047,
        a: 0.2
      },
      "41": {
        x: -114.373,
        y: 30.423,
        sx: 0.19,
        sy: 0.19,
        r: -2.105,
        a: 0.16
      },
      "42": {
        x: -119.126,
        y: 32.613,
        sx: 0.183,
        sy: 0.183,
        r: -2.161,
        a: 0.13
      },
      "43": {
        x: -123.564,
        y: 34.808,
        sx: 0.175,
        sy: 0.175,
        r: -2.214,
        a: 0.09
      },
      "44": {
        x: -127.796,
        y: 36.852,
        sx: 0.169,
        sy: 0.169,
        r: -2.266,
        a: 0.06
      },
      "45": {
        x: -131.78,
        y: 38.732,
        sx: 0.162,
        sy: 0.162,
        r: -2.311,
        a: 0.03
      },
      "46": {
        x: -135.45,
        y: 40.4,
        sx: 0.156,
        sy: 0.156,
        r: -2.356,
        a: 0
      }
    }).addTimedChild(instance5, 24, 23, {
      "24": {
        x: 9.3,
        y: -22.45,
        sx: 0.283,
        sy: 0.283,
        r: 0,
        a: 1,
        c: [0, 0.89, 0, 0.49, 0, 0.61]
      },
      "25": {
        x: 11.084,
        y: -14.551,
        sx: 0.27,
        sy: 0.27,
        r: 0.07,
        a: 0.95
      },
      "26": {
        x: 12.834,
        y: -6.455,
        sx: 0.258,
        sy: 0.258,
        r: 0.141,
        a: 0.89
      },
      "27": {
        x: 14.555,
        y: 1.605,
        sx: 0.246,
        sy: 0.246,
        r: 0.215,
        a: 0.84
      },
      "28": {
        x: 16.283,
        y: 9.721,
        sx: 0.233,
        sy: 0.233,
        r: 0.289,
        a: 0.78
      },
      "29": {
        x: 18.027,
        y: 17.775,
        sx: 0.221,
        sy: 0.221,
        r: 0.359,
        a: 0.72
      },
      "30": {
        x: 19.792,
        y: 25.731,
        sx: 0.209,
        sy: 0.209,
        r: 0.433,
        a: 0.67
      },
      "31": {
        x: 21.507,
        y: 33.682,
        sx: 0.197,
        sy: 0.197,
        r: 0.503,
        a: 0.62
      },
      "32": {
        x: 23.23,
        y: 41.356,
        sx: 0.185,
        sy: 0.185,
        r: 0.573,
        a: 0.56
      },
      "33": {
        x: 24.826,
        y: 48.891,
        sx: 0.174,
        sy: 0.174,
        r: 0.643,
        a: 0.51
      },
      "34": {
        x: 26.392,
        y: 56.235,
        sx: 0.162,
        sy: 0.162,
        r: 0.708,
        a: 0.46
      },
      "35": {
        x: 27.955,
        y: 63.336,
        sx: 0.152,
        sy: 0.152,
        r: 0.77,
        a: 0.41
      },
      "36": {
        x: 29.407,
        y: 70.133,
        sx: 0.141,
        sy: 0.141,
        r: 0.832,
        a: 0.37
      },
      "37": {
        x: 30.86,
        y: 76.777,
        sx: 0.131,
        sy: 0.131,
        r: 0.893,
        a: 0.32
      },
      "38": {
        x: 32.22,
        y: 83.083,
        sx: 0.121,
        sy: 0.121,
        r: 0.949,
        a: 0.28
      },
      "39": {
        x: 33.504,
        y: 89.063,
        sx: 0.112,
        sy: 0.112,
        r: 1.002,
        a: 0.23
      },
      "40": {
        x: 34.734,
        y: 94.855,
        sx: 0.104,
        sy: 0.104,
        r: 1.055,
        a: 0.2
      },
      "41": {
        x: 35.964,
        y: 100.237,
        sx: 0.095,
        sy: 0.095,
        r: 1.103,
        a: 0.16
      },
      "42": {
        x: 37.107,
        y: 105.496,
        sx: 0.087,
        sy: 0.087,
        r: 1.151,
        a: 0.13
      },
      "43": {
        x: 38.116,
        y: 110.414,
        sx: 0.08,
        sy: 0.08,
        r: 1.195,
        a: 0.09
      },
      "44": {
        x: 39.15,
        y: 115.075,
        sx: 0.073,
        sy: 0.073,
        r: 1.238,
        a: 0.06
      },
      "45": {
        x: 40.11,
        y: 119.414,
        sx: 0.066,
        sy: 0.066,
        r: 1.277,
        a: 0.03
      },
      "46": {
        x: 40.9,
        y: 123.5,
        sx: 0.06,
        sy: 0.06,
        r: 1.312,
        a: 0
      }
    }).addTimedChild(instance4, 24, 23, {
      "24": {
        x: 12.65,
        y: -29.85,
        sx: 0.283,
        sy: 0.283,
        kx: 0,
        ky: 0,
        r: 0.262,
        a: 1,
        c: [0, 0.99, 0, 0.62, 0, 0.73]
      },
      "25": {
        x: 19.739,
        y: -26.966,
        sx: 0.271,
        sy: 0.271,
        r: 0.411,
        a: 0.95
      },
      "26": {
        x: 26.858,
        y: -24.099,
        sx: 0.259,
        sy: 0.259,
        r: 0.564,
        a: 0.89
      },
      "27": {
        x: 34.017,
        y: -21.164,
        sx: 0.247,
        sy: 0.247,
        r: 0.718,
        a: 0.84
      },
      "28": {
        x: 41.208,
        y: -18.207,
        sx: 0.235,
        sy: 0.235,
        r: 0.871,
        a: 0.78
      },
      "29": {
        x: 48.35,
        y: -15.221,
        sx: 0.224,
        sy: 0.224,
        r: 1.024,
        a: 0.72
      },
      "30": {
        x: 55.439,
        y: -12.386,
        sx: 0.212,
        sy: 0.212,
        r: 1.177,
        a: 0.67
      },
      "31": {
        x: 62.441,
        y: -9.49,
        sx: 0.201,
        sy: 0.201,
        r: 1.325,
        a: 0.62
      },
      "32": {
        x: 69.276,
        y: -6.715,
        sx: 0.19,
        sy: 0.19,
        r: 1.47,
        a: 0.56
      },
      "33": {
        x: 75.96,
        y: -3.956,
        sx: 0.179,
        sy: 0.179,
        kx: 4.673,
        ky: 1.611,
        r: 0,
        a: 0.51
      },
      "34": {
        x: 82.436,
        y: -1.324,
        sx: 0.168,
        sy: 0.168,
        kx: 4.533,
        ky: 1.75,
        a: 0.46
      },
      "35": {
        x: 88.762,
        y: 1.26,
        sx: 0.158,
        sy: 0.158,
        kx: 4.401,
        ky: 1.882,
        a: 0.41
      },
      "36": {
        x: 94.888,
        y: 3.684,
        sx: 0.147,
        sy: 0.147,
        kx: 4.27,
        ky: 2.013,
        a: 0.37
      },
      "37": {
        x: 100.719,
        y: 6.076,
        sx: 0.138,
        sy: 0.138,
        kx: 4.144,
        ky: 2.139,
        a: 0.32
      },
      "38": {
        x: 106.255,
        y: 8.401,
        sx: 0.129,
        sy: 0.129,
        kx: 4.026,
        ky: 2.258,
        a: 0.28
      },
      "39": {
        x: 111.613,
        y: 10.555,
        sx: 0.12,
        sy: 0.12,
        kx: 3.912,
        ky: 2.372,
        a: 0.23
      },
      "40": {
        x: 116.726,
        y: 12.644,
        sx: 0.112,
        sy: 0.112,
        kx: 3.802,
        ky: 2.481,
        a: 0.2
      },
      "41": {
        x: 121.564,
        y: 14.619,
        sx: 0.104,
        sy: 0.104,
        kx: 3.698,
        ky: 2.586,
        a: 0.16
      },
      "42": {
        x: 126.17,
        y: 16.514,
        sx: 0.096,
        sy: 0.096,
        kx: 3.601,
        ky: 2.682,
        a: 0.13
      },
      "43": {
        x: 130.557,
        y: 18.293,
        sx: 0.089,
        sy: 0.089,
        kx: 3.509,
        ky: 2.774,
        a: 0.09
      },
      "44": {
        x: 134.671,
        y: 19.992,
        sx: 0.082,
        sy: 0.082,
        kx: 3.421,
        ky: 2.862,
        a: 0.06
      },
      "45": {
        x: 138.55,
        y: 21.542,
        sx: 0.076,
        sy: 0.076,
        kx: 3.338,
        ky: 2.945,
        a: 0.03
      },
      "46": {
        x: 142.2,
        y: 23,
        sx: 0.07,
        sy: 0.07,
        kx: 3.261,
        ky: 3.023,
        a: 0
      }
    }).addTimedChild(instance3, 24, 23, {
      "24": {
        x: 7.55,
        y: -43.15,
        sx: 0.353,
        sy: 0.353,
        kx: 0,
        ky: 0,
        r: 0,
        a: 1,
        c: [0, 1, 0, 0.44, 0, 0.98]
      },
      "25": {
        x: 15.211,
        y: -45.465,
        sx: 0.337,
        sy: 0.337,
        r: 0.171,
        a: 0.95,
        c: [0, 1, 0, 0.43, 0, 0.94]
      },
      "26": {
        x: 22.957,
        y: -47.734,
        sx: 0.321,
        sy: 0.321,
        r: 0.342,
        a: 0.89,
        c: [0, 1, 0, 0.43, 0, 0.9]
      },
      "27": {
        x: 30.755,
        y: -50.074,
        sx: 0.306,
        sy: 0.306,
        r: 0.517,
        a: 0.84,
        c: [0, 1, 0, 0.42, 0, 0.86]
      },
      "28": {
        x: 38.546,
        y: -52.354,
        sx: 0.29,
        sy: 0.29,
        r: 0.692,
        a: 0.78,
        c: [0, 0.99, 0, 0.42, 0, 0.82]
      },
      "29": {
        x: 46.27,
        y: -54.701,
        sx: 0.274,
        sy: 0.274,
        r: 0.866,
        a: 0.72,
        c: [0, 0.99, 0, 0.41, 0, 0.78]
      },
      "30": {
        x: 53.989,
        y: -57.024,
        sx: 0.259,
        sy: 0.259,
        r: 1.038,
        a: 0.67,
        c: [0, 0.99, 0, 0.4, 0, 0.74]
      },
      "31": {
        x: 61.529,
        y: -59.253,
        sx: 0.244,
        sy: 0.244,
        r: 1.208,
        a: 0.62,
        c: [0, 0.99, 0, 0.4, 0, 0.7]
      },
      "32": {
        x: 68.969,
        y: -61.464,
        sx: 0.229,
        sy: 0.229,
        r: 1.374,
        a: 0.56,
        c: [0, 0.99, 0, 0.39, 0, 0.66]
      },
      "33": {
        x: 76.162,
        y: -63.59,
        sx: 0.214,
        sy: 0.214,
        r: 1.539,
        a: 0.51,
        c: [0, 0.98, 0, 0.38, 0, 0.62]
      },
      "34": {
        x: 83.231,
        y: -65.706,
        sx: 0.2,
        sy: 0.2,
        kx: 4.59,
        ky: 1.693,
        r: 0,
        a: 0.46,
        c: [0, 0.98, 0, 0.38, 0, 0.59]
      },
      "35": {
        x: 90.054,
        y: -67.763,
        sx: 0.186,
        sy: 0.186,
        kx: 4.437,
        ky: 1.846,
        a: 0.41,
        c: [0, 0.98, 0, 0.37, 0, 0.55]
      },
      "36": {
        x: 96.664,
        y: -69.677,
        sx: 0.173,
        sy: 0.173,
        kx: 4.292,
        ky: 1.991,
        a: 0.37,
        c: [0, 0.98, 0, 0.37, 0, 0.52]
      },
      "37": {
        x: 102.933,
        y: -71.617,
        sx: 0.16,
        sy: 0.16,
        kx: 4.148,
        ky: 2.135,
        a: 0.32,
        c: [0, 0.98, 0, 0.36, 0, 0.49]
      },
      "38": {
        x: 109.062,
        y: -73.407,
        sx: 0.148,
        sy: 0.148,
        kx: 4.012,
        ky: 2.271,
        a: 0.28,
        c: [0, 0.98, 0, 0.36, 0, 0.45]
      },
      "39": {
        x: 114.842,
        y: -75.156,
        sx: 0.136,
        sy: 0.136,
        kx: 3.881,
        ky: 2.402,
        a: 0.23,
        c: [0, 0.98, 0, 0.35, 0, 0.42]
      },
      "40": {
        x: 120.33,
        y: -76.743,
        sx: 0.125,
        sy: 0.125,
        kx: 3.758,
        ky: 2.525,
        a: 0.2,
        c: [0, 0.98, 0, 0.35, 0, 0.4]
      },
      "41": {
        x: 125.56,
        y: -78.293,
        sx: 0.115,
        sy: 0.115,
        kx: 3.64,
        ky: 2.643,
        a: 0.16,
        c: [0, 0.97, 0, 0.35, 0, 0.37]
      },
      "42": {
        x: 130.584,
        y: -79.838,
        sx: 0.105,
        sy: 0.105,
        kx: 3.53,
        ky: 2.753,
        a: 0.13,
        c: [0, 0.97, 0, 0.34, 0, 0.34]
      },
      "43": {
        x: 135.266,
        y: -81.23,
        sx: 0.095,
        sy: 0.095,
        kx: 3.422,
        ky: 2.861,
        a: 0.09,
        c: [0, 0.97, 0, 0.34, 0, 0.32]
      },
      "44": {
        x: 139.723,
        y: -82.473,
        sx: 0.086,
        sy: 0.086,
        kx: 3.322,
        ky: 2.962,
        a: 0.06,
        c: [0, 0.97, 0, 0.33, 0, 0.29]
      },
      "45": {
        x: 143.973,
        y: -83.808,
        sx: 0.078,
        sy: 0.078,
        kx: 3.229,
        ky: 3.054,
        a: 0.03,
        c: [0, 0.97, 0, 0.33, 0, 0.27]
      },
      "46": {
        x: 147.9,
        y: -85,
        sx: 0.07,
        sy: 0.07,
        kx: 3.142,
        ky: 3.142,
        a: 0,
        c: [0, 0.97, 0, 0.33, 0, 0.25]
      }
    }).addTimedChild(instance2, 24, 23, {
      "24": {
        x: 1.7,
        y: -36.9,
        sx: 0.283,
        sy: 0.283,
        kx: 0,
        ky: 0,
        r: 0,
        a: 1,
        c: [0, 1, 0, 0.74, 0, 0.82]
      },
      "25": {
        x: 2.598,
        y: -43.597,
        sx: 0.276,
        sy: 0.276,
        r: 0.127,
        a: 0.95
      },
      "26": {
        x: 3.446,
        y: -50.254,
        sx: 0.27,
        sy: 0.27,
        r: 0.254,
        a: 0.9
      },
      "27": {
        x: 4.225,
        y: -56.976,
        sx: 0.263,
        sy: 0.263,
        r: 0.381,
        a: 0.86
      },
      "28": {
        x: 5.025,
        y: -63.725,
        sx: 0.256,
        sy: 0.256,
        r: 0.512,
        a: 0.8
      },
      "29": {
        x: 5.901,
        y: -70.522,
        sx: 0.25,
        sy: 0.25,
        r: 0.639,
        a: 0.75
      },
      "30": {
        x: 6.698,
        y: -77.275,
        sx: 0.243,
        sy: 0.243,
        r: 0.77,
        a: 0.71
      },
      "31": {
        x: 7.54,
        y: -84.007,
        sx: 0.237,
        sy: 0.237,
        r: 0.897,
        a: 0.66
      },
      "32": {
        x: 8.401,
        y: -90.742,
        sx: 0.23,
        sy: 0.23,
        r: 1.028,
        a: 0.61
      },
      "33": {
        x: 9.225,
        y: -97.374,
        sx: 0.224,
        sy: 0.224,
        r: 1.155,
        a: 0.56
      },
      "34": {
        x: 10.093,
        y: -103.948,
        sx: 0.218,
        sy: 0.218,
        r: 1.282,
        a: 0.51
      },
      "35": {
        x: 10.865,
        y: -110.466,
        sx: 0.211,
        sy: 0.211,
        r: 1.404,
        a: 0.46
      },
      "36": {
        x: 11.612,
        y: -116.897,
        sx: 0.205,
        sy: 0.205,
        r: 1.527,
        a: 0.42
      },
      "37": {
        x: 12.422,
        y: -123.174,
        sx: 0.199,
        sy: 0.199,
        kx: 4.638,
        ky: 1.645,
        r: 0,
        a: 0.37
      },
      "38": {
        x: 13.201,
        y: -129.392,
        sx: 0.193,
        sy: 0.193,
        kx: 4.52,
        ky: 1.763,
        a: 0.32
      },
      "39": {
        x: 13.981,
        y: -135.505,
        sx: 0.187,
        sy: 0.187,
        kx: 4.406,
        ky: 1.878,
        a: 0.28
      },
      "40": {
        x: 14.711,
        y: -141.43,
        sx: 0.181,
        sy: 0.181,
        kx: 4.289,
        ky: 1.995,
        a: 0.24
      },
      "41": {
        x: 15.39,
        y: -147.285,
        sx: 0.176,
        sy: 0.176,
        kx: 4.179,
        ky: 2.104,
        a: 0.2
      },
      "42": {
        x: 16.148,
        y: -152.976,
        sx: 0.17,
        sy: 0.17,
        kx: 4.069,
        ky: 2.214,
        a: 0.16
      },
      "43": {
        x: 16.829,
        y: -158.502,
        sx: 0.165,
        sy: 0.165,
        kx: 3.964,
        ky: 2.319,
        a: 0.11
      },
      "44": {
        x: 17.473,
        y: -163.944,
        sx: 0.159,
        sy: 0.159,
        kx: 3.86,
        ky: 2.423,
        a: 0.07
      },
      "45": {
        x: 18.171,
        y: -169.115,
        sx: 0.154,
        sy: 0.154,
        kx: 3.762,
        ky: 2.521,
        a: 0.04
      },
      "46": {
        x: 18.7,
        y: -174.25,
        sx: 0.15,
        sy: 0.15,
        kx: 3.665,
        ky: 2.618,
        a: 0
      }
    }).addAction(function () {
      this.gotoAndPlay('normal');
    }, 23).addAction(function () {
      this.stop();
    }, 47);
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

  lib.UI_Hold = Container.extend(function () {
    Container.call(this);
    var instance3 = new lib.trans().setTransform(9, 14);this[instance3.name = "trans"] = instance3;var instance2 = new lib.hold_point1().setTransform(-15);this[instance2.name = "point1"] = instance2;var instance1 = new lib.hold_point2().setTransform(85);this[instance1.name = "point2"] = instance1;this.addChild(instance3, instance2, instance1);
  });

  lib.UI_Beat = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/beat.png")).setTransform(-15);this.addChild(instance1);
  });

  var Graphic24 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/star.png")).setTransform(-50, -50);this.addTimedChild(instance1);
  });

  lib.explode2 = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 21
    });
    var instance1 = new Graphic24(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 19, {
      "0": {
        x: -0.1,
        y: 0,
        sx: 0.253,
        sy: 0.253,
        r: -0.785,
        a: 0.8
      },
      "1": {
        x: -0.164,
        y: -0.006,
        sx: 0.288,
        sy: 0.288,
        r: -0.735,
        a: 0.75
      },
      "2": {
        x: -0.177,
        y: -0.013,
        sx: 0.324,
        sy: 0.324,
        r: -0.682,
        a: 0.71
      },
      "3": {
        x: -0.14,
        y: -0.022,
        sx: 0.36,
        sy: 0.36,
        r: -0.63,
        a: 0.66
      },
      "4": {
        x: -0.153,
        y: -0.032,
        sx: 0.396,
        sy: 0.396,
        r: -0.578,
        a: 0.62
      },
      "5": {
        x: -0.165,
        y: -0.043,
        sx: 0.431,
        sy: 0.431,
        r: -0.529,
        a: 0.57
      },
      "6": {
        x: -0.176,
        y: -0.056,
        sx: 0.467,
        sy: 0.467,
        r: -0.477,
        a: 0.53
      },
      "7": {
        x: -0.136,
        y: -0.02,
        sx: 0.503,
        sy: 0.503,
        r: -0.424,
        a: 0.48
      },
      "8": {
        x: -0.145,
        y: -0.035,
        sx: 0.538,
        sy: 0.538,
        r: -0.372,
        a: 0.44
      },
      "9": {
        x: -0.153,
        y: -0.051,
        sx: 0.575,
        sy: 0.575,
        r: -0.323,
        a: 0.4
      },
      "10": {
        x: -0.16,
        y: -0.019,
        sx: 0.61,
        sy: 0.61,
        r: -0.271,
        a: 0.35
      },
      "11": {
        x: -0.165,
        y: -0.037,
        sx: 0.646,
        sy: 0.646,
        r: -0.219,
        a: 0.31
      },
      "12": {
        x: -0.119,
        y: -0.006,
        sx: 0.682,
        sy: 0.682,
        r: -0.167,
        a: 0.26
      },
      "13": {
        x: -0.122,
        y: -0.026,
        sx: 0.717,
        sy: 0.717,
        r: -0.114,
        a: 0.22
      },
      "14": {
        x: -0.124,
        y: -0.046,
        sx: 0.753,
        sy: 0.753,
        r: -0.066,
        a: 0.17
      },
      "15": {
        x: -0.123,
        y: -0.067,
        sx: 0.789,
        sy: 0.789,
        r: -0.013,
        a: 0.13
      },
      "16": {
        x: -0.172,
        y: -0.038,
        sx: 0.825,
        sy: 0.825,
        r: 0.035,
        a: 0.08
      },
      "17": {
        x: -0.118,
        y: -0.01,
        sx: 0.86,
        sy: 0.86,
        r: 0.087,
        a: 0.04
      },
      "18": {
        x: -0.114,
        y: -0.032,
        sx: 0.896,
        sy: 0.896,
        r: 0.136,
        a: 0
      }
    }).addAction(function () {
      this.stop();
    }, 19);
  });

  lib.auto = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      labels: {
        show: 0,
        hide: 1
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/auto.png"));this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -22,
        y: -11
      }
    }).addAction(function () {
      /** CONSTRUCTOR */
      this.framerate = 6;
      /** END CONSTRUCTOR */
    }, 0);
  });

  lib.UI_Perfect = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/perfect.png")).setTransform(-147, -18);var instance1 = new Text("12X").setStyle({
      fontFamily: "Source Code Pro",
      fontSize: 27,
      fill: "#f00"
    }).setTransform(32.05, -16);this[instance1.name = "tfCombo"] = instance1;this.addChild(instance2, instance1);
  });

  lib.UI_Great = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/great.png")).setTransform(-121, -18);var instance1 = new Text("12X").setStyle({
      fontFamily: "Source Code Pro",
      fontSize: 27,
      fill: "#f00"
    }).setTransform(17.85, -16);this[instance1.name = "tfCombo"] = instance1;this.addChild(instance2, instance1);
  });

  lib.UI_Assign = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 54,
      labels: {
        perfect: 5,
        great: 26
      }
    });
    var instance1 = new lib.UI_Perfect();this[instance1.name = "perfect"] = instance1;var instance2 = new lib.UI_Great();this[instance2.name = "great"] = instance2;this.addTimedChild(instance1, 0, 25, {
      "0": {
        sx: 2.191,
        sy: 0.704,
        kx: 1.759,
        a: 1
      },
      "1": {
        sy: 0.703
      },
      "5": {
        sy: 0.704
      },
      "6": {
        sx: 0.79,
        sy: 0.79,
        kx: 0
      },
      "7": {
        sx: 0.842,
        sy: 0.842
      },
      "8": {
        sx: 0.895,
        sy: 0.895
      },
      "9": {
        sx: 0.947,
        sy: 0.947
      },
      "10": {
        sx: 1,
        sy: 1
      },
      "21": {
        a: 0.75
      },
      "22": {
        a: 0.5
      },
      "23": {
        a: 0.25
      },
      "24": {
        a: 0
      }
    }).addTimedChild(instance2, 26, 27, {
      "26": {
        y: 0,
        sx: 1.141,
        sy: 1.141,
        a: 0
      },
      "27": {
        sx: 1.078,
        sy: 1.078,
        a: 0.2
      },
      "28": {
        sx: 1.015,
        sy: 1.015,
        a: 0.4
      },
      "29": {
        y: -0.1,
        sx: 0.952,
        sy: 0.952,
        a: 0.6
      },
      "30": {
        sx: 0.89,
        sy: 0.89,
        a: 0.8
      },
      "31": {
        y: -0.05,
        sx: 0.827,
        sy: 0.827,
        a: 1
      },
      "32": {
        y: -0.102,
        sx: 0.861,
        sy: 0.861
      },
      "33": {
        y: -0.104,
        sx: 0.896,
        sy: 0.896
      },
      "34": {
        y: -0.056,
        sx: 0.931,
        sy: 0.931
      },
      "35": {
        y: -0.058,
        sx: 0.965,
        sy: 0.965
      },
      "36": {
        y: 0,
        sx: 1,
        sy: 1
      },
      "48": {
        a: 0.8
      },
      "49": {
        a: 0.6
      },
      "50": {
        a: 0.4
      },
      "51": {
        a: 0.2
      },
      "52": {
        a: 0
      }
    }).addAction(function () {
      this.perfect.tfCombo.text = this.comboNum + 'x';
    }, 0).addAction(function () {
      this.perfect.tfCombo.text = this.comboNum + 'x';
    }, 5).addAction(function () {
      this.stop();
    }, 25).addAction(function () {
      this.great.tfCombo.text = this.comboNum + 'x';
    }, 26).addAction(function () {
      this.stop();
    }, 53);
  });

  var Graphic25 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 9, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic26 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 9, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic27 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 35, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  var Graphic28 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 7, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/ring.png")).setTransform(-46, -81);this.addTimedChild(instance1);
  });

  lib.shaking = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 7
    });
    var instance1 = new Graphic28(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 7, {
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

  var Graphic29 = MovieClip.extend(function (mode) {
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
    var instance1 = new Graphic27(MovieClip.SYNCHED);var instance2 = new Graphic25(MovieClip.SYNCHED);var instance3 = new lib.shaking();var instance4 = new Graphic29(MovieClip.SYNCHED);var instance5 = new Graphic26(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 35, {
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

  var Graphic30 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 55, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addTimedChild(instance1);
  });

  lib.track = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 55
    });
    var instance1 = new Graphic30(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 55, {
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

  var Graphic31 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic32 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic33 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic34 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic35 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  var Graphic36 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 104, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/light.png")).setTransform(-42, -242);this.addTimedChild(instance1);
  });

  lib.lights = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 104
    });
    var instance6 = new Graphic36(MovieClip.SYNCHED);var instance5 = new Graphic35(MovieClip.SYNCHED);var instance4 = new Graphic34(MovieClip.SYNCHED);var instance3 = new Graphic33(MovieClip.SYNCHED);var instance2 = new Graphic32(MovieClip.SYNCHED);var instance1 = new Graphic31(MovieClip.SYNCHED);this.addTimedChild(instance6, 0, 104, {
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

  lib.Graphic37 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 150, 40);this.addChild(instance1);
  });

  lib.bg = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/indicator/back.png")).setTransform(0, 0, 150, 12.5);this.addChild(instance1);
  });

  lib.UI_RhythmIndicator = Container.extend(function () {
    Container.call(this);
    var instance10 = new lib.bg().setTransform(0, -91.85, 1, 3.36);var instance9 = new lib.Graphic37().setTransform(0, 117, 1, 1.25).setColorTransform(0, 0, 0, 0, 0, 0);var instance8 = new lib.lights().setTransform(30.9, 23, 1, 0.729);var instance7 = new lib.track().setTransform(0, 117.95);var instance6 = new lib.UI_Beat().setTransform(651.55, 126, 1.5, 1.5);this[instance6.name = "_phBeat"] = instance6;var instance5 = new lib.UI_Hold().setTransform(366.65, 123, 1.5, 1.5);this[instance5.name = "_phHold"] = instance5;var instance4 = new lib.ring().setTransform(251, 147.05, 0.852, 0.852);this[instance4.name = "ring"] = instance4;var instance3 = new lib.UI_Assign().setTransform(413.35, 68.95, 1.5, 1.5);this[instance3.name = "assign"] = instance3;var instance2 = new lib.auto().setTransform(128.95, 137);this[instance2.name = "auto"] = instance2;var instance1 = new lib.explode2().setTransform(252.95, 146.85, 1.5, 1.5);this[instance1.name = "explode"] = instance1;this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
  });

  var Graphic38 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 14, loop: false });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/holding_0000.png"));this.addTimedChild(instance1);
  });

  lib.red_holding = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 14
    });
    var instance1 = new Graphic38(MovieClip.SYNCHED);this.addTimedChild(instance1, 0, 14, {
      "0": {
        x: 0,
        y: 0,
        kx: 0,
        ky: 0
      },
      "1": {
        x: 0.35,
        kx: -0.001,
        ky: -0.004
      },
      "2": {
        x: 0.65,
        ky: -0.009
      },
      "3": {
        x: 1.35,
        y: 0.05,
        kx: -0.005,
        ky: -0.013
      },
      "4": {
        x: 1.65,
        y: 0,
        ky: -0.018
      },
      "5": {
        x: 2.4,
        kx: -0.009,
        ky: -0.022
      },
      "6": {
        x: 3,
        y: -0.05,
        kx: -0.013,
        ky: -0.027
      },
      "7": {
        x: 2.45,
        y: -0.036,
        kx: -0.009,
        ky: -0.022
      },
      "8": {
        x: 2.15,
        y: -0.073,
        ky: -0.018
      },
      "9": {
        x: 1.5,
        y: -0.11,
        kx: -0.005,
        ky: -0.014
      },
      "10": {
        x: 1.25,
        y: -0.148,
        ky: -0.009
      },
      "11": {
        x: 0.601,
        y: -0.135,
        kx: -0.001,
        ky: -0.005
      },
      "12": {
        x: 0.3,
        y: -0.172,
        kx: 0,
        ky: -0.001
      },
      "13": {
        x: 0,
        y: 0,
        ky: 0
      }
    });
  });

  lib.UI_RoleRed = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 32,
      labels: {
        run: 0,
        jump: 10,
        holding: 11,
        "jump1": 31
      }
    });
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0000.png"));var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0001.png"));var instance3 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0002.png"));var instance4 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0003.png"));var instance5 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0004.png"));var instance6 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0005.png"));var instance7 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0006.png"));var instance8 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0007.png"));var instance9 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/run_0008.png"));var instance10 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/jump_0000.png"));var instance11 = new lib.red_holding();var instance12 = new Sprite(fromFrame("res/images/fla_PlayViewUI/role_red/jump_0001.png")).setTransform(-69, -253);this.addTimedChild(instance1, 0, 1, {
      "0": {
        x: -64,
        y: -235
      }
    }).addTimedChild(instance2, 1, 1, {
      "1": {
        x: -65,
        y: -236
      }
    }).addTimedChild(instance3, 2, 1, {
      "2": {
        x: -71,
        y: -240
      }
    }).addTimedChild(instance4, 3, 1, {
      "3": {
        x: -71,
        y: -239
      }
    }).addTimedChild(instance5, 4, 1, {
      "4": {
        x: -68,
        y: -235
      }
    }).addTimedChild(instance6, 5, 1, {
      "5": {
        x: -64,
        y: -235
      }
    }).addTimedChild(instance7, 6, 1, {
      "6": {
        x: -72,
        y: -236
      }
    }).addTimedChild(instance8, 7, 1, {
      "7": {
        x: -80,
        y: -239
      }
    }).addTimedChild(instance9, 8, 2, {
      "8": {
        x: -68,
        y: -239
      }
    }).addTimedChild(instance10, 10, 1, {
      "10": {
        x: -86,
        y: -248
      }
    }).addTimedChild(instance11, 11, 20, {
      "11": {
        x: -65,
        y: -236,
        c: [1, 0, 1, 0, 1, 0]
      },
      "12": {
        c: [0.98, 0.02, 0.98, 0, 0.98, 0.02]
      },
      "13": {
        c: [0.95, 0.05, 0.95, 0, 0.95, 0.03]
      },
      "14": {
        c: [0.93, 0.07, 0.93, 0, 0.93, 0.05]
      },
      "15": {
        c: [0.91, 0.09, 0.91, 0, 0.91, 0.06]
      },
      "16": {
        c: [0.88, 0.11, 0.88, 0, 0.88, 0.08]
      },
      "17": {
        c: [0.86, 0.14, 0.86, 0, 0.86, 0.1]
      },
      "18": {
        c: [0.84, 0.16, 0.84, 0, 0.84, 0.11]
      },
      "19": {
        c: [0.81, 0.18, 0.81, 0, 0.81, 0.13]
      },
      "20": {
        c: [0.79, 0.21, 0.79, 0, 0.79, 0.15]
      },
      "21": {
        c: [0.77, 0.23, 0.77, 0, 0.77, 0.16]
      },
      "22": {
        c: [0.75, 0.25, 0.75, 0, 0.75, 0.18]
      },
      "23": {
        c: [0.72, 0.28, 0.72, 0, 0.72, 0.19]
      },
      "24": {
        c: [0.7, 0.3, 0.7, 0, 0.7, 0.21]
      },
      "25": {
        c: [0.68, 0.33, 0.68, 0, 0.68, 0.22]
      },
      "26": {
        c: [0.65, 0.35, 0.65, 0, 0.65, 0.24]
      },
      "27": {
        c: [0.63, 0.37, 0.63, 0, 0.63, 0.26]
      },
      "28": {
        c: [0.61, 0.39, 0.61, 0, 0.61, 0.27]
      },
      "29": {
        c: [0.58, 0.42, 0.58, 0, 0.58, 0.29]
      },
      "30": {
        c: [0.56, 0.44, 0.56, 0, 0.56, 0.31]
      }
    }).addTimedChild(instance12, 31, 1).addAction(function () {
      this.framerate = 12;
    }, 0).addAction(function () {
      this.gotoAndPlay('run');
    }, 9).addAction(function () {
      this.stop();
    }, 10).addAction(function () {
      this.framerate = 60;
    }, 11).addAction(function () {
      this.stop();
    }, 30).addAction(function () {
      this.stop();
    }, 31);
  });

  lib.UI_BtnGiveup = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/giveup.png"));this.addChild(instance1);
  });

  lib.UI_BtnSave = Container.extend(function () {
    Container.call(this);
    var instance2 = new Sprite(fromFrame("res/images/fla_PlayViewUI/hud/save.png"));var instance1 = new Text("(8)").setStyle({
      fontFamily: "Hiragino Sans GB W6",
      fontSize: 34,
      fill: "#090"
    }).setAlign("center").setTransform(301.1, 12.5);this[instance1.name = "tfCountdown"] = instance1;this.addChild(instance2, instance1);
  });

  lib.Graphic39 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20, 20);this.addChild(instance1);
  });

  lib.UI_DeadModal = Container.extend(function () {
    Container.call(this);
    var instance6 = new lib.Graphic39().setTransform(0, 0, 7.5, 10.8).setAlpha(0.8).setColorTransform(0, 0, 0, 0, 0, 0);var instance5 = new Text("哎呀，掉下去了 (´･Д･)」").setStyle({
      fontFamily: "Hiragino Sans GB W3",
      fontSize: 26,
      fill: "#fff"
    }).setAlign("center").setTransform(375.00000000000006, 500.7);this[instance5.name = "tfWord"] = instance5;var instance4 = new lib.placeholder().setTransform(143, 188, 4.64, 2.84);this[instance4.name = "_phImage"] = instance4;var instance3 = new lib.UI_BtnSave().setTransform(188, 604);this[instance3.name = "btnSave"] = instance3;var instance2 = new lib.UI_BtnGiveup().setTransform(188, 778);this[instance2.name = "btnGiveup"] = instance2;var instance1 = new Text("还剩5条狗命").setStyle({
      fontFamily: "_sans",
      fontSize: 26,
      fill: "#ff0"
    }).setAlign("center").setTransform(375, 695.6);this[instance1.name = "tfRemain"] = instance1;this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
  });

  lib.PlayViewUI = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 60
    });
    var instance14 = new lib.UI_DeadModal();var instance13 = new lib.UI_RoleRed().setTransform(538.15, 700);var instance12 = new lib.UI_RhythmIndicator().setTransform(0, 414.2);var instance11 = new lib.UI_Beat().setTransform(208, 228.05);var instance10 = new lib.UI_Hold().setTransform(429, 228.05);var instance9 = new lib.UI_Coin().setTransform(342, 333);var instance8 = new lib.UI_Chocolate().setTransform(591.15, 700);var instance7 = new lib.UI_Cloud().setTransform(712.15, 415.6);var instance6 = new lib.UI_PlayViewHud();var instance5 = new lib.UI_FxEatItem().setTransform(664.25, 605);var instance4 = new lib.UI_Paodekuai().setTransform(223.15, 700);var instance3 = new lib.UI_BuffIndicator().setTransform(26, 110.55);var instance2 = new lib.UI_RoleGreen().setTransform(389, 696);var instance1 = new lib.UI_PauseModal();this.addChild(instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
  });

  lib.PlayViewUI.assets = ["res/images/fla_PlayViewUI/pause_modal/btnEnd.png", "res/images/fla_PlayViewUI/pause_modal/btnContinue.png", "res/images/common/white.png", "res/images/fla_PlayViewUI/role_green/run_0000.png", "res/images/fla_PlayViewUI/role_green/run_0001.png", "res/images/fla_PlayViewUI/role_green/run_0002.png", "res/images/fla_PlayViewUI/role_green/run_0003.png", "res/images/fla_PlayViewUI/role_green/run_0004.png", "res/images/fla_PlayViewUI/role_green/run_0005.png", "res/images/fla_PlayViewUI/role_green/run_0006.png", "res/images/fla_PlayViewUI/role_green/run_0007.png", "res/images/fla_PlayViewUI/role_green/run_0008.png", "res/images/fla_PlayViewUI/role_green/holding.png", "res/images/fla_PlayViewUI/role_green/jump_0000.png", "res/images/fla_PlayViewUI/role_green/jump_0001.png", "res/images/fla_PlayViewUI/role/run_0000.png", "res/images/fla_PlayViewUI/role/run_0001.png", "res/images/fla_PlayViewUI/role/run_0002.png", "res/images/fla_PlayViewUI/role/run_0003.png", "res/images/fla_PlayViewUI/role/run_0004.png", "res/images/fla_PlayViewUI/role/run_0005.png", "res/images/fla_PlayViewUI/role/run_0006.png", "res/images/fla_PlayViewUI/role/run_0007.png", "res/images/fla_PlayViewUI/role/run_0008.png", "res/images/fla_PlayViewUI/role/holding_0000.png", "res/images/fla_PlayViewUI/role/jump_0000.png", "res/images/fla_PlayViewUI/role/jump_0001.png", "res/images/fla_PlayViewUI/road/fx/autoRun.png", "res/images/fla_PlayViewUI/road/fx/chocoFree.png", "res/images/fla_PlayViewUI/road/fx/recoverLife.png", "res/images/fla_PlayViewUI/road/fx/slowDown.png", "res/images/common/star.png", "res/images/fla_PlayViewUI/hud/pause.png", "res/images/fla_PlayViewUI/hud/heart_on.png", "res/images/fla_PlayViewUI/hud/heart_off.png", "res/images/fla_PlayViewUI/hud/tab_bg1.png", "res/images/fla_PlayViewUI/road/cloud.png", "res/images/common/circle.png", "res/images/fla_PlayViewUI/road/choco.png", "res/images/fla_PlayViewUI/road/coin.png", "res/images/fla_PlayViewUI/indicator/hold.png", "res/images/fla_PlayViewUI/indicator/release.png", "res/images/fla_PlayViewUI/indicator/holding.png", "res/images/fla_PlayViewUI/indicator/hold_bar.png", "res/images/fla_PlayViewUI/indicator/beat.png", "res/images/fla_PlayViewUI/indicator/auto.png", "res/images/fla_PlayViewUI/hud/perfect.png", "res/images/fla_PlayViewUI/hud/great.png", "res/images/fla_PlayViewUI/indicator/ring.png", "res/images/fla_PlayViewUI/indicator/light.png", "res/images/fla_PlayViewUI/indicator/back.png", "res/images/fla_PlayViewUI/role_red/run_0000.png", "res/images/fla_PlayViewUI/role_red/run_0001.png", "res/images/fla_PlayViewUI/role_red/run_0002.png", "res/images/fla_PlayViewUI/role_red/run_0003.png", "res/images/fla_PlayViewUI/role_red/run_0004.png", "res/images/fla_PlayViewUI/role_red/run_0005.png", "res/images/fla_PlayViewUI/role_red/run_0006.png", "res/images/fla_PlayViewUI/role_red/run_0007.png", "res/images/fla_PlayViewUI/role_red/run_0008.png", "res/images/fla_PlayViewUI/role_red/jump_0000.png", "res/images/fla_PlayViewUI/role_red/holding_0000.png", "res/images/fla_PlayViewUI/role_red/jump_0001.png", "res/images/fla_PlayViewUI/hud/giveup.png", "res/images/fla_PlayViewUI/hud/save.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;