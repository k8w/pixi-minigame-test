import EventTarget from './EventTarget'

const _url = new WeakMap()
const _method = new WeakMap()
const _requestHeader = new WeakMap()
const _responseHeader = new WeakMap()
const _requestTask = new WeakMap()

function _triggerEvent(this: any, type: string, ...args: any[]) {
  if (typeof this[`on${type}`] === 'function') {
    (this as any)[`on${type}`].apply(this, args)
  }
}

function _changeReadyState(this: any, readyState: string) {
  this.readyState = readyState
  _triggerEvent.call(this, 'readystatechange')
}

export default class XMLHttpRequest extends EventTarget {
  // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
  static UNSEND = 0
  static OPENED = 1
  static HEADERS_RECEIVED = 2
  static LOADING = 3
  static DONE = 4

  /*
   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
   */
  onabort = null
  onerror = null
  onload = null
  onloadstart = null
  onprogress = null
  ontimeout = null
  onloadend = null

  onreadystatechange = null
  readyState: number = 0
  response?: any = null
  responseText?: string | null = null
  responseType: string = ''
  responseXML = null
  status: number = 0
  statusText = ''
  upload = {}
  withCredentials = false

  constructor() {
    super();

    _requestHeader.set(this, {
      'content-type': 'application/x-www-form-urlencoded'
    })
    _responseHeader.set(this, {})
  }

  abort() {
    const myRequestTask = _requestTask.get(this)

    if (myRequestTask) {
      myRequestTask.abort()
    }
  }

  getAllResponseHeaders() {
    const responseHeader = _responseHeader.get(this)

    return Object.keys(responseHeader).map((header) => {
      return `${header}: ${responseHeader[header]}`
    }).join('\n')
  }

  getResponseHeader(header: any) {
    return _responseHeader.get(this)[header]
  }

  open(method: string, url: string/* async, user, password 这几个参数在小程序内不支持*/) {
    _method.set(this, method)
    _url.set(this, url)
    _changeReadyState.call(this, XMLHttpRequest.OPENED)
  }

  overrideMimeType() {
  }

  send(data = '') {
    if (this.readyState !== XMLHttpRequest.OPENED) {
      throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.")
    } else {
      console.log('url', _url.get(this))
      wx.request({
        data,
        url: _url.get(this),
        method: _method.get(this),
        header: _requestHeader.get(this),
        responseType: this.responseType,
        success: (res: { data: any, statusCode: number, header: any }) => {
          if (typeof res.data !== 'string' && !(res.data instanceof ArrayBuffer)) {
            try {
              res.data = JSON.stringify(res.data)
            } catch (e) {
              res.data = res.data
            }
          }

          this.status = res.statusCode
          _responseHeader.set(this, res.header)
          _triggerEvent.call(this, 'loadstart')
          _changeReadyState.call(this, XMLHttpRequest.HEADERS_RECEIVED)
          _changeReadyState.call(this, XMLHttpRequest.LOADING)

          this.response = data

          if (res.data instanceof ArrayBuffer) {
            this.responseText = ''
            const bytes = new Uint8Array(res.data)
            const len = bytes.byteLength

            for (let i = 0; i < len; i++) {
              this.responseText += String.fromCharCode(bytes[i])
            }
          } else {
            this.responseText = res.data
          }
          _changeReadyState.call(this, XMLHttpRequest.DONE)
          _triggerEvent.call(this, 'load')
          _triggerEvent.call(this, 'loadend')
        },
        fail: (res: { errMsg: string }) => {
          // TODO 规范错误
          if (res.errMsg.indexOf('abort') !== -1) {
            _triggerEvent.call(this, 'abort')
          } else {
            _triggerEvent.call(this, 'error', res.errMsg)
          }
          _triggerEvent.call(this, 'loadend')
        }
      })
    }
  }

  setRequestHeader(header: any, value: any) {
    const myHeader = _requestHeader.get(this)

    myHeader[header] = value
    _requestHeader.set(this, myHeader)
  }

  addEventListener(type: string, listener: Function) {
    if (typeof listener === 'function') {
      let _this1 = this;
      let event: any = { target: _this1 };
      (this as any)['on' + type] = function (event: any) {
        listener.call(_this1, event)
      }
    }
  }
}
