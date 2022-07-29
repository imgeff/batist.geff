import './style.css';
import ImgeffLogo from '../../images/IMGEFF.png';
import { List, X } from 'phosphor-react';
import { useState } from 'react';

function Header () {
  const [showMenu, setShowMenu] = useState(false);
	return (
		<header id='header'>
			<img src={ ImgeffLogo } alt="Logo com a escrita IMGEFF" />
			<nav className='navbar'>
				<ul className="list">
					<li><a className='nav-link' href="#presentation">Início</a></li>
					<li><a className='nav-link' href="#about">Sobre</a></li>
					<li><a className='nav-link' href="#certifications">Formação</a></li>
					<li><a className='nav-link' href="#learnings">Habilidades</a></li>
					<li><a className='nav-link' href="#projects">Projetos</a></li>
				</ul>
			</nav>
      <nav className='navbar-mobile'>
        { showMenu ?  (
            <X
              size={40}
              weight="fill"
              color="#10b981"
              onClick={ () => setShowMenu(!showMenu) }
            />
          ) : (
            <List
              size={40}
              weight="fill"
              color="#10b981"
              onClick={ () => setShowMenu(!showMenu) }
            />
          )
        }
        { showMenu && (
            <div className="links">
              <ul className="menu-list">
                <li onClick={ () => setShowMenu(false) } ><a className='nav-link' href="#presentation">Início</a></li>
                <li onClick={ () => setShowMenu(false) } ><a className='nav-link' href="#about">Sobre</a></li>
                <li onClick={ () => setShowMenu(false) } ><a className='nav-link' href="#certifications">Formação</a></li>
                <li onClick={ () => setShowMenu(false) } ><a className='nav-link' href="#learnings">Habilidades</a></li>
                <li onClick={ () => setShowMenu(false) } ><a className='nav-link' href="#projects">Projetos</a></li>
              </ul>
            </div>
          )
        }
      </nav>
		</header>
	);
}

export { Header };
