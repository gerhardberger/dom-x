# dom-x

a module for quickly create **dom** elements. **this module uses ES6 syntax!**

## install
```
npm i dom-x
```

## usage
``` js
const x = require('dom-x')

document.body.appendChild(x('button', {
  id: 'foo'
  'class': 'bar baz'
  , click(event) {
    console.log('clicked!')
  }
}, x('b', 'click')))
```

## api

### x(element, options, content)

- **element:** the name of the element you want to create. `String`
- **options:** attributes and event handlers for the element. *optional*. `Object`
  - **supported events:** `click`
- **content:** the content of the element. *optional*. `DOM Node` or `String`
