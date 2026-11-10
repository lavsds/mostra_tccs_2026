/**
 * Renderização da mostra de TCCs.
 * Os textos e caminhos das imagens estão em js/dados.js.
 */
const dados = window.DADOS_SITE;

function escapar(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, (caractere) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[caractere]));
}

function imagem(caminho, descricao, classe, substituto = '', posicao = '', zoom = '') {
  const src = String(caminho || '').trim();
  const estilos = [];
  if (posicao) estilos.push(`object-position:${escapar(posicao)}`);
  const valorZoom = Number(zoom);
  if (!Number.isNaN(valorZoom) && valorZoom > 0 && valorZoom !== 1) estilos.push(`transform:scale(${valorZoom})`);
  const estilo = estilos.length ? ` style="${estilos.join(';')}"` : '';
  return `<div class="image-slot ${escapar(classe)}${src ? '' : ' no-image'}">
    ${src ? `<img src="${escapar(src)}" alt="${escapar(descricao)}" loading="lazy"${estilo}>`
           : `<span class="image-placeholder" aria-hidden="true">${escapar(substituto)}</span>`}
  </div>`;
}

/**
 * Exibe as marcas em suportes independentes e proporcionais.
 * O arquivo original da logo é preservado (object-fit: contain).
 */
function logoProjeto(projeto, contexto = 'card') {
  const caminho = String(projeto.logo || '').trim();
  const classe = `logo-plate logo-plate--${escapar(projeto.id)} ${contexto === 'detalhe' ? 'logo-plate--detalhe' : ''}`;
  const marca = caminho
    ? `<img src="${escapar(caminho)}" alt="Logo do projeto ${escapar(projeto.nome)}" loading="lazy">`
    : `<span class="logo-fallback">${escapar(projeto.nome)}</span>`;
  return `<div class="${classe}">${marca}</div>`;
}

function projetoCard(projeto) {
  return `<a class="project-card" href="projeto.html?id=${encodeURIComponent(projeto.id)}" aria-label="Conhecer ${escapar(projeto.nome)}">
    <div class="project-cover tone-${escapar(projeto.cor)}">
      <span class="cover-label">GRUPO ${escapar(projeto.numero)} <span aria-hidden="true">/</span> TCC 2026</span>
      ${logoProjeto(projeto)}
    </div>
    <div class="project-card-content">
      <h3>${escapar(projeto.nome)}</h3>
      <p>${escapar(projeto.resumo)}</p>
      <span class="project-card-link">Conhecer o projeto <span aria-hidden="true">↗</span></span>
    </div>
  </a>`;
}

function montarInicio() {
  document.getElementById('identificacao-turma').textContent =
    `${dados.turma.serie} · ${dados.turma.periodo} · ${dados.turma.grupo} · ${dados.turma.ano}`;
  document.getElementById('lista-projetos').innerHTML = dados.projetos.map(projetoCard).join('');
  document.getElementById('logo-ds').src = dados.curso.logo;
  document.getElementById('descricao-curso').textContent = dados.curso.descricao;
  document.getElementById('link-curso').href = dados.curso.siteOficial;
  document.getElementById('nome-orientador').textContent = dados.orientador.nome || 'Nome a confirmar';
}

function integranteCard(integrante) {
  const email = String(integrante.email || '').trim();
  const contato = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)
    ? `<a class="member-email" href="mailto:${escapar(email)}">${escapar(email)}</a>` : '';

  const funcao = String(integrante.funcao || '').trim();
  return `<article class="member-card">
    ${imagem(integrante.foto, `Foto de ${integrante.nome}`, 'member-avatar', integrante.nome.substring(0, 1), integrante.posicaoFoto, integrante.zoomFoto)}
    <div class="member-info">
      <h3>${escapar(integrante.nome)}</h3>
      ${funcao ? `<p class="member-role">${escapar(funcao)}</p>` : ''}
      ${contato}
    </div>
  </article>`;
}

function demonstracao(projeto) {
  const prints = Array.isArray(projeto.prints) ? projeto.prints.filter(Boolean) : [];
  const video = String(projeto.video || '').trim();
  const link = /^https:\/\//i.test(video)
    ? `<a class="link-arrow video-link" href="${escapar(video)}" target="_blank" rel="noopener noreferrer">Assistir à demonstração ↗</a>` : '';

  // Não exibe uma seção vazia quando não há prints ou vídeo fornecidos.
  if (!prints.length && !link) return '';

  return `<section class="section container detail-demonstration">
    <div class="section-heading"><div><p class="eyebrow">GALERIA</p><h2>O sistema em imagens<span class="accent">.</span></h2></div></div>
    ${prints.length ? `<div class="screen-grid">${prints.map((foto, indice) => imagem(foto, `Tela ${indice + 1} do ${projeto.nome}`, 'screen-image', `Tela ${indice + 1}`)).join('')}</div>` : ''}
    ${link}
  </section>`;
}

function introducaoProjeto(projeto) {
  const paragrafos = Array.isArray(projeto.introducao) ? projeto.introducao : [projeto.introducao];
  return paragrafos.filter(Boolean).map((texto) => `<p>${escapar(texto)}</p>`).join('');
}

function montarProjeto() {
  const id = new URLSearchParams(window.location.search).get('id');
  const projeto = dados.projetos.find((item) => item.id === id);
  const raiz = document.getElementById('conteudo');

  if (!projeto) {
    raiz.innerHTML = `<section class="container not-found"><h1>Projeto não encontrado.</h1>
      <p>Confira o endereço ou volte para a lista de projetos.</p>
      <a class="btn" href="index.html#projetos">Ver projetos ↗</a></section>`;
    return;
  }

  document.title = `${projeto.nome} | Mostra de TCCs 2026`;
  raiz.innerHTML = `
    <div class="container detail-nav"><a href="index.html#projetos">← Todos os projetos</a></div>
    <section class="container detail-intro">
      <div class="detail-heading">
        <p class="eyebrow">GRUPO ${escapar(projeto.numero)} · TCC 2026</p>
        <h1>${escapar(projeto.nome)}<span class="accent">.</span></h1>
        <p class="detail-full-name">${escapar(projeto.nomeCompleto)}</p>
        <p class="detail-summary">${escapar(projeto.resumo)}</p>
      </div>
      ${logoProjeto(projeto, 'detalhe')}
    </section>

    <section class="section detail-description" aria-label="Introdução do Trabalho de Conclusão de Curso">
      <div class="container detail-text-grid">
        <div><p class="eyebrow">APRESENTAÇÃO</p><h2>Sobre o projeto<span class="accent">.</span></h2></div>
        <div class="intro-paragraphs">${introducaoProjeto(projeto)}</div>
      </div>
    </section>

    ${demonstracao(projeto)}

    <section class="section team-section">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow">EQUIPE · GRUPO ${escapar(projeto.numero)}</p><h2>Integrantes<span class="accent">.</span></h2></div></div>
        <div class="team-grid">${(projeto.integrantes || []).map(integranteCard).join('')}</div>
      </div>
    </section>
    <div class="container detail-bottom"><a class="btn" href="index.html#projetos">← Voltar aos projetos</a></div>`;
}

// Retira imagens inválidas, preservando um substituto sem ícone de erro.
function observarImagens() {
  document.querySelectorAll('.image-slot img').forEach((img) => {
    img.addEventListener('error', () => { img.closest('.image-slot')?.classList.add('no-image'); img.remove(); });
  });
}

function iniciar() {
  if (!dados) return;
  document.getElementById('logo-etec').src = dados.escola.logo;
  if (document.body.dataset.pagina === 'inicio') montarInicio();
  if (document.body.dataset.pagina === 'projeto') montarProjeto();
  observarImagens();
}

iniciar();
