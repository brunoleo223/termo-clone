// Definição da palavra do dia
const hoje = new Date();
const dia = hoje.getDate();
const mês = hoje.getMonth() + 1;

let dataTransformada = parseInt(`${dia}${mês}`);

// const palavraDeHoje = palavras[dataTransformada];

const palavraDeHoje = "bloco";

// Pega letra digitada pelo usuário

let letras = [];
let palavraDigitada = 0;
let actualRow = 1;

/*
teclas

8: backspace
13: enter
32: space
*/

document.onkeydown = function (e) {
  const key = e.keyCode;
  // console.log(key)
  const letra = String.fromCharCode(key);
  
  atualizaArray(letra, key);
  atualizaPalavraEmTela();
  
  // se apartar enter quando estiver com uma palavra completa
  if (letras.length == 5 && key === 13) {
    const posicoes = verificaSeAcertouPalavra();
    
    proximaTentativa(posicoes)
    actualRow++;
    letras = [];
    
    console.log(posicoes)
    
    
    
    // if (palavraDigitada == 5) {
    //   acertouPalavra();
    // }
  }
};

function proximaTentativa(posicoes){
  for (let i = 0; i < 5; i++) {
    if(posicoes[i] == 2){
      document.querySelector(`#r${actualRow} #letra${i}`).classList.add("green");
    } else if(posicoes[i] == 1){
      document.querySelector(`#r${actualRow} #letra${i}`).classList.add("orange");
    } else {
      document.querySelector(`#r${actualRow} #letra${i}`).classList.add("errada");
    }
  }
}

// Atualiza Array
function atualizaArray(letra, key) {
  const reg = new RegExp("[A-Za-z]");
  
  if (letras.length > 0 && key === 8) {
    // Backspace
    removeLetra();
  } else if (reg.test(letra)) {
    // Se não for um espaço
    addLetra(letra);
  }
}

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
function atualizaPalavraEmTela() {
  for (let i = 0; i < 5; i++) {
    document.querySelector(`#r${actualRow} #letra${i}`).innerText = letras[i] ? letras[i] : "";
  }
}

// Ao pressionar ENTER
function verificaSeAcertouPalavra() {
  const positions = []
  
  
  for (let i = 0; i < 5; i++) {
    const palavraDeHojeArray = Array.from(palavraDeHoje.toUpperCase());
    
    if (letras[i].toUpperCase() == palavraDeHoje[i].toUpperCase()) {
      positions[i] = 2;
    } else if (arrayContains(letras[i])) {
      positions[i] = 1;
    } else {
      positions[i] = 0;
    }
    
    function arrayContains(letter){
      return (palavraDeHojeArray.indexOf(letter) > -1);
    }
  }
  
  return positions;
}

// Se for a palavra certa
function acertouPalavra() {
  for (let i = 0; i < 5; i++) {
    document.getElementById(`letra${i}`).classList.add("green");
  }
}

// Se não for a palavra certa
