// sempre que receber o sinal de = vamos ser RECEBE

// formas de delimitar as sting
var s1 = "leonardo"
var s1 = 'leonardo'
var s1 = `leonardo`

//formato de number
var n1 = 10
var n2 = 10.5

//boolean
var b = true
var b = false


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

 n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})