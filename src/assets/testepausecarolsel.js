

document.addEventListener("DOMContentLoaded", function() {
  var owl = $('.owl-carousel.owl-2');
  owl.owlCarousel();

  // Pausar o carrossel quando o mouse entrar na imagem
  $('.media-29101').on('mouseenter', function() {
    owl.trigger('stop.owl.autoplay');
  });

  // Reiniciar o carrossel quando o mouse sair da imagem
  $('.media-29101').on('mouseleave', function() {
    owl.trigger('play.owl.autoplay', [3000]); // O segundo parâmetro é opcional, define o intervalo de tempo em milissegundos
  });
});

