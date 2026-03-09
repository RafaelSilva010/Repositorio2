if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registado com sucesso!'))
    .catch(err => console.error('Falha ao registar Service Worker:', err));
}
//parte do euro milhoes.
const numerosContainer = document.getElementById("numeros");
const estrelasContainer = document.getElementById("estrelas");

let numerosSelecionados = [];
let estrelasSelecionadas = [];

function atualizarDisplay() {
    document.getElementById("numerosEscolhidos").textContent = numerosSelecionados.join(", ");
    document.getElementById("estrelasEscolhidas").textContent = estrelasSelecionadas.join(", ");
}

// criar botões dos números
for (let i = 1; i <= 50; i++) {

    const botao = document.createElement("button");
    botao.textContent = i;

    botao.addEventListener("click", function() {

        if (numerosSelecionados.includes(i)) {
            numerosSelecionados = numerosSelecionados.filter(n => n !== i);
        } else {
            if (numerosSelecionados.length < 5) {
                numerosSelecionados.push(i);
            }
        }

        atualizarDisplay();
    });

    numerosContainer.appendChild(botao);
}


// criar botões das estrelas
for (let i = 1; i <= 12; i++) {

    const botao = document.createElement("button");
    botao.textContent = i;

    botao.addEventListener("click", function() {

        if (estrelasSelecionadas.includes(i)) {
            estrelasSelecionadas = estrelasSelecionadas.filter(e => e !== i);
        } else {
            if (estrelasSelecionadas.length < 2) {
                estrelasSelecionadas.push(i);
            }
        }

        atualizarDisplay();
    });

    estrelasContainer.appendChild(botao);
}