import { GraduationCap, MapPin } from 'phosphor-react';
import ICertificate from '../../data/CertificationsData/interfaces/ICertificate';
import './style.css';

function Certificate({ id, icon, title, institution, description, link }: ICertificate) {
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
    <>
      <div
        className="certificate"
        onMouseOver={ () => showCertificateDescription(`description-${id}`) }
        onMouseOut={ () =>  hiddenCertificateDescription(`description-${id}`) }
      >
        <div id={`description-${id}`} className="certificate-description">
          <p>{ description }</p>
          <a
            href={ link }
            target="_blank"
            rel="noreferrer"
          >
            Visualizar
          </a>
        </div>
        <figure>{ icon }</figure>
        <div className="certificate-info">
          <span>
            <MapPin size={ 25 } weight="duotone" color={ iconColor } />
            <label>{ institution }</label>
          </span>
          <span>
            <GraduationCap size={ 25 } weight="duotone" color={ iconColor } />
            <strong>{ title }</strong>
          </span>
        </div>
      </div>
    </>
  );
}

export { Certificate };
