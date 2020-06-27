export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // notify listeners, if there are
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen, ...
  // subscribing in notifications or adding new listener
  // table.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event]
            .filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
// const unsubscribe =
//   emitter.subscribe('evil', data => console.log('Sub: ', data))
// emitter.emit('evil', 31)
// setTimeout(() => {
//   emitter.emit('evil', 'After 2 seconds')
// }, 2000)
// setTimeout(() => {
//   unsubscribe()
// }, 3000)
// setTimeout(() => {
//   emitter.emit('evil', 'After 4 seconds')
// }, 4000)
