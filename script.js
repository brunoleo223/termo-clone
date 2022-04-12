// Definição da palavra do dia
const hoje = new Date();
const dia = hoje.getDate();
const mês = hoje.getMonth() + 1;

let dataTransformada = parseInt(`${dia}${mês}`);

// const palavraDeHoje = palavras[dataTransformada];


const palavraDeHoje = "lindo"


// Pega letra digitada pelo usuário

const letras = [];
let palavraDigitada = 0;


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
    palavraDigitada = verificaSeAcertouPalavra();

    if( palavraDigitada == 5 ){
      acertouPalavar()
    }
  }

  
};

// Atualiza Array
function atualizaArray(letra, key){
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
    document.getElementById(`letra${i}`).innerText = letras[i] ? letras[i] : "";
  }
}


// Ao pressionar ENTER
function verificaSeAcertouPalavra(){
  let acertos = 0;

  for(let i = 0; i < 5; i++){
    
    if(letras[i].toUpperCase() == palavraDeHoje[i].toUpperCase()){
      acertos++
    }
  }

  return acertos;
}

// Se for a palavra certa
function acertouPalavar(){
  alert('foi!')
}

// Se não for a palavra certa
