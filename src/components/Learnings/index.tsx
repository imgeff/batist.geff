import { learnings } from '../../data/LearningsData';
import { LearningCard } from '../LearningCard';
import './style.css';

function Learnings() {

  return(
    <section id="learnings">
      <h1>Aprendizados</h1>
      <div id="learnings-box">
        <div className="learnings-content">
          { learnings.map((learning) => (
            <LearningCard
              key={ learning.title }
              icons={ learning.icons }
              title={ learning.title }
              stack={ learning.stack }
              level={ learning.level }
              levelTip={ learning.levelTip }
              description={ learning.description }
              defaultColor={ learning.defaultColor }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Learnings };
