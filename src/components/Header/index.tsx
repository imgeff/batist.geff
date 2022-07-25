import './style.css';
import ImgeffLogo from '../../images/IMGEFF.png';

function Header () {
	return (
		<header id='header'>
			<img src={ ImgeffLogo } alt="Logo com a escrita IMGEFF" />
			<nav className='navbar'>
				<ul className="list">
					<li><a className='nav-link' href="#home">Início</a></li>
					<li><a className='nav-link' href="#about">Sobre</a></li>
					<li><a className='nav-link' href="#formation">Formação</a></li>
					<li><a className='nav-link' href="#skills">Habilidades</a></li>
					<li><a className='nav-link' href="#projects">Projetos</a></li>
				</ul>
			</nav>
		</header>
	);
}

export { Header };
