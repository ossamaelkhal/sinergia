import React from 'react';

const NicheSolutionsModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Soluções de Nicho</h2>
        <p>Este é o conteúdo do modal de soluções de nicho.</p>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default NicheSolutionsModal;
