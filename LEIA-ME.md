# Mostra de TCCs 2026 — Etec João Belarmino

Site estático para apresentar os quatro TCCs do 3º ano de Desenvolvimento de Sistemas, Turma A (manhã), Grupo B.

## Como visualizar

1. Extraia o ZIP mantendo a estrutura das pastas.
2. Abra `index.html` no navegador. O site não precisa de `npm install`, Composer, back-end ou banco de dados.
3. Para desenvolver pelo VS Code, também é possível usar uma extensão como Live Server.

## Arquivos

```text
mostra_tcc_2026_completo/
├── index.html                  # Página inicial: apresentação dos quatro TCCs
├── projeto.html                # Modelo compartilhado da página de cada TCC
├── css/
│   └── style.css               # Layout e regras de responsividade
├── js/
│   ├── dados.js                # EDITE AQUI: nomes, e-mails, textos, logos, prints
│   └── app.js                  # Renderização das páginas; evite editar sem necessidade
├── assets/img/
│   ├── escola/                 # Logo da Etec
│   ├── curso/                  # Elefante de Desenvolvimento de Sistemas
│   └── projetos/
│       ├── lumi/               # Grupo 1: logo + 5 fotos
│       ├── homelink/           # Grupo 2: logo original + 5 fotos
│       ├── condex/             # Grupo 3: logo + 5 fotos
│       └── imobcontrol/        # Grupo 4: logo + 4 fotos
└── LEIA-ME.md
```

## Atualizar os conteúdos

Edite **somente `js/dados.js`** para atualizar os dados, salvo quando for necessário alterar a aparência.

- **Professor orientador:** `orientador.nome`.
- **Nome do software:** `projetos[].nome` e `projetos[].nomeCompleto`.
- **Resumo no card:** `projetos[].resumo`.
- **Introdução completa:** `projetos[].introducao`. Cada string no array corresponde a um parágrafo.
- **Logo:** coloque a imagem na pasta correspondente e atualize `projetos[].logo` com o caminho relativo. Ex.: `assets/img/projetos/homelink/logo.webp`.
- **Fotos dos integrantes:** `projetos[].integrantes[].foto` (imagem) e `.nome` / `.email` (texto).
- **Enquadramento de uma foto:** opcionalmente use `posicaoFoto` (ex.: `center 20%`).
- **Prints do sistema:** coloque os arquivos na pasta do projeto e adicione os caminhos a `projetos[].prints`, por exemplo:

```js
prints: [
  'assets/img/projetos/condex/tela-inicial.webp',
  'assets/img/projetos/condex/tela-reservas.webp'
]
```

- **Vídeo demonstrativo:** preencha `projetos[].video` com o link `https://...`. Se os campos de prints e vídeo estiverem vazios, a seção de demonstração não aparece.
- **Link oficial do curso:** `curso.siteOficial` (já preenchido com o Centro Paula Souza).

**IDs/endereços:** `projeto.html?id=lumi`, `?id=homelink`, `?id=condex`, `?id=imobcontrol`. Evite alterar os IDs após divulgar os links ou gerar QR Codes.

## Pendências antes de publicar

1. **HomeLink:** logo PNG original recebida e incluída com suporte escuro no layout.
2. **ImobControl:** confirmado que a equipe tem quatro integrantes.
3. **Professor orientador:** substituir `Nome do professor orientador` em `js/dados.js`.
4. **Nome da imobiliária:** confirmar a grafia oficial (`Gárcia` no título enviado e `Garcia` na introdução e logo).
5. **Demonstrações:** não foram recebidos prints nem vídeos. Essas seções ficarão ocultas até a inclusão dos arquivos.
6. **Autorização de publicação:** confirmar com a escola, os grupos e os responsáveis cabíveis que os nomes completos, fotografias e e-mails podem ser divulgados publicamente; remover contatos pessoais quando necessário.
7. **Revisão textual:** as introduções foram mantidas conforme enviadas pelas equipes, sem reescrita de conteúdo.

## Publicação na Vercel com possibilidade de atualização

O conteúdo desta pasta é o site (sem processo de build). Para que o site possa ser atualizado mantendo a mesma URL:

1. Crie um repositório no **GitHub**.
2. Envie os arquivos de dentro desta pasta para a **raiz** do repositório: `index.html`, `projeto.html`, `css/`, `js/`, `assets/` e `LEIA-ME.md`.
3. Na [Vercel](https://vercel.com/new), faça login, escolha **Add New → Project**, conecte o GitHub e importe o repositório.
4. Em **Framework Preset**, escolha **Other**. Sem comando de build; deixe o diretório de saída padrão (raiz, `.`). Clique em **Deploy**.
5. Após publicar, edite `js/dados.js` ou substitua as imagens no GitHub, faça **Commit changes** na branch principal (`main`). A Vercel atualiza a publicação automaticamente no mesmo domínio de produção.
6. Teste `index.html` e `projeto.html?id=homelink`, `?id=lumi`, `?id=condex`, `?id=imobcontrol` em celular. Gere o QR Code apenas com o domínio de produção.

**Alternativa para publicar rapidamente:** o [Vercel Drop](https://vercel.com/drop) aceita o ZIP/folder diretamente. Cada envio pelo Drop cria um *novo projeto*; para manter a mesma URL nas próximas alterações, conecte GitHub ou use Vercel CLI.

## Hospedagem (Vercel) — observação técnica

Após revisar e autorizar a publicação, faça o commit **do conteúdo desta pasta** em um repositório GitHub. Na Vercel, importe o repositório como projeto estático (`Other`, sem comando de build e com raiz de saída `.`). A página inicial será `index.html`. Antes de imprimir o QR Code, teste o endereço definitivo em celulares e revise todos os links, fotos e permissões.

Nenhuma chave de API nem serviço externo é necessária para o site funcionar.


## Ajuste fino do enquadramento das fotos

No arquivo `js/dados.js`, cada integrante pode receber opcionalmente:

- `posicaoFoto`: controla o foco da imagem com `object-position` (ex.: `"50% 20%"`).
- `zoomFoto`: aproxima ou afasta ligeiramente a imagem no card (ex.: `1.15`).

Exemplo:

```js
{
  nome: "NOME DO INTEGRANTE",
  email: "email@exemplo.com",
  foto: "assets/img/projetos/condex/integrantes/exemplo.webp",
  posicaoFoto: "50% 22%",
  zoomFoto: 1.12
}
```


## Funções e disposição dos integrantes

- Em `js/dados.js`, cada integrante tem um campo `funcao`.
- A função aparece entre o nome e o e-mail.
- O CSS de `.member-card`, `.member-info` e `.member-role` está em `css/style.css`.
- Os arquivos das fotos originais não foram modificados.
- As funções foram preenchidas com as informações enviadas pelas equipes em novembro de 2026.

## Atualização do site publicado

A Vercel está conectada ao GitHub. Atualize os arquivos alterados do repositório
(`js/dados.js`, `js/app.js` e `css/style.css`) e faça um commit na branch
principal. A Vercel gerará uma nova publicação automaticamente, preservando
o endereço público de produção.

## Privacidade

O site expõe nomes, fotos e e-mails dos integrantes. Confirme com a escola
e os participantes as autorizações e a necessidade de publicar cada dado
antes da divulgação, com atenção especial a menores de idade.
O site estático não pede senhas nem utiliza formulário, mas os dados
publicados podem ser copiados por visitantes e indexados por buscadores.
