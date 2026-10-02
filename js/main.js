import { templateInicio, templateProjetos, templateContato } from './modules/templates.js';
import { renderPage } from './modules/dom.js';
import { inicializarEventos, renderizarListaVoluntarios } from './modules/eventos.js'; // ALTERADO

const rotas = {
  '#/inicio': templateInicio,
  '#/projetos': templateProjetos,
  '#/contato': templateContato,
};

function tratarRota() {
  const hash = window.location.hash || '#/inicio';
  const gerarTemplate = rotas[hash] || templateInicio;
  renderPage(gerarTemplate());

  if (hash === '#/contato') {
    renderizarListaVoluntarios(); // NOVO: popula a lista salva ao entrar na página
  }
}

window.addEventListener('hashchange', tratarRota);
window.addEventListener('DOMContentLoaded', () => {
  tratarRota();
  inicializarEventos();
});