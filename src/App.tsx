import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from './Components/NewTransactionModal';

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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}

