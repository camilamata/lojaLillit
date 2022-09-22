// function nomeDaFuncao(argumentos) {
//     Escopo: recebe o código do que será executado
// return
// };
//Como boas práticas, é interessante nomear a função como um verbo que explicita o que ela executa

function imprimir() {
    console.log('retorno da função sem argumentos')
}
imprimir() //Sem invocar, a função não imprimiu!

function somaPura() {
    let somaPura = 40 + 2
    console.log(`a resposta da vida do universo e tudo mais é ${somaPura}`)
}
somaPura()
//Esta configura como função pura pois seus valores de manipulação não mudam

function soma(x, y) {
    let soma = x + y
    console.log(`a soma de ${x} e ${y} é ${soma}`)
};
soma(1, 3) //na hora de chamar a função eu coloco os argumentos
soma(34, 2)

function contas(x, y) {
    let soma = x + y
    let dobro = soma * 2
    let raiz = dobro ** .5
    let resultados = [soma, dobro, raiz] //guardando todos os resultados em uma array
    console.log(resultados)
};
contas(2,7)

//-----------------ARROW FUNCTION-------------------
//possui uma sintaxe mais curta. Muito comum em padrões funcionais. Ela não utiliza a palavra reservada function, ela utiliza a seta! 
// () => {} anônima

somar = (x, y) => {
    let soma = x + y
    console.log(soma)
}
//Armazenei a arrow function em "somar"
somar(2,3) //Eu passei os parâmetros chamando pela variável. Engraçado né?!

//Agora a magia acontecendo, vou secar a arrow function
add = (x,y) => console.log(x + y)
add(3,4)
//eu pude excluir o escopo {} e o "return" pois foi apenas uma linha de return






