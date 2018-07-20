export default class Router {
  routes = {}
  currentRoute = ''
  constructor () {
    this._listen()
  }

  add (path, callback) {
    this.routes[path] = callback || (() => {})
  }

  reload () {
    this.currentRoute = location.hash.replace('#', '/') || '/'
    this.routes[this.currentRoute]()
  }

  _listen () {
    window.addEventListener('load', this.reload.bind(this), false)
    window.addEventListener('hashchange', this.reload.bind(this), false)
  }
}
