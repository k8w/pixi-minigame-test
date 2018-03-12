"use strict";

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.mid = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/2/mid.png")).setTransform(0, 0, 2.872, 2.872);var instance3 = new Sprite(fromFrame("res/bg_images/2/mid.png")).setTransform(2142.15, 0, 2.872, 2.872, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/2/mid.png")).setTransform(2142, 0, 2.872, 2.872);var instance1 = new Sprite(fromFrame("res/bg_images/2/mid.png")).setTransform(4284.15, 0, 2.872, 2.872, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.far = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/2/m3.png")).setTransform(0, 0, 2.361, 2.361);var instance3 = new Sprite(fromFrame("res/bg_images/2/m3.png")).setTransform(2124.3, 0, 2.361, 2.361, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/2/m3.png")).setTransform(2124, 0, 2.361, 2.361);var instance1 = new Sprite(fromFrame("res/bg_images/2/m3.png")).setTransform(4248.3, 0, 2.361, 2.361, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.cloud = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/2/cloud.png")).setTransform(0, 0, 1.415, 1.415);var instance3 = new Sprite(fromFrame("res/bg_images/2/cloud.png")).setTransform(2118.3, 0, 1.415, 1.415, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/2/cloud.png")).setTransform(2116, 0, 1.415, 1.415);var instance1 = new Sprite(fromFrame("res/bg_images/2/cloud.png")).setTransform(4234.3, 0, 1.415, 1.415, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 20.001, 20.001);this.addChild(instance1);
    });

    lib.UI_LevelBg2 = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.Graphic1().setTransform(0, 0, 7.5, 10.8).setColorTransform(0, 0.63, 0, 0.85, 0, 0.86);var instance3 = new lib.cloud();this[instance3.name = "cloud"] = instance3;var instance2 = new lib.far().setTransform(0, 215);this[instance2.name = "far"] = instance2;var instance1 = new lib.mid().setTransform(0, 612);this[instance1.name = "mid"] = instance1;this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.LevelBg2UI = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.UI_LevelBg2();this.addChild(instance1);
    });

    lib.LevelBg2UI.assets = ["res/bg_images/2/mid.png", "res/bg_images/2/m3.png", "res/bg_images/2/cloud.png", "res/images/common/white.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;