const menu = document.querySelector(".navegacao-primaria");
const botao = document.querySelector(".menu-toggle");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");

        const destino = document.querySelector(link.getAttribute("href"));
        if (destino) {
            destino.querySelectorAll(".animar").forEach(el => {
                el.classList.remove("visivel");
                setTimeout(() => el.classList.add("visivel"), 100);
            });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".animar").forEach(el => observer.observe(el));

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra();