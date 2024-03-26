// 1
alert("Exercício 1 concluído");

// 2
function botao() {
	alert("Exercício 2 concluído");
}

// 3
document.getElementById("3Ex1").style.color = "red";
	var elemento = document.getElementsByTagName("h3");
	for (var i = 0; i < elemento.length; i++) {
		elemento[i].style.color = "blue";
	}

const collection = document.getElementsByClassName("3Ex3");
collection[0].style.color = "green";

document.querySelector("dt").style.backgroundColor = "yellow";

const elementosDD = document.querySelectorAll("dd");
elementosDD.forEach(function(elemento) {
elemento.style.backgroundColor = "pink";
});

// 4
document.getElementById("4Ex1").onmouseover = function() {mouseOver()};

function mouseOver() {
	document.getElementById("4Ex1").style.color = "red";
}

function foco() {
	document.getElementById("4Ex2").style.background = "yellow";
}

function mudar() {
	var x = document.getElementById("selecionado").value;
	document.getElementById("4Ex3").innerHTML = "O número selecionado foi: " + x;
}

function dragStart(event) {
	event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	const data = event.dataTransfer.getData("Text");
	event.target.appendChild(document.getElementById(data));
	}

// 5
function mensagem() {
		var elementoSaudacao = document.getElementById("mensagem"); 
		elementoSaudacao.textContent = "Texto exibido por uma função nomeada";
    }
    mensagem();
	
function calcularQuadrado(numero) {
    return numero * numero;
    }
function mostraresultado() {
		var numero = parseFloat(document.getElementById("numeroenviado").value);
		var resultado = calcularQuadrado(numero);
    document.getElementById("resultado").textContent = "O quadrado de " + numero + " é: " + resultado;
    }
	
function pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
	this.ola = function() {
		return "Meu nome é " + this.nome + " e eu tenho " + this.idade + " de idade.";
      };
    }
	var pessoa1 = new pessoa("João", 30);
	var pessoa2 = new pessoa("Maria", 25);
	document.getElementById("mostrarcontr").innerHTML += "<p>" + pessoa1.ola() + "</p>";
	document.getElementById("mostrarcontr").innerHTML += "<p>" + pessoa2.ola() + "</p>";
	
var literal = function() {
    alert('Texto exibido por uma função literal');
	};
  
const mostrarmensag = () => {
    alert('Texto exibido por uma função de flecha');
	};
document.getElementById('flecha').addEventListener('click', mostrarmensag);
  
// 6
var cont = document.querySelector('.quant');
    document.querySelector('#contn').addEventListener('click', function(){
        var nmr = parseInt(cont.textContent) + 1;
        cont.textContent = nmr;
    });

// 7
function ParaCaixaAlta() {
	var insiraString = document.getElementById("insiraString").value;
	var resultadoElemento = document.getElementById("result");
	var stringCaixaAlta = insiraString.toUpperCase();
  
	resultadoElemento.textContent = stringCaixaAlta;
}

// 8
function soma() {
	var numero1 = parseFloat(document.getElementById("numero1").value);
	var numero2 = parseFloat(document.getElementById("numero2").value);
	var resultadoSoma = document.getElementById("resultad");
  
if (!isNaN(numero1) && !isNaN(numero2)) {
    var soma = numero1 + numero2;
    resultadoSoma.textContent = "A soma é: " + soma;
	}
}
