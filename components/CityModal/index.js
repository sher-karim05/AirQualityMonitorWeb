import React from "react";
import Modal from "react-awesome-modal";
import { useModal } from "./hooks";

function CityModal({ visible, hide }) {
  return (
    <Modal
      visible={visible}
      width="90%"
      height="80%"
      onClickAway={hide}
    ></Modal>
  );
}

export default CityModal;
export { useModal };
