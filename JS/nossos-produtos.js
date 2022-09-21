let lista_de_compras = [];
lista_de_compras.push(['Frutas', 'Pera', 3.05]);
lista_de_compras.push(['Legumes', 'Alho', 18.90]);
lista_de_compras.push(['Verduras', 'Alface Americana', 4.60]);

function calcula(item){
    let total = 0;
    for(let i = 0; i < lista_de_compras.length; i++){
        total += lista_de_compras[i][2];
    }
    return total;
}

// function lista_itens(item){
//     let nomes = [];
//     for(let i = 0; i < lista_de_compras.length; i++){
//         if (i == (lista_de_compras.length - 1)){
//             nomes += 'e ' + lista_de_compras[i][1] + '.'; 
//         } else {
//             nomes += lista_de_compras[i][1] + ', ';
//         }
        
//     }
//     return nomes;
// }

function lista_itens(item){
    let nomes = [];
    for(let i = 0; i < lista_de_compras.length; i++){
            nomes += '\n' + lista_de_compras[i][1]; 
    }
    return nomes;
}

console.log('Você comprou', lista_de_compras.length, 'itens:', lista_itens(lista_de_compras));
console.log('Seu total ficou em: R$', calcula(lista_de_compras));

function adiciona(item){
    lista_itens.push(item);
    alert('Adicionado com sucesso.');
}