import * as PIXI from 'pixi.js';
import LoadManager from './models/LoadManager';
(window as any).PIXI = PIXI;
import 'k8w-pixi-animate';
import 'k8w-pixi-tween';
import { UI_Paodekuai } from './ui/PlayViewUI';
import LevelBg3 from './Background/LevelBg3';
import { UI_LevelBg3 } from './ui/LevelBg3UI';

async function main() {
    let app = new PIXI.Application({
        width: 640,
        height: 1136,
        view: canvas,
        backgroundColor: 0xffe2e2,
        antialias: true,
        sharedLoader: true,
        sharedTicker: true,
        resolution: 1
    });

    PIXI.ticker.shared.add(() => {
        PIXI.tweenManager.update(PIXI.ticker.shared.elapsedMS);
    })

    await LoadManager.load(['texture.json', 'texture1.json']).catch(e => {
        console.log('loadError', e)
    })


    // let texture = PIXI.Texture.fromFrame('texture.png');
    // let sprite = new PIXI.Sprite(texture);
    // app.stage.addChild(sprite);

    // for (let i = 0; i < 3; ++i) {
    //     let dog = new UI_Paodekuai;
    //     dog.x = 640 * Math.random();
    //     dog.y = 1136 * Math.random();
    //     app.stage.addChild(dog);
    // }

    let bg = new LevelBg3;
    app.stage.addChild(bg);
    app.ticker.add(() => {
        bg.update(Date.now())
    })
}
main();

