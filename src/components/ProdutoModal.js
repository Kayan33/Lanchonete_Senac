import React from 'react';
import "../style/produtoModal.css";

function ProdutoModal({ produto, closeModal }) {
    if (!produto) return null;

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-content">
                
            </div>
        </div>
    );
}

export default ProdutoModal;
