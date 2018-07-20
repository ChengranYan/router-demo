import { CLIENT_RENEG_WINDOW } from "tls";

export default class Router {
  constructor () {
    this.routes = []
    this._listen()
  }

  on (path, callback) {
    this.routes.push({ path, callback })
  }

  navigate (path, query = {}) {
    history.pushState(query, null, path)
    this.routes.forEach(({ path: routePath, callback }) => {
      if (routePath === path) {
        callback(query)
      }
    })
  }

  render () {
    const path = location.pathname
    this.routes.forEach(({ path: routePath, callback }) => {
      if (routePath === path) {
        callback(history.state)
      }
    })
  }

  _listen () {
    window.addEventListener('popstate', this.render.bind(this), false)
    window.addEventListener('load', this.render.bind(this), false)
  }
}
