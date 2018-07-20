import React, { Component } from "react"
import PropTypes from "prop-types"

let instances = []
const register = comp => instances.push(comp)
const unRegister = comp => instances.splice(instances.indexOf(comp), 1)

const historyPush = path => {
  window.history.pushState({}, null, path)
  instances.forEach(instance => instance.forceUpdate())
}

window.addEventListener("popstate", () => {
  instances.forEach(instance => instance.forceUpdate())
})

const matchPath = (pathname, options) => {
  const { path, exact = false } = options
  const match = new RegExp(`^${path}`).exec(pathname)
  if (!match) return null
  const url = match[0]
  const isExact = pathname === url
  if (exact && !isExact) return null
  return {
    path,
    url
  }
}

export function Link(props) {
  const { to, children } = props
  const handleClick = event => {
    event.preventDefault()
    historyPush(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export class Route extends Component {
  static propTypes = {
    path: PropTypes.string,
    component: PropTypes.func,
    exact: PropTypes.bool
  }

  componentWillMount() {
    register(this)
  }

  render() {
    const { path, component, exact } = this.props
    const match = matchPath(window.location.pathname, { path, exact })

    // Route 跟当前 url 不匹配，就返回 null
    if (!match) return null

    if (component) {
      return React.createElement(component)
    }
  }

  componentWillUnMount() {
    unRegister(this)
  }
}

export const jsHistory = {
  pushState: historyPush
}
