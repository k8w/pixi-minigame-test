import Element from './Element'
import { noop } from './util/index'
import { innerWidth, innerHeight } from './WindowProperties'

export default class HTMLElement extends Element {
  className: string = ''
  childern: any[] = []
  style: any = {
    width: `${innerWidth}px`,
    height: `${innerHeight}px`
  }
  tagName: string;

  insertBefore = noop

  innerHTML = ''

  constructor(tagName: string = '') {
    super()
    this.tagName = tagName.toUpperCase()
  }

  setAttribute(name: string, value: string) {
    (this as any)[name] = value
  }

  getAttribute(name: string) {
    return (this as any)[name]
  }

  get clientWidth() {
    const ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length

    return Number.isNaN(ret) ? 0 : ret
  }

  get clientHeight() {
    const ret = parseInt(this.style.fontSize, 10)

    return Number.isNaN(ret) ? 0 : ret
  }

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: innerWidth,
      height: innerHeight
    }
  }

  focus() {

  }
}
