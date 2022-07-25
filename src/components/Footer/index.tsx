import './style.css';
import ImgeffLogo from '../../images/IMGEFF.png';

function Footer () {
	return (
  <footer>
    <div>
      ©
      <a
        href="https://imgeff.github.io/"
        target="_blank" id="link-portfolio"
        rel="noreferrer"
      >
        Gefferson Batista
      </a>
      - 2022
    </div>
    <img src={ ImgeffLogo } alt="Logo com a escrita IMGEFF" />
  </footer>
	);
}

export { Footer };
