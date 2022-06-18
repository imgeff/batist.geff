import './style.css';

function Header () {
	return (
		<header id='header'>
			<div>Logo</div>
			<nav className='navbar'>
				<ul className="list">
					<li><a className='nav-link' href="#home">Início</a></li>
					<li><a className='nav-link' href="#about">Sobre</a></li>
					<li><a className='nav-link' href="#formation">Formação</a></li>
					<li><a className='nav-link' href="#skills">Habilidades</a></li>
					<li><a className='nav-link' href="#projects">Projetos</a></li>
					<li><a className='nav-link' href="#contact">Contato</a></li>
				</ul>
			</nav>
		</header>
	);
}

export { Header };