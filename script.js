function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a image light
    img.setAttribute("src", "./assets/avatar-light.png" )
  } else {
    // se tiver sem light mode, manter a image normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
