// Função para animação estilo maquina de escrever
function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector("#typing")
typeWriter(titulo)

// Botão Voltar ao topo
const backToTopButton = document.getElementById('voltar')

// Mostrar/ocultar botão
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
});

// Back to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

