const createMasonryContainer = () => {
  const container = document.createElement('div')
  container.id = 'masonry-container'
  document.body.appendChild(container)
}

export const createCard = (imageUrl, userName, description, profileImg) => {
  const card = document.createElement('div')
  card.className = 'card'

  card.innerHTML = `
    <img src="${imageUrl}" alt="${userName}">
    <div class="card-content">
      <h3>${userName}</h3>
      <p>${description}</p>
      <img src="${profileImg}" alt="Avatar de ${userName}">
    </div>
  `

  document.getElementById('masonry-container').appendChild(card)
}

createMasonryContainer()

// Imágenes para tener una idea para el CSS - hay que crear todavía petición a la API - hay que registrarse en la API 🤦🏽‍♀️ - esto listo :-D
// Next Steps
// Cuando se hace hoover en la card tiene que aparecer "visitar"
// La imagen de perfil? 🤨 Esto listo también :-DD pero hay que buscar otras con mejor calidad
