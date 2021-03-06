/** @format */

import App from './App.html'

const app = new App({
  target: document.getElementById('app')
})

export default app

try {
  navigator.registerProtocolHandler(
    'bitcoin',
    'https://chainmarket.etleneum.com/#addr=%s',
    'ChainMarket'
  )
} catch (err) {
  console.log('registerProtocolHandler:', err)
}
