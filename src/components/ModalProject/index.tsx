import { IProject } from '../../data/ProjectsData/interfaces';
import './style.css';

export function ModalProject({ nameProject, media, infos }: IProject) {
  return (
    <>
      <input type="checkbox" id={`modal-${ nameProject }`} className="daisy-modal-toggle" />
      <label htmlFor={`modal-${ nameProject }`} className="project-modal daisy-modal">
        <label className="project-modal-box daisy-modal-box max-w-4xl" htmlFor="">
          <div id="project-modal-content">
            { media.video.length !== 0 && (
              <iframe
                className="video"
                title="Vídeo do projeto"
                src={ media.video }
                allow="autoplay"
              />
            )}
            <h2>{ nameProject }</h2>
            <p className="py-4">{ infos.description }</p>
            <div>
              <h3>Funcionalidades</h3>
              <strong>{ infos.functionalities.join(' - ')}</strong>
            </div>
            <div>
              <h3>Linguagens</h3>
              <strong>{infos.languages.join(' - ')}</strong>
            </div>
            <div>
              <h3>Ferramentas Utilizadas</h3>
              <strong>{ infos.tools.join(' - ')}</strong>
            </div>
            <div>
              { infos.colaborators.length !== 0 && (
                <>
                  <h3>Colaboradores</h3>
                  <ul>
                    { infos.colaborators.map((colaborator) => {
                      return (
                        <li key={ colaborator.name }>
                          <a href={ colaborator.github } target="_blank" rel="noreferrer">{ colaborator.name }</a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
