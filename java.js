// 1.1
let nome = "Paulo";
console.log(nome);

// 1.2
let idade = 18;
let altura = 1.85;
console.log(`Tenho ${idade} anos e ${altura} metros de altura.`);

// 1.3
let estudando = true;
console.log("Estou estudando?", estudando);

// 2.1
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

// 2.2
console.log(num1 / num2);

// 2.3
let idd = Number(prompt("Digite sua idade:")); // Solicita a idade do usuário
let maiorDeIdade = idd >= 18; // Verifica se a idade é maior ou igual a 18
console.log(`Você tem ${idd} anos. É maior de idade? ${maiorDeIdade}`);

// 3.1
let numero = Number(prompt("Digite um número:"));
if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// 3.2
let idadeUser = Number(prompt("Digite sua idade:"));
if (idadeUser >= 18) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você ainda não pode dirigir!");
}

// 3.3
let nota = Number(prompt("Digite sua nota (0 a 10):"));
if (nota < 5) {
  console.log("Reprovado");
} else if (nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

// 4.1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4.2
let num = prompt("Digite um número para a tabuada:");
numero = Number(num);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//4.3

let senha;
while (senha !== "1234") {
    senha = prompt("Digite a senha:");
    if (senha !== "1234") {
        console.log("Senha incorreta. Tente novamente.");
    }
}
console.log("Senha correta!");

//5.1

function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(5, 3)); 

//5.2
function saudar(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudar("Paulo"));

//5.3
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
console.log(calcularMedia(7, 8, 9));

//6.1
let nomes = ["Ana", "Nina", "Roberta", "Tania", "Paulo"];
console.log(`Primeiro: ${nomes[0]}`);
console.log(`Último: ${nomes[nomes.length - 1]}`);

//6.2
let nomes1 = ["Ana", "Nina", "Roberta", "Tania", "Paulo"];
let novoNome = prompt("Digite um novo nome para adicionar ao array:"); // Solicita o novo nome
nomes.push(novoNome); // Adiciona o nome inserido pelo usuário ao final do array
console.log("Lista de nomes:");
for (let nome of nomes) {
    console.log(nome); // Exibe cada nome individualmente
}

//6.3
let names = ["Ana", "Nina", "Roberta", "Tania", "Paulo"];
for (let nome of nomes) {
    console.log(nome); // Exibe cada elemento do array
}

//7.1
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carro);

//7.2
let aluno = {
    nome: "Paulo",
    idade: 18,
    notas: [7, 8, 9]
};
let media = aluno.notas.reduce((a, b) => a + b) / aluno.notas.length;
console.log(`Nome: ${aluno.nome}, Média: ${media}`);

//7.3
let produtos = [
    { nome: "Celular", preco: 1200 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Fone", preco: 150 }
];
console.log(produtos);

//8.1
const trocarCorBtn = document.getElementById("trocar-cor");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

trocarCorBtn.addEventListener("click", () => {
  document.body.style.setProperty('background-color', getRandomColor(), 'important');
});


//8.2
const botaoTexto = document.getElementById("mostrar-texto");
const mensagem = document.getElementById("mensagem");

botaoTexto.addEventListener("click", () => {
  const texto = document.getElementById("texto").value.trim();
  if (texto === "") {
    mensagem.textContent = "Digite algo antes!";
    mensagem.style.color = "red";
  } else {
    console.log("Texto digitado:", texto);
    mensagem.textContent = `Você digitou: ${texto}`;
    mensagem.style.color = "#04070cff";
  }
});


//8.3

const botaoContador = document.getElementById("contador");
let contador = 0;

botaoContador.addEventListener("click", () => {
  contador++;
  botaoContador.textContent = `Cliques: ${contador}`;
});

// 4️⃣ Resetar tudo
const botaoResetar = document.getElementById("resetar");
botaoResetar.addEventListener("click", () => {
  document.body.style.backgroundColor = "#b3e5fc";
  contador = 0;
  botaoContador.textContent = "Cliques: 0";
  mensagem.textContent = "";
  document.getElementById("texto").value = "";
});

//9.
let nomeuser = prompt("Digite um nome:"); // Solicita o nome do usuário
let quantidadeLetras = nome.length; // Conta o número de letras
console.log(`O nome "${nome}" tem ${quantidadeLetras} letras.`);

//9.2
let frase = prompt("Digite uma frase:"); // Solicita uma frase do usuário
let fraseMaiuscula = frase.toUpperCase(); // Converte a frase para letras maiúsculas
console.log(`Frase em maiúsculas: ${fraseMaiuscula}`);

//9.3
let texto = prompt("Digite um texto:"); // Solicita um texto do usuário
let primeirosCinco = texto.slice(0, 5); // Extrai os 5 primeiros caracteres

//10.1
let promessa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Concluído!");
    }, 3000);
});
promessa.then((mensagem) => console.log(mensagem));

//10.2
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro:", error));

//10.3

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.forEach(post => console.log(post.title));
    })
    .catch(error => console.error("Erro:", error));