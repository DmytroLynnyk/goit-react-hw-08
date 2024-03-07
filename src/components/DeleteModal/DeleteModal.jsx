import { useState } from "react";
import ReactModal from "react-modal";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const DeleteModal = ({ id }) => {
  ReactModal.setAppElement("#root");
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeAndDeleteModal = () => {
    handleDelete();
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Delete</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Delete contact</h3>
        <button onClick={closeAndDeleteModal}>Yes</button>
        <button onClick={closeModal}>No</button>
      </ReactModal>
    </div>
  );
};
