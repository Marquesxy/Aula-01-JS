var nome = window.prompt ("Informe o Nome do Aluno 1:");

var nota1 = window.prompt ("Digite a nota 1");
nota1 = parseFloat(nota1);

var nota2 = window.prompt ("Digite a nota 2");
nota2 = parseFloat(nota2);

var nota3 = window.prompt ("Digite a nota 3");
nota3 = parseFloat(nota3);

var nota4 = window.prompt ("Digite a nota 4");
nota4 = parseFloat(nota4);

var media = (nota1 + nota2 + nota3 + nota4) /4;

var nomeA = window.prompt ("Informe o Nome do Aluno 2:");

var nota01 = window.prompt ("Digite a nota do aluno 2 N°1");
nota01 = parseFloat(nota01);
var nota02 = window.prompt ("Digite  nota do aluno 2 N°2");
nota02 = parseFloat(nota02);
var nota03 = window.prompt ("Digite  nota do aluno 2 N°3");
nota03 = parseFloat(nota03);
var nota04 = window.prompt ("Digite  nota do aluno N°4");
nota04 = parseFloat(nota04);

var mediaA = (nota01 + nota02 + nota03 + nota04) /4;

var mensagem = nome + ", aluno 1 obteve a média:   " + media + "e" + nomeA + ", aluno 2 obteve a nota" + mediaA;
window.alert(mensagem);