import Background from './Background';
import { UI_LevelBg3 } from '../ui/LevelBg3UI';
export default class LevelBg3 extends Background {

    ui: UI_LevelBg3;
    constructor() {
        super();

        this.ui = new UI_LevelBg3();
        this.addChild(this.ui);

        this.setConf([
            {
                obj: this.ui.near,
                time: 3000
            },
            {
                obj: this.ui.mid,
                time: 6000
            },
            {
                obj: this.ui.far,
                time: 20000
            },
            {
                obj: this.ui.cloud,
                time: 40000
            }
        ]);
    }
}