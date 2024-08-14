
let nomeHeroi = "André";

function ranking(vitorias, derrotas) {
    let rankeamento = vitorias - derrotas;
    console.log("Olá " + nomeHeroi + ". Vamos calcular a sua quantidade de vitórias.");
    console.log(rankeamento);

    // Lógica condicional usando "rankeamento"
    if (rankeamento <= 10) {
        console.log("Você é um herói nível FERRO");
    } else if (rankeamento >= 11 && rankeamento <= 20) {
        console.log("Você é um herói nível BRONZE");
    } else if (rankeamento >= 21 && rankeamento <= 50) {
        console.log("Você é um herói nível PRATA");
    } else if (rankeamento >= 51 && rankeamento <= 80) {
        console.log("Você é um herói nível OURO");
    } else if (rankeamento >= 81 && rankeamento <= 90) {
        console.log("Você é um herói nível DIAMANTE");
    } else if (rankeamento >= 91 && rankeamento <= 100) {
        console.log("Você é um herói nível LENDÁRIO");
    } else if (rankeamento >= 101) {
        console.log("Você é um herói nível IMORTAL");
    }

    return rankeamento; // Retorna o resultado
}

// Agora chamamos a função e atribuímos o resultado a "somatorio"
let somatorio = ranking(50, 5);


