import { MovieClip } from "k8w-pixi-animate";
import { Container } from "pixi.js";
import { UIButton } from '../models/UIAdapter';

export class UI_AssignView extends MovieClip {
    tfWord: PIXI.Text;
    tfScore: PIXI.Text;
    _phRole: PIXI.Rectangle;
    starGroup: Container;
    btnTiaozhan: UIButton;
    btnAgain: UIButton;
    btnShop: UIButton;
    btnDashang: UIButton;
    btnFriendRank: UIButton;
    btnCnRank: UIButton;
    btnBack: UIButton;
    rankList: UI_RankList;
    bg: Container;
    btnAcceptChallenge: UIButton;
    btnRejectChallenge: UIButton;
    challengeHint: MovieClip;

    constructor();
}


export class UI_RankList extends MovieClip {
    _phFirstItem: PIXI.Rectangle;
    bg: Container;

    constructor();
}

export class UI_RankListItem extends MovieClip {
    tfNo: PIXI.Text;
    tfName: PIXI.Text;
    tfScore: PIXI.Text;
    _phHeadPic: PIXI.Rectangle;

    constructor();
}