"use strict";

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.near = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/3/near.png")).setTransform(0, 111, 1.924, 1.924);var instance3 = new Sprite(fromFrame("res/bg_images/3/near.png")).setTransform(2166.1, 111, 1.924, 1.924, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/3/near.png")).setTransform(2162, 111, 1.924, 1.924);var instance1 = new Sprite(fromFrame("res/bg_images/3/near.png")).setTransform(4327.1, 111, 1.924, 1.924, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.mid = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/3/m1.png")).setTransform(0, 0, 2.022, 2.022);var instance3 = new Sprite(fromFrame("res/bg_images/3/m1.png")).setTransform(1896.45, 0, 2.022, 2.022, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/3/m1.png")).setTransform(1896, 0, 2.022, 2.022);var instance1 = new Sprite(fromFrame("res/bg_images/3/m1.png")).setTransform(3792.45, 0, 2.022, 2.022, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.far = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/3/far.png")).setTransform(0, 0, 2.089, 2.089);var instance3 = new Sprite(fromFrame("res/bg_images/3/far.png")).setTransform(2253.1, 0, 2.089, 2.089, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/3/far.png")).setTransform(2251, 0, 2.089, 2.089);var instance1 = new Sprite(fromFrame("res/bg_images/3/far.png")).setTransform(4504.1, 0, 2.089, 2.089, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.cloud = Container.extend(function () {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("res/bg_images/3/cloud.png")).setTransform(0, 0, 1.939, 1.939);var instance3 = new Sprite(fromFrame("res/bg_images/3/cloud.png")).setTransform(2088.05, 0, 1.939, 1.939, 0, 0, 3.142);var instance2 = new Sprite(fromFrame("res/bg_images/3/cloud.png")).setTransform(2088, 0, 1.939, 1.939);var instance1 = new Sprite(fromFrame("res/bg_images/3/cloud.png")).setTransform(4176.05, 0, 1.939, 1.939, 0, 0, 3.142);this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.UI_LevelBg3 = Container.extend(function () {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("res/bg_images/3/bg-gradient.png")).setTransform(0, 0, 75.001, 66.361);var instance4 = new lib.cloud().setTransform(38, 448);this[instance4.name = "cloud"] = instance4;var instance3 = new lib.far().setTransform(0, 444);this[instance3.name = "far"] = instance3;var instance2 = new lib.mid().setTransform(140, 588);this[instance2.name = "mid"] = instance2;var instance1 = new lib.near().setTransform(0, 725);this[instance1.name = "near"] = instance1;this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.LevelBg3UI = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.UI_LevelBg3();this.addChild(instance1);
    });

    lib.LevelBg3UI.assets = ["res/bg_images/3/near.png", "res/bg_images/3/m1.png", "res/bg_images/3/far.png", "res/bg_images/3/cloud.png", "res/bg_images/3/bg-gradient.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;