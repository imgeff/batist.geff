import imgTrybeWallet from '../../images/TrybeWallet.png';
import imgTrybeTunes from '../../images/TrybeTunes.png';
import imgShoppingCart from '../../images/ShoppingCart.png';
import imgSolarSystem from '../../images/SolarSystem.png';
import imgTrybeWarts from '../../images/TrybeWarts.png';
import imgPixelArt from '../../images/PixelArt.png';
import imgGenericFullStack from '../../images/em-progresso.svg';
import { IProjects } from './interfaces';

const BCRYPT = 'Bcrypt';
const EXPRESS = 'Express';
const EXPRESSASYNCERRORS = 'Express Async Errors';
const BOOTSTRAP = 'Bootstrap';
const SWIPER = 'Swiper';
const DAISYUI = 'DaisyUI';
const ESLINT = 'Eslint';
const GIT = 'Git';
const GITHUB = 'Github';
const JAVASCRIPT = 'JavaScript';
const CSS = 'CSS';
const HTML = 'HTML';
const JEST = 'Jest';
const JOI = 'JOI';
const JWT = 'Json Web Token';
const MOCHA = 'Mocha';
const CHAI = 'Chai';
const SINON = 'Sinon';
const TYPESCRIPT = 'TypeScript';
const NODEJS = 'Node.js';
const REACTJS = 'React.js';
const REACTROUTER = 'React Router Dom';
const REACTICONS = 'React Icons';
const REACTLOADERSPINNER = 'React Loader Spinner';
const UNDRAW = 'Undraw';
const ICONS8 = 'Icons8';
const CSSBUTTONS = 'CSS Buttons';
const REDUX = 'Redux';
const STYLEDCOMPONENTS = 'Styled Components';
const SEQUELIZE = 'Sequelize';
const DOTENV = 'Dotenv';
const MYSQL2 = 'MySQL2';
const TAILWIND = 'Tailwind';


export const ProjectsData: IProjects = {
  fundamentos: [
    {
      nameProject: 'TrybeWarts',
      media: {
        img: imgTrybeWarts,
        alt: `Um cabeçalho com logo na ponto esquerda, o texto "Trybewarts no centro e um formulário de login na ponta
        direita", abaixo um formulário de avaliação sobre conhecimentos da programação mesclados com o universo Harry Potter, na ponta direita o
        brasão do Trybewarts`,
        video: 'https://drive.google.com/file/d/1pkWYvsM1QMEoTxnBQ-Dc5XkB-AEk1ffC/preview',
      },
      links: {
        github: 'https://github.com/imgeff/trybewarts',
        deploy: 'https://imgeff.github.io/trybewarts/',
      },
      infos: {
        description: 'Página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela.',
        functionalities: [
          'Coletar feedback',
          'Visualizar feedback enviado',
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [GIT, GITHUB, ESLINT, ],
        colaborators: [
          {
            name: 'Jõao Vitor Dantas',
            github: 'https://github.com/dantasjv'
          }
        ],
      },
    },
    {
      nameProject: 'PixelArt',
      media: {
        img: imgPixelArt,
        alt: `No topo o título "Pixel Art", alinhado ao centro, e um pouco abaixo uma paleta de cores horizontais,
        mais abaixo um botão com o texto "Limpar", abaixo deste botão, um input numérico e 3 outros botões alinhados
        ao centro e horizontalmente, os botões contém os textos "Tamanho do quadro, Light", "Dark",respectivamente
        logo mais embaixo há um quadro de pixels`,
        video: 'https://drive.google.com/file/d/1nEK-Pda_oLxYnvhpr9qKFwA0D1O6TSdu/preview',
      },
      links: {
        github: 'https://github.com/imgeff/pixel-art',
        deploy: 'https://imgeff.github.io/pixel-art/',
      },
      infos: {
        description: 'Esta é uma aplicação para criar desenhos com pixels, com a possibilidade de utiliza diferentes cores.',
        functionalities: [
          'Selecionar uma Cor',
          'Pintar o quadro',
          'Alterar o tamanho do quadro',
          'Limpar o quadro',
          'Alterar tema',
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [GIT, GITHUB],
        colaborators: [],
      },
    },
    {
      nameProject: 'ShoppingCart',
      media: {
        img: imgShoppingCart,
        alt: `Um cabeçalho com logo a esquerda, campo de pesquisa ao centro e texto "Meu Carrinho na ponta direita",
        Abaixo do Cabeçalho  3 seções, Cozinha, Sala e Quarto uma embaixo da outra, cada uma com imagens e nomes de produtos enfileirados horizontalmente
        e com botões com o texto "Adicionar ao carrinho", á direita dessas seções, uma seção vertical  com o botão com otexto "esvaziar carrinho" e acima desse botão
        um produto representado por texto, foto e preço`,
        video: 'https://drive.google.com/file/d/1bxPYWHMy3bbhcJ7hhu5lhRHh8SRP1DDq/preview',
      },
      links: {
        github: 'https://github.com/imgeff/shoppingCart',
        deploy: 'https://imgeff.github.io/shoppingCart/',
      },
      infos: {
        description: 'Nesse projeto foi feito um carrinho de compras totalmente dinâmico! Consumindo dados diretamente de uma API! a API do Mercado Livre para buscarmos produtos à venda.',
        functionalities: [
          'Pesquisar produtos',
          'Adicionar um produto ao carrinho',
          'Remover um produto do carrinho',
          'Visualizar o total do carrinho',
          'Esvaziar carrinho',
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [JEST, ESLINT, GIT, GITHUB],
        colaborators: [],
      },
    },
  ],
  frontend: [
    {
      nameProject: 'TrybeWallet',
      media: {
        img: imgTrybeWallet,
        alt: `Ilustração de uma carteira com notas de dinheiro,
        a frase "Monitore a sua vida financeira de forma simples e online",
        um botão com o texto login  e abaixo o texto sublinhado "Ainda não tem uma conta?, crie aqui!",
        tudo isso alinhado ao centro e um embaixo do outro.`,
        video: 'https://drive.google.com/file/d/1R3bciBG0BtUae7QHai5lx3T1LWzIqym0/preview',
      },
      links: {
        github: 'https://github.com/imgeff/trybewallet',
        deploy: 'https://trybewallet-imgeff.vercel.app/',
      },
      infos: {
        description: 'Esta é uma carteira online para controle de gastos com conversão de moedas.',
        functionalities: [
          'Adicionar Gasto',
          'Remover Gasto',
          'Editar um gasto',
          'Visualizar uma tabela com seus gastos',
          'Visualizar o total da soma de gastos, convertidos para uma moeda de escolha'
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [
          REACTJS,
          REACTROUTER,
          REACTICONS,
          REDUX,
          STYLEDCOMPONENTS,
          ESLINT,
          GIT,
          GITHUB,
          UNDRAW,
          ICONS8,
          CSSBUTTONS,
        ],
        colaborators: [],
      },
    },
    {
      nameProject: 'TrybeTunes',
      media: {
        img: imgTrybeTunes,
        alt: `Ilustração do DJ MarshMello á direita, a logo do Trybetunes á esquerda
        embaixo o texto "A vida pode ser mais simples com um click, dê um play em sua vida!
        Simplifique momentos, escolha seus artistas, favorite suas músicas e sinta a vibe que liberta!",
        mais embaixo 2 botões alinhados ao centro do texto, o da esquerda contém o texto Login e o da direita
        contém o texto Cadastre-se`,
        video: 'https://drive.google.com/file/d/1j1LMYuODKX1l9d1djUq_dFF5eZ4-69lm/preview',
      },
      links: {
        github: 'https://github.com/imgeff/trybetunes',
        deploy: 'https://trybetunes.vercel.app/',
      },
      infos: {
        description: `O TrybeTunes, é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas,
        criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.`,
        functionalities: [
          'Fazer login',
          'Pesquisar por uma banda ou artista',
          'Listar os álbuns disponíveis',
          'Visualizar as músicas de um álbum selecionado',
          'Reproduzir uma prévia das músicas',
          'Favoritar e desfavoritar músicas',
          'Visualizar músicas favoritas',
          'Visualizar perfil',
          'Editar o perfil',
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [
          REACTJS,
          REACTROUTER,
          REACTLOADERSPINNER,
          ESLINT,
          GIT,
          GITHUB,
          UNDRAW,
          ICONS8,
        ],
        colaborators: [],
      },
    },
    {
      nameProject: 'SolarSystem',
      media: {
        img: imgSolarSystem,
        alt: `Título "Via Láctea" alinhado ao centro e no topo, abaixo existe uma seção com o texto "Sistema Solar"
        e todos os planetas em fila horizontal, e na ponta esquerda o Sol começando a fila, abaixo desta seção existe outra
        com o texto "missões", e vários cards com informações de missões espaciais.`,
        video: 'https://drive.google.com/file/d/1-DJ5n2bHFRoNPjJNl86uoGRAIrRu6hR4/preview',
      },
      links: {
        github: 'https://github.com/imgeff/solar-system',
        deploy: 'https://imgeff.github.io/solar-system/',
      },
      infos: {
        description: 'Esta aplicação permite o usuário ver os principais astros que compõem o sistema solar e conhecer mais um pouco sobre algumas missões espaciais que já foram realizadas.',
        functionalities: [
          'Visualizar o Sistema Solar',
          'Visualizar informações das missões espaciais',
        ],
        languages: [JAVASCRIPT, CSS, HTML],
        tools: [REACTJS, ESLINT, GIT, GITHUB],
        colaborators: [],
      },
    },
  ],
  backend: [
    {
      nameProject: 'TrybeSmith',
      media: {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
        alt: 'Losango com as letras "JS" dentro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff/trybesmith',
        deploy: 'https://github.com/imgeff/trybesmith',
      },
      infos: {
        description: `TrybeSmith é uma API de uma loja de itens medievais, desenvolvida em Typescript, com Eslint e arquitetura
        MSC (Models, Services e Controllers). Nesse projeto, O objetivo era colocar em prática o conhecimento adquirido sobre o Typescript
        e os maiores desafios aconteceram ao tipar bibliotecas que tinha tipagem customizada, felizmente consegui superar todos eles.
        `,
        functionalities: [
          'Listar todos os itens',
          'Listar todas os Pedidos',
          'Cadastrar um novo pedido',
          'Cadastrar um novo produto',
          'Cadastrar um novo usuário',
          'Autenticar um usuário'
        ],
        languages: [JAVASCRIPT, TYPESCRIPT],
        tools: [NODEJS, EXPRESS, MYSQL2, DOTENV, JWT, ESLINT, GIT, GITHUB, EXPRESSASYNCERRORS, JOI],
        colaborators: [],
      },
    },
    {
      nameProject: 'Store Manager',
      media: {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
        alt: 'Losango com as letras "JS" dentro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff/store-manager',
        deploy: 'https://github.com/imgeff/store-manager',
      },
      infos: {
        description: `Store Manager é uma API de um sistema de gerenciamento de vendas,
        que foi desenvolvida com TDD, Eslint e utilizando a arquitetura MSC (Models, Services e Controllers).

        Nesse projeto, O grande desafio se tratava de desenvolver a aplicação em TDD, mas ao começar a desenvolver
        vi o quanto essa prática era positiva para a aplicação, fazendo com que a gente possa conhecer melhor o código
        que escrevemos além de dar uma segurança maior na hora de implementar algo novo ou corrigir algo.
        `,
        functionalities: [
          'Buscar todos os produtos',
          'Buscar produto por id',
          'Buscar todas as vendas',
          'Buscar uma venda por id',
          'Cadastrar um novo produto',
          'Atualizar um produto',
          'Deletar um produto',
          'Cadastrar uma nova venda',
          'Atualizar uma venda',
          'Deletar uma venda',
        ],
        languages: [JAVASCRIPT],
        tools: [NODEJS, EXPRESS, CHAI, MOCHA, SINON, MYSQL2, DOTENV, ESLINT, GIT, GITHUB, JOI],
        colaborators: [],
      },
    },
    {
      nameProject: 'Talker Manager',
      media: {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
        alt: 'Losango com as letras "JS" dentro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff/talker-manager',
        deploy: 'https://github.com/imgeff/talker-manager',
      },
      infos: {
        description: `Esta aplicação é uma API de um CRUD (Create, Read, Update e Delete) de palestrantes.
        foi desenvolvidos alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo fs.
        `,
        functionalities: [
          'Buscar todas as pessoas palestrantes',
          'Buscar palestrante por id',
          'Cadastrar um novo palestrante',
          'Atualizar um palestrante',
          'Deletar um palestrante',
          'Pesquisar um palestrante através do nome',
        ],
        languages: [JAVASCRIPT],
        tools: [NODEJS, EXPRESS, ESLINT, GIT, GITHUB],
        colaborators: [],
      },
    },
    {
      nameProject: 'Blogs API',
      media: {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
        alt: 'Losango com as letras "JS" dentro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff/blogs-api',
        deploy: 'https://github.com/imgeff/blogs-api',
      },
      infos: {
        description: `Esta aplicação é uma API  de um CRUD posts de blog (com o Sequelize). Foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados.

        Foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.
        `,
        functionalities: [
          'Buscar todos os usuários',
          'Buscar usuário por id',
          'Cadastrar um novo usuário',
          'Autenticar um usuário',
          'Deletar um usuário',
          'Buscar todas as categorias',
          'Criar um post',
          'Buscar todos os posts',
          'Buscar post por id',
          'Atualizar um post',
          'Deletar um post',
          'Pesquisar post por algum termo'

        ],
        languages: [JAVASCRIPT],
        tools: [NODEJS, EXPRESS, SEQUELIZE, JOI, JWT, MYSQL2, DOTENV, ESLINT, GIT, GITHUB],
        colaborators: [],
      },
    },
    {
      nameProject: 'Blogs API',
      media: {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
        alt: 'Losango com as letras "JS" dentro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff/blogs-api',
        deploy: 'https://github.com/imgeff/blogs-api',
      },
      infos: {
        description: `Esta aplicação é uma API  de um CRUD posts de blog (com o Sequelize). Foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados.

        Foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.
        `,
        functionalities: [
          'Buscar todos os usuários',
          'Buscar usuário por id',
          'Cadastrar um novo usuário',
          'Autenticar um usuário',
          'Deletar um usuário',
          'Buscar todas as categorias',
          'Criar um post',
          'Buscar todos os posts',
          'Buscar post por id',
          'Atualizar um post',
          'Deletar um post',
          'Pesquisar post por algum termo'

        ],
        languages: [JAVASCRIPT],
        tools: [NODEJS, EXPRESS, SEQUELIZE, JOI, JWT, MYSQL2, DOTENV, ESLINT, GIT, GITHUB],
        colaborators: [],
      },
    },
  ],
  fullstack: [
    {
      nameProject: 'Em Breve',
      media: {
        img: imgGenericFullStack,
        alt: 'várias camadas de quadrados um embaixo do outro',
        video: '',
      },
      links: {
        github: 'https://github.com/imgeff?tab=repositories',
        deploy: 'https://github.com/imgeff?tab=repositories',
      },
      infos: {
        description: 'Pegue um café e espere um pouco, estou desenvolvendo o projeto.',
        functionalities: ['...'],
        languages: ['...'],
        tools: ['...'],
        colaborators: [],
      },
    },
  ],
};
