import Background from './Background';
import { UI_LevelBg1 } from '../ui/LevelBg1UI';
export default class LevelBg1 extends Background {

    ui: UI_LevelBg1;
    constructor() {
        super();

        this.ui = new UI_LevelBg1();
        this.addChild(this.ui);

        this.setConf([
            // {
            //     obj: this.ui.near,
            //     time: 2000
            // },
            {
                obj: this.ui.far,
                time: 8000
            },
            {
                obj: this.ui.cloud,
                time: 24000
            }
        ]);
    }
}