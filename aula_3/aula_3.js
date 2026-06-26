// const usuarios = ["Fabricio", "Antonio", "Joao", "Manoel", "Carlos"];
// // alert(usuarios[2]);

// for (const usuario of usuarios) {
//   console.log(`Usuário atual: ${usuario}`);
// }

// const carros = [
//   {
//     modelo: "Fusca",
//     marca: "vw",
//     ano: 1975,
//     cor: "Branco",
//   },
//   {
//     modelo: "Chevette",
//     marca: "Chevrolet",
//     ano: 1980,
//     cor: "Azul",
//   },
// ];

// console.log(carros[0].modelo);
// console.log(carros[1].modelo);

const alunos = [
  {
    nome: "Fabricio",
    idade: 42,
    email: "fabricioata@gmail.com",
    telefone: "47 98133-8077",
    cpf: "32196036889",
    foto: null,
  },
  {
    nome: "Penteado",
    idade: 42,
    email: "penteadoata@gmail.com",
    telefone: "47 98133-8077",
    cpf: "12345678999",
    foto: null,
  },
  {
    nome: "João",
    idade: 70,
    email: "penteadoata@gmail.com",
    telefone: "47 98133-8077",
    cpf: "12345678999",
    foto: null,
  },
];

function popularTabela() {
  console.log("Iniciar carregamento da tabela");

  const tbody = document.querySelector("#table_alunos tbody");

  console.log(tbody);

  let html = "";

  for (const aluno of alunos) {
    html += `
    <tr>
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.email}</td>
      <td>${aluno.telefone}</td>
    </tr>
    
    `;
  }

  console.log(html);

  tbody.innerHTML = html;
}

popularTabela();

//console.log(alunos);
