import './style.css';
import { useEffect } from 'react';
import { GithubLogo, LinkedinLogo, InstagramLogo, WhatsappLogo, Envelope } from 'phosphor-react';
import DeveloperImg from '../../images/Developer.png';
import { typeWriter } from '../../helpers/animations/typeWriter';

function Presentation() {
  useEffect(() => {
    const careerLabel = document.getElementById('career-text');
    typeWriter(careerLabel);
  }, []);
  return (
		<section id="presentation">
      <div id="presentation-box">
        <div className="text-header">
          <h1>Olá, eu sou <br/><strong>Gefferson Batista. </strong></h1>
          <label id="career-text">Desenvolvedor Full-stack</label>
        </div>
        <div className="text-body">
          <p>Eu desenvolvo aplicações com JavaScript e TypeScript, tendo projetos Front-end com React.js e projetos Back-end com Node.js e Express.js, atualmente eu estou estudando Python.</p>
        </div>
        <ul className="links-box">
          <li>
            <a href="https://github.com/imgeff" target="_blank" rel="noreferrer" className="daisy-tooltip" data-tip="Github">
              <GithubLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/imgeff" target="_blank" rel="noreferrer" className="daisy-tooltip" data-tip="Linkedin">
              <LinkedinLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="mailto:imgeff.dev@gmail.com" target="_blank" rel="noreferrer" className="daisy-tooltip" data-tip="Email">
              <Envelope size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
        </ul>
      </div>
      <div className="ilustration-box">
        <figure className="image-box">
          <img src={ DeveloperImg } alt="Desenvolvedor montando elementos de uma página" />
        </figure>
      </div>
		</section>
	);
}

export { Presentation };
