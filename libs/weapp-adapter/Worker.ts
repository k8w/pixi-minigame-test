export default function(file: string) {
    const worker = wx.createWorker(file);

    return worker;
};
