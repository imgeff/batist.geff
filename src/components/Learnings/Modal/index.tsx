import { IModalProps } from '../interfaces/Props';
import './style.css';

function Modal({ icon, title, description }: IModalProps) {
  return(
    <>
      <input type="checkbox" id="modal-check" className="daisy-modal-toggle" />
      <label htmlFor="modal-check" className="learning-modal daisy-modal">
        <label className="learning-modal-box daisy-modal-box" htmlFor="">
          <figure className="learning-icon">
            { icon }
          </figure>
          <h3>{ title }</h3>
          <p>{ description }</p>
        </label>
      </label>
    </>
  );
}

export { Modal };
