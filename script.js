// Animação de entrada dos elementos

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


// Observar os elementos para animação
document.querySelectorAll('.sobre-content, .projeto-card, .habilidade-categoria, .contato-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

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

const navToggle = document.querySelector('.mobile-menu');
const navMenu = document.getElementById('nav_links');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Fechar o menu ao clicar em um link
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Se voltar para tela grande, garante que o menu não fique "preso"
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}