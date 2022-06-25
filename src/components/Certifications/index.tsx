import './style.css';
import { Cube, MapPin, GraduationCap, Atom } from 'phosphor-react';

function Certifications () {
  const iconColor = '#10b981';

  function showCertificateDescription(id: string) {
    const certificateDescription = document.getElementById(id);
    if (!certificateDescription) return;
    certificateDescription.style.display = 'flex';
  }

  function hiddenCertificateDescription(id: string) {
    const certificateDescription = document.getElementById(id);
    if (!certificateDescription) return;
    certificateDescription.style.display = 'none';
  }

  return(
    <section id="certifications-section">
      <h1>Certificações</h1>
      <div id="certifications-box">
        <div
          className="certificate"
          onMouseOver={ () => showCertificateDescription('description-fundamentals') }
          onMouseOut={ () =>  hiddenCertificateDescription('description-fundamentals') }
        >
          <div id="description-fundamentals">
            <p>
              Foi aprendido e colocado em prática os
              conhecimento sobre: Unix & Bash, Git, JavaScript básico & DOM, HTML & CSS, JavaScript ES6,
              Higher Order Functions e Testes unitários.
            </p>
            <a
              href="https://www.credential.net/3fa27b41-ca97-4db3-8621-fa268954ad4b#gs.3yc2rp"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </div>
          <figure>
            <Cube size={ 70 } weight="duotone" color={ iconColor } />
          </figure>
          <div className="certificate-info">
            <span>
              <MapPin size={ 25 } weight="duotone" color={ iconColor } />
              <label>Trybe</label>
            </span>
            <span>
              <GraduationCap size={ 25 } weight="duotone" color={ iconColor } />
              <strong>Fundamentos do Desenvolvimento Web</strong>
            </span>
          </div>
        </div>
        <div
          className="certificate"
          onMouseOver={ () => showCertificateDescription('description-front-end') }
          onMouseOut={ () =>  hiddenCertificateDescription('description-front-end') }
        >
          <div id="description-front-end">
            <p>
              Foi aprendido e colocado em prática os
              conhecimento sobre: React, incluindo Componentes, Estados e Eventos, Componentes Controlados, Ciclo
              de Vida, Router, Testes com RTL, Redux com React, Context API e React Hooks.
            </p>
            <a
              href="https://www.credential.net/db43e8c8-3e94-4a76-9a53-69c3068085da#gs.39k031"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </div>
          <figure>
            <Atom size={ 70 } weight="duotone" color={ iconColor } />
          </figure>
          <div className="certificate-info">
            <span>
              <MapPin size={ 25 } weight="duotone" color={ iconColor } />
              <label>Trybe</label>
            </span>
            <span>
              <GraduationCap size={ 25 } weight="duotone" color={ iconColor } />
              <strong>Desenvolvimento Front-end</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Certifications };
