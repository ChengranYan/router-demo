import Router from './router'
import './index.scss'


const router = new Router()
const view = document.querySelector('#view')
router.add('/', () => {
  view.innerHTML = 'Router: /'
})

router.add('/page1', () => {
  view.innerHTML = 'Router: /page1'
})

router.add('/page2', () => {
  view.innerHTML = 'Router: /page2'
})

router.add('/page3', () => {
  view.innerHTML = 'Router: /page3'
})
