import Background from './Background';
import { UI_LevelBg2 } from '../ui/LevelBg2UI';
export default class LevelBg2 extends Background {

    ui: UI_LevelBg2;
    constructor() {
        super();

        this.ui = new UI_LevelBg2();
        this.addChild(this.ui);

        this.setConf([
            // {
            //     obj: this.ui.near,
            //     time: 1500
            // },
            {
                obj: this.ui.mid,
                time: 5000
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