 //função criada pra musica tocar só depois de clicar em qualquer lugar da pagina
 window.addEventListener('click', function() {
  const audio = document.getElementById('music');
  audio.play();
  audio.volume = 0.2;
});

//função pra trocar a o tema de acordo com o id do elemento
function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  document.body.setAttribute('aria-label', 'Trocando o tema');

  //aqui está verificando qual tema está em uso e selecionando a musica para cada um  
  const theme = document.body.classList[0];
  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

  
  const audio = document.getElementById('music');
  audio.src = `assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
}