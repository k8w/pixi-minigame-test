import Background from './Background';
import { UI_LevelBg5 } from '../ui/LevelBg5UI';
export default class LevelBg5 extends Background {

    ui: UI_LevelBg5;
    constructor() {
        super();

        this.ui = new UI_LevelBg5();
        this.addChild(this.ui);

        this.setConf([
            {
                obj: this.ui.near,
                time: 2000
            },
            {
                obj: this.ui.far,
                time: 10000
            },
            {
                obj: this.ui.cloud,
                time: 30000
            }
        ]);
    }
}