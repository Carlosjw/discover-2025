function toggleMode() {
  const html = document.documentElement;
  /* COM TOGGLE */
  html.classList.toggle('light');

  const img = document.querySelector("#profile img");

  /* COM IF..ELSE */
    if(html.classList.contains('light')){
      img.setAttribute('src', './assets/avatar-light.png')
      img.setAttribute('alt', 'Imagem pensadora')
    }else{
      img.setAttribute('src', '/assets/Avatar.png')
    }

}