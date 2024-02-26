
function toggleExpand() {
    var testimonial = document.getElementById('testimonial');
    var button = document.querySelector('.testimonial-item button');
    
    if (testimonial.classList.contains('expanded')) {
        testimonial.style.maxHeight = '200px'; // Define a altura máxima desejada
        button.innerText = 'Ler mais';
    } else {
        testimonial.style.maxHeight = testimonial.scrollHeight + 'px'; // Expande para a altura total do conteúdo
        button.innerText = 'Ler menos';
    }

    testimonial.classList.toggle('expanded');
}
    