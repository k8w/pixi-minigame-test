"use strict";

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.mid = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/4/mid.png")).setTransform(0, 0, 2.512, 2.512);var instance3 = new Sprite(fromFrame("res/bg_images/4/mid.png")).setTransform(2159, 0, 2.512, 2.512, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/4/mid.png")).setTransform(2159, 0, 2.512, 2.512);var instance1 = new Sprite(fromFrame("res/bg_images/4/mid.png")).setTransform(4318, 0, 2.512, 2.512, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.far = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/4/far.png")).setTransform(0, 0, 2.467, 2.467);var instance3 = new Sprite(fromFrame("res/bg_images/4/far.png")).setTransform(2120.85, 0, 2.467, 2.467, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/4/far.png")).setTransform(2120, 0, 2.467, 2.467);var instance1 = new Sprite(fromFrame("res/bg_images/4/far.png")).setTransform(4240.85, 0, 2.467, 2.467, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.cloud = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/4/cloud.png")).setTransform(0, 0, 1.974, 1.974);var instance3 = new Sprite(fromFrame("res/bg_images/4/cloud.png")).setTransform(2221.15, 0, 1.974, 1.974, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/4/cloud.png")).setTransform(2159, 0, 1.974, 1.974);var instance1 = new Sprite(fromFrame("res/bg_images/4/cloud.png")).setTransform(4380.15, 0, 1.974, 1.974, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.quad = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 150, 30.8);this.addChild(instance1);
    });

    lib.UI_LevelBg4 = Container.extend(function () {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("res/bg_images/4/bg.png")).setTransform(0, 0, 75.001, 57.376);var instance4 = new lib.quad().setTransform(0, 926).setColorTransform(0, 0.81, 0, 0.44, 0, 0.33);var instance3 = new lib.cloud();this[instance3.name = "cloud"] = instance3;var instance2 = new lib.far().setTransform(0, 381);this[instance2.name = "far"] = instance2;var instance1 = new lib.mid().setTransform(0, 615);this[instance1.name = "mid"] = instance1;this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.LevelBg4UI = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.UI_LevelBg4();this.addChild(instance1);
    });

    lib.LevelBg4UI.assets = ["res/bg_images/4/mid.png", "res/bg_images/4/far.png", "res/bg_images/4/cloud.png", "res/images/common/white.png", "res/bg_images/4/bg.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;