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
          <label id="career-text">Desenvolvedor Front-end</label>
        </div>
        <div className="text-body">
          <p>Eu desenvolvo sites com JavaScript em React.js, e atualmente estou descobrindo o Universo Back-end com Node.js e Express.js</p>
        </div>
        <ul className="links-box">
          <li>
            <a href="https://github.com/imgeff" className="daisy-tooltip" data-tip="Github">
              <GithubLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/imgeff" className="daisy-tooltip" data-tip="Linkedin">
              <LinkedinLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="mailto:geffersonsilvaaraujo.gs@gmail.com" className="daisy-tooltip" data-tip="Email">
              <Envelope size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/batistgeff/" className="daisy-tooltip" data-tip="Instagram">
              <InstagramLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5577981029922" className="daisy-tooltip" data-tip="Whatsapp">
              <WhatsappLogo size={34} color="#a3a3a3" weight="fill" />
            </a>
          </li>
        </ul>
      </div>
      <div className="ilustration-box">
        <figure className="image-box">
          <img src={ DeveloperImg } alt="" />
        </figure>
      </div>
		</section>
	);
}

export { Presentation };
