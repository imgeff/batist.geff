import { Atom, Cube, TerminalWindow } from 'phosphor-react';
import ICertificate from './interfaces/ICertificate';

const iconColor = '#10b981';

const certificates: ICertificate[] = [
  {
    id: 1,
    icon: <Cube size={ 70 } weight="duotone" color={ iconColor } />,
    title: 'Fundamentos do Desenvolvimento Web',
    institution: 'Trybe',
    description: `Foi aprendido e colocado em prática os
    conhecimento sobre: Unix & Bash, Git, JavaScript básico & DOM, HTML & CSS, JavaScript ES6,
    Higher Order Functions e Testes unitários.`,
    link: 'https://www.credential.net/3fa27b41-ca97-4db3-8621-fa268954ad4b#gs.3yc2rp'
  },
  {
    id: 2,
    icon: <Atom size={ 70 } weight="duotone" color={ iconColor } />,
    title: 'Desenvolvimento Front-end',
    institution: 'Trybe',
    description: `Foi aprendido e colocado em prática os
    conhecimento sobre: React, incluindo Componentes, Estados e Eventos, Componentes Controlados, Ciclo
    de Vida, Router, Testes com RTL, Redux com React, Context API e React Hooks.`,
    link: 'https://www.credential.net/db43e8c8-3e94-4a76-9a53-69c3068085da#gs.39k031'
  },
  {
    id: 3,
    icon: <TerminalWindow size={ 70 } weight="duotone" color={ iconColor } />,
    title: 'Desenvolvimento Back-end',
    institution: 'Trybe',
    description: `Foi aprendido e colocado em prática os
    conhecimento sobre: Docker, banco de dados SQL e NoSQL, Node.js e Express, Mocha, Chai e Sinon,
    construção de APIs em camadas, REST, JWT, ORM, deploy com Heroku, TypeScript, POO, SOLID, conceitos de CI/CD e VPS.`,
    link: 'https://www.credential.net/4c954798-fba0-429e-943e-1a878e26f21e#gs.7uc8e8'
  }
];

export { certificates };
