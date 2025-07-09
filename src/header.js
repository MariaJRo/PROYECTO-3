export const createLogo = () => {
  const logo = document.createElement('img')
  logo.src =
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
  logo.alt = 'logo'
  logo.id = 'restartLogo'
  return logo
}

export const createMenuNav = () => {
  const menuNav = document.createElement('nav')
  const menuNavUl = document.createElement('ul')
  menuNavUl.classList.add('menuNavUl')

  const menuOptions = ['Inicio', 'Explorar', 'Crear']
  menuOptions.forEach((option) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.innerText = option
    li.appendChild(link)
    menuNavUl.appendChild(li)
  })

  menuNav.appendChild(menuNavUl)
  return menuNav
}

export const createSearchBar = () => {
  const searchContainer = document.createElement('div')
  searchContainer.classList.add('searchContainer')

  const searchBarInput = document.createElement('input')
  searchBarInput.placeholder = 'Buscar'

  const searchButton = document.createElement('button')
  searchButton.classList.add('searchButton')

  const searchIcon = document.createElement('img')
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/54/54481.png'
  searchIcon.alt = 'Buscar'

  searchButton.appendChild(searchIcon)
  searchContainer.appendChild(searchBarInput)
  searchContainer.appendChild(searchButton)

  return searchContainer
}

export const createMenuIcons = () => {
  const menuIconContainer = document.createElement('div')
  menuIconContainer.classList.add('menuIconContainer')

  const menuIconUl = document.createElement('ul')

  const menuIconUrls = [
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1742424672/campana_o44gx8.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1742424663/bocadillo-de-dialogo-contorneado-vacio-ovalado_zgebnt.png',
    'https://res.cloudinary.com/dhq4q8w0c/image/upload/v1742424643/avatar_nm6ffb.png'
  ]

  menuIconUrls.forEach((url) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#'
    const img = document.createElement('img')
    img.src = url
    img.alt = 'Iconos del menú'

    link.appendChild(img)
    li.appendChild(link)
    menuIconUl.appendChild(li)
  })

  menuIconContainer.appendChild(menuIconUl)
  return menuIconContainer
}

export const createHeader = () => {
  const header = document.createElement('header')

  const logo = createLogo()
  const menuNav = createMenuNav()
  const searchBar = createSearchBar()
  const menuIcons = createMenuIcons()

  header.appendChild(logo)
  header.appendChild(menuNav)
  header.appendChild(searchBar)
  header.appendChild(menuIcons)

  return header
}
