const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    //busca o id do personagem que o mouse foi passado em cima
    const idSelecionado = personagem.attributes.id.value;

    //se passado o mouse por cima do ultron não faz nada por que ele já foi selecionado pelo player 2
    //if (idSelecionado === "Girafales") { }
    //if (idSelecionado === "Girafales") return;
    if (idSelecionado === "Madruga") {
      document.getElementById('player').innerHTML = '1P';
    } else {
        document.getElementById('player').innerHTML = '2P';
    }
    //  imagemJogador1.src = `./imagem/Madruga_left.png`; 
    //idSelecionado.childNodes[1].innerHTML = 5p;
        //idSelecionado.childNodes[1].innerHTML = 5p;
        //alert('madruguinha')
       // document.getElementbyId('player').innerHTML = '1P'
  //}

    //busca o nome do personagem que já está selecionado
    const nomeSelecionado = personagem.getAttribute("data-name");

    //busca a imagem grande atual do jogador 1 
    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    //define a nova imagem pelo id que foi passado o mouse em cima
    imagemJogador1.src = `./imagem/${idSelecionado}.png`;

    //busca a div pai do jogador 1
    const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");
    //pra depois buscar o texto do h2 e trocar pelo nome do que está com o mouse em cima
    personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;

    //busca o personagem que já está selecionado
    const personagemSelecionado = document.querySelector(".selecionado");
    //retira a classe do que já está selecionado
    personagemSelecionado.classList.remove("selecionado");

    if (idSelecionado === "Girafales") {
      imagemJogador1.style.height = "87vh";
      imagemJogador1.style.top = "45%";
    } else {
      imagemJogador1.style.height = "80vh";
      imagemJogador1.style.top = "50%";
    }

    //para colocar no que está com o mouse em cima
    personagem.classList.add("selecionado");
  });
});