"use strict";

(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.snow = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(0, 0, 0.129, 0.129);this.addChild(instance1);
    });

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance7 = new Sprite(fromFrame("res/bg_images/1/cloud.png"));var instance6 = new lib.snow().setTransform(44, 277).setAlpha(0.6);var instance5 = new lib.snow().setTransform(212.45, 152.55, 1.27, 1.27).setAlpha(0.94);var instance4 = new lib.snow().setTransform(265.05, 227.65, 0.88, 0.88).setAlpha(0.8);var instance3 = new lib.snow().setTransform(485.05, 194.3, 1.62, 1.62).setAlpha(0.47);var instance2 = new lib.snow().setTransform(423.95, 335.5, 0.85, 0.85);var instance1 = new lib.snow().setTransform(637.25, 397.15, 1.07, 1.07).setAlpha(0.83);this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance7 = new Sprite(fromFrame("res/bg_images/1/cloud.png"));var instance6 = new lib.snow().setTransform(44, 277).setAlpha(0.6);var instance5 = new lib.snow().setTransform(212.45, 152.55, 1.27, 1.27).setAlpha(0.94);var instance4 = new lib.snow().setTransform(265.05, 227.65, 0.88, 0.88).setAlpha(0.8);var instance3 = new lib.snow().setTransform(485.05, 194.3, 1.62, 1.62).setAlpha(0.47);var instance2 = new lib.snow().setTransform(423.95, 335.5, 0.85, 0.85);var instance1 = new lib.snow().setTransform(637.25, 397.15, 1.07, 1.07).setAlpha(0.83);this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.cloud = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.Graphic2();var instance1 = new lib.Graphic1().setTransform(749);this.addChild(instance2, instance1);
    });

    lib.far = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("res/bg_images/1/mountain.png")).setTransform(20, 0, 1.57, 1.57);var instance1 = new Sprite(fromFrame("res/bg_images/1/bg.png")).setTransform(0, 242, 75);this.addChild(instance2, instance1);
    });

    lib.far2 = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.far();var instance1 = new lib.far().setTransform(748);this.addChild(instance2, instance1);
    });

    lib.Graphic3 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("res/images/common/circle.png")).setTransform(0, 0, 3.203, 3.203);this.addChild(instance1);
    });

    lib.Graphic4 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("res/images/common/white.png")).setTransform(0, 0, 150, 216);this.addChild(instance1);
    });

    lib.UI_LevelBg1 = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.Graphic4().setColorTransform(0, 0.4, 0, 0.5, 0, 0.75);var instance3 = new lib.Graphic3().setTransform(470, 460).setColorTransform(0, 0.81, 0, 0.92, 0, 0.94);var instance2 = new lib.far2().setTransform(0, 404);this[instance2.name = "far"] = instance2;var instance1 = new lib.cloud();this[instance1.name = "cloud"] = instance1;this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.LevelBg1UI = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance1 = new lib.UI_LevelBg1();this.addChild(instance1);
    });

    lib.LevelBg1UI.assets = ["res/images/common/circle.png", "res/bg_images/1/cloud.png", "res/bg_images/1/bg.png", "res/bg_images/1/mountain.png", "res/images/common/white.png"];
})(PIXI, lib = lib || {});
var lib;
module.exports = lib;