//Primeira forma de adição

// function adicionar(item) {
//     carrinho.push(preco_itens[item]);
//     console.log(carrinho);
//     valor_total(carrinho);
// }

//Lista com o preço dos itens
let preco_itens = [2.3, 3.05, 1.7, 2.2, 1.9, 2.4,
                    18.9, 2.9, 3.1, 4, 25.3, 6.1,
                    4.6, 2.4, 5.3, 1.9, 2.7, 2.1];

//Lista para controlar a quantidade de cada item
let quantidade_itens = [0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0]

//Lista para abrigar o valor total de cada item
let total_itens = [0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0]

//Função para adição
function adicionar(item) {
    //Quantidade recebe o id de determinado item pelo parâmetro
    let quantidade = document.getElementById('quantidade_' + item);

    //Incremento da quantidade
    quantidade_itens[item] += 1;

    //Atualização do valor total após a incrementação
    total_itens[item] = preco_itens[item] * quantidade_itens[item];

    //Atualização da quantidade na página
    quantidade.innerHTML = quantidade_itens[item];

    //Chamada da função para atualizar o valor do carrinho
    valor_total(total_itens);
}

//Função para remoção
function remover(item) {
    //Condicional para só excluir produto adicionado
    if(quantidade_itens[item] > 0){
        //Quantidade recebe o id de determinado item pelo parâmetro
        let quantidade = document.getElementById('quantidade_' + item);

        //Decremento da quantidade
        quantidade_itens[item] -= 1;

        //Atualização do valor total após a decrementação
        total_itens[item] = preco_itens[item] * quantidade_itens[item];

        //Atualização da quantidade na página
        quantidade.innerHTML = quantidade_itens[item];

        //Chamada da função para atualizar o valor do carrinho
        valor_total(total_itens);
    } else {
		//console.log('Item não adicionado ao carrinho');
    }
}

//Função para atualizar valor total
function valor_total(item) {
    let total = 0;
    //Laço de repetição para incrementar o valor total de cada produto
    for (let i = 0; i < total_itens.length; i++){
        total += item[i];
    }

    //Atualização do valor total do carrinho na página
    total_carrinho.innerHTML = Math.round(total * 100) / 100;
}
