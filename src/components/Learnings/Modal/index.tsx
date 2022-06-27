import { Question, Star } from 'phosphor-react';
import { IModalProps } from '../interfaces/Props';
import './style.css';

function Modal({ icons, title, level, levelTip, description, iconCurrentColor }: IModalProps) {
  const NEUTRAL400 = '#a3a3a3';

  return(
    <>
      <input type="checkbox" id={`check-${title}`} className="daisy-modal-toggle" />
      <label htmlFor={`check-${title}`} className="learning-modal daisy-modal">
        <label style={ { borderColor: iconCurrentColor }} className="learning-modal-box daisy-modal-box" htmlFor="">
          <figure className="learning-icon">
            { icons.defaultIcon }
          </figure>
          <h3 style={ { color: iconCurrentColor }}>{ title }</h3>
          <span>
            <Star size={12} weight="fill" color={ NEUTRAL400 }/>
            <span>Nível: <strong style={ { color: iconCurrentColor }}>{ level }</strong></span>
            <span className="daisy-tooltip z-10" data-tip={ levelTip }>
              <Question size={18} weight="duotone" color={ NEUTRAL400 } />
            </span>
          </span>
          <p>{ description }</p>
        </label>
      </label>
    </>
  );
}

export { Modal };
