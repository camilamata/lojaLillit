let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]


function realizarCompra(arrayDeCompra) {
  let valorTotal = 0
  let descontoAplcado = 0
  let valorFinal = 0
  let quantidadeDeProdutos = arrayDeCompra.length

  for(let item of arrayDeCompra) {
    valorTotal += item.valor
    if (item.valor >= 200.0) {
      descontoAplcado += (item.valor * 0.5)
      valorFinal += (item.valor * 0.5)      
    } else if (item.valor >= 100.0) {
      descontoAplcado += (item.valor * 0.2)
      valorFinal += (item.valor * 0.8)     
    } else if (item.valor >= 80.0) {
      descontoAplcado += (item.valor * 0.1)
      valorFinal += (item.valor * 0.9)      
    } else if (item.valor >= 50.0) {
      descontoAplcado += (item.valor * 0.05)
      valorFinal += (item.valor * 0.95)      
    } else {
      valorFinal += item.valor
    }
  }

  let notaFiscal = {
    "Valor Total": `R$${valorTotal.toFixed(2).replace(".", ",")}`,
    "Desconto Aplicado": `R$${descontoAplcado.toFixed(2).replace(".", ",")}`,
    "Valor Final": `R$${valorFinal.toFixed(2).replace(".", ",")}`,

  }

  if (quantidadeDeProdutos > 10 || valorFinal > 800.0) {
    return console.table({
      ...notaFiscal,
      "Bônus": 'Voce ganhou um cupom de R$50,00 reais para sua próxima compra!'
    })
  } else {
    return console.log (notaFiscal)
  }
}

realizarCompra(clienteLilit)