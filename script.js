// sempre que receber o sinal de = vamos ser RECEBE

// formas de delimitar as sting
var s1 = "leonardo"
var s1 = 'leonardo'
var s1 = `leonardo`

//formato de number
var n1 = 10
var n2 = 10.5


//boolean
var c = true
var c = false


//typeof ele serve para indentificar o que ele está recebendo EX : typeof s1 ele vai falar que é uma string

// Number.parseInt  ele vai converter a resposta da string em variavel antes de somar
// tambem é possivel converter para string com a variavel String

var n1 = Number.parseInt(window.prompt('digite um numero :'))
var n2 = Number.parseInt(window.prompt('digite um numero :'))
var s = n1 + n2
window.alert('qual o total da soma' + s)


    // TEMPLATE STRING
    // placeholder  ${} ele é usado para colocar uma variavel dentro de uma string
    // EX :
    `o aluno ${nome} com ${idade} e tirou a nota ${nota}`


//.length è utilizado  para ver quantas caracteres tem
//.toUperCase para aumaentar a letra
//toLowerCase é utilizado para diminuar a letra



//write é utlizado para  escrever na tela
documet.write()

//toFixed() é utilizado para colocar  a quantidade que gostaria depois ta linha

var n3 = 1554.5
n3.toFixed(2).replace('.', ',')

// como converter o  valor para dinheiro

n3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

//OPERADORES  ARITMETICOS
//EX:
//5 + 2 -> 7 soma os valores
//5 - 2 -> 3 diminu os valores
//5 * 2 -> 10 faz um vezes o outro
//5 / 2 -> 2.5 faz um divido pelo outro
//5 % 2 -> 1 ele pega o resto que divide, exemplo 5/2 sobra 1
//5 ** 2 ->  é feito a potencia da soma

// ordem de cauculo do JS (), **, *, / , %, +, - sempre vai ser realizado nessa ordem.

var num = 8
num += 2 // += ele somente funciona quando a variavel vai adicionar nele mesmo um valor
// tambem é possivel usar  dessa forma 
var n = 10
n++
//a variavel vai virar 11
//da mesma forma é possivel fazer para diminuir
n-- 
//a variavel vai 9

//OPERADORES RELACIONAIS  sempre o resultado vai ser em boleano

5 > 2 -> true // 5 é maior que 2?
7 < 4 -> false //4 é maior que 7?
8 >= 8 -> true // 8 é maior ou igual a 8?
9 <= 7 -> false // 7 é igual ou maior que 9?
5 == 5 -> true // 5 é igual 5?
4 != 4 -> false 4 //é diferente de 4?
5 == '5' true // mesmo sendo uma string e outro number eles são igual]
3 === '3' false // eles não são iguais devido a identificação deles serem diferentes um é string outro é number
7 !== '7' true //esse operador seria o diferente restrito, pois ele pega  o numero e o indentificador para verificar se tem alguma diferença


// Ordem correta de execução ! && ||

!true -> false // operador de  negação exemplo umma coisa não verdadeira ela é falsa
 true && true -> true
 true && false -> false
 false && false -> false
 false && true -> false // dessa forma eu só fico satisfeito se os 2 operadores que estou enviado eles sejam verdadeiro, caso contrario é false

 
 ex : var a = 5
 var b = 8

 a > b && b % 2 ==0 // o que acontece é que ele sempre vai começar com aritimetico 8 % 2 sobra zero (true) a > b (false)
                    // como nessa opção o && só é true se ele receber os 2 como verdadeiro, essa opção é false



true || true -> true // se um ou outro é verdadeiro eu fico satisfeito
true || false ->  true
false || true -> true
false|| false ->  false

ex : var a = 5
var b = 8
 a<= b || b / 2 == 2 // 8 /2 fica 4 então essa opção é (false) a<=b (true) respota final true pois um dos operadores é verdadeiro


 //RESUMÂO DA PRESEDENCIA  
 // sempre vamos resolver dessa forma as operações

//() ** /
// > < >=
//!
//&&
//||


//OPERADOR TERNARIO ? : ele é divido em tres blocos
// teste ? true : false

// teste logico ? resultado foi esperado :se o resultado não foi esperado
ex : 
var media = 5.5

media > 7 ? 'aprovado' : 'reprovado'
resultado reprovado


