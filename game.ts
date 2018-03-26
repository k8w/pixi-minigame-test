if (IS_WXGAME) {
    require('./libs/weapp-adapter');
}
else {
    (window as any).canvas = document.getElementById('stage');
}

import './src/index.ts';