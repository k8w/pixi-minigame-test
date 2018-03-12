import Canvas from './Canvas'

export { default as navigator } from './navigator'
export { default as XMLHttpRequest } from './XMLHttpRequest'
export { default as WebSocket } from './WebSocket'
export { default as Image } from './Image'
export { default as ImageBitmap } from './ImageBitmap'
export { default as Audio } from './Audio'
export { default as FileReader } from './FileReader'
export { default as HTMLElement } from './HTMLElement'
export { default as HTMLImageElement } from './HTMLImageElement'
export { default as HTMLCanvasElement } from './HTMLCanvasElement'
export { default as HTMLMediaElement } from './HTMLMediaElement'
export { default as HTMLAudioElement } from './HTMLAudioElement'
export { default as HTMLVideoElement } from './HTMLVideoElement'
export { default as WebGLRenderingContext } from './WebGLRenderingContext'
export { TouchEvent, MouseEvent } from './EventIniter/index'
export { default as localStorage } from './localStorage'
export { default as location } from './location'
export * from './WindowProperties'

// 暴露全局的 canvas
GameGlobal.screencanvas = GameGlobal.screencanvas || new (Canvas as any)()
const canvas = GameGlobal.screencanvas;

export { canvas }
