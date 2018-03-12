import * as _window from './window'
import document from './document'
import HTMLElement from './HTMLElement'

const global = GameGlobal

function inject () {
  (_window as any).document = document;

  (_window as any).addEventListener = (type: string, listener: Function) => {
    (_window as any).document.addEventListener(type, listener)
  }
  (_window as any).removeEventListener = (type: string, listener: Function) => {
    (_window as any).document.removeEventListener(type, listener)
  }
  (_window as any).dispatchEvent = function (event: any = {}) {
    console.log('window.dispatchEvent' , event.type, event);
    // nothing to do
  }

  const { platform } = wx.getSystemInfoSync()

  // 开发者工具无法重定义 window
  if (platform === 'devtools') {
    for (const key in _window) {
      const descriptor = Object.getOwnPropertyDescriptor(global, key)

      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(window, key, {
          value: (_window as any)[key]
        })
      }
    }

    for (const key in (_window as any).document) {
      const descriptor = Object.getOwnPropertyDescriptor(global.document, key)

      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(global.document, key, {
          value: (_window as any).document[key]
        })
      }
    }
    (window as any).parent = window
  } else {
    for (const key in _window) {
      global[key] = (_window as any)[key]
    }
    global.window = _window;
    window = global;
    (window as any).top = (window as any).parent = window
  }
}

if (!GameGlobal.__isAdapterInjected) {
  GameGlobal.__isAdapterInjected = true
  inject()
}
