import './style.css';
import { useState } from 'react';
import { Student, SoccerBall, GameController, RocketLaunch } from 'phosphor-react';
import { AboutContent } from '../../utils/AboutContent';

function About() {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [isActive, setIsActive] = useState('AboutMe');
  const iconColorActive = '#10b981';
  const iconColorNormal = '#a3a3a3';

  function setAboutContent(index: number, contentActive: string) {
    setAboutIndex(index);
    setIsActive(contentActive);
  }

  return(
    <section id="about-section">
      <div id="about-description">
        <aside>
          <Student
            size={50}
            weight="duotone"
            className={ isActive === 'AboutMe' ? 'active' : undefined}
            onClick={ () => setAboutContent(0, 'AboutMe') }
            color= { isActive === 'AboutMe' ? iconColorActive : iconColorNormal }
          />
          <SoccerBall
            size={50}
            weight="duotone"
            className={ isActive === 'Soccer' ? 'active' : undefined}
            onClick={ () => setAboutContent(1, 'Soccer') }
            color= { isActive === 'Soccer' ? iconColorActive : iconColorNormal }
          />
          <GameController
            size={50}
            weight="duotone"
            className={ isActive === 'Games' ? 'active' : undefined}
            onClick={ () => setAboutContent(2, 'Games') }
            color= { isActive === 'Games' ? iconColorActive : iconColorNormal }
          />
          <RocketLaunch
            size={50}
            weight="duotone"
            className={ isActive === 'Universe' ? 'active' : undefined}
            onClick={ () => setAboutContent(3, 'Universe') }
            color= { isActive === 'Universe' ? iconColorActive : iconColorNormal }
          />
        </aside>
        <div id="about-text">
          <h1>{ AboutContent[aboutIndex].title }</h1>
          <br/>
          { AboutContent[aboutIndex].description }
        </div>
      </div>
    </section>
  );
}

export { About };
