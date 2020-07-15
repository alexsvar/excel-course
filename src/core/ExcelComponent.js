import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // configure the component before init()
  prepare() {}

  // return component's template
  toHTML() {
    return ''
  }

  // notify listeners about events
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Changes in the subscribed fields
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Initialize component and add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // remove component and clear listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
