import './style.css'
import { createHeader } from './src/header.js'
import './src/gallery.js'
import { handleSearch } from './src/search.js'
import './src/footer.js'

document.body.insertBefore(createHeader(), document.body.firstChild)

const searchButton = document.querySelector('.searchButton')
const searchInput = document.querySelector('.searchContainer input')

searchButton.addEventListener('click', () => {
  const text = searchInput.value.trim()
  if (text) {
    handleSearch(text)
  }
})
handleSearch('La Gomera')
