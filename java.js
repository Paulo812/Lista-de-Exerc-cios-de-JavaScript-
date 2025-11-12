//1. Variáveis e Tipos de Dados
//1.1
let nome = "paulo";
console.log(nome);

//1.2
let idade = "17";
let altura = "1.68";
console.log(" tenho 17 anos e 1.68 de altura");

//1.3
let estudando = true;
if (estudando) {
  console.log("estou estudando");
} else {
  console.log("nao estou estudando");
}


//2. Operadores
//2.1
let numero1 = 10;
let numero2 = 5;
let resultado = numero1 % 6
numero2;
console.log("o resultado é", resultado);

//2.2
let numero3 = 20;
let numero4 = 4;
let resto = numero1 % numero2;
console.log("O resto da divisao de", numero1, "por", numero2, "e", resto);
console.log(20 % 5);

//2.3
if (idade >= 18) {
  console.log(" Maior de idade");
} else {
  console.log("Menor de idade");
}
letidade = 20;
console.log(idade >= 18);

//3.1
let numero = prompt("Digite um número:");
numero = Number(numero);

if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é impar.");
}

//3.2
let idadeee = Number(prompt("Digite sua idade:"));

if (isNaN(idadeee) || idadeee < 0) {
  alert("Por favor, digite uma idade valida.");
} else if (idadeee >= 18) {
  alert("Você pode dirigir!");
} else {
  alert("Você nao pode dirigir.");
}

//3.3
let notaa = Number(prompt("Digite sua nota (0 a 10):"));

if (isNaN(notaa) || notaa < 0 || notaa > 10) {
  alert("Por favor, digite uma nota valida entre 0 e 10.");
} else if (notaa < 5) {
  alert("Reprovado ");
} else if (notaa >= 5 && notaa < 7) {
  alert("Recuperacao ");
} else {
  alert("Aprovado ");
}

//4.1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//4.2
const numeroo = parseInt(prompt('Digite um número para ver a tabuada:'));
if (isNaN(numeroo)) {
  console.log(`Tabuada do ${numeroo}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numeroo * i;
    console.log(`${numeroo} x ${i} = ${resultado}`);
  }
} else {
  console.log('Entrada inválida. Por favor, digite um número.');
}

//4.3
let senha = "";

while (senha !== "1234") {
  senha = prompt("Digite a senha:");
}

alert("Senha correta! Acesso permitido.");

//5.1
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3));

//5.2
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Maria"));

//5.3
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
console.log(media(7, 8, 8));
//6.1
let nomes = ["Ana", "Bruno", "Carla", "Lucas", "Eduarda"];
console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[nomes.length - 1]);
//6.2
nomes.push("Felipe");
console.log("Array após adicionar novo nome:", nomes);
//6.3
console.log("Lista de nomes:");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

//7.1
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};
console.log("Carro:", carro);

//7.2
let aluno = {
  nome: "Igor",
  idade: 17,
  notas: [8, 7, 9]
};
let somaa = aluno.notas[0] + aluno.notas[1] + aluno.notas[2];
let mediaa = soma / aluno.notas.length;
console.log("Nome:", aluno.nome);
console.log("Média:", media);

//7.3
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 }
];
console.log("Produtos:");
produtos.forEach((produto, index) => {
  console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco}`);
});

//8.1
document.addEventListener('DOMContentLoaded', () => {
  const btnCor = document.getElementById('btnCor');
  if (btnCor) {
    btnCor.addEventListener('click', () => {
      const body = document.body;
      body.style.backgroundColor = body.style.backgroundColor === 'pink' ? 'black' : 'pink';
    });
  }
  //8.2
  document.addEventListener('DOMContentLoaded', () => {
    const btnCor = document.getElementById('btnCor');
    if (btnCor) {
      btnCor.addEventListener('click', () => {
        const body = document.body;
        body.style.backgroundColor = body.style.backgroundColor === 'pink' ? 'black' : 'pink';
      });
    }

    //8.3
    const btnContador = document.getElementById('btnContador');
    const contadorSpan = document.getElementById('contador');
    let cliques = 0;
    if (btnContador) {
      btnContador.addEventListener('click', () => {
        cliques++;
        if (contadorSpan) {
          contadorSpan.textContent = 'Cliques: ' + cliques;
        } else {
          btnContador.textContent = 'Cliques: ' + cliques;
        }
      });
    }
  });


  //9.1
  let nomeUsuario = prompt("Digite seu nome:");
  console.log("Seu nome tem " + nomeUsuario.length + " letras.");

  //9.2
  let frase = prompt("Digite uma frase:");
  console.log(frase.toUpperCase());

  //9.3
  let texto = prompt("Digite um texto:");
  console.log(texto.substring(0, 5));

  //10.1
  let promessa = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Concluído!");
    }, 3000);
  });
  promessa.then(function (mensagem) {
    console.log(mensagem);
  });

  //10.2
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Erro:", error));

  //10.3
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        console.log(post.title);
      });
    })
    .catch(error => console.log("Erro:", error));