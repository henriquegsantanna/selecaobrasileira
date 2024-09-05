function pesquisar() {
    //Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    //Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    //Itera sobre cada dado da pesquisa (assumindo que 'dados' é um array de objetos)
    for (const dado of dados) {
      //Cria um novo elemento div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p><a href="${dado.link}" target="_blank">Clique aqui para seguir o ${dado.titulo} no Instagram!</a></p> </div>
      `;
    }
  
    //Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }