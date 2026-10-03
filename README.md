# Amigos do Amanhã

Site institucional da ONG fictícia **Amigos do Amanhã**, desenvolvido como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas. Trata-se de uma **SPA (Single Page Application)** que apresenta a organização, as frentes de atuação e os projetos, e oferece um formulário de contato/cadastro para voluntários e doadores.

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução local](#instalação-e-execução-local)
- [Build e testes](#build-e-testes)
- [Acessibilidade](#acessibilidade)
- [Versionamento e contribuição](#versionamento-e-contribuição)

## Visão geral

O site é composto por três rotas, navegáveis pelo menu sem recarregar a página:

| Rota | Conteúdo |
| --- | --- |
| `#/inicio` | Quem Somos e Nossas Frentes de Atuação |
| `#/projetos` | Projetos da ONG |
| `#/contato` | Fale Conosco (formulário com validação e modal de confirmação) |

O conteúdo de cada rota é gerado dinamicamente por JavaScript (templates) e injetado na área `<main id="app">` pelo roteador.

## Tecnologias utilizadas

- **HTML5 semântico:** estrutura com `header`, `nav`, `main` e `footer`, hierarquia correta de títulos.
- **CSS3:** design system com variáveis (cores extraídas do logo), CSS Grid, Flexbox, layout responsivo, menu hambúrguer, badges, alertas, toast e modal.
- **JavaScript (módulos ES6):** roteamento por hash, templates dinâmicos, delegação de eventos, validação de formulário com expressões regulares (RegEx) e persistência com `localStorage`.
- **Day.js** (via CDN): formatação de datas em português do Brasil.
- **Google Fonts:** famílias Quicksand, Raleway e Roboto.
- **Git e GitHub:** controle de versão, issues, milestones e pull requests.

## Estrutura do projeto

```
projeto-ong-amigos-do-amanha/
├── index.html        # Página única da aplicação
├── css/
│   └── style.css     # Estilos e design system
├── js/
│   ├── main.js       # Roteador e inicialização
│   └── templates.js  # Templates das páginas
└── imagens/          # Logotipo e imagens do site
```

## Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox ou Safari atualizados)
- [Git](https://git-scm.com/)
- Um servidor local simples, por exemplo a extensão **Live Server** do VS Code ou o **Python 3**

Não há dependências para instalar com `npm`: as bibliotecas externas são carregadas via CDN.

## Instalação e execução local

1. Clone o repositório:

   ```bash
   git clone https://github.com/Aliine-diass/projeto-ong-amigos-do-amanha.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd projeto-ong-amigos-do-amanha
   ```

3. Inicie um servidor local, usando **uma** das opções:

   - **VS Code:** instale a extensão *Live Server*, clique com o botão direito em `index.html` e escolha *Open with Live Server*.
   - **Python:**

     ```bash
     python -m http.server 8000
     ```

4. Abra no navegador o endereço `http://localhost:8000` (ou o que o Live Server indicar).

> **Por que é preciso um servidor?** O `index.html` usa `<script type="module">`, e os navegadores bloqueiam módulos JavaScript quando o arquivo é aberto diretamente (`file://`). Por isso, dar duplo clique no `index.html` não funciona.

## Build e testes

- **Build:** o projeto é estático e não possui etapa de build. Os arquivos são servidos diretamente.
- **Testes:** não há testes automatizados. A verificação é manual e cobre a navegação entre as rotas, a validação do formulário, o comportamento responsivo e o uso do site pelo teclado.

## Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 nível AA**, incluindo:

- `lang="pt-BR"` no documento e texto alternativo nas imagens;
- navegação principal e de rodapé identificadas com `aria-label`;
- notificação (toast) anunciada a leitores de tela com `role="status"` e `aria-live="polite"`;
- menu hambúrguer e demais componentes interativos operáveis pelo teclado;
- `preconnect` para as fontes, melhorando o carregamento.

## Versionamento e contribuição

O projeto adota o fluxo **GitFlow**:

- `main`: versões estáveis, marcadas com tags (primeira versão: `v1.0.0`);
- `develop`: integração do desenvolvimento;
- `feature/*`: uma branch por tarefa (exemplo: `feature/acessibilidade`).

Demais práticas:

- **Commits semânticos:** mensagens com prefixos como `feat:`, `fix:` e `chore:` (exemplo: `feat: melhorias de acessibilidade`).
- **Issues:** cada tarefa é registrada em uma issue (exemplo: #1, *Implementar melhorias de acessibilidade WCAG 2.1*).
- **Milestones:** as issues são agrupadas em marcos (exemplo: *Etapa 5 - Consolidação e Produção*).
- **Pull requests:** toda integração à `develop` é feita por PR com descrição do motivo e da implementação (exemplo: #2, *feat: melhorias de acessibilidade (WCAG 2.1 AA)*).

## Autoria

Projeto desenvolvido por **Aline** ([@Aliine-diass](https://github.com/Aliine-diass)) para fins acadêmicos.