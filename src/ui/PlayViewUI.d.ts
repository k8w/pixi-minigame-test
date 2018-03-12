import { MovieClip } from "k8w-pixi-animate";
import { Container, Sprite } from "pixi.js";
import { UIButton } from '../models/UIAdapter';

export class UI_Paodekuai extends MovieClip {
    constructor();
}

export class UI_RoleRed extends MovieClip {
    constructor();
}

export class UI_RoleGreen extends MovieClip {
    constructor();
}

export class UI_Road extends MovieClip {
    constructor();
}

export class UI_Coin extends MovieClip {
    constructor();
}

export class UI_Chocolate extends MovieClip {
    constructor();
}

export class UI_Cloud extends MovieClip {
    constructor();
}

export class UI_Beat extends MovieClip {
    constructor();
}

export class UI_Hold extends MovieClip {
    point1: Container;
    point2: Container;
    trans: Container;
    constructor();
}

export class UI_DeadModal extends MovieClip {
    _phImage: PIXI.Rectangle;
    tfWord: PIXI.Text;
    btnSave: UI_BtnSave;
    btnGiveup: MovieClip;
    tfRemain: PIXI.Text;

    constructor();
}

export class UI_PauseModal extends MovieClip {
    btnContinue: UIButton;
    btnEnd: UIButton;

    constructor();
}

export class UI_PlayViewHud extends MovieClip {
    btnPause: MovieClip;
    tfScore: PIXI.Text;
    hearts: Container;

    constructor();
}

export class UI_RhythmIndicator extends Container {
    bg: MovieClip;
    auto: MovieClip;
    ring: MovieClip;
    _phBeat: PIXI.Rectangle;
    _phHold: PIXI.Rectangle;
    assign: UI_Assign;
    explode: MovieClip;

    constructor();
}

export class UI_Assign extends MovieClip {
    perfect: UI_Perfect;
    great: UI_Great;

    constructor();
}

export class UI_BtnSave extends MovieClip {
    tfCountdown: PIXI.Text;

    constructor();
}

export class UI_Perfect extends MovieClip {
    tfCombo: PIXI.Text;

    constructor();
}

export class UI_Great extends MovieClip {
    tfCombo: PIXI.Text;

    constructor();
}

export class UI_FxEatItem extends MovieClip {
    item: MovieClip;
    explode: MovieClip;

    constructor();
}

export class UI_BuffIndicator extends Container{
    _phIcon: PIXI.Rectangle;
    tfText: PIXI.Text;
    
    constructor();
}