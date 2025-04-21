import { createCard } from './gallery.js'

const accessKey = 't0lQJGetRCW_qkA7VqiihT91vhSIrQqj3ZEynjrxjDE'

export const handleSearch = (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const resultados = data.results
      const container = document.getElementById('masonry-container')
      container.innerHTML = ''

      resultados.forEach((item) => {
        const imageUrl = item.urls.small
        const userName = item.user.name
        const description = item.alt_description || 'Sin descripción'
        const profileImg = item.user.profile_image.small // La calidad en small de la imagen de perfil es malísima, hay que probar con medium y large
        createCard(imageUrl, userName, description, profileImg)
      })
    })
    .catch((error) => {
      console.error('Error al buscar imágenes:', error)
    })
}
