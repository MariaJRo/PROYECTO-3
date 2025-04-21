import './style.css'
import { createHeader } from './src/header.js'
import './src/gallery.js' // No tengo muy claro si esto está bien así (¿Utilizo una función como en el header?)

document.body.insertBefore(createHeader(), document.body.firstChild)

import { handleSearch } from './src/search.js'

const searchButton = document.querySelector('.searchButton')
const searchInput = document.querySelector('.searchContainer input')

searchButton.addEventListener('click', () => {
  const text = searchInput.value.trim()
  if (text) {
    handleSearch(text)
  }
})
