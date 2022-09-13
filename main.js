var wender = { nome: "Wender", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var louise = { nome: "Louise", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}
var jogadores = [wender, louise]

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "<td><button onClick='zerarPlacar(" + i + ")'>Zerar</button></td>";
        elemento += "<td><button onClick='RemoverJogador(" + i + ")'>Remover Jogador</button></td>";
        elemento += "</tr>";
        elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarJogador() {
    var valor = document.getElementById("valor").value
    var jogador = {
        nome: valor,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    };
    jogadores.push(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function zerarPlacar(i) {
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function RemoverJogador(i) {
    jogadores.splice(i, 1);
    exibeJogadoresNaTela(jogadores);
}