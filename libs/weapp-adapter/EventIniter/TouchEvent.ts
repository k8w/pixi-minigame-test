import { noop } from '../util/index'
import Event from '../Event'

export default class TouchEvent extends Event {
  touches = []
  targetTouches = []
  changedTouches = []
  preventDefault = noop
  stopPropagation = noop
  currentTarget: any;

  constructor(type: string) {
    super(type);
    this.type = type
    this.target = window.canvas
    this.currentTarget = window.canvas
  }
}

function touchEventHandlerFactory(type: string) {
  return (event: TouchEvent) => {
    const touchEvent = new TouchEvent(type)

    touchEvent.touches = event.touches
    touchEvent.targetTouches = Array.prototype.slice.call(event.touches)
    touchEvent.changedTouches = event.changedTouches
    touchEvent.timestamp = event.timestamp
    document.dispatchEvent(touchEvent as any)
  }
}

wx.onTouchStart(touchEventHandlerFactory('touchstart'))
wx.onTouchMove(touchEventHandlerFactory('touchmove'))
wx.onTouchEnd(touchEventHandlerFactory('touchend'))
wx.onTouchCancel(touchEventHandlerFactory('touchcancel'))
