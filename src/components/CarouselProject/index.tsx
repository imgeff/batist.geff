import { Eye, GithubLogo, Info } from 'phosphor-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IProps } from './interfaces';
import '@splidejs/react-splide/css';
import './style.css';

export function Carousel({ data }: IProps) {

  return(
    <>
      <Splide
        id="splide-box"
        options={
          {
            snap: true,
            gap: '3.2rem',
            padding: '1%',
            keyboard: true,
            wheel: true,
            direction: 'ltr',
            type: 'loop',
            pagination: true,
            autoplay: true,
            pauseOnHover: true,
            cover: true,
            perMove: 1,
            perPage: 2,
          }
        }
      >
        { data.map((project) => {
          return(
            <>
              <SplideSlide key={ project.nameProject } className='projects-card'>
                <figure className="projects-card-image">
                  <img src={ project.media.img } alt={ project.media.alt } />
                  <span className='overlay-project' />
                </figure>
                <span className="projects-card-content">
                  <h2>{ project.nameProject }</h2>
                </span>
                <nav className="projects-card-links">
                  <label htmlFor={`modal-${ project.nameProject }`} className="daisy-modal-open daisy-tooltip" data-tip="Informações">
                    <Info weight="duotone" size={30} color="#000000" />
                  </label>
                  <a href={ project.links.github } target="_blank" rel="noreferrer" className="daisy-tooltip" data-tip="Repositório">
                    <GithubLogo weight="duotone" size={30} color="#000000" />
                  </a>
                  <a href={ project.links.deploy } target="_blank" rel="noreferrer" className="daisy-tooltip" data-tip="Deploy">
                    <Eye weight="duotone" size={30} color="#000000" />
                  </a>
                </nav>
              </SplideSlide>
            </>
          );
        })}
      </Splide>
    </>
  );
}
