const x = require('../')

window.onload = function () {
  document.body.appendChild(x('button', {
    id: 'foo'
    , 'class': 'foo bar'
    , click(event) {
      console.log('clicked')
    }
  }, x('b', 'BUMM')))
}
