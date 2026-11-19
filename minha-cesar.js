// Cifra de César: desloca cada letra do alfabeto por uma chave.

function deslocarLetra(letra, chave) {
  const codigo = letra.charCodeAt(0);
  let base;
  if (codigo >= 65 && codigo <= 90) base = 65;       // letras maiúsculas
  else if (codigo >= 97 && codigo <= 122) base = 97; // letras minúsculas
  else return letra;                                 // não é letra: fica igual
  const posicao = codigo - base;
  const nova = (((posicao + chave) % 26) + 26) % 26;
  return String.fromCharCode(base + nova);
}

function cesar(texto, chave) {
  let resultado = "";
  for (const letra of texto) {
    resultado += deslocarLetra(letra, chave);
  }
  return resultado;
}

function executarCesar(direcao) {
  const texto = document.getElementById("cesar-texto").value;
  const chave = Number(document.getElementById("cesar-chave").value);
  const saida = document.getElementById("cesar-resultado");

  if (!texto || !Number.isInteger(chave) || chave < 1 || chave > 25) {
    saida.className = "resultado ruim";
    saida.textContent = "Digite um texto e uma chave inteira de 1 a 25.";
    return;
  }
  saida.className = "resultado bom";
  saida.textContent = cesar(texto, direcao * chave);
}

document.getElementById("cesar-cifrar").addEventListener("click", () => executarCesar(1));
document.getElementById("cesar-decifrar").addEventListener("click", () => executarCesar(-1));
