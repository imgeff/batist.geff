import { Question, Star } from 'phosphor-react';
import { ICardProps } from '../interfaces/Props';
import { Modal } from '../Modal';
import './style.css';

function LearningCard({ icon, title, level, levelTip, description }: ICardProps) {
  const iconColor = '#a3a3a3';

  return (
    <div id="learning-card">
      <figure className="learning-icon daisy-tooltip font-bold" data-tip={ title }>
        { icon }
      </figure>
      <div id="learning-card-info">
        <h3 id="learning-title-info">{ title }</h3>
        <span>
            <Star size={12} weight="fill" color={ iconColor }/>
            <span>Nível: <strong>{ level }</strong></span>
            <span className="daisy-tooltip" data-tip={ levelTip }>
              <Question size={18} weight="duotone" color={ iconColor } />
            </span>
        </span>
        <label htmlFor='modal-check' id="learning-btn-description">Ver Mais</label>
      </div>
      <Modal icon={ icon } title={ title } description={ description } />
    </div>
  );
}

export { LearningCard };
