// ===== STORAGE (localStorage) =====
const CHAVE = 'voluntarios';

// Grava um novo voluntário na lista já existente
export function salvarVoluntario(dados) {
  const listaAtual = obterVoluntarios();
  listaAtual.push(dados);
  localStorage.setItem(CHAVE, JSON.stringify(listaAtual));
}

// Recupera a lista completa (ou array vazio, se nunca houve nada salvo)
export function obterVoluntarios() {
  const dadosSalvos = localStorage.getItem(CHAVE);
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}