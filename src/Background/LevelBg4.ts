import Background from './Background';
import { UI_LevelBg4 } from '../ui/LevelBg4UI';
export default class LevelBg4 extends Background {

    ui: UI_LevelBg4;
    constructor() {
        super();

        this.ui = new UI_LevelBg4();
        this.addChild(this.ui);

        this.setConf([
            // {
            //     obj: this.ui.near,
            //     time: 2000
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