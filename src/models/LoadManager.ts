import Config from './Config';
const soundExts = ['mp3', 'wav'];
const CONCURRENT = 5;

export default class LoadManager {

    static lastLoader: PIXI.loaders.Loader;
    static async load(srcs: string[], showLoading: boolean = false, msg: string = ''): Promise<PIXI.loaders.ResourceDictionary> {
        return new Promise<PIXI.loaders.ResourceDictionary>((rs, rj) => {
            let totalNum = srcs.length;
            let remainedNum = totalNum;
            srcs = srcs.slice();

            let soundSrcs = [] as string[];
            for (let i = srcs.length - 1; i > -1; --i) {
                if (soundExts.some(ext => srcs[i].endsWith('.' + ext))) {
                    soundSrcs.push(srcs[i]);
                    srcs.splice(i, 1);
                }
            }

            let loader = new PIXI.loaders.Loader(Config.resBaseUrl);
            this.lastLoader = loader;
            for (let src of srcs) {
                loader.add(src);
            }
            loader.onError.once((err: Error) => {
                rj(Error);
            });

            loader.on('load', (loader, resource) => {
                if (srcs.indexOf(resource.name) > -1) {
                    --remainedNum;
                    console.log('loadingProgress', totalNum, remainedNum);
                }
            })

            loader.once('complete', async (loader, resources) => {
                loader.off('progress');
                rs(loader.resources);
            })

            loader.load();
        })
    }
}