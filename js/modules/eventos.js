import {
  validarCampo,
  exibirFeedbackCampo,
  validarFormulario,
} from "./validacao.js";
import { salvarVoluntario, obterVoluntarios } from "./storage.js";

export function inicializarEventos() {
  app.addEventListener("input", (event) => {
  if (event.target.closest(".form-voluntario")) {
    // Aplica a máscara só no campo de telefone
    if (event.target.id === "telefone-vol") {
      aplicarMascaraTelefone(event.target);
    }

    const resultado = validarCampo(event.target);
    exibirFeedbackCampo(event.target, resultado);
  }
});
  app.addEventListener("submit", (event) => {
    if (event.target.matches(".form-voluntario")) {
      event.preventDefault();
      tratarEnvioFormulario(event.target);
    }
  });
}

function tratarEnvioFormulario(form) {
  const valido = validarFormulario(form);
  const alertaSucesso = document.querySelector(".alerta-sucesso");
  const alertaErro = document.querySelector(".alerta-erro");
  const modalCheckbox = document.getElementById("modal-toggle");

  if (valido) {
    const dados = {
      nome: form.querySelector("#nome-vol").value,
      email: form.querySelector("#email-vol").value,
      telefone: form.querySelector("#telefone-vol").value,
      dataCadastro: new Date().toISOString(),
    };

    salvarVoluntario(dados);
    renderizarListaVoluntarios();

    alertaSucesso.hidden = false;
    alertaErro.hidden = true;
    modalCheckbox.checked = true;
    form.reset();
  } else {
    alertaErro.hidden = false;
    alertaSucesso.hidden = true;
  }
}

// Lê o localStorage e desenha a lista de voluntários na tela, com a data formatada
export function renderizarListaVoluntarios() {
  const container = document.getElementById("lista-voluntarios");
  if (!container) return;

  const voluntarios = obterVoluntarios();

  container.innerHTML = voluntarios
    .map((v) => {
      const dataFormatada = dayjs(v.dataCadastro).locale("pt-br").format("DD [de] MMMM [de] YYYY");
      return `<li>${v.nome} — ${v.email} <span class="data-cadastro">(cadastrado em ${dataFormatada})</span></li>`;
    })
    .join("");
}

// Formata o telefone automaticamente enquanto o usuário digita: (00) 00000-0000
function aplicarMascaraTelefone(input) {
  let valor = input.value.replace(/\D/g, ''); // remove tudo que não for número
  valor = valor.slice(0, 11); // limita a 11 dígitos (DDD + 9 números)

  if (valor.length > 2) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  }
  if (valor.length > 10) {
    valor = `${valor.slice(0, 10)}-${valor.slice(10)}`;
  }

  input.value = valor;
}