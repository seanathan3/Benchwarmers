import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import GamesForm from './GamesForm';

function CreateGameModal() {
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
      }
    
      function openModal() {
        setShowModal(true);
      }

    return(
        <>
            <div onClick={openModal}>Create Game</div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <GamesForm formCallback={closeModal} />
                </Modal>
            )}
        </>
    )
}

export default CreateGameModal;