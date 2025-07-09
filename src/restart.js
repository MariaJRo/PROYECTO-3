import { handleSearch } from './search.js'

export const clickLogo = () => {
  const logo = document.getElementById('restartLogo')
  if (logo) {
    logo.addEventListener('click', () => {
      handleSearch('La Gomera')
    })
  }
}
