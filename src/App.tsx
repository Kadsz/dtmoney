import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastradar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

