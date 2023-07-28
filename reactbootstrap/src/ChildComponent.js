import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const ChildComponent = () => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>Modal Dialog</h2>
      <p>This is the content of the modal dialog.</p>
    </div>,
    modalRoot
  );
};

export default ChildComponent;
