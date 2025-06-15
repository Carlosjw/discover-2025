function toggleMode() {
  const html = document.documentElement;
  /* COM IF..ELSE
    if(html.classList.contains('light')){
      html.classList.remove('light')
    }else{
      html.classList.add('light')
    }
       */

    /* COM TOGGLE */
    html.classList.toggle('light');
}