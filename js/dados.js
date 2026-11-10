/**
 * Informações da Mostra de TCCs 2026.
 * Os IDs dos projetos são utilizados nas URLs
 */
window.DADOS_SITE = {
  "escola": {
    "nome": "Etec João Belarmino",
    "logo": "assets/img/escola/logo-etec.png"
  },
  "curso": {
    "logo": "assets/img/curso/logo-ds-monocromatica.png",
    "descricao": "O curso de Desenvolvimento de Sistemas forma profissionais para analisar, projetar, desenvolver, documentar, testar e manter sistemas de informação, além de trabalhar com linguagens de programação e bancos de dados.",
    "siteOficial": "https://www.cps.sp.gov.br/cursos-etec/desenvolvimento-de-sistemas/"
  },
  "turma": {
    "serie": "3º ano",
    "periodo": "Turma A (manhã)",
    "grupo": "Grupo B",
    "ano": "2026"
  },
  "orientador": {
    "nome": "Rubens Castaldelli Carlos"
  },
  "projetos": [
    {
      "id": "lumi",
      "numero": "01",
      "nome": "Lumi",
      "nomeCompleto": "Sistema para gestão de sala de leitura e experiência do leitor",
      "resumo": "Organização do acervo e acesso facilitado aos livros da sala de leitura.",
      "introducao": [
        "Este projeto trata-se do desenvolvimento de um software para a sala de leitura da escola, com o objetivo de informatizar a consulta e a organização do acervo de livros. O sistema será desenvolvido para centralizar as informações das obras disponíveis, facilitando o acesso dos alunos e o gerenciamento da sala de leitura.",
        "O software busca solucionar dificuldades relacionadas à localização e à consulta das informações dos livros, que podem tornar o processo de busca demorado e pouco eficiente. Com a implantação do projeto, será possível tornar esse processo mais organizado e facilitar o acesso às obras disponíveis no acervo.",
        "A implantação do projeto é importante por proporcionar maior praticidade na consulta e no gerenciamento dos livros, além de contribuir para o incentivo à leitura. Entre os benefícios esperados estão a redução do tempo de busca, o acesso facilitado às informações do acervo e o auxílio na organização da sala de leitura.",
        "Os principais usuários do sistema serão os alunos da escola e os responsáveis pela sala de leitura. Os alunos poderão consultar as obras disponíveis, enquanto os responsáveis poderão utilizar o software como ferramenta de apoio à organização e ao gerenciamento do acervo.",
        "Para fundamentar o desenvolvimento do projeto, será realizado um levantamento de requisitos junto aos usuários da sala de leitura, buscando identificar suas necessidades e os principais problemas encontrados no processo atual. A partir dessas informações, serão definidas as funcionalidades necessárias para o desenvolvimento do sistema.",
        "O software será implantado na sala de leitura da escola, onde será disponibilizado para utilização dos alunos e dos responsáveis pelo espaço. Dessa forma, espera-se que a solução contribua para uma gestão mais organizada do acervo e facilite o acesso dos estudantes aos livros disponíveis."
      ],
      "logo": "assets/img/projetos/lumi/logo.webp",
      "cor": "lumi",
      "prints": [],
      "video": "",
      "integrantes": [
        {
          "nome": "EDUARDO GOMES DA COSTA",
          "email": "eduardo.gomes.d.costa@gmail.com",
          "foto": "assets/img/projetos/lumi/integrantes/eduardo.webp",
          "funcao": "Desenvolvedor"
        },
        {
          "nome": "KELLY FERNANDA DA SILVA",
          "email": "kellyfernandadasilva2009@gmail.com",
          "foto": "assets/img/projetos/lumi/integrantes/kelly.webp",
          "funcao": "Documentação"
        },
        {
          "nome": "MIGUEL AUGUSTO PEZINI",
          "email": "miguelpezini7@gmail.com",
          "foto": "assets/img/projetos/lumi/integrantes/miguel.webp",
          "posicaoFoto": "50% 18%",
          "funcao": "Documentação e Apresentação"
        },
        {
          "nome": "PAOLA DOMINGUES DE SOUZA",
          "email": "paolasdomingues@gmail.com",
          "foto": "assets/img/projetos/lumi/integrantes/paola.webp",
          "posicaoFoto": "72% center",
          "funcao": "Documentação, Banco de Dados e Liderança"
        },
        {
          "nome": "RAMON GUILHERME RAMOS SCHIFFERLI",
          "email": "ramon.schifferli7@gmail.com",
          "foto": "assets/img/projetos/lumi/integrantes/ramon.webp",
          "funcao": "Desenvolvedor"
        }
      ]
    },
    {
      "id": "homelink",
      "numero": "02",
      "nome": "HomeLink",
      "nomeCompleto": "Sistema de Marketplace Imobiliário Digital",
      "resumo": "Marketplace para imóveis e serviços residenciais, com recursos de busca inteligente.",
      "introducao": [
        "Este projeto trata-se do desenvolvimento do HomeLink, um sistema web de marketplace imobiliário destinado à divulgação e à pesquisa de anúncios de imóveis para compra ou aluguel e de serviços relacionados à residência, como mudanças, montagem, manutenção e limpeza. A plataforma centraliza as informações dos anúncios e disponibiliza os dados de contato de proprietários e prestadores de serviços, de modo que a negociação seja realizada diretamente entre as partes, por meios externos à plataforma.",
        "O software propõe-se a solucionar a dificuldade enfrentada por quem procura um imóvel ou um serviço para a residência em encontrar, em um único lugar, informações completas e organizadas, uma vez que os anúncios costumam estar dispersos em diferentes sites, redes sociais e grupos de mensagens, com descrições incompletas, sem padronização e com mecanismos de busca limitados a filtros rígidos. Para o anunciante, a elaboração de um anúncio claro e atrativo também exige tempo e habilidade de escrita que nem sempre estão disponíveis.",
        "Justifica-se o desenvolvimento do sistema pela necessidade de tornar a procura por moradia e por serviços residenciais mais ágil, intuitiva e segura. Para isso, o HomeLink reúne a pesquisa por texto livre, os filtros tradicionais (tipo de negociação, tipo de imóvel, número de quartos e faixa de preço) e a busca em linguagem natural com inteligência artificial, que interpreta pedidos como “casa com dois quartos perto de uma escola” e os converte em critérios de pesquisa, considerando inclusive a proximidade de pontos de interesse por meio de serviços de mapas. O sistema oferece ainda um assistente de inteligência artificial que gera a descrição do anúncio a partir dos dados informados pelo anunciante, o qual pode revisá-la antes da publicação.",
        "Com a utilização do software, pretende-se reduzir o tempo gasto na busca por imóveis e prestadores de serviços, padronizar e qualificar as informações publicadas e aumentar a confiabilidade dos anúncios, uma vez que a publicação exige login em conta com CPF validado, os usuários podem denunciar anúncios suspeitos ou inadequados e a equipe administrativa dispõe de ferramentas de moderação.",
        "O usuário também pode salvar anúncios de interesse como favoritos e gerenciar seus próprios anúncios, pausando, editando ou encerrando-os a qualquer momento. Os usuários do sistema são os visitantes, que podem consultar e pesquisar anúncios sem necessidade de cadastro; os usuários cadastrados, que atuam como anunciantes (proprietários de imóveis e prestadores de serviços) ou como interessados; e os administradores, responsáveis pela moderação da plataforma. São beneficiadas, principalmente, as pessoas que desejam comprar ou alugar um imóvel, os proprietários que desejam divulgá-lo e os profissionais que oferecem serviços voltados à residência.",
        "O projeto foi fundamentado por meio do levantamento e da análise de requisitos funcionais e não funcionais, da modelagem do sistema com diagrama de caso de uso e diagrama hierárquico de funcionalidades e do desenvolvimento orientado pela metodologia ágil Scrum, organizado em sprints. O software será disponibilizado na internet, podendo ser acessado por meio de navegador em computadores e dispositivos móveis por anunciantes e interessados de diferentes localidades, e deverá ser implantado após a realização de testes e a validação do protótipo."
      ],
      "logo": "assets/img/projetos/homelink/logo.png",
      "cor": "homelink",
      "prints": [],
      "video": "",
      "integrantes": [
        {
          "nome": "GABRIEL MARTINS DE LIMA VIEIRA",
          "email": "amdshmmartins@gmail.com",
          "foto": "assets/img/projetos/homelink/integrantes/gabriel-martins.webp",
          "funcao": "Desenvolvedor e Líder"
        },
        {
          "nome": "LUIS GABRIEL SANTOS DE OLIVEIRA",
          "email": "luisgabrielsantos767@gmail.com",
          "foto": "assets/img/projetos/homelink/integrantes/luis.webp",
          "funcao": "Banco de Dados"
        },
        {
          "nome": "MARCELA ALMEIDA RODRIGUES DE SOUZA",
          "email": "marcela.txt09@gmail.com",
          "foto": "assets/img/projetos/homelink/integrantes/marcela.webp",
          "funcao": "Desenvolvedora"
        },
        {
          "nome": "THIAGO BRANCHINI RODRIGUES",
          "email": "branchinithiago@gmail.com",
          "foto": "assets/img/projetos/homelink/integrantes/thiago-branchini.webp",
          "funcao": "Documentação"
        },
        {
          "nome": "THIAGO HENRIQUE BISPO",
          "email": "thiagohenriquebispo7@gmail.com",
          "foto": "assets/img/projetos/homelink/integrantes/thiago-bispo.webp",
          "funcao": "Documentação e Apresentação"
        }
      ]
    },
    {
      "id": "condex",
      "numero": "03",
      "nome": "CONDEX",
      "nomeCompleto": "Sistema de Comunicação e Gestão Condominial",
      "resumo": "Comunicação e organização de atividades em condomínios residenciais.",
      "introducao": [
        "Este projeto trata do desenvolvimento de um sistema web responsivo destinado à comunicação e à organização de atividades em condomínios residenciais. Nesse ambiente, síndicos, moradores e porteiros lidam diariamente com informações relacionadas a comunicados, reservas de áreas comuns, visitantes, encomendas, regras e outros registros da rotina condominial. Quando essas informações se encontram distribuídas entre diferentes meios ou são tratadas em canais que não foram desenvolvidos especificamente para essa finalidade, sua localização e seu acompanhamento podem se tornar mais difíceis. Além disso, determinadas situações podem exigir uma comunicação direcionada entre o morador e a administração, sem a necessidade de exposição do assunto em canais coletivos.",
        "Diante desse contexto, o software foi desenvolvido com o objetivo de reunir essas informações e atividades em um único ambiente, disponibilizando funcionalidades de acordo com as atribuições de cada perfil de usuário. Entre os recursos contemplados estão a publicação, consulta e resposta a comunicados, a solicitação e o controle de reservas de áreas comuns, o registro de visitantes e encomendas e o acesso a regras, laudos e históricos. Com sua utilização, busca-se facilitar o acesso às informações, organizar os registros e tornar mais prático o acompanhamento das atividades realizadas no condomínio. Os principais usuários e beneficiados são síndicos, moradores e porteiros, que possuem acessos e funcionalidades compatíveis com suas atribuições. A interface responsiva também possibilita a utilização do sistema em diferentes dispositivos.",
        "A fundamentação do projeto ocorreu por meio de pesquisa bibliográfica e levantamento de requisitos junto a potenciais usuários do sistema. Para compreender as necessidades existentes no contexto condominial, realizou-se uma reunião com um síndico que se disponibilizou a colaborar com o projeto e aplicou-se um questionário aos moradores, divulgado com seu auxílio. As informações obtidas contribuíram para a identificação das necessidades dos usuários e para a definição dos requisitos e das funcionalidades do software.",
        "O sistema foi desenvolvido tendo como contexto de aplicação condomínios residenciais, podendo ser implantado em locais que apresentem necessidades compatíveis com a solução proposta."
      ],
      "logo": "assets/img/projetos/condex/logo.webp",
      "cor": "condex",
      "prints": [],
      "video": "",
      "integrantes": [
        {
          "nome": "LAVÍNIA ALESSANDRA SILVA",
          "email": "laviniaassd@gmail.com",
          "foto": "assets/img/projetos/condex/integrantes/lavinia.webp",
          "posicaoFoto": "40% 24%",
          "zoomFoto": 1.18,
          "funcao": "Desenvolvedora Front-end, UI/UX Designer e Documentação"
        },
        {
          "nome": "LETÍCIA BERNARDI",
          "email": "bernardileticia860@gmail.com",
          "foto": "assets/img/projetos/condex/integrantes/leticia.webp",
          "funcao": "Apresentação e Documentação"
        },
        {
          "nome": "LUCAS CIMENTON MENONCELLO",
          "email": "lucasmenoncello@gmail.com",
          "foto": "assets/img/projetos/condex/integrantes/lucas.webp",
          "funcao": "Desenvolvedor Back-end"
        },
        {
          "nome": "MATIAS GODOY BIGON",
          "email": "matiasgodoybigon@gmail.com",
          "foto": "assets/img/projetos/condex/integrantes/matias.webp",
          "funcao": "Banco de Dados e Desenvolvimento Front-end"
        },
        {
          "nome": "MURILO TRIDA COSTA",
          "email": "murilotrida@gmail.com",
          "foto": "assets/img/projetos/condex/integrantes/murilo.webp",
          "posicaoFoto": "50% 16%",
          "zoomFoto": 1.14,
          "funcao": "Líder e Desenvolvedor Full Stack"
        }
      ]
    },
    {
      "id": "imobcontrol",
      "numero": "04",
      "nome": "ImobControl",
      "nomeCompleto": "ImobControl Imobiliária Gárcia",
      "resumo": "Sistema web para anúncios e administração de imóveis da Imobiliária Garcia.",
      "introducao": [
        "Este projeto trata-se do desenvolvimento de um sistema web para a Imobiliária Garcia, onde pretende-se informatizar os processos de divulgação, busca e gestão de imóveis realizados pela empresa, objetivando facilidades em procedimentos como: cadastro e consulta de imóveis, gestão de proprietários, criação de anúncios, agendamento e acompanhamento de visitas, além do controle de usuários e permissões de acesso ao sistema. O software possuirá funcionalidades que deverão solucionar problemas como a dificuldade de clientes em localizar imóveis disponíveis de forma rápida e organizada, e a dependência de processos manuais ou pouco integrados para o cadastro de imóveis, o agendamento de visitas e a comunicação entre clientes, corretores e administração, decorrentes do processo hoje praticado pela imobiliária. Com a implantação do sistema pretende-se agilizar com segurança os procedimentos de divulgação e negociação de imóveis, permitindo que clientes realizem buscas avançadas, salvem imóveis favoritos e agendem visitas diretamente pela plataforma, e que corretores e administradores gerenciem imóveis, proprietários, anúncios, visitas e usuários a partir de um único ambiente, acessível remotamente. O projeto foi idealizado através de levantamento de requisitos realizado diretamente com o proprietário da Imobiliária Garcia, responsável por repassar as necessidades e os processos de trabalho da empresa, e deverá ser implantado após testes preliminares e validação pela direção da Imobiliária Garcia."
      ],
      "logo": "assets/img/projetos/imobcontrol/logo.webp",
      "cor": "imobcontrol",
      "prints": [],
      "video": "",
      "integrantes": [
        {
          "nome": "KAUÃ BEZERRA DE OLIVEIRA",
          "email": "kauabezerra.7nf@gmail.com",
          "foto": "assets/img/projetos/imobcontrol/integrantes/kaua.webp",
          "funcao": "Documentação"
        },
        {
          "nome": "PABLO FERREIRA NEVES",
          "email": "ferreiranevespablo624@gmail.com",
          "foto": "assets/img/projetos/imobcontrol/integrantes/pablo.webp",
          "funcao": "Documentação e Apresentação"
        },
        {
          "nome": "SAMUEL VALTAIR MARAES",
          "email": "samuelvaltair@gmail.com",
          "foto": "assets/img/projetos/imobcontrol/integrantes/samuel.webp",
          "funcao": "Desenvolvedor e Líder"
        },
        {
          "nome": "MIGUEL FELIPE FRANCISCO",
          "email": "miguellfelipe42@gmail.com",
          "foto": "assets/img/projetos/imobcontrol/integrantes/miguel-francisco.webp",
          "funcao": "Banco de Dados"
        }
      ]
    }
  ]
};
