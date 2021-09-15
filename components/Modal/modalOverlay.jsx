import { useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './backdrop';
import Modal from './loginModal';

const modalOverlay = (props) => {
  const [isBrowser, setIsBrowser] = useState();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <Modal onConfirm={props.onConfirm} />,
          document.getElementById('modal-root')
        )}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default modalOverlay;
