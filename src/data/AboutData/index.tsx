import IAboutContent from './interfaces/IAboutContent';

const aboutMe = {
  title: 'Quem sou',
  description: (
    <>
      <p>Meu nome é Gefferson Batista, tenho 19 anos e sou desenvolvedor Front-end.</p>
      <p>Ao longo da minha vida me acostumei a resolver problemas quando o assunto era tecnologia, virei referência dentro da minha família
      por solucionar problemas de software.</p>
      <br/>
      <p>Ao terminar o ensino médio acabei descobrindo o mundo da programação, logo de início
      achei incrível a possibilidade de falar com o computador, e ao começar minha jornada na Trybe com o objetivo de me tornar desenvolvedor web full-stack
      vi que as possibilidades não se limitam, criar aplicações front-end se tornou um hobbie, e hoje estou descobrindo que no back-end também não é muito diferente,
      cada conhecimento novo que adquiro, se torna ferramentas para desenvolver ideias e sonhos, além de solucionar problemas.</p>
      <br/>
      <p>Considero programação como uma arte, se Van gogh tinha um pincel, eu tenho um teclado ;). 🌻🧑🏻‍💻</p>
    </>
  )
};

const aboutSoccer = {
  title: 'Competição e Trabalho em equipe',
  description: (
    <>
      <p>Eu sempre fui uma pessoa muito competitiva, e na minha infância eu pensava muito no que eu
      queria ser quando crescesse, eu gostava muito de jogos, videogames, artes, ciência e futebol.</p>
      <br/>
      <p>Eu amava o futebol por ser um esporte que envolve competição em cada detalhe,
      trabalho em equipe e muita emoção, além disso tudo eu sabia que no futebol eu poderia fazer a diferença e quando eu descobri isso tive a certeza que era isso que eu queria
      ser quando crescer.</p>
      <br/>
      <p>Entrei em escolinha de futebol desde meus 8 anos e disputei competições dentro da minha cidade e em
      outras cidades próximas, infelizmente o tempo passou e eu não consegui criar uma oportunidade sólida para fazer esse sonho
      se tornar real, porém adquiri experiências fantásticas e muito aprendizado, hoje ainda amo muito todo esse universo. 🏆⚽</p>
    </>
  )
};

const aboutGames = {
  title: 'Conexão com Tecnologia',
  description:
  <>
    <p>A humanidade até pode não ter inventado a máquina de voltar no tempo, mas com certeza a de acelerar ele é da minha
    geração. Os Games foi o motivo da conexão entre mim e o mundo da tecnologia, eu já gostava muito das brincadeiras tradicionais de infância
    porém quando eu descobri os videogames um universo se abriu na minha cabeça, e nesse universo eu vivia para um propósito, <strong>diversão.</strong></p>
    <br/>
    <p>Comecei com os joguinhos de camelô, e depois comecei a pegar o celular escondido das pessoas da minha família. Eu sempre fui obediente aos meus pais porém
      existiam dois motivos no qual eu saía de casa sem a permissão deles, o primeiro era pra jogar bola, e o segundo motivo veio quando eu descobri que as LAN house do meu bairro tinham consoles,
      acabava saindo escondido pra jogar um futebol ou algum jogo na LAN house, as vezes eu perdia a noção do tempo e acabava sendo descoberto.</p>
    <br/>
    <p>Pra resolver esse problema de sair escondido, minha mãe decidiu comprar um playstation 2 pra mim, era de segunda mão e já tinham lançado o 3 porém foi o melhor presente de aniversário
      que eu já ganhei, contava as horas pra amanhecer o dia e eu chegar da escola pra continuar minha saga nos jogos. 🎮👾
    </p>
  </>
};

const aboutUniverse = {
  title: 'Ao universo e além',
  description:
    <>
      <p>Sempre fui muito observador e curioso, e um dos assuntos que mais me despertam o interesse
        é o Universo, o tanto de coisas que se desconhece é com certeza incalculável, e o mais fascinante é a beleza de que tudo é feito,
        não parece que tudo surgiu de uma explosão, parece que tudo foi muito bem desenhado.
      </p>
      <br/>
      <p>Através dessa beleza e dos mistérios, eu me tornei um admirador do espaço, sempre gosto de observar o céu e também a natureza do nosso
        planeta. Acho incrível as experiências que um Astronauta pode ter e as teorias que a gente pode criar, e todas elas beiram o surreal.
      </p>
      <br />
      <p>Buracos negros, estrelas, planetas e galáxias todos com suas particularidade
        e a gente no meio disso tudo, com certeza esse é o meu mistério favorito. 🚀🪐
      </p>
    </>
};

const AboutContent: IAboutContent[] = [aboutMe, aboutSoccer, aboutGames, aboutUniverse];

export { AboutContent };
