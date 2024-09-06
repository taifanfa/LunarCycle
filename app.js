function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Vish! Não foram encontrados dados para a sua pesquisa. O campo de busca está vazio.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let titulo2 = "";
    let titulo3 = "";
    let descricao = "";
    let descricao2 = "";
    let descricao3 = "";
    let descricao4 = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        titulo2 = dado.titulo2.toLowerCase ()
        titulo3 = dado.titulo3.toLowerCase ()
        descricao = dado.descricao.toLowerCase ()
        descricao2 = dado.descricao2.toLowerCase ()
        descricao3 = dado.descricao3.toLowerCase ()
        descricao4 = dado.descricao4.toLowerCase ()
        tags = dado.tags.toLowerCase ()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || titulo2.includes(campoPesquisa) || titulo3.includes(campoPesquisa) || descricao.includes(campoPesquisa) || descricao2.includes(campoPesquisa) || descricao3.includes(campoPesquisa) || descricao4.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}<h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <h3>${dado.titulo2}<h3>
                <p class="descricao-meta">${dado.descricao2}</p>
                <h4>${dado.titulo3}<h4>
                <p class="descricao-meta">${dado.descricao3}</p>
                <p class="descricao-meta">${dado.descricao4}</p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Eeeeita! Não foram encontrados dados para a sua pesquisa. Talvez nossa base de dados não tenha essa informação. Tente buscar por outra palavra.</p>"

    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}