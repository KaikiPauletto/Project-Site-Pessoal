function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

const menu = document.querySelector(".navegacao-primaria");
const botao = document.querySelector(".menu-toggle");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});

escrevendoLetra() 