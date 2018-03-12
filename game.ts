if (IS_WX_MINIGAME && typeof (GameGlobal) !== 'undefined') {
    require('./libs/weapp-adapter');
}
else {
    (window as any).canvas = document.getElementById('stage');
}
// import './js/libs/symbol'
import './src/index.ts';