
    // Função para pausar o carrossel quando o mouse está sobre ele
    function pauseCarousel() {
        $('.testimonial-carousel').trigger('stop.owl.autoplay');
    }
    
    // Função para reiniciar o carrossel quando o mouse sai dele
    function resumeCarousel() {
        $('.testimonial-carousel').trigger('play.owl.autoplay');
    }

    $(document).ready(function() {
        // Iniciar o carrossel
        $('.testimonial-carousel').owlCarousel({
            // configurações do carrossel
            autoplay: true,
            autoplayTimeout: 5000, // ajuste conforme necessário
            // outras configurações...
        });
    });

