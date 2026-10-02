// ===== VALIDAÇÃO =====

// Valida um único campo e retorna se está certo + qual mensagem mostrar
export function validarCampo(input) {
  const valor = input.value.trim();
  let valido = true;
  let mensagem = '';

  if (input.required && valor === '') {
    valido = false;
    mensagem = 'Este campo é obrigatório.';
  } else if (input.type === 'email') {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(valor)) {
      valido = false;
      mensagem = 'Digite um e-mail válido (ex: nome@exemplo.com).';
    }
  } else if (input.id === 'telefone-vol') {
    const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!regexTelefone.test(valor)) {
      valido = false;
      mensagem = 'Use o formato (00) 00000-0000.';
    }
  } else if (input.minLength > 0 && valor.length < input.minLength) {
    valido = false;
    mensagem = `Digite pelo menos ${input.minLength} caracteres.`;
  }

  return { valido, mensagem };
}

// Aplica as classes de CSS e injeta/atualiza a mensagem de erro no HTML
export function exibirFeedbackCampo(input, resultado) {
  const campo = input.closest('.campo');
  let mensagemEl = campo.querySelector('.mensagem-erro');

  if (!mensagemEl) {
    mensagemEl = document.createElement('span');
    mensagemEl.className = 'mensagem-erro';
    campo.appendChild(mensagemEl);
  }

  if (resultado.valido) {
    input.classList.remove('campo-invalido');
    input.classList.add('campo-valido');
    mensagemEl.textContent = '';
  } else {
    input.classList.remove('campo-valido');
    input.classList.add('campo-invalido');
    mensagemEl.textContent = resultado.mensagem;
  }
}

// Valida o formulário inteiro (todos os campos required), usado no submit
export function validarFormulario(form) {
  const campos = form.querySelectorAll('input[required]');
  let formValido = true;

  campos.forEach((input) => {
    const resultado = validarCampo(input);
    exibirFeedbackCampo(input, resultado);
    if (!resultado.valido) formValido = false;
  });

  return formValido;
}