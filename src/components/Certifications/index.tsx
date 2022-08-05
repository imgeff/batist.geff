import './style.css';
import { certificates } from '../../data/CertificationsData';
import { Certificate } from '../Certificate';

function Certifications () {
  return(
    <section id="certifications">
      <h1>Certificações</h1>
      <div id="certifications-box">
        { certificates.map((certificate) => (
          <Certificate
            key={ certificate.id }
            id={ certificate.id }
            icon={ certificate.icon }
            title={ certificate.title }
            institution={ certificate.institution }
            description={ certificate.description }
            link={ certificate.link }
          />
        )) }
      </div>
    </section>
  );
}

export { Certifications };
