//---------------FOR---------------
//Primeiro eu passo o valor a ser manipulado DE INÍCIO, e separado por ; eu passo a CONDIÇÃO que define quantas vezes a repetição acontecerá. Por fim eu passo o incremento da ação

for (let i = 0; i < 9; i++) {
    //aqui no escopo eu coloco o que será executado pelo For
    console.log(`número ${i}`)
}
// para cada "i", começando do 0, indo até 9, eu quero que imprima no console um incremento de +1 

//const numeros = [1, 34, 2, 7, 9, 8, 10, 14]
for (let i = 0; i < numeros.length; i++) {
    const dobro = numeros[i] * 2
    console.log(`o dobro de ${numeros[i]} é ${dobro}`)
}
//Começando do elemento zero DA ARRAY NÚMEROS (=1) eu vou pegar e multiplicar ele por dois. Feito isso, eu vou para o próximo elemento da array (elemento índice 1, valor 34) e multiplicar novamente por dois e assim vai
//ATENÇÃO! porque não poderia ser "console.log(`o dobro de ${i} é ${dobro}`)" ?? Porque nesse caso ele me retornaria o índice da array e me responderia algo como "o dobro de 0 é 2" (no caso do elemento índice zero da array, que é 1 e seu dobro é 2)

//---------------WHILE---------------

let u =  0;
while (u <= 10) {
    u++
    console.log(`número ${u}`)
}

while (u <= 10) {
    if(u ==2) {
        console.log(`número ${u}`)
        u += 2
    }
    console.log(`número ${u}`)
    u++
}
//O while me deu mais possibilidades de fazer ressalvas porque as condições não precisam estar todas dentro do parâmetro em ()
// u += 2 é a mesma coisa que u = u + 2

//---------------FOR...OF---------------
//Funciona muito bem para Arrays. Ele "já sabe" que está trabalhando com uma array, por isso eu não preciso colocar i = 0, porque ele automaticamente já começa a executar com base no primeiro elemento da array. Do mesmo jeito que eu também não preciso passar o incremento para ele (no caso, indo de 1 em 1)

const numeros = [1, 2, 3, 4, 56, 13, 14, 17]

for (let numero of numeros) {
    const dobro = numero * 2
    console.log(`o dobro de ${numero} é ${dobro}`)

};
//Repare como em "numero" não precisou colocar o incremento nem o índice inicial, apenas "numero". E ele se "auto atribui" automaticamente e percorre a Array



