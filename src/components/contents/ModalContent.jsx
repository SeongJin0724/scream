import React from "react";
import { IoIosClose } from "react-icons/io";

export default function ModalContent({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button" onClick={onClose}>
          <IoIosClose />
        </button>
        {children}
      </div>
    </div>
  );
}
