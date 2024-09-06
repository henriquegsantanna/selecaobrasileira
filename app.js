function pesquisar() {
    //Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se o campo estiver vazio, não retorna nenhum atleta
    if(campoPesquisa == "") {
      section.innerHTML = ""
      return
    }

    //Filtra tudo que digitar em minusculo no campo pesquisa
    campoPesquisa = campoPesquisa.toLowerCase();
  
    //Inicializa uma string vazia para armazenar o HTML dos resultados, do titulo e da descrição
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    //Itera sobre cada dado da pesquisa (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {

      //Busca o título, descrição ou tag em minusculo se for pesquisado em minusculo
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      //Busca oque foi digitado no campo pesquisa(busca no título e na descrição)
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
        //Cria um novo elemento div para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p><a href="${dado.link}" target="_blank">Clique aqui para seguir o ${dado.titulo} no Instagram!</a></p>
        </div>
    `;
    }
    }
  
    //Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }
