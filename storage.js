function makeWanderlist() {
  const key = 'wanderlist'

  const readAll = () => JSON.parse(localStorage.getItem(key))

  const get = (page, item) => {
    const data = readAll()

    if (!data || !data[page] || !data[page][item]) return false
    return data[page][item]
  }
  const set = (page, item, value) => {
    let data = readAll()

    if (!data) data = {}
    if (!data[page]) data[page] = {}

    data[page][item] = value
    localStorage.setItem(key, JSON.stringify(data))
  }
  const render = (page) => {
    document.querySelectorAll('.block.item').forEach(element => {
      const item = element.dataset.name
      const checkbox = element.querySelector('input')
      checkbox.checked = get(page, item)
    })
  }

  return {
    render,
    set
  }
}

window.wanderlist = makeWanderlist()

const page = window.location.pathname.split('/').pop().split('.').shift()
window.wanderlist.page = page

window.wanderlist.render(page)
