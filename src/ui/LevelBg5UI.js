"use strict";

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.near = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/5/near.png")).setTransform(0, 0, 2.512, 2.512);var instance3 = new Sprite(fromFrame("res/bg_images/5/near.png")).setTransform(2169.25, 0, 2.512, 2.512, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/5/near.png")).setTransform(2167, 0, 2.512, 2.512);var instance1 = new Sprite(fromFrame("res/bg_images/5/near.png")).setTransform(4336.25, 0, 2.512, 2.512, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.far = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/5/far.png")).setTransform(0, 0, 2.012, 2.012);var instance3 = new Sprite(fromFrame("res/bg_images/5/far.png")).setTransform(2163.25, 0, 2.012, 2.012, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/5/far.png")).setTransform(2159, 0, 2.012, 2.012);var instance1 = new Sprite(fromFrame("res/bg_images/5/far.png")).setTransform(4322.25, 0, 2.012, 2.012, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.cloud = Container.extend(function () {
        Container.call(this);
        var instance8 = new Sprite(fromFrame("res/bg_images/5/cloud.png")).setTransform(0, 0, 2, 2);var instance7 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 296, 215.202, 45.998);var instance6 = new Sprite(fromFrame("res/bg_images/5/cloud.png")).setTransform(2151, 0, 2, 2, 0, 0, 3.142);var instance5 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(2151, 296, 215.202, 45.998, 0, 0, 3.142);var instance4 = new Sprite(fromFrame("res/bg_images/5/cloud.png")).setTransform(2150, 0, 2, 2);var instance3 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(2150, 296, 215.202, 45.998);var instance2 = new Sprite(fromFrame("res/bg_images/5/cloud.png")).setTransform(4301, 0, 2, 2, 0, 0, 3.142);var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(4301, 296, 215.202, 45.998, 0, 0, 3.142);this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.UI_LevelBg5 = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/5/bg.png")).setTransform(0, 0, 75, 58.86);var instance3 = new lib.cloud().setTransform(0, 238);this[instance3.name = "cloud"] = instance3;var instance2 = new lib.far().setTransform(0, 341, 1.03, 1.03);this[instance2.name = "far"] = instance2;var instance1 = new lib.near().setTransform(0, 648);this[instance1.name = "near"] = instance1;this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.LevelBg5UI = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.UI_LevelBg5();this.addChild(instance1);
    });

    lib.LevelBg5UI.assets = ["res/bg_images/5/near.png", "res/bg_images/5/far.png", "res/images/common/white.png", "res/bg_images/5/cloud.png", "res/bg_images/5/bg.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;