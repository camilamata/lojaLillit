
let comprasLilit = [
    {produto: 'Bolsa pequena', valor: 59.0},
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}];

let comprasMonica = [
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}];

let comprasFlavio = [
    {produto: 'Blusa preta gola alta', valor: 60.0}]


function comprar(comprasCliente) {
    let valorTotal = 0
    let desconto = 0
    let valorComDesconto = 0
    let produtos = comprasCliente.length

    for (let item of comprasCliente) {
        valorTotal += item.valor
    };
        
        if (valorTotal >= 50 && valorTotal < 80) {
            desconto += valorTotal * .05
            valorComDesconto = valorTotal - desconto
             return console.log(`Sua compra foi de R$ ${valorTotal} mas com desconto de 5% você pagará ${valorComDesconto}`)
        }
        else if (valorTotal >= 80 && valorTotal < 100 ) {
            desconto += valorTotal * .1
            valorComDesconto = valorTotal - desconto
            return console.log(`Sua compra foi de R$ ${valorTotal} mas com desconto de 10% você pagará ${valorComDesconto}`)
        }
        else if (valorTotal >= 100 && valorTotal < 200 ) {
            desconto += valorTotal * .2
            valorComDesconto = valorTotal - desconto
            return console.log(`Sua compra foi de R$ ${valorTotal} mas com desconto de 20% você pagará ${valorComDesconto}`)
        }
        else if (valorTotal >= 200 ) {
            desconto += valorTotal * .5
            valorComDesconto = valorTotal - desconto
            return console.log(`Sua compra foi de R$ ${valorTotal} mas com desconto de 50% você pagará ${valorComDesconto}`)
        }
        else { 
            valorTotal += item.valor          
            return console.log(`esse é o valor total ${valorTotal}`)
        }
    }
      


comprar(comprasFlavio)





    