//Exibir no Terminal
console.log("Olá Mundo");
// Exibir Navegador
document.write("Olá Navegador!");
//Um Alerte 
//alert("Alerta de Confirmação!");
/*Comentario ee Bloco*/
/*parseFloat: retorna variaveis de texto em decimais*/

var nome = window.prompt ("Informe o Nome:");
//Guardar o nome do Aluno
var nota1 = window.prompt ("Digite a nota 1");
//guarda a primeira nota
nota1 = parseFloat(nota1);
//converte de texto para decimal
var nota2 = window.prompt ("Digite a nota 2");
//guarda a segunda nota
nota2 = parseFloat(nota2);
// converte de texto para decimal
var media = (nota1 + nota2) /2;
//a soma +  a media das duas
var mensagem = nome + ", Você obteve a média:   " + media;
window.alert(mensagem);
//gera a mensagem de exibição do nome e da media do aluno