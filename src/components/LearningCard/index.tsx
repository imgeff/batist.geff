import { useState } from 'react';
import { ICardProps } from '../Learnings/interfaces/Props';
import { ModalLearning } from '../ModalLearning';
import './style.css';

function LearningCard({ icons, title, stack, level, levelTip, description, defaultColor }: ICardProps) {
  const [iconIsActive, setIconIsActive] = useState(false);
  const iconCurrentColor = iconIsActive ? defaultColor : undefined;

  return (
    <div
      id="learning-card"
      onMouseOver={ () => setIconIsActive(true)}
      onMouseOut={ () => setIconIsActive(false)}
      style={ { borderColor: iconCurrentColor } }
    >
      <figure className="learning-icon daisy-tooltip font-bold" data-tip={ title }>
        { iconIsActive ? icons.defaultIcon : icons.customIcon }
      </figure>
      <div id="learning-card-info">
        <h3 id="learning-title-info">{ title }</h3>
        <span>Stack: <strong style={ { color: iconCurrentColor } }>{ stack }</strong></span>
        <label htmlFor={`check-${title}`} id="learning-btn-description">Ver Mais</label>
      </div>
      <ModalLearning
        icons={ icons }
        title={ title }
        description={ description }
        level={ level }
        levelTip={ levelTip }
        iconCurrentColor={ iconCurrentColor }
      />
    </div>
  );
}

export { LearningCard };
