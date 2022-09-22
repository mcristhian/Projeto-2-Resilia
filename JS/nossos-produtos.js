//Primeira forma de adição

// function adicionar(item) {
//     carrinho.push(preco_itens[item]);
//     console.log(carrinho);
//     valor_total(carrinho);
// }

let preco_itens = [2.3, 3.05, 1.7, 2.2, 1.9, 2.4,
                    18.9, 2.9, 3.1, 4, 25.3, 6.1,
                    4.6, 2.4, 5.3, 1.9, 2.7, 2.1];

let quantidade_itens = [0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0]

let total_itens = [0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0]

function adicionar(item) {
    let quantidade = document.getElementById('quantidade_' + item);
    quantidade_itens[item] += 1;
    total_itens[item] = preco_itens[item] * quantidade_itens[item];
    quantidade.innerHTML = quantidade_itens[item];
    valor_total(total_itens);
}

function remover(item) {
    if(quantidade_itens[item] > 0){
        quantidade_itens[item] -= 1;
        let quantidade = document.getElementById('quantidade_' + item);
        total_itens[item] = preco_itens[item] * quantidade_itens[item];
        quantidade.innerHTML = quantidade_itens[item];
        valor_total(total_itens);
    } else {
		console.log('Item não adicionado ao carrinho');
    }
}

function valor_total(item) {
    let total = 0;
    for (let i = 0; i < total_itens.length; i++){
        total += item[i];
    }
    total_carrinho.innerHTML = total;
}
