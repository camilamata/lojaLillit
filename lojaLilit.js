
let comprasLilit = [
    { produto: 'Bolsa pequena', valor: 59.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }];

let comprasMonica = [
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 }];

let comprasFlavio = [
    { produto: 'Blusa preta gola alta', valor: 60.0 }]


function aplicarDesconto(comprasCliente) {
    let valorTotal = 0
    let desconto = 0
    let valorComDesconto = 0

    for (let item of comprasCliente) {
        valorTotal += item.valor
    };

    if (valorTotal >= 50 && valorTotal < 80) {
        printDesconto = "5%"
        desconto += valorTotal * .05
        valorComDesconto = valorTotal - desconto
    }
    else if (valorTotal >= 80 && valorTotal < 100) {
        printDesconto = "10%"
        desconto += valorTotal * .1
        valorComDesconto = valorTotal - desconto
    }
    else if (valorTotal >= 100 && valorTotal < 200) {
        printDesconto = "20%"
        desconto += valorTotal * .2
        valorComDesconto = valorTotal - desconto
    }
    else if (valorTotal >= 200) {
        printDesconto = "50%"
        desconto += valorTotal * .5
        valorComDesconto = valorTotal - desconto
    }
    else {
        valorTotal += item.valor
        return console.log(`esse é o valor total ${valorTotal}`)
    }
    return console.log(`Sua compra foi de R$ ${valorTotal} mas com desconto de ${printDesconto} você pagará R$ ${valorComDesconto}`)
};

function aplicarCupom(comprasCliente) {
    let valorTotal = 0
    let quantidadeProdutos = comprasCliente.length

    for (let item of comprasCliente) {
        valorTotal += item.valor
    };
    if (valorTotal > 800 || quantidadeProdutos >= 9) {
        console.log("Parabéns, você ganhou um cupom de R$50,00 para sua próxima compra na loja!")
    }
};


aplicarDesconto(comprasLilit)
aplicarCupom(comprasLilit)





