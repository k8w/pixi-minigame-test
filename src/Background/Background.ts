import { Container } from "pixi.js";

interface ScrollConfigItem {
    obj: Container;
    // 滚动周期（滚动 1/2 Width）
    time: number;
    /**
     * obj.width / 2
     */
    halfWidth: number;
    initX: number;
}

export default class Background extends Container {

    protected conf!: ScrollConfigItem[];
    static assets: string[];

    constructor() {
        super();
    }

    setConf(conf: { obj: Container, time: number }[]) {
        this.conf = conf.map(v => ({
            obj: v.obj,
            time: v.time,
            halfWidth: v.obj.width >> 1,
            initX: v.obj.x
        }))
    }

    update(time: number) {
        for (let item of this.conf) {
            let phase = (time / item.time) % 1;
            item.obj.x = item.initX + -item.halfWidth * phase;
        }
    }

}