

const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const btnEsconderProjetos = document.querySelector('.btn-esconder-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


btnMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
    

    btnMostrarProjetos.classList.add("remover");
    btnEsconderProjetos.classList.add("adicionar");
});

btnEsconderProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
    

    btnMostrarProjetos.classList.remove("remover");
    btnEsconderProjetos.classList.remove("adicionar");
});


// objetivo 1- quando o usuário clicar no botão de "mostrar mais", ele deve abrir os projetos escondidos no HTML
// Passo 1- pegar o botão "mostrar mais" no JS para poder verificar quando o usuário clicar em cima dele.
// Passo 3 adicionar a classe "ativo" nos projetos escondidos
    // console.log('projetoInativo');