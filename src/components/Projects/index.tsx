import './style.css';
import { ProjectsData } from '../../data/ProjectsData';
import { Carousel } from '../CarouselProject';
import { useState } from 'react';
import { IProject } from '../../data/ProjectsData/interfaces';
import { ModalProject } from '../ModalProject';

function Projects() {
  const [projects, setProjects] = useState({ isActive: 'fundamentos', data: ProjectsData.fundamentos });
  const styleActive = { backgroundColor: '#000000', color: '#10b981' };

  const changeDataProjects = (isActive: string, data: IProject[]) => {
    setProjects({ isActive, data });
  };

  return(
    <section id="projects">
      <h1>Projetos</h1>
      <div id="projects-box">
        <div id="projects-btn">
          <button
            className="btn-stack"
            onClick={ () => changeDataProjects('fundamentos', ProjectsData.fundamentos)}
            style={ projects.isActive === 'fundamentos' ? styleActive : {} }
          >
            Fundamentos
          </button>
          <button
            className="btn-stack"
            onClick={ () => changeDataProjects('frontend', ProjectsData.frontend)}
            style={ projects.isActive === 'frontend' ? styleActive : {} }
          >
            Front-end
          </button>
          <button
            className="btn-stack"
            onClick={ () => changeDataProjects('backend', ProjectsData.backend)}
            style={ projects.isActive === 'backend' ? styleActive : {} }
          >
            Back-end
          </button>
          <button
            className="btn-stack"
            onClick={ () => changeDataProjects('fullstack', ProjectsData.fullstack)}
            style={ projects.isActive === 'fullstack' ? styleActive : {} }
          >
            Full-stack
          </button>
        </div>
        <Carousel
          data={ projects.data }
        />
        {
          projects.data.map((project) => {
            return (
              <ModalProject
                key={project.nameProject}
                nameProject={ project.nameProject }
                media={ project.media }
                links={ project.links }
                infos={ project.infos }
              />
            );
          })
        }
      </div>
      <a
        href="https://github.com/imgeff?tab=repositories"
        target="_blank"
        rel="noreferrer"
        id="link-repositories"
        className="nav-link"
      >
        Repositórios no Github
      </a>
    </section>
  );
}

export { Projects };
