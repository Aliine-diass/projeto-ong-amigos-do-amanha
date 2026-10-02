// ===== MANIPULAÇÃO DO DOM =====
// Função central responsável por limpar o container principal (#app)
// e injetar o novo fragmento de HTML gerado pelo template da rota atual.
 
export function renderPage(html) {
  const container = document.getElementById('app');
 
  if (!container) {
    console.error('Elemento #app não encontrado no HTML.');
    return;
  }
 
  // Limpa o conteúdo anterior antes de injetar o novo
  container.innerHTML = '';
  container.innerHTML = html;
}
 