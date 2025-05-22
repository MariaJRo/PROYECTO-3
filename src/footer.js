const footer = document.createElement('footer')
document.body.appendChild(footer)
footer.classList.add('footer', 'flex-container')

const footerSect = document.createElement('Section')
footer.appendChild(footerSect)
footerSect.classList.add('footerSect', 'flex-container')

const footerCards = [
  {
    id: 1,
    h3: 'Pinterest',
    lis: ['Guía de usuario', 'Buscador de imágenes']
  },
  {
    id: 2,
    h3: 'Atención al cliente',
    lis: ['Preguntas frecuentes', 'Contacto']
  },
  {
    id: 3,
    h3: 'Aviso legal',
    lis: ['Términos y condiciones', 'Política de privacidad']
  }
]

const printFooter = (footerCards) => {
  footerSect.innerHTML = ''
  for (const footerCard of footerCards) {
    const footerDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')

    h3.textContent = footerCard.h3
    footerSect.appendChild(footerDiv)
    footerDiv.classList.add('footerDiv')
    footerDiv.appendChild(h3)
    footerDiv.appendChild(ul)

    for (const li of footerCard.lis) {
      const footerlis = document.createElement('li')
      footerlis.textContent = li
      ul.appendChild(footerlis)
    }
  }
}
printFooter(footerCards)
