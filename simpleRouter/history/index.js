import Router from './router'
import './index.scss'
import { EventEmitter } from 'events';
import { CLIENT_RENEG_WINDOW } from 'tls';


const router = new Router()
const view = document.querySelector('#view')
const btns = document.querySelector('.router')
btns.addEventListener('click', event => {
  if (event.target.className === 'btn') {
    const { routeValue } = event.target.dataset
    router.navigate(`/page${routeValue}`, { data: `data-${routeValue}` })
  }
}, false)
router.on('/', query => {
  view.innerHTML = `Router: /\n${JSON.stringify(query)}`
})

router.on('/page1', query => {
  view.innerHTML = `Router: /page1\n${JSON.stringify(query)}`
})

router.on('/page2', query => {
  view.innerHTML = `Router: /page2\n${JSON.stringify(query)}`
})

router.on('/page3', query => {
  view.innerHTML = `Router: /page3\n${JSON.stringify(query)}`
})

