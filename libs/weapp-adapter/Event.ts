import {noop} from './util'

export default class Event {
  cancelBubble = false
  cancelable = false
  target: any = null
  timestamp: number = Date.now()
  preventDefault = noop
  stopPropagation = noop
  type: string;

  constructor(type: string) {
    this.type = type
  }
}
