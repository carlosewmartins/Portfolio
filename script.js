/*const typed = new Typed("#typing", {
    strings: ["Carlos Eduardo Wille Martins"], // apenas uma string
    typeSpeed: 90, // velocidade de digitação
    showCursor: true, // mostra o cursor
    loop: true // não repete
});
*/
function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector("#typing")
typeWriter(titulo)