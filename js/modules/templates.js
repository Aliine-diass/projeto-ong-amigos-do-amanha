// ===== DADOS DE ORIGEM =====
const projetosData = [
	{
		titulo: "Educação",
		descricao:
			"Reforço escolar e oficinas educativas para crianças e adolescentes.",
		badge: "Voluntariado",
		badgeClasse: "badge-voluntariado",
	},
	{
		titulo: "Saúde",
		descricao:
			"Ações de conscientização e parcerias com postos de saúde locais.",
		badge: "Doação",
		badgeClasse: "badge-doacao",
	},
	{
		titulo: "Assistência Social",
		descricao:
			"Distribuição de alimentos e itens de higiene para famílias carentes.",
		badge: "Urgente",
		badgeClasse: "badge-urgente",
	},
];

// ===== TEMPLATES =====
// Cada função retorna um fragmento de HTML (como texto) correspondente a uma "página" da SPA.
// O roteador (main.js) decide qual dessas funções chamar, de acordo com a rota atual.

export function templateInicio() {
	return `
    <section id="sobre">
      <h2><strong>Quem Somos</strong></h2>
      <img
        src="imagens/equipe-ong.jpg"
        alt="Grupo de voluntários e voluntárias da ONG Amigos do Amanhã reunidos em um parque, vestindo camisetas da organização"
        width="600"
        height="400"
      />
      <p>
        A ONG Amigos do Amanhã atua há 10 anos promovendo ações de
        assistência social, educação e saúde para comunidades em
        situação de vulnerabilidade. Acreditamos que pequenas ações,
        somadas, transformam realidades.
      </p>
    </section>
  `;
}

export function templateProjetos() {
	// .map() percorre cada item do array e converte em uma string de HTML (um card)
	const cardsHtml = projetosData
		.map(
			(projeto) => `
        <article class="col-4">
          <span class="badge ${projeto.badgeClasse}">${projeto.badge}</span>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </article>
      `,
		)
		.join(""); // junta todas as strings geradas em uma só, sem separador

	return `
    <section id="destaques">
      <h2><strong>Nossas Frentes de Atuação</strong></h2>

      <div class="grid-12">
        ${cardsHtml}
      </div>

      <div class="slide">
        <div class="pagina"><img src="imagens/img4.jpg" alt="mulher pintando" /></div>
        <div class="pagina"><img src="imagens/img5.jpg" alt="mulher com compras" /></div>
        <div class="pagina"><img src="imagens/img6.jpg" alt="grupo plantando árvore" /></div>
      </div>
    </section>
  `;
}

export function templateContato() {
	return `
    <div class="alerta alerta-sucesso" hidden>
      ✓ Cadastro enviado com sucesso! Em breve entraremos em contato.
    </div>
    <div class="alerta alerta-erro" hidden>
      ✕ Ops! Verifique os campos destacados antes de enviar.
    </div>
 
    <form class="form-voluntario" novalidate>
        <div class="lista-voluntarios">
         <h3>Voluntários cadastrados</h3>
         <ul id="lista-voluntarios"></ul>
        </div>
      <h3>Quero ser voluntário</h3>
      <div class="campo">
        <label for="nome-vol">Nome completo</label>
        <input type="text" id="nome-vol" name="nome" placeholder="Digite seu nome completo" required minlength="3" />
      </div>
 
      <div class="campo">
        <label for="email-vol">E-mail</label>
        <input type="email" id="email-vol" name="email" placeholder="seuemail@exemplo.com" required />
      </div>
 
      <div class="campo">
        <label for="telefone-vol">Telefone</label>
        <input type="tel" id="telefone-vol" name="telefone" pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" placeholder="(00) 00000-0000" required />
      </div>
 
      <button type="submit" class="botao">Quero ajudar</button>
    </form>
 
    <!-- MODAL: continua escondido por padrão; abrimos via JS quando o formulário for enviado com sucesso -->
    <input type="checkbox" id="modal-toggle" class="modal-toggle-checkbox" />
    <div class="modal-overlay">
      <div class="modal">
        <label for="modal-toggle" class="modal-fechar" aria-label="Fechar">✕</label>
        <h3>Obrigado por se cadastrar!</h3>
        <p>Em breve nossa equipe entrará em contato para os próximos passos do voluntariado.</p>
        <label for="modal-toggle" class="botao">Fechar</label>
      </div>
    </div>
 
    <section id="contato">
      <h2>Fale Conosco</h2>
      <address>
        <p>Email: <a href="mailto:contato@amigosdoamanha.org">contato@amigosdoamanha.org</a></p>
        <p>Telefone: <a href="tel:+551199999999">(11) 9999-9999</a></p>
        <p>Endereço: Rua das Flores, 123 - São Paulo, SP</p>
      </address>
    </section>
  `;
}
