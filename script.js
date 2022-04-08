// Definição da palavra do dia
const hoje = new Date();
const dia = hoje.getDate();
const mês = hoje.getMonth() + 1;

let dataTransformada = parseInt(`${dia}${mês}`);

const palavraDeHoje = palavras[dataTransformada];

// Pega letra digitada pelo usuário

const letras = [];

document.onkeydown = function (e) {
  const key = e.keyCode;
  const letra = String.fromCharCode(key);
  const reg = new RegExp("[A-Za-z]");

  if (letras.length > 0 && key === 8) {
    // Backspace
    removeLetra();
  } else if (reg.test(letra)) {
    // Se não for um espaço
    addLetra(letra);
  }

  atualizaPalavra();
};

// Adicionar letra no array
function addLetra(letra) {
  if (letras.length < 5) {
    letras.push(letra);
    return;
  }
}

// Remove letra no array
function removeLetra() {
  letras.pop();
}

// Atualiza palavra após edição do array
function atualizaPalavra() {
  for (let i = 0; i < 5; i++) {
    document.getElementById(`letra${i}`).innerText = letras[i] ? letras[i] : "";
  }
}
