let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
function obterNotaAtletas(objAtletas){

for (let i = 0; i < objAtletas.length; i++){
  let media = objAtletas[i].notas.sort((a, b) => {
    if (a > b) return 1;
  });

  media = media.slice(1, media.length - 1);

  let comprimento = media.length;

  media = media.reduce(function(total, atual){
    return total + atual; 
  },0) / comprimento

  console.log(`Atleta: ${objAtletas[i].nome}
Notas Obtidas: ${objAtletas[i].notas}
Média Válida: ${media}
`)
}
}
obterNotaAtletas(atletas)
