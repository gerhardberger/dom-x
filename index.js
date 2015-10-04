function createElement (s) {
  // TODO: sophisticated element creation from selector e.g.: `div#id`
  return document.createElement(s)
}

function extractEvents (e, o) {
  ;['click'].forEach(name => {
    if (o[name]) {
      e.addEventListener(name, o[name])
      delete o[name]
    }
  })
}

function extractAttributes (e, o) {
  if (o['class']) {
    o['class'].split(' ').forEach(c => e.classList.add(c))
    delete o['class']
  }

  Object.keys(o).forEach(a => e[a] = o[a])
}

function addContent (e, c) {
  if (typeof c === 'string') {
    e.innerText = c
    return
  }

  e.appendChild(c)
}

module.exports = function (selector, options, content) {
  if (typeof selector !== 'string') {
    console.log(`Selector (${selector}) is not a string!`)
    return
  }

  const e = createElement(selector)

  if (typeof options === 'object') {
    extractEvents(e, options)

    extractAttributes(e, options)
  }
  else if (!content) {
    addContent(e, options)
  }

  if (content) {
    addContent(e, content)
  }

  return e
}
