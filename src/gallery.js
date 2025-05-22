const createMasonryContainer = () => {
  const container = document.createElement('main')
  container.id = 'masonry-container'
  document.body.appendChild(container)
}

export const createCard = (imageUrl, userName, likes, profileImg) => {
  const card = document.createElement('div')
  card.className = 'card'

  card.innerHTML = `
    <img src="${imageUrl}" alt="${userName}">
    <div class="card-content">
      <h3>${userName}</h3>
      <p class="hearts">${likes}</p>
      <img src="${profileImg}" alt="Avatar de ${userName}">
    </div>
  `

  document.getElementById('masonry-container').appendChild(card)
}

createMasonryContainer()
