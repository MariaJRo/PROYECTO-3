import { createCard } from './gallery.js'

const accessKey = import.meta.env.VITE_ACCESS_KEY

console.log('Access key:', accessKey)

export const handleSearch = (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = data.results
      const container = document.getElementById('masonry-container')
      container.innerHTML = ''
      results.forEach((item) => {
        const imageUrl = item.urls.small
        const userName = item.user.name
        const likes = item.likes || ''
        const profileImg = item.user.profile_image.large
        createCard(imageUrl, userName, likes, profileImg)
      })

      const input = document.querySelector('input')
      if (input) input.value = ''
    })
    .catch((error) => {
      console.error('Error al buscar imágenes:', error)

      const input = document.querySelector('input')
      if (input) input.value = ''
    })
}
